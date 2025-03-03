---
title: "Understanding WCAG"
description: "Take a deep dive into WCAG (Web Content Accessibility Guidelines) and its structure."
tags: ["was", "wcag"]
permalink: "was/{{ title | slug }}/"
date: "2025-03-02"
layout: "blog-layout"
---

<div class="text-xl/8 space-y-6">

  <h3 class="text-2xl font-semibold">So what is <abbr>WCAG</abbr> (W3C Accessibility Guideline)?</h3>
  <p>WCAG which stands for <span class="font-bold">Web Content Accessibility Guidelines,</span> a set of guidelines from the W3C (World Wide Web Consortium) designed to provide guidelnes that help ensure web platforms are accessible.</p>
  <p>The name might seem self-explanatory (it didn’t seem that clear to me earlier, lol), but WCAG provides specific, structured guidance to help make the web inclusive.</p>
  
  <h3 class="text-2xl font-semibold">How WCAG Works</h3>
  <p>WCAG isn't static—it gets updated over time. The current version is WCAG 2.2, and importantly, new versions are backward-compatible so you don’t need to relearn old versions just follow the latest guidelines.</p>

  <h3 class="text-2xl font-semibold">WCAG Structure: Layers of Guidance</h3>
  <p>The WCAG framework follows a layered structure:</p>
  <p class="font-bold">Principles →  Guidelines → Success Criteria (SC) → Conformance Levels → Techniques</p>
  <p>Each layer builds on the previous one, making accessibility guidance more actionable.</p>
  
  <p>WCAG Principles (POUR)</p>
  <ol class="list-decimal space-y-2 ml-10">
    <li>Perceivable: Information and UI components must be presented in ways users can perceive (e.g., text alternatives for images).</li>
    <li>Operable: Users must be able to navigate and interact with the interface (e.g., keyboard navigation).</li>
    <li>Understandable: The interface must be clear, predictable, and easy to understand.</li>
    <li>Robust: Content should be compatible across different technologies, including browsers, assistive technologies (AT), and future devices.</li>
  </ol>

  <p class="dark:bg-dark-gray/50 bg-gray/50 p-4 rounded-xl"> Note: If your web platform doesn’t meet these principles, it's not truly accessible.</p>

  <p>Each Principle contains Guidelines that help meet its goal. For example, under the <span class="font-bold italic">Perceivable</span> principle, Guideline <span class="font-bold italic">1.1 - Text Alternatives</span> states that non-text content must have a text alternative for users who can’t see or hear it.</p>

  <p>To make this more actionable, WCAG provides Success Criteria (SC): SC <span class="font-bold italic">1.1.1 - Non-text Content (Level A)</span> Requires all non-text content should have a text alternative (except for things like decorative images or CAPTCHA).</p>
  <p>Every Success Criterion (SC) has a Conformance Level <span class="font-bold italic">(A, AA, AAA),</span> which tells you how essential it is for accessibility.</p>

  <h3 class="text-2xl font-semibold">WCAG Conformance Levels: A, AA, AAA</h3>
  <p>Conformance levels define how well a website or app meets WCAG accessibility standards:</p>
  <ul class="list-disc space-y-2 ml-10">
    <li>A – This is the minimum level of conformance, in other words, the least you can do to ensure your website meets the accessibility standard. If your website fails Level A criteria, it's likely completely inaccessible for disabled users.</li>
    <li>AA: The recommended standard of conformance, this includes all A + AA SCs, most people and organization aim for this</li>
    <li>AAA: The highest level of conformance, includes A + AA + AAA SCs, However, this level isn't always pratical and sometimes could be unnecessary for your project</li>
  </ul>
  <p class="dark:bg-dark-gray/50 bg-gray/50 p-4 rounded-xl">So, if you ever see "Our website meets WCAG 2.2 AA", now you know what it means!</p>

  <h3 class="text-2xl font-semibold">Techniques: How to Meet Success Criteria</h3>
  <p>Each SC have techniques you can follow, they are recommendations on how to meet the SC. For example, for SC 1.1.1 Non-text content (Level A) one technique is using the alt attribute on img elements to provide text alternatives for images.</p>

  <p class="dark:bg-dark-gray/50 bg-gray/50 p-4 rounded-xl">Techniques aren’t mandatory (non-normative), but they’re best practices to help meet WCAG requirements.</p>

  <h3 class="text-2xl font-semibold">What's with the numbering?</h3>

  <p>If you ever wonder why WCAG uses numbered labels like 1.1.1 or 2.1.1. We use the numbers to identify which principle a guideline or SC fall under. Here's how to read them:</p>

  <p>1.1.1 → Principle 1: Perceivable → Guideline 1.1: Text Alternatives → SC 1.1.1: Non-text Content</p>
  <p>2.1.1 → Principle 2: Operable → Guideline 2.1: Keyboard Accessible → SC 2.1.1: Keyboard</p>

  <p class="dark:bg-dark-gray/50 bg-gray/50 p-4 rounded-xl">So if a user gets trapped in a modal and can’t exit using the keyboard, that means the site fails Principle 2 (Operable) and Guideline 2.1 (Keyboard Accessible).</p>

  <h3 class="text-2xl font-semibold">Do We Need to Memorize All WCAG Guidelines?</h3>
  <p>Well, if you're like Mike Ross or Sheldon Cooper then absolutely! <span aria-hidden="true">😆</span></p>
  <p>But realistically, no, you don’t need to memorize everything. Instead, focus on understanding the principles and guidelines so you can quickly identify accessibility failures, then understand how to reference WCAG 2.2 documentation when needed, You should also try understanding common patterns, so you intuitively apply accessibility best practices.</p>

  <p>I hope this made WCAG easier to understand. Thanks for reading <span aria-hidden="true">💙</span></p>

  <h3 class="text-2xl font-semibold">Resources</h3>
  <ul class="list-disc space-y-2 ml-10">
    <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2 Overview (opens in new tab)</a></li>
    <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/about" target="_blank">About WCAG Understanding Documents (opens in new tab)</a></li>
    <li><a href="https://www.w3.org/TR/WCAG22/" target="_blank">Web Content Accessibility Guidelines (WCAG) 2.2 (opens in new tab)</a></li>
  </ul>
<div>
