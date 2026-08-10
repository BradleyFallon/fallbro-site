---
title: "What Is Right-Sized Automation?"
description: "Why the best automation is the smallest reliable system that removes meaningful work without creating a larger problem."
date: 2026-08-09
tags:
  - automation
  - artificial-intelligence
  - systems-design
draft: true
---

<!-- AI-GENERATED WORKING DRAFT. Bradley: verify the first-person claims, replace bracketed prompts, and revise into your own voice before publishing. -->

Automation discussions often begin with a tool. Someone wants an agent, a chatbot, a workflow platform, or a local model before the work itself has been described clearly. That reverses the useful order of operations.

Right-sized automation begins with the actual job. What happens repeatedly? Which parts require interpretation? Where do mistakes become expensive? What information already exists, and what useful work is being delayed because the process depends on memory or manual copying?

Only after those questions are answered does technology enter the conversation.

## The bicycle and the jumbo jet

A flagship AI model can solve an impressive range of problems. That does not mean it belongs in every workflow. Using the most capable model for a deterministic transformation is like taking a jumbo jet across town. It may get you there, but it creates unnecessary cost, complexity, and operational surface area.

The right solution could be a checklist, a spreadsheet formula, a scheduled script, an integration between two existing services, a small classifier, or an agent with several tools. The sophistication of the implementation is not the measure of its value. The measure is whether the system reliably improves the work.

## Simplify before automating

An inefficient process does not become good when it runs faster. Before automating a step, ask whether the step should exist. Duplicate approvals, inconsistent data entry, and reports no one reads are process problems first.

A useful assessment separates work into four categories:

1. Eliminate work that produces no meaningful result.
2. Simplify work that has accumulated unnecessary steps.
3. Automate repeatable work with clear inputs and outputs.
4. Preserve human judgment where context and accountability matter.

This classification also prevents the common failure mode where a new system creates more maintenance than the original task required.

## Conventional software still matters

AI is valuable when language, ambiguity, or interpretation is part of the problem. Conventional software remains better when the rules are known. A parser should parse. A database should enforce structure. An API should retrieve authoritative data. A test should check a deterministic expectation.

The strongest AI-assisted systems usually surround uncertain model behavior with ordinary software: typed inputs, explicit tools, validation, traceable sources, approval steps, and observable failure states.

## Start with one useful loop

The first automation should not establish an enterprise platform. It should complete one narrow loop from beginning to end.

For example: an inquiry arrives, contact details are extracted, a response is drafted, a person approves it, and a follow-up is scheduled. That small system can be measured. Did it save time? Did important leads still fall through the cracks? Were the drafts useful? Where did human review catch a mistake?

Those answers reveal what to build next. Reusable infrastructure should emerge from repeated needs rather than speculation.

## A practical standard

I think an automation is appropriately sized when it is understandable by the people who depend on it, owned by the organization using it, observable when it fails, and no more complicated than the value it creates.

[Bradley: add a concrete example from your own work where a script or existing integration was better than a larger AI system.]

The goal is not to automate everything. It is to remove unnecessary work while preserving the judgment, responsibility, and human attention that make the outcome worthwhile.
