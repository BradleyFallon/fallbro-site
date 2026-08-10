---
title: "Automate Preparation, Not Judgment"
description: "A human-in-the-loop pattern for using AI to assemble context and options without quietly transferring authority."
date: 2026-08-09
tags:
  - automation
  - human-in-the-loop
  - artificial-intelligence
draft: true
---

<!-- AI-GENERATED WORKING DRAFT. Bradley: verify examples and terminology, add firsthand experience, and revise into your own voice before publishing. -->

The most useful early role for AI in a consequential workflow is often preparation, not authority.

An AI system can gather history, locate relevant documentation, compare similar cases, summarize correspondence, draft a response, and recommend next actions. A person can then review that prepared context and decide what should actually happen.

This division is less dramatic than a fully autonomous agent. It is also easier to evaluate, safer to introduce, and frequently more valuable.

## Authority is the expensive part

When an automation drafts an email, the failure is visible before the message leaves. When it sends the email, changes a record, authorizes a refund, or modifies production infrastructure, the same error becomes an external event.

The cost of a mistake changes at the boundary between preparation and action. That boundary should be explicit in the system design.

Useful patterns include:

- AI drafts; a person sends.
- AI classifies; a person confirms.
- AI proposes follow-ups; an owner chooses them.
- AI prepares a transaction; an authorized user commits it.
- AI assembles diagnostics; an engineer selects the mitigation.

These are not merely temporary compromises. Human approval may remain the correct permanent design when responsibility cannot be delegated to software.

## Context assembly is real work

Experts often spend more time finding the information required for a decision than making the decision itself. A support case may require old tickets, current account state, product documentation, recent changes, log output, and knowledge that lives in a coworker's memory.

An effective assistant can turn that fragmented material into a first-pass runbook:

1. What appears to be happening?
2. What evidence supports that interpretation?
3. Which sources were consulted?
4. What diagnostics should be run next?
5. What actions are available, and what are their risks?

The expert still decides. The system removes the mechanical research that delays the decision.

## Design the review, not just the model call

Adding an approval button after generated text is not enough. A reviewer needs to understand what they are approving.

The interface should separate observed facts from model interpretation, link claims to their sources, expose missing information, and make uncertainty visible. Suggested actions should show their parameters before execution. High-impact changes should require an intentional confirmation rather than a quick continuation through a chat transcript.

The system also needs a useful rejection path. Corrections should be easy to record, and repeated corrections should become evidence that the retrieval, tools, prompts, or underlying process need improvement.

## Earn automation gradually

Human review creates the data needed to decide whether a step can become more automatic. If a narrow classification is accepted consistently, has measurable evaluation coverage, and fails in predictable ways, it may eventually run without approval. Another step may remain supervised forever.

Autonomy should be earned per action, not granted to an entire system because the demo looked convincing.

[Bradley: add a firsthand example of a workflow where research or drafting was the bottleneck and human authorization correctly remained outside the model.]

The aim is not to keep a person clicking through meaningless confirmations. It is to automate the preparation that consumes their attention while keeping them present at the point where judgment has real consequences.
