---
title: "Domain 1.5 – Authoring Tool Accessibility Guidelines (ATAG 2.0)"
description: "WAS Log 02"
date: "2025-05-02"
tags: ["was", "journal"]
permalink: "was/{{ title | slug }}/"
layout: "blog-layout"
---

<div class="blog">
  <p>I read this part of the BoK earlier in my study prep and I'm just now writing out the notes. ATAG is one of those
    guidelines that gets mentioned but not really explained, so I wanted to jot down what I understood from it.
  </p>

  ### Here's what I learned

  #### What ATAG Is

  <p>ATAG stands for <strong>Authoring Tool Accessibility Guidelines</strong>, and i's for people who make authoring
    tools, like content management systems (CMSs), WYSIWYG editors, site builders, etc. Basically, anything that helps
    people create content for the web. It's not for web developers <em>using</em> the tools, it's for the people
    <em>making</em> the tools.
  </p>

  #### ATAG Has Two Parts
  <p>ATAG is divided into two main goals:</p>

  <ol>
    <li><strong>Part A: Make the tool itself accessible</strong>
      Example: If a tool has a button bar or modal editor, that UI should be keyboard accessible and usable with a
      screen reader.</li>
    <li><strong>Part B: Help the user create accessible content</strong>
      Example: The tool should guide users to write good alt text, use proper heading levels, or validate color
      contrast.
    </li>
  </ol>
  So a tool can be “accessible” in terms of its UI but still be terrible if it doesn't support creating accessible
  content. Both parts matter.

  #### Examples That Helped Me
  - A <strong>CMS like WordPress</strong>: The dashboard should be accessible (Part A), and the editor should encourage
  you to add headings, image alt text, etc. (Part B).
  - A <strong>PDF generator</strong>: The tool should support tagging PDFs properly and give users prompts or guidance
  during export.

  ### What I Noticed While Studying

  - ATAG isn't as detailed or structured as WCAG, which kind of was took some getting used to coming from WCAG.
  - ATAG references WCAG guidelines a lot
  - Some of the wording overlaps with WCAG, especially in Part B, that's because Part B tries to push for accessible
  output that *meets WCAG*.

  ### What I Found Helpful
  - The <a href="hhttps://www.w3.org/TR/IMPLEMENTING-ATAG20/" target="_blank" rel="noopener noreferrer">Implementing
    ATAG 2.0</a>, especially the breakdown of Part A and Part B
  - Looking at familiar tools (like Notion, Google Docs, and WordPress) and comparing them with the guidelines

  ## 🧠 What I'm Still Checking out
  - How to recognize when a tool supports Part B or not (especially when it's subtle)
</div>