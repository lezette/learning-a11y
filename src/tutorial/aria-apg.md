---
title: "ARIA Authoring Practices Guide (APG)"
description: "An overview of WAI-ARIA"
tags: ["tutorial", "aria", "journal"]
permalink: "tutorial/{{ title | slug }}/"
date: "2025-04-24"
layout: "blog-layout"
---

<div class="blog">
  <p>I recently went through the ARIA Authoring Practices Guide (APG). It explains how to apply
    accessibility semantics to common design patterns and widgets. The APG is split into two sections:
    “Patterns” and “Practices.” I focused on reading the Practices section this time.
  </p>
  <p class="note">The APG isn't something you read once and forget. Honestly, I think it's one of those
    resources you should bookmark and keep coming back to whenever you need it.</p>

  <p>The Practices section helped me understand a lot of things I'd been curious about when it comes to ARIA, like:</p>

  <ul>
    <li>How different roles are supposed to be used</li>
    <li>Which roles need accessible names—and which ones actually aren't supposed to have them</li>
    <li>When to use <code>aria-label</code> vs <code>aria-labelledby</code> (hint: use <code>aria-labelledby</code>
      when there's a visible label already)</li>
    <li>What the keyboard interaction expectations are for different roles</li>
  </ul>

  <p>It also made me realize why ARIA can sometimes feel tricky to use. As a developer, I've seen ARIA being used
    in code without a clear reason; and that can actually cause problems. If you're going to use ARIA, it needs to be
    intentional and make sense. If it's not needed, it's better to leave it out. Bad ARIA is worse than no ARIA at all,
    because while it's meant to boost accessibility, if it's used wrong, it can make things less accessible.</p>

  <p>ARIA is definitely something I'll keep studying, but for now, I've wrapped up this section of the WAS BoK.
    Time to move on to the next topic: <strong>Domain One E: Accessibility-Supported Technologies</strong>.
    See you then!</p>
</div>
