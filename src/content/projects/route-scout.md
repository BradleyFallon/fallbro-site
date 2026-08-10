---
title: "RouteScout / Run Router"
summary: "A route-suggestion engine that generates running loops and scores them for distance, pavement, quiet, greenery, and elevation character."
status: "active"
featured: true
repository: "https://github.com/BradleyFallon/run-mapper"
startDate: 2026-01-01
tags:
  - Python
  - mapping
  - route-planning
  - product-design
---

## What it is

RouteScout is a planning concept built around a Python route-suggestion core called Run Router. Instead of returning a single mechanically shortest path, the engine produces several loop candidates around a chosen area and evaluates them against the qualities a runner actually cares about.

The current core integrates with OpenRouteService, targets a requested distance, allows the starting point to drift within a configurable radius, and scores candidates for pavement preference, quietness, greenery, and elevation character. An optional natural-language design brief can influence the search without making an LLM responsible for route geometry.

## Why the split matters

The repository keeps the route engine and product exploration related but distinct. The deterministic Python core can be tested directly, while the RouteScout documents and client work explore how someone would express preferences, compare alternatives, and understand why a route was suggested.

That boundary keeps generative assistance in the role where it is useful—interpreting a runner's intent—while established routing tools remain responsible for the actual network and directions.

## Current state

The repository contains the suggestion engine, a standalone configuration-driven script, tests, and product/design material for the broader RouteScout experience. It is active prototype work rather than a finished navigation product.

<!-- TODO(BF): Add a personal explanation of what prompted this project and a screenshot when the map review experience is ready. -->
