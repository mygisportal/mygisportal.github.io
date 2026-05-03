---
title: "A pragmatic Sentinel-2 cloud mask in Google Earth Engine"
date: 2025-08-12
categories: [tutorial]
tags: [sentinel-2, gee, remote-sensing, cloud-masking]
excerpt: "A short, defensible cloud-mask recipe for Sentinel-2 over tropical Indonesia — using QA60, the SCL band, and a small probability buffer."
image: /assets/images/blog/s2-cloudmask-cover.jpg
lang: en
---

Tropical archipelagos are punishing for optical remote sensing. Persistent
convective clouds, thin cirrus, and shadow contamination mean that even
"cloud-free" Sentinel-2 scenes can mislead a pixel-by-pixel land-cover analysis.
The recipe below is what I reach for first — fast, defensible, and good enough
for most regional-scale work over West Java.

## The three-layer approach

Rather than relying on a single band, I combine three complementary signals:

1. **QA60** for opaque clouds and cirrus (fast bitmask).
2. **SCL** (scene classification layer) for shadows and edge cases.
3. **A probability buffer** from `s2cloudless` for the marginal pixels QA60 misses.

The order matters: QA60 is cheap, so apply it first to skip obvious failures.

## Earth Engine snippet

```javascript
function maskS2(img) {
  // QA60: bits 10 (opaque cloud), 11 (cirrus)
  var qa = img.select('QA60');
  var cloudBit  = 1 << 10;
  var cirrusBit = 1 << 11;
  var qaMask = qa.bitwiseAnd(cloudBit).eq(0)
                 .and(qa.bitwiseAnd(cirrusBit).eq(0));

  // SCL classes: 3=shadow, 8=cloud-medium, 9=cloud-high, 10=thin cirrus
  var scl = img.select('SCL');
  var sclMask = scl.neq(3)
                   .and(scl.neq(8))
                   .and(scl.neq(9))
                   .and(scl.neq(10));

  return img.updateMask(qaMask.and(sclMask))
            .divide(10000)            // scale to reflectance
            .copyProperties(img, ['system:time_start']);
}

var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(roi)
  .filterDate('2024-01-01', '2024-12-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 60))
  .map(maskS2);
```

## When to add s2cloudless

For anything with strict purity requirements — change-detection, time-series
trend fitting, NDVI baselines — I extend the mask with `s2cloudless` and a
small dilation buffer. Pixels with cloud probability above ~40% get dropped, and
a 60-metre buffer catches the soft edges QA60 routinely misses.

## A sanity check that has saved me

After masking, I always export a quick **valid-pixel count map** for the period
of interest. If a region has fewer than ~10 valid observations across a year,
I drop it from downstream analysis rather than fabricate a result from a
half-empty time series.

This is one of those workflow steps that feels paranoid until the day it isn't.
