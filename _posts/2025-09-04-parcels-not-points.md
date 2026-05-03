---
title: "Parcels, not points: why centroids miss 11% of under-served buildings"
date: 2025-09-04
categories: [case-study]
tags: [postgis, cadastral, planning, spam]
excerpt: "A short field note from the Purwakarta SPAM survey: switching from centroid joins to full-parcel spatial joins surfaced thousands of parcels the centroid method had quietly dropped."
image: /assets/images/blog/parcels-vs-points-cover.jpg
lang: en
---

Most cadastral analyses I see in regional planning workflows use the parcel
**centroid** as the spatial unit. It is fast, it is intuitive, and it is exactly
what every default `ST_Centroid()` workflow nudges you towards. But centroids
quietly distort coverage analysis whenever parcels are large or service polygons
are narrow.

Here is what I observed during the Purwakarta SPAM survey.

## The setup

The job was to flag every tax-registered parcel currently outside the active PDAM
service area. Two approaches:

- **Centroid join** — `ST_Within(parcel_centroid, service_area)`.
- **Full-parcel join** — `ST_Intersects(parcel_geom, service_area)` plus an
  additional rule for parcels intersecting only marginally.

Same data, same service polygons. Different answer.

## Where centroids fail

Centroid joins miss two recurring cases over our six sub-districts:

1. **Long, narrow parcels** along roads — the centroid sits in the middle of a
   parcel that mostly extends *outside* the service polygon. The parcel reads as
   "served" when the building cluster on it isn't.
2. **Edge-of-network parcels** — where the service polygon clips the parcel
   boundary. The centroid lands outside, the building footprint sits inside.
   These are exactly the parcels a service-extension plan should prioritise.

Across the six kecamatan, the full-parcel approach surfaced **about 11% more
under-served parcels** than the centroid baseline. In two sub-districts the
discrepancy was larger than 15%.

## A workable rule

For service-area gap analysis I now default to:

```sql
SELECT p.parcel_id,
       ST_Area(ST_Intersection(p.geom, sa.geom)) / ST_Area(p.geom) AS share_served
FROM   parcels p
LEFT   JOIN service_areas sa
       ON ST_Intersects(p.geom, sa.geom)
WHERE  share_served IS NULL OR share_served < 0.5;
```

A parcel served by less than half its area is treated as under-served. The
threshold is a planning judgement, not a technical one — but at least it is an
explicit one.

## Takeaway

The centroid is a tempting shortcut. For service-area work it is also a
systematic underestimate of the gap your plan needs to close.
