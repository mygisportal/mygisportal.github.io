---
title: "SPAM Purwakarta — Regional Water Supply Survey"
subtitle: "Spatial analysis and field survey design for drinking water service-area planning across six sub-districts."
date: 2024-09-01
period: "2024 – 2025"
category: "planning"
role: "Lead Geospatial Analyst"
location: "Purwakarta, West Java"
status: "Completed"
collaborators:
  - "Regional Planning Agency"
  - "Local water utility (PDAM)"
tools:
  - "QGIS"
  - "PostGIS"
  - "Python"
  - "GeoPandas"
links:
  - { label: "Final report (PDF)", url: "#" }
  - { label: "Methodology note",    url: "#" }
image: "/assets/images/projects/spam-purwakarta-cover.jpg"
image_caption: "Sample cadastral parcels used in the SPAM service-area analysis."
lang: en
---

## Background

The Regional Drinking Water Supply System (SPAM) in Purwakarta needed a refreshed
spatial baseline to support service-area planning. Existing cadastral records and
building activity data were fragmented across multiple Excel sources and lacked
direct linkage to the operational PDAM service polygons.

## Objectives

1. Consolidate **~150,000 tax-registered objects** across six sub-districts into a
   unified spatial dataset.
2. Reconcile **building activity status** (occupied / vacant / under construction)
   with cadastral parcel geometry.
3. Produce a **service-area gap analysis** identifying parcels currently outside
   the active SPAM coverage.

## Coverage

The survey covered six kecamatan in Purwakarta:

| Kecamatan      | Tax objects | Active SPAM coverage |
|----------------|-------------|----------------------|
| Babakancikao   | ~22,000     | partial              |
| Campaka        | ~18,500     | low                  |
| Bungursari     | ~28,000     | partial              |
| Purwakarta     | ~41,000     | high                 |
| Jatiluhur      | ~24,500     | low                  |
| Sukatani       | ~16,000     | partial              |

## Method

The pipeline ran in three stages:

- **Ingestion** — Excel + CSV records normalised in Python (`pandas`, `pyjanitor`),
  geocoded against the cadastral layer using parcel ID joins.
- **Spatial reconciliation** — PostGIS spatial joins between the cadastral layer
  and PDAM service polygons; flagged parcels lacking coverage.
- **Reporting** — generated formal Indonesian-language narratives (`laporan akhir`)
  per sub-district, with embedded maps and summary tables.

## Outputs

- A unified **GeoPackage** for all six sub-districts.
- **Six formal reports** (one per kecamatan) following the regional planning template.
- A **gap-analysis dashboard** highlighting priority service-extension zones.

## Lessons

The biggest analytic gain came from treating cadastral parcels (not points) as the
spatial unit of analysis — it surfaced approximately 11% more under-served objects
than a centroid-based approach.
