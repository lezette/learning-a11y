---
title: 'EN 301 549 Clause 9 Overview'
description: 'WAS Log 07'
tags: ['was', 'en301549', 'journal']
permalink: 'was/{{ title | slug }}/'
date: '2025-06-01'
layout: 'blog-layout'
---

<div class="blog">

  <p>Clause 9 is the part where the IAAP WAS BoK focuses on, This is where EN 301 549 refrences WCAG 2.0</p>

  <h3>Clause 9: Web</h3>
  <p>Conformance with WCAG 2.1 Level AA is equivalent to conforming with all of clauses 9.1 to 9.4 and the conformance
    requirements of clause 9.6</p>
  <p>Clause 9.1 to 9.4 are the same as WCAG 2.1 Level AA, so I won't repeat them here.</p>

  <h4>Key takeaways:</h4>
  <ul>
    <li><strong>Clause 9 = WCAG 2.1 Level AA:</strong> Fully adopting WCAG 2.1 Level AA is equivalent to complying with
      all required
      clauses under 9.1-9.4 + conformance clause 9.6.</li>
    <li>Covers all principles (Perceivable, Operable, Understandable, Robust), but structured as:
      <ul>
        <li>9.1 Perceivable (SC 1.x)</li>
        <li>9.2 Operable (SC 2.x)</li>
        <li>9.3 Understandable (SC 3.x)</li>
        <li>9.4 Robust (SC 4.x)</li>
      </ul>
    </li>
    <li><strong>Void clauses</strong> (like 9.1.4.6 - 9.1.4.9) are there to maintain SC numbering alignment with WCAG
      2.1,
      they don't require implementation, they're placeholders.</li>
    <li><strong>Clause 9.5 = WCAG 2.1 AAA</strong> Encouraged, Not Required. 9.5 lists 28 Level AAA SCs from
      WCAG 2.1 that are optional but recommended. These cover enhancements for:
      <ul>
        <li>Deaf/HoH users (e.g. Sign Language, Extended Audio Descriptions)</li>
        <li>Low vision and cognitive support (e.g. Target Size, Help, Reading Level)</li>
        <li>Refined usability (e.g. Section Headings, Error Prevention (All))</li>
      </ul>
    </li>
    <li><strong>Clause 9.6: WCAG Conformance Requirements</strong> This part repeats WCAG's 5 core conformance
      conditions for Level AA:
      <ul>
        <li><strong>Conformance Level:</strong> all SCs at Level A and AA are met.</li>
        <li><strong>Full Pages:</strong> you can't just make part of the page accessible.</li>
        <li><strong>Complete Processes:</strong> all steps in a process (e.g. checkout) must be accessible.</li>
        <li><strong>Only Accessibility-Supported Ways of Using Technologies:</strong> use methods reliably supported by
          AT + user agents.</li>
        <li><strong>Non-interference:</strong> even decorative or hidden content can't break accessibility (e.g. trap
          focus or autoplay sound).</li>
      </ul>
    </li>
    <li>EN 301 549 calls out a specific subset of SCs that must always pass, even for non-core content:
      <ul>
        <li>9.1.4.2 Audio control</li>
        <li>9.2.1.2 No keyboard trap</li>
        <li>9.2.2.2 Pause, Stop, Hide</li>
        <li>9.2.3.1 Three flashes or below threshold</li>
      </ul>
    </li>
  </ul>

  <p>This clause formalizes WCAG into a legal/standards context, which is what makes EN 301 549 a procurement and
    compliance tool, not just a best-practice guide.</p>

  <p>Requirements for non-web documents and non-web software are given in clauses 10 and 11 respectively.</p>

   <h3>Resources</h3>
  <ul>
    <li><a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf"
        target="_blank" rel="noopener noreferrer">EN 301 549 V3.2.1 (2021-03)</a></li>
    <li><a href="https://youtube.com/playlist?list=PLfCFZkKjngqrnEaIymHKvsym025w0cOF3&si=z6tpXFb0ZqTwHneD"
        target="_blank" rel="noopener noreferrer">Introduction to the EN 301 549 - Youtube</a></li>
  </ul>
</div>
