---
title: "Domain 1.6 - WAI-ARIA Roles, States, and Properties"
description: "WAS Log 03: Wrapping My Brain Around WAI-ARIA"
date: "2025-05-05"
tags: ["was", "journal"]
permalink: "was/{{ title | slug }}/"
layout: "blog-layout"
---

<div class="blog">
  <p>WAI-ARIA was one of those things that took me a <em>minute</em> to fully make sense of, it's powerful, seems
    straightforward, but also very easy to mess up if you're not careful. I started digging into this earlier in my
    prep, and this post is me writing out the notes before they escape my brain 😅
  </p>

  ### What I learned

  <p><strong>WAI-ARIA (Accessible Rich Internet Applications)</strong> is a spec by W3C that helps us describe <em>how
      things behave</em> on a page when HTML alone can't do the job, especially for screen readers and other assistive
    tech. It's meant to <em>supplement</em>, not replace, semantic HTML.</p>

  <blockquote><q>Don't use ARIA if you can use native HTML</q> is a golden rule — and for good reason!</blockquote>

  ### The Basics

  I updated my <a
    href="https://docs.google.com/spreadsheets/d/1gs3P-1F4ATPrsx87_16RoQVLZVaIRI5Np2rEhnIL9fM/edit?gid=1406398338#gid=1406398338"
    target="_blank" rel="noopener noreferrer">WAS Prep sheet</a> to reflect what I learned on ARIA:

  #### Roles
  Roles define <em>what</em> an element is (e.g. `button`, `dialog`, `tab`, `checkbox`). Roles fall into categories
  like:
  - Landmark roles (`banner`, `main`, `navigation`)
  - Widget roles (`button`, `checkbox`, `menu`)
  - Structure roles (`row`, `cell`, `group`)


  #### States & Properties
  Define <em>how</em> an element behaves or what state it's in:
  - Properties describe characteristics (e.g. `aria-describedby`, `aria-label`)
  - States describe dynamic changes (e.g. `aria-hidden`, `aria-checked`, `aria-disabled`)

  A lot of attributes look the same but have subtle differences, like how `aria-pressed` is different from
  `aria-checked`.

  #### ARIA can be used wrong
  ARIA is *not magical*, if the roles/attributes aren't set up correctly with JavaScript and focus/event handling, it
  won't work.
  Plus:
  - **No semantic behavior**: `role="button"` on a `div` won't make it *act* like a button unless you handle keyboard
  interaction too.
  - **Overuse of ARIA** can make your component *less* accessible.

  ### Resources That Helped Me

  - <a href="https://www.w3.org/TR/wai-aria-1.2/" target="_blank" rel="noopener noreferrer">WAI-ARIA 1.2 Spec</a> - I
  read this slowly and in chunks
  - <a href="https://www.w3.org/WAI/ARIA/apg/practices/" target="_blank" rel="noopener noreferrer">ARIA Authoring
    Practices Guide (APG)</a>
  - <a href="https://100daysofa11y.com/2018/12/15/day-16-aria-states-and-properties-part-2/" target="_blank"
    rel="noopener noreferrer">Day 16 - 100 Days of A11y</a> - made things feel *human*
  - <a href="https://www.a11yproject.com/posts/aria-states/" target="_blank" rel="noopener noreferrer">ARIA States and
    Properties - A11y Project</a>
  - <a href="https://www.a11yproject.com/posts/aria-properties/" target="_blank" rel="noopener noreferrer">ARIA
    Properties - A11y Project</a>

  ### What I'm Still Reading
  - The <a href="https://www.w3.org/WAI/ARIA/apg/patterns/" target="_blank" rel="noopener noreferrer">ARIA APG
    Patterns</a> - I'm slowly going through them to understand using ARIA roles with the keyboard support.
  - How assistive tech responds differently across patterns (especially mobile vs desktop screen readers)
  - ARIA relationships like `aria-owns`, `aria-activedescendant`, `aria-describedby` — I get what they do, but I'm still
  learning *when* it's appropriate to use them.

  <p>Next up: <strong>European Accessibility Standard EN 301 549</strong> I finally got to this bridge. </p>

</div>