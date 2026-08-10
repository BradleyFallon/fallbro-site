---
title: "Audio Clip Sync"
summary: "A native Mac app and matching prototype for aligning performance-camera recordings to a mastered song."
status: "prototype"
featured: true
repository: "https://github.com/BradleyFallon/audioclipsync"
startDate: 2026-01-01
tags:
  - SwiftUI
  - audio
  - signal-processing
  - creative-tools
---

## What it is

Audio Clip Sync is aimed at a common creative-production problem: several cameras record the same performance, but their captured audio needs to be aligned against the finished master track before editing can begin.

The product direction is a self-contained native Mac application using SwiftUI and AVFoundation. Alongside it, a disposable command-line prototype explores the uncertain part of the problem: finding reliable offsets when camera audio contains gain changes, noise, filtering, drift, dropouts, degraded references, or ambiguous passages.

## Prototype before product

The project intentionally separates behavioral exploration from the native application. The prototype can generate known test fixtures, apply controlled imperfections, benchmark fixed-rate and time-flexible matching, and create alignment plans from several anchors inside a longer camera recording.

That makes it possible to learn what the matcher must communicate—including when a result is inconclusive—before hardening an interface around an unreliable assumption.

## Current state

The repository includes the experimental matcher, scenario generation and benchmarking tools, whole-camera alignment planning, and the beginning of a native macOS product. The source media used for testing stays local and outside Git.

<!-- TODO(BF): Add the story of the performance workflow that motivated this tool and a native-app screenshot after the primary preview flow is stable. -->
