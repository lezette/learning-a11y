---
title: "Journey to WAS update, Friday, March 21 2025"
description: "My journey to WAS update March 21 2025"
tags: ["journal", "was"]
permalink: "was/{{ title | slug }}/"
date: "2025-03-21"
layout: "blog-layout"
---

<div class="blog">

  <p class="large-text">I finally completed the article on overview of the Operable Principle.</p>

  <p>You can read the post
    <a href="/was/an-overview-of-the-operable-principle/">An Overview of the Operable Principle</a>.
  </p>

  <p>I've also finished reading the Understandable Principle and hope to write an overview on it this weekend.</p>

  <p>WCAG 2.2 introduced four new success criteria to the Understandable Principle (Guideline 3):</p>
  <ul>
    <li>3.2.6 Consistent Help</li>
    <li>3.3.7 Redundant Entry</li>
    <li>3.3.8 Accessible Authentication (Minimum)</li>
    <li>3.3.9 Accessible Authentication (Enhanced)</li>
  </ul>

  <p>These additions make a lot of sense and are extremely important. I had many <em>"OH, THIS IS ACTUALLY REALLY
      IMPORTANT"</em> moments while reading them. For example, consistent help ensures that if you have a "help"
    component, it remains consistent across your entire site and is easy to find. Redundant entry is also essential
    because no one likes entering the same information twice—another example of "accessibility is helpful to everyone."
    Accessible authentication is particularly interesting because some authentication methods, like puzzles, can be
    unnecessarily complicated. I'm glad WCAG addresses this.</p>

  <p>I can't wait to share everything about the Understandable Principle in my upcoming post.</p>

  <h3>Here's something I Found Interesting</h3>

  <p>Not disabling <code>user-select</code>: I noticed that when I'm reading digitally, it's easier to follow the text
    if I highlight the section I'm reading. It never felt like a big deal until I encountered a blog where the selection
    style was hidden, making it impossible to follow along because text selection wasn't working. This experience
    prompted me to read more about the <code>user-select</code> property and its effects on accessibility. I learned the
    following:
  </p>

  <ul>
    <li>Some screen readers and assistive tools rely on text selection to read or interact with content. Disabling text
      selection can hinder these tools.</li>
    <li>Preventing text selection can frustrate users who wish to copy or highlight text for note-taking, sharing, or
      translating purposes.</li>
    <li>Like me, many people find it easier to read by highlighting content as they go.</li>
  </ul>

  <p>So, while <code>user-select</code> might not explicitly be part of WCAG guidelines, it's best to avoid restricting
    users from selecting text unless absolutely necessary. If you decide to style your <code>::selection</code>
    behavior, ensure it follows WCAG's color contrast ratio guidelines to maintain readability. Avoid drastic changes to
    the selection appearance that could disorient users; subtle enhancements are best.</p>

  <p>I've included some resources I found on this topic below.</p>


  <h3>Resources</h3>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::selection#accessibility" target="_blank"
        rel="noopener noreferrer">MDN: ::selection</a>
    </li>
    <li>This StackOverflow discussion: <a
        href="https://stackoverflow.com/questions/31250554/css-user-select-and-accessibility" target="_blank"
        rel="noopener noreferrer">CSS' user-select and accessibility</a></li>
    <li>
      <a href="https://javascript.plainenglish.io/understanding-the-css-user-select-property-what-you-should-know-c393c6f6eecd"
        target="_blank" rel="noopener noreferrer">Understanding the CSS user-select Property: What You Should Know</a>
    </li>
  </ul>

  <p>Other Article I found helpful</p>

  <ul>
    <li>
      <a href="https://www.smashingmagazine.com/2021/10/respecting-users-motion-preferences/" target="_blank"
        rel="noopener noreferrer">Respecting Users' Motion Preferences</a>
    </li>
    <li>
      <a href="https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/" target="_blank"
        rel="noopener noreferrer">A Guide To Keyboard Accessibility: HTML And CSS (Part 1)</a>
    </li>
  </ul>

  <p>Honestly, Smashing Magazine is one of my favorite places online for accessibility resources!</p>

  <p>Thanks for reading, have a nice day!</p>
</div>