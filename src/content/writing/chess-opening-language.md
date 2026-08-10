---
title: "Designing a Language for Chess Openings"
description: "What changes when an opening repertoire is described as piece-owned intentions and interrupts instead of a tree of memorized moves."
date: 2026-08-09
tags:
  - chess
  - language-design
  - deterministic-systems
draft: true
---

<!-- AI-GENERATED WORKING DRAFT. Bradley: confirm the chess terminology and add your personal training motivation before publishing. -->

Chess openings are usually stored as move trees. After one move, several replies branch into several more moves, and a repertoire becomes a collection of paths through that tree.

That representation is precise, but it is not always how a player thinks. A player may be trying to develop a particular bishop, preserve a pawn break, castle before opening the center, or interrupt the plan when a tactical condition appears.

Chess TUI explores what happens when those intentions become the source language.

## Pieces need persistent identity

A rule such as “develop the queenside bishop” cannot depend on the bishop's current square. The piece may move, return, or reach the same square through a different history. The language therefore needs identities tied to original pieces rather than transient board locations.

Readable references such as `piece:white:bishop:queenside` make that identity explicit. Square coordinates remain part of positions and moves, but they do not define who the rule belongs to.

This also makes conditions more legible. A rule can refer to whether a particular original piece has moved, whether it attacks or defends another piece, or whether a capture is legally available.

## Defaults and interrupts

The language gives each controlled piece a default development instruction. Those instructions form the ordinary plan and are evaluated in authored order.

Chess positions rarely allow an opening plan to proceed without interruption. A tactical opportunity, an opponent threat, or an exact position may require a different action. Interrupt rules belong to pieces as well, with explicit conditions and ordered attempts.

Resolution stays deterministic:

1. Check exact-position interrupts.
2. Check other interrupts in authored order.
3. Try default development in authored order.
4. Report a frontier when no rule resolves.

The program does not ask an AI model to choose the move. It evaluates the authored policy and can explain the path it took.

## Authoring requires replay

Editing a rule changes more than the current position. The existing line must be replayed through the new policy to show where behavior diverges.

That makes preview and validation part of the language design. A proposed edit should show its impact, fail clearly when references or actions are invalid, save atomically, and rebuild derived state by replaying recorded moves.

The interface can be graphical while the semantics remain owned by the Python runtime. Clicking pieces and constructing conditions should produce the same validated rulebook that a person could inspect as text.

## Explainability is not an extra feature

A deterministic language creates the opportunity for a complete decision trace. When the repertoire recommends a move, the application can identify the selected rule, the conditions that matched, the ordered attempts that failed, and the legal action that resolved.

That trace is useful for debugging the software, but it is also useful for learning chess. A mismatch is no longer only “the expected move was different.” It is evidence that the written intention, its priority, or its conditions did not represent what the player meant.

[Bradley: add a concrete London or Caro-Kann example showing how one rule generalizes across several opponent replies.]

The interesting question is not whether a rule language can replace every opening tree. It is whether expressing intent directly can make a repertoire easier to understand, test, and revise.
