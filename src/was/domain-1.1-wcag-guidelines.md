---
title: "Domain 1.1 WCAG Guidelines"
description: "WAS Log 01"
date: "2025-03-24"
tags: ["was", "journal"]
permalink: "was/{{ title | slug }}/"
layout: "blog-layout"
---

<div class="blog">
  <p>I had covered this section of the Body of Knowledge earlier in March, and it helped lay the foundation for
    everything else. Here's a summary of what I learned under Domain 1A specifically sections 1.1 to 1.3 (in the BoK).
  </p>
  <h3>Here's what I learned</h3>
  <h4>Why the W3C WAI Created Accessibility Guidelines</h4>
  The <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">W3C Web Accessibility Initiative
    (WAI)</a> develops international standards to make the web accessible to everyone, especially people with
  disabilities. Since accessibility involves different moving parts (content, browsers, AT, tools), they've created
  guidelines for each:

- **WCAG** - for web content
- **ATAG** - for authoring tools
- **UAAG** - for browsers and media players
- **WAI-ARIA** - to describe roles and states when native HTML isn't enough

#### WCAG Overview: Principles, Guidelines, and Success Criteria

WCAG is structured under four principles (POUR):

- **Perceivable** - Users can _see_ or _hear_ the content
- **Operable** - Users can _navigate_ and _use_ components
- **Understandable** - Content and UI behaves in _predictable_ ways
- **Robust** - Content works across _different technologies_, including assistive tech

Each principle contains **guidelines**, and each guideline has one or more **Success Criteria (SC)**. These SCs are
testable and come with a **conformance level**:

- **A** (minimum),
- **AA** (industry standard),
- **AAA** (enhanced, not usually required)

#### What Are Normative vs. Non-Normative Documents?

- **Normative** = “you _must_ do this.” These are required for conformance.
- Example: The WCAG success criteria themselves.

- **Non-Normative** = helpful guidance, not required.
- Example: Techniques, Understanding docs; they help explain how to meet SCs, but you don't have to follow them to
  meet conformance.

#### WCAG Supporting Documents (Sufficient, Failure, Advisory Techniques)

These are **non-normative**, but useful in showing that a certain approach will likely meet WCAG.

- **Sufficient Techniques** - Pass this and you're good!
- **Failure Techniques** - If your code does this, it fails.
- **Advisory Techniques** - Nice to have, not required.

#### WCAG Versioning

The WAS BoK states that candidates should know how **WCAG has evolved**:

- **WCAG 2.0 (2008)** - Original
- **WCAG 2.1 (2018)** - Added criteria for mobile, low vision, cognitive
- **WCAG 2.2 (2023)** - Focused more on cognitive needs, target size, authentication, etc.

The cool part of each version is that they are backward compatible. So a page that is WCAG 2.2-conformant also
conforms to 2.1 and 2.0.

### Resources I Found Helpful

- <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer">Web Content Accessibility
  Guidelines (WCAG) 2.2</a> official docs
- The <a href="https://www.w3.org/WAI/WCAG22/Understanding/" target="_blank" rel="noopener noreferrer">Understanding
  WCAG 2.2</a> docs.
- The <a href="https://www.w3.org/WAI/WCAG22/Techniques/" target="_blank" rel="noopener noreferrer">WCAG
  Techniques</a>

### What I Still Need to Understand better

- **Understanding the changes in WCAG 2.1 and 2.2** (the BoK says candidates should demonstrate knowledge of this) -
  I've already listed out the changes in my <a
    href="https://docs.google.com/spreadsheets/d/1gs3P-1F4ATPrsx87_16RoQVLZVaIRI5Np2rEhnIL9fM/edit?gid=291242846#gid=291242846"
    target="_blank" rel="noopener noreferrer">WAS Study Google Sheet</a>, so now it's just a matter of going over them
  repeatedly until they stick.

- **Knowing all the Success Criteria**, not just reading them, but remembering where they fall under each principle
and what each one is about. I'm using flashcards for this and reviewing them randomly during the day to quiz myself.

  <p>I wrote an article on <a href="/tutorial/understanding-wcag">Understanding WCAG</a> </p>
</div>
