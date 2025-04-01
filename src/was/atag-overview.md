---
title: "Authoring Tool Accessibility Guidelines Overview"
description: "An overview of w3c authoring tool accessibility guidelines"
tags: ["was", "atag", "tutorial"]
permalink: "was/{{ title | slug }}/"
date: "2025-04-01"
layout: "blog-layout"
---

<div class="blog">

  <p>The Authoring Tool Accessibility Guidelines (ATAG) is a W3C standard that provides guidelines for authoring tool
    (tools used in creating web content like website builders, CMSs, blog editors, and code editors) to be more
    accessible. It is divided into two parts:</p>
  <ul>
    <li>Part A: Make the tool itself accessible to authors with disabilities.</li>
    <li>Part B: Help authors create accessible content.</li>
  </ul>

  <p>ATAG aligns with the Web Content Accessibility Guidelines (WCAG) 2.0 so that tools support WCAG based accessible
    content.</p>

  <p>I only recently discovered ATAG was a thing. Before that, I was always mildly curious about accessibility (A11y)
    standards for authoring tools, though I just assumed web-based tools (like WordPress and Canva) followed WCAG
    because why wouldn't they? But I was even more curious about non-web tools (like VS Code) and how they manage
    accessibility. Turns out, there's actually a standard. Who knew? (Well, now I do.)</p>

  <h3>Examples of Authoring Tools</h3>
  <p>If an application lets people create, edit, or publish web content (like webpages, articles, web forms, videos,
    online courses, or even code that runs on the web), it counts as an authoring tool. And yep, that means it should
    follow ATAG.</p>

  <p class="font-bold">Some popular examples of authoring tools include:</p>
  <ul>
    <li><strong>Content Management Systems (CMS)</strong>: WordPress, Drupal, Joomla, Wix, Squarespace, Ghost, Webflow
    </li>
    <li><strong>Website Builders & Page Editors</strong>: Elementor, Divi, Gutenberg, Dreamweaver, Google Sites.</li>
    <li><strong>Rich Text / WYSIWYG Editors</strong>: CKEditor, TinyMCE, Quill, Froala, ProseMirror</li>
    <li><strong>Learning & eLearning Platforms</strong>: Canvas LMS, Blackboard</li>
    <li><strong>Form Builders</strong>: Google Forms, Typeform, Jotform</li>
    <li><strong>eCommerce Platforms (with content creation)</strong>: Shopify, Magento, WooCommerce</li>
    <li><strong>Blogging & Publishing Platforms</strong>: Medium, Dev.to, Hashnode, Substack</li>
    <li><strong>Graphic & Media Tools (with web outputs)</strong>: Canva, Figma, Adobe Express</li>
    <li><strong>Social/Marketing Tools with Editors</strong>: Mailchimp, HubSpot</li>
    <li><strong>Developer Tools with Visual Editors</strong>: VS Code, WebStorm, GitHub Pages editors</li>
  </ul>
  <p>Basically, if it helps you put something on the web, ATAG probably applies!</p>

  <h3>ATAG 2.0 Layers</h3>
  <p>ATAG is organized into:</p>
  <ul>
    <li>
      <strong>Parts</strong> (A and B).
    </li>
    <li><strong>Principles:</strong> Each part has principles that keep things organized.</li>
    <li><strong>Guidelines:</strong> Principles break down into guidelines, which are helpful (but not directly
      testable) objectives.
    </li>
    <li><strong>Success Criteria</strong> Guidelines have testable success criteria. The success criteria are used
      for requirements and conformance testing. Each success criterion also contains conformance levels (A, AA, AAA)
    </li>
    <li><strong>Implementing ATAG 2.0 document:</strong> Each success criterion has a helpful "Implementing" section.
      It includes descriptions, intent, relatable examples, and links to additional resources .</li>
  </ul>
  <p>If you're familar with WCAG 2, then you already understand how the principles, guidelines and success criteria is
    layered.</p>

  <p>I have updated my <a
      href="https://docs.google.com/spreadsheets/d/1gs3P-1F4ATPrsx87_16RoQVLZVaIRI5Np2rEhnIL9fM/edit?usp=sharing"
      target="_blank" rel="noopener noreferrer">Google Sheet</a> it now has a list of all the ATAG
    layers.</p>

  <h3>Resources</h3>
  <ul>
    <li>
      <a href="https://www.w3.org/WAI/standards-guidelines/atag/" target="_blank" rel="noopener noreferrer">Authoring
        Tool Accessibility Guidelines (ATAG) Overview
      </a>
    </li>
    <li>
      <a href="https://www.w3.org/TR/ATAG20/#gl_b23" target="_blank" rel="noopener noreferrer">Authoring Tool
        Accessibility Guidelines (ATAG) 2.0</a>
    </li>
    <li><a href="https://www.w3.org/TR/2015/NOTE-IMPLEMENTING-ATAG20-20150924/" target="_blank"
        rel="noopener noreferrer">Implementing ATAG 2.0</a></li>
  </ul>
</div>