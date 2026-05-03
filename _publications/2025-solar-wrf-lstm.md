---
title: "Solar Irradiance Forecasting in Data-Sparse Tropical Regions Using a Novel Spatial Site-Adapted WRF–LSTM Hybrid Approach"
year: 2025
pub_type: "Preprint"
status: "Under review"
featured: true
authors:
  - "Satria [Your Full Name]"
  - "[Co-author One]"
  - "[Co-author Two]"
venue: "Manuscript under peer review"
tags:
  - "remote-sensing"
  - "machine-learning"
  - "WRF"
  - "renewable-energy"
abstract: >
  We present a hybrid Weather Research and Forecasting (WRF)–Long Short-Term Memory
  (LSTM) framework for short-term solar irradiance forecasting tailored to
  data-sparse tropical regions in West Java, Indonesia. WRF outputs are
  site-adapted using a spatial bias-correction layer before being fed to an LSTM
  network trained on a sparse network of pyranometer observations. The hybrid
  approach reduces RMSE relative to standalone numerical weather prediction and to
  pure data-driven baselines, with the largest gains observed under partly cloudy
  conditions characteristic of the region. The framework offers a practical path
  for solar resource assessment in tropical contexts where dense observation
  networks are unavailable.
bibtex: |
  @unpublished{satria2025solar,
    title  = {Solar Irradiance Forecasting in Data-Sparse Tropical Regions Using a Novel Spatial Site-Adapted WRF--LSTM Hybrid Approach},
    author = {Satria, [Your Full Name] and [Co-author One] and [Co-author Two]},
    year   = {2025},
    note   = {Manuscript under peer review}
  }
lang: en
permalink: /publications/2025-solar-wrf-lstm/
---

## Why a hybrid approach

Pure numerical weather prediction (NWP) struggles with the rapid cloud dynamics
typical of tropical convective afternoons. Pure data-driven models, in turn,
require dense observational records that simply do not exist across most of
Indonesia's solar-resource frontier. The hybrid WRF–LSTM design uses each method
where it is strongest: physics-based prediction for atmospheric state, and
sequence learning for the residual bias.

## Headline result

Across the validation sites, the hybrid model reduced normalised RMSE compared to
WRF-only and LSTM-only baselines, with the strongest improvement during partly
cloudy hours where pure NWP tends to over-smooth the irradiance signal.

> Status note: this manuscript is currently undergoing peer review. The full
> preprint and reproducibility materials will be linked here once the review
> process concludes.
