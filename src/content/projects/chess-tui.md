---
title: "Chess TUI"
summary: "A deterministic chess-opening rulebook and training environment with terminal rendering, browser authoring, and explainable move decisions."
status: "active"
featured: true
repository: "https://github.com/BradleyFallon/chess-tui"
startDate: 2026-01-01
tags:
  - Python
  - chess
  - language-design
  - terminal-ui
---

## What it is

Chess TUI began as an interactive terminal chess board and grew into an environment for authoring deterministic opening rulebooks. A rulebook describes how original pieces should develop, which conditions may interrupt that development, and how ordered attempts resolve when a position changes.

The same Python runtime owns legality, rule resolution, persistence, replay, opening classification, and decision traces. The terminal interface and browser workspace are different views over that behavior rather than competing implementations.

## A language for intent

Opening study is usually recorded as sequences of moves. Chess TUI explores a different representation: the player describes intentions attached to pieces and conditions, then tests those rules against multiple opponent replies.

Readable identities such as `piece:white:bishop:queenside` survive movement and make authored rules easier to inspect. When a selected move differs from the rulebook, the application can explain which rule resolved, what conditions matched, and what alternatives were attempted.

## Current state

The public repository includes a Python package, Textual terminal application, FastAPI backend, React/TypeScript authoring workspace, offline opening data, Stockfish integration, and automated tests. The rulebook format is deliberately strict and currently optimized for development and experimentation rather than broad compatibility.

<!-- TODO(BF): Explain the personal chess-training problem behind the rulebook and select one representative interface image. -->
