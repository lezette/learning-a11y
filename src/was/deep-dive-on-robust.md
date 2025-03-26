---
title: "An overview of the Robust principle"
description: "A detailed breakdown of the WCAG 2.2 Robust principle"
tags: ["was", "wcag", "tutorial"]
permalink: "was/{{ title | slug }}/"
date: "2025-03-26"
layout: "blog-layout"
---

<div class="blog">
  <p>WCAG's last principle, <strong>Robust</strong>, ensures that web platforms are built in a way that different technologies (like browsers and Assistive technologies), now and in the future, can understand it clearly.
  </p>
  <p>Your website may look fine visually, however, it might not be semantically acurate so Assistive Technologies (<abbr
      title="Assistive Technologies">AT</abbr>) might not interpret it well.</p>
  <p>Robustness is important because it ensures that your website is future-proof and can be used by everyone,
    regardless
    of the technology they use.</p>
  <h3>4.1 Compatible</h3>
  <p>This guideline ensures that your web platform works well with AT (like screen readers, voice
    control, or magnifiers), now and in the future. To do this your your code needs to be: </p>

  <ul>
    <li>well structured</li>
    <li>standardized, using <code>HTML</code>, <code>ARIA</code>, and <code>APIs</code> the way they're meant to be used
    </li>
    <li>predictable and clear, so that technologies can understand it without guessing (and other developers who
      maintain or build on your content later can easily understand it)</li>
  </ul>

  <h4><s>4.1.1 Parsing (Level A)</s>(Obsolete and removed in 2.2)</h4>
  <p>This Success Criterion (<abbr title="Success Criterion">SC</abbr>) ensured that AT could understand and present web
    content correctly, without getting confused by broken or messy code.</p>
  <p>This SC was added because assistive technologies (like screen readers) used to parse HTML and a missing closing tag
    for example, might make the AT misinterpret the content or fail to read the content. It was removed in WCAG 2.2
    because AT now rely on the browser to parse HTML and modern browsers have gotten smarter and they can fix bad markup
    pretty reliably. So WCAG 2.2 cleaned it up by removing the outdated SC since it no longer served a useful purpose.
  </p>
  <p>While 4.1.1 is no longer required in WCAG 2.2, it is still nice to use valid, semantic HTML for a lot of other
    reasons like making a code readable for other developers.</p>

  <h4>4.1.2 Name, Role, Value (Level A)</h4>
  <p>This SC makes sure that every user interface component (like buttons, links, form fields, sliders, etc.) clearly
    exposes:</p>
  <ul>
    <li>its name (label or accessible name)</li>
    <li>its role (what it is — a button, a checkbox, a link, etc.)</li>
    <li>its state, properties, and values (for example, expanded, selected)</li>
  </ul>

  <p>...to assistive technologies like screen readers.</p>

  <p>Assistive technologies can't guess what your custom components are supposed to do. If you build a custom toggle
    switch with <code>&lt;div&gt;</code> and style it to look like one, screen readers will not know it's a toggle
    unless you tell them using semantic <code>HTML</code> or <code>ARIA</code>.
  </p>
  <p>To meet this SC you should use semantic HTML like <code>&lt;button&gt;</code>, <code>&lt;input&gt;</code>,
    <code>&lt;a&gt;</code> with <code>href</code>, they already expose the name, role, and value to AT. If you need to
    build a custom component, you can use <code>ARIA</code> roles and attributes to expose the name, role, and value to
    AT.
  </p>
  <p>This SC helps screen reader users, switch input users, and people with cognitive disabilities</p>

  <h4>4.1.3 Status Messages (Level AA)</h4>
  <p>This SC ensures that when a user interacts with a component (like a form field, a button, or a slider), the status
    of the component is clearly announced to assistive technologies especially when those messages do not move focus.
  </p>
  <p>For example, if a user submits a form and there's an error, the screen reader should announce the error message.
    Or if a user opens a dropdown, the screen reader should announce that the dropdown is open.</p>
  <p class="note">This SC only applies to brief, non-intrusive messages that Inform the user of the result of an action,
    or communicate errors or status. These messages do not need to take focus. If they do (like a modal dialog), screen
    readers already pick them up, so they're not covered by this SC.</p>
  <p>This SC helps screen reader users, switch input users, and people with cognitive disabilities.</p>

  <h3>Conclusion</h3>
  <p>This has been a fun ride! I've learned so much along the way, and I hope you have too. I also put together a <a
      href="https://docs.google.com/spreadsheets/d/1gs3P-1F4ATPrsx87_16RoQVLZVaIRI5Np2rEhnIL9fM/edit?usp=sharing"
      target="_blank" rel="noopener noreferrer">Google Sheet</a>. that breaks down all the layers of WCAG 2.2.</p>

  <p>While reading <a href="https://100daysofa11y.com/was/" target="_blank" rel="noopener noreferrer">100 Days of
      A11y</a>,I saw that Amy Carney (the creator of the project) made a helpful sheet that covers WCAG 2.1. So, I
    decided
    to make an updated version that includes WCAG 2.2.</p>

  <p>I've also been studying the Techniques for WCAG 2.2 and the <a
      href="https://www.w3.org/WAI/WCAG22/Techniques/#failures" target="_blank" rel="noopener noreferrer">Common
      Failures</a></p>

  <p>According to the <abbr title="International Association of Administrative Professionals">IAAP</abbr>'s Body of
    Knowledge
    (<abbr title="Body of Knowledge">BoK</abbr>) a Web Accessibility Specialist (<abbr
      title="Web Accessibility Specialist">WAS</abbr>) is expected to understand the history of WCAG versions, from WCAG
    2.0 in 2008, to WCAG 2.1 in 2018, and WCAG 2.2 in 2023 and be able to explain the changes introduced in each
    update, To help with that, I created a table listing the new Success Criteria added in WCAG 2.1 and 2.2. You can
    find it on the second tab of the Google Sheet (titled “WCAG 2.1 and 2.2”).</p>

  <h4 class="large-text">Next Steps</h4>
  <p>I'll be studying the Authoring Tool Accessibility Guidelines (ATAG) 2.0 next. I'm not very familar with this but
    I'm really excited for what I'll learn!</p>

  <h3>Resources</h3>
  <ul>
    <li>
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/compatible.html" target="_blank"
        rel="noopener noreferrer">Understanding Guideline 4.1: Compatible</a>
    </li>
  </ul>

</div>
