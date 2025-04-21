---
title: "Aria 1.2 Overview Part 2"
description: "WAI-ARIA Specification"
tags: ["was", "aria", "journal"]
permalink: "was/{{ title | slug }}/"
date: "2025-04-21"
layout: "blog-layout"
---

<div class="blog">
  <p>So I haven't posted in a while. But not because I've not been doing a11y stuff, I've have, but I have lot on my
    plate at the moment so I'll put a brief of what I've been up to on WAI-ARIA.</p>

  <p>So the last time I posted a Study Checklist for ARIA, which I've covered however, I came to realize I was
    overthinking it the WAS Bok covers what I needed to know</p>

  <p>I've did an extensive read of the <a href="https://www.w3.org/TR/wai-aria-1.2/" target="_blank"
      rel="noopener noreferrer">Accessible Rich Internet Applications (WAI-ARIA) 1.2</a> document. Here are some parts
    I found interesting that are also covered in the WAS BoK:</p>

  <h3>The Roles Model</h3>
  <p>The roles model section defines roles, their characteristics and properties, here are some things covered under
    that</p>
  <ul>
    <li>Relationships Between Concepts: covers Superclass Roles, Subclass Roles, Related Concepts and Base Concept</li>
    <li>The characteristics of roles</li>
    <li>The categorization of roles: there are six role categorizes
      <ul>
        <li>Abstract Roles</li>
        <li>Widget Roles</li>
        <li>Document Structure Roles</li>
        <li>Landmark Roles</li>
        <li>Live Region Roles</li>
        <li>Window Roles</li>
      </ul>
    </li>
    <li>Role Definition</li>
  </ul>
  <h3>Supported States and Properties</h3>
  <p>This section explains ARIA attributes:</p>
  <ul>
    <li>The difference between <strong>ARIA states</strong> and <strong>ARIA
        properties</strong></li>
    <li>The Characteristics of States and Properties: which help you understand the rules for using each ARIA attribute
      properly</li>
    <li>The common value types</li>
    <li>Translatable States and Properties for i18n:
      <ul>
        <li>aria-label</li>
        <li>aria-placeholder</li>
        <li>aria-roledescription</li>
        <li>aria-valuetext</li>
      </ul>
    </li>
    <li>Global States and Properties</li>
    <li>Categorization of states and properties
      <ul>
        <li>Widget Attributes</li>
        <li>Live Region Attributes</li>
        <li>Drag-and-Drop Attributes</li>
        <li>Relationship Attributes</li>
      </ul>
    </li>
  </ul>
  <h3>Accessibility Tree</h3>
  <p>The Accessibility tree is built for assistive technologies and contains important accessible information it doesn't
    contain everything in the DOM. The accessibility tree removes irrelevant stuff and adds properties like roles,
    names, states. In short the accessibility tree contains only elements that matter for accessibility unlike the DOM
    that contains all elements including layout only stuff</p>

  <p>I also learned bunch of other interesting stuff like requirements ARIA for user-agents (browsers) and host
    languages (like HTML, and SVG) and how they should handle author's conflict</p>

  <p>I'm currently studying the Authoring Practice Guide (APG) which is organised into two main sections: Patterns and
    Practices. I'll share my update on that soon</p>
</div>