---
title: "Understanding WCAG: Perceivable"
description: "Taking a look at what it means for a website to be perceivable"
tags: ["was", "wcag", "tutorial"]
permalink: "was/{{ title | slug }}/"
date: "2025-03-04"
layout: "blog-layout"
---

<div class="blog">
  <p>I spent some hours yesterday and today looking at the Perceivable Principle. As part of my goal I needed to deeply
    understand all that goes into meeting the WCAG principles</p>

  <p>Here's a quick summary what I learnt.</p>

  <h3>Perceivable: Ensuring Content is perceivable to all users</h3>

  <p>The <strong>Perceivable</strong> principle ensures that users can see and hear content (not just visually) without
    missing important context or information. This means making sure content is presented in a way that works for
    different users.</p>

  <p>You can follow the Perceivable guidelies to meet this principle</p>

  <h3>1.1 Text Alternatives</h3>

  <p>Provide text alternatives to <strong>non-text content,</strong> except when purely decorative. If an element
    conveys meaning
    (like an image, chart, or button icon), provide a text description. Examples of meeting this guideline are:</p>
  <ul>
    <li>If it's an image, add alt text.</li>
    <li>If it's a CAPTCHA, provide an accessible alternative (like an audio CAPTCHA).</li>
    <li>If the visual content is complex (e.g., an infographic), provide a long text description or transcript.</li>
  </ul>

  <h3>1.2 Time based media</h3>
  <p>Provide alternative formats for <strong>audio and video content</strong> so users can access the information in
    different ways. Examples of alternative formats are</p>

  <ul>
    <li><strong>Captions</strong> for videos.</li>
    <li><strong>Audio description</strong> for visual-heavy content.</li>
    <li><strong>Transcript</strong> for people who can't listen.</li>
    <li><strong>Sign language</strong> interpretation for even greater accessibility.</li>
  </ul>

  <h3>1.3 Adaptable</h3>
  <p>Make sure content are structured properly so it can be presented in different ways without losing meaning.
    This means:</p>
  <ul>
    <li>Using semantic HTML (headings, lists, tables) so assistive technologies can recognize content relationships.
    </li>
    <li>Ensuring a <strong>logical reading order</strong> so that it makes sense if styles are removed. Don't use CSS
      to visually arrange content in a way that loses meaning for Assistive Technologies (AT) users</li>
    <li>Not relying on only <strong>sensory characteristics</strong> like color or shapes to pass information, make sure
      instructions are clear regardless of visuals. So instead of: <em>"Click the Red button with the left arrow at the
        bottom of the page"</em>, Say: <em>"Click the 'Next' button at the bottom, which has a left arrow."</em></li>
    <li>Supporting both portrait and landscape <strong>orientations</strong> unless a specific orientation is essential
      (e.g., a piano app).</li>
    <li>Helping browsers and assistive technologies identify <strong>input fields</strong> using the
      <code>autocomplete</code> attribute.
    </li>
    <li>Clearly marking the purpose of UI components using ARIA roles (e.g., using <mark>nav</mark> for navigation)</li>
  </ul>
  
  <h3>1.4 Distinguishable</h3>
  <p>Let users perceive content by providing the right contrast for the background and foreground, and avoiding using
    color alone to pass information. This includes:</p>
  <ul>
    <li><strong>Not using color alone</strong> to pass information (e.g., instead of saying "Required fields are in
      red," add a “Required” label or a <kbd>*</kbd> symbol).</li>
    <li>Providing <strong>audio controls</strong> so users can pause or mute autoplaying sound.</li>
    <li>Ensuring sufficient contrast between text and background:
      <ul>
        <li>For Level AA the minimum contrast ratio should be <strong>4.5:1</strong> for normal text, <strong>3:1</strong> for large text (18.5px bold or 24px normal).</li>
        <li>For Level AAA the minimum contrast ratio should be <strong>7:1</strong> for normal text, <strong>4.5:1</strong> for large text.</li>
      </ul>
    </li>
    <li>Supporting zoom (up to 200% for AA) and <strong>reflow</strong> (up to 400% for AAA) without breaking the
      layout.</li>
    <li>Allowing users to adjust text size, spacing, and line height without layout issues.</li>
    <li>Avoiding fully justified text (since uneven spacing makes reading harder, especially for users with dyslexia).
    </li>
    <li>Not relying on <strong>images of text</strong>, or if using them at AA, allowing users to customize their
      appearance. AAA requires avoiding images of text altogether. Except if it's a logo</li>
    <li>Reducing background audio (at least 20dB lower than the foreground sound) or allowing users to turn it off.</li>
    <li>Ensuring popups, tooltips, and dropdowns follow these rules:
      <ul>
        <li>They can be dismissed without losing focus (e.g., by pressing Esc, clicking outside, or another method).
        </li>
        <li>They remain visible long enough for users to read.</li>
        <li>If interactive, they accept focus without disappearing.</li>
      </ul>
    </li>
  </ul>
  <p>
    When content meets these <strong>Perceivable</strong> guidelines, it becomes more accessible to users with low
    vision, color blindness, hearing impairments, cognitive disabilities, and those relying on assistive tech.
  </p>

  <p></p>
  <p>So this was a really intresting learning process for me, I knew some of these guidelines previously but I found
    some of them too vauge to understand when reading the WCAG overview page, but reading the "Understanding" pages for each guidelines and success criteria was game changing. I've provided links to the understanding pages in the <a href="#resources">resources</a> section</p>

  <p>After learning this to ensure I really understand the Perceivable principle I asked ChatGPT to generate a
    <strong>IAAP WAS-style quiz</strong> focused on testing your understanding of WCAG 2.2 - Perceivable principle and
    it helped me realize that I actually do understand the Perceivable principle (Yay). So on to the next
    Principle soon
  </p>

  <h3 class="text-2xl font-semibold" id="resources">Resources</h3>
  <ul>
    <li><a href="https://www.w3.org/TR/WCAG22/#perceivable" target="_blank" rel="noopener noreferrer">1. Perceivable</a></li>
    <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/text-alternatives.html" target="_blank" rel="noopener noreferrer">Understanding
        Guideline 1.1: Text Alternatives</a></li>
    <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/time-based-media.html" target="_blank" rel="noopener noreferrer">Understanding
        Guideline 1.2: Time-based Media</a></li>
    <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/adaptable.html" target="_blank" rel="noopener noreferrer">Understanding Guideline
        1.3: Adaptable</a></li>
    <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/distinguishable.html" target="_blank" rel="noopener noreferrer">Understanding
        Guideline 1.4: Distinguishable</a></li>
  </ul>
  <div>
