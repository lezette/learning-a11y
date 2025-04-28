---
title: "Aria 1.2 Overview Part 2"
description: "WAI-ARIA Specification"
tags: ["was", "aria", "journal"]
permalink: "was/{{ title | slug }}/"
date: "2025-04-21"
layout: "blog-layout"
---

<div class="blog">
  <p>Today, I'll share a quick summary of what I've learned about WAI-ARIA.</p>

  <p>In my last post, I shared a Study Checklist for ARIA, which I've now covered. I also realized that the WAS BoK 
    includes a checklist of what you're expected to know about ARIA, and it's been really helpful; I've been checking 
    off items from that list too.</p>

  <p class="text-2xl">Here's what I've learned so far:</p>

  <p>I did an extensive read of the 
    <a href="https://www.w3.org/TR/wai-aria-1.2/" target="_blank" rel="noopener noreferrer">
      Accessible Rich Internet Applications (WAI-ARIA) 1.2
    </a> 
    document. Here are some parts I found interesting (and that are also covered in the WAS BoK):
  </p>

  <h3>The Roles Model</h3>
  <p>The Roles Model section defines roles, their characteristics, and properties. Here are some of the key topics 
    covered:</p>
  <ul>
    <li>Relationships Between Concepts: covers Superclass Roles, Subclass Roles, Related Concepts, and Base Concepts</li>
    <li>The characteristics of roles</li>
    <li>The categorization of roles—there are six role categories:
      <ul>
        <li>Abstract Roles</li>
        <li>Widget Roles</li>
        <li>Document Structure Roles</li>
        <li>Landmark Roles</li>
        <li>Live Region Roles</li>
        <li>Window Roles</li>
      </ul>
    </li>
    <li>Role Definitions</li>
  </ul>

  <h3>Supported States and Properties</h3>
  <p>This section explains ARIA attributes:</p>
  <ul>
    <li>The difference between <strong>ARIA states</strong> and <strong>ARIA properties</strong></li>
    <li>The characteristics of states and properties, which help you understand the rules for using each ARIA attribute properly</li>
    <li>The common value types</li>
    <li>Translatable States and Properties for internationalization (i18n):
      <ul>
        <li>aria-label</li>
        <li>aria-placeholder</li>
        <li>aria-roledescription</li>
        <li>aria-valuetext</li>
      </ul>
    </li>
    <li>Global States and Properties</li>
    <li>The categorization of states and properties:
      <ul>
        <li>Widget Attributes</li>
        <li>Live Region Attributes</li>
        <li>Drag-and-Drop Attributes</li>
        <li>Relationship Attributes</li>
      </ul>
    </li>
  </ul>
  <h3>Accessibility Tree</h3>
  <p>The Accessibility Tree is built for assistive technologies and contains important accessible information, it doesn't 
    include everything from the DOM. It removes irrelevant elements and adds properties like roles, names, and states.
    In short, the Accessibility Tree includes only elements that matter for accessibility, unlike the DOM, which contains 
    all elements (including layout-only content).</p>

  <p>I also learned a bunch of other interesting things, like the ARIA requirements for user agents (browsers) and host 
    languages (like HTML and SVG), and how they should handle conflicts caused by authors.</p>

  <p>I'm currently studying the Authoring Practices Guide (APG), which is organized into two main sections: Patterns and 
    Practices. I'll share my update on that soon!</p>
</div>
