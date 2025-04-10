---
title: "Aria 1.2"
description: "An overview of WAI-ARIA"
tags: ["was", "aria", "journal"]
permalink: "was/{{ title | slug }}/"
date: "2025-04-08"
layout: "blog-layout"
---

<div class="blog">
  <p>Now that I'm done with ATAG, the next focus in the WAS Body of Knowledge (BoK) is ARIA (Accessible Rich Internet
    Applications). Progress has been a
    bit slow lately — things have gotten busier on my end, WAI-ARIA and to be honest, the WAI-ARIA documents can be
    pretty overwhelming. I also struggled with how to approach the study, So, I asked ChatGPT for help in creating a
    structured checklist to guide my ARIA study, and here's what it came up with:
  </p>

  <h3>WAI-ARIA Study Checklist for WAS</h3>
  <h4>1. ARIA Basics</h4>
  <ul>
    <li>Understand the purpose of WAI-ARIA and when to use it.</li>
    <li>Know the difference between roles, states, and properties.</li>
    <li>Learn the 5 rules of ARIA (“First Rule of ARIA: Don't use ARIA”).</li>
  </ul>
  <h4>2. ARIA Roles</h4>
  <ul>
    <li>Landmark Roles
      <ul>
        <li>banner</li>
        <li>navigation</li>
        <li>main</li>
        <li>complementary</li>
        <li>contentinfo</li>
        <li>search</li>
        <li>Understand how landmarks help screen reader navigation.</li>
      </ul>
    </li>
    <li>Widget Roles
      <ul>
        <li>button, checkbox, radio, tab, tabpanel</li>
        <li>dialog, tooltip, menu, menuitem, slider, switch, etc.</li>
        <li>Learn expected keyboard interactions for each role.</li>
      </ul>
    </li>
    <li>Document Structure Roles
      <ul>
        <li>heading, list, listitem, region, article, separator</li>
      </ul>
    </li>
    <li>Live Region Roles
      <ul>
        <li>alert, status, log, timer, marquee</li>
        <li>Understand when and how these roles notify users of changes.</li>
      </ul>
    </li>
  </ul>
  <h4>3. ARIA States and Properties</h4>
  <ul>
    <li>aria-label vs aria-labelledby vs aria-describedby</li>
    <li>aria-expanded, aria-pressed, aria-checked</li>
    <li>aria-hidden and its impact on visibility in the accessibility tree</li>
    <li>aria-live, aria-atomic, aria-relevant</li>
    <li>aria-controls, aria-owns, aria-activedescendant</li>
    <li>Which roles require which properties (refer to ARIA spec tables)</li>
  </ul>
  <h4>4. ARIA Authoring Practices</h4>
  <ul>
    <li>Review ARIA design patterns from the WAI-ARIA Authoring Practices Guide</li>
    <li>Understand complete keyboard interaction models for:
      <ul>
        <li>Tabs</li>
        <li>Modal Dialogs</li>
        <li>Accordions</li>
        <li>Menus</li>
        <li>Sliders</li>
        <li>Disclosure Widgets</li>
      </ul>
    </li>
  </ul>
  <h4>5. ARIA & Native HTML</h4>
  <ul>
    <li>Know which native HTML elements already have implicit roles</li>
    <li>Know when ARIA is redundant or harmful</li>
    <li>Examples of incorrect ARIA use (e.g., role="button" on a non-focusable div)</li>
  </ul>
  <h4>6. Testing & Debugging</h4>
  <ul>
    <li>Use browser dev tools (like Chrome or Firefox Accessibility pane) to inspect ARIA roles/states</li>
    <li>Practice checking the accessibility tree</li>
    <li>Know how screen readers behave with various ARIA roles/states</li>
    <li>Identify common ARIA failures during accessibility audits</li>
  </ul>
  <h4>7. Bonus Review</h4>
  <ul>
    <li>Understand the ARIA 1.1 spec vs 1.2 draft differences (optional)</li>
    <li>Check IAAP BoK references to ARIA patterns and roles</li>
    <li>Use ARIA examples in your own code for practice</li>
  </ul>

  <p>This checklist feels like a solid starting point, and I'll be using it to organize my learning. I'll also be
    referencing the official WAI-ARIA documentation as I go. As always, I'll keep updating this blog with my progress.
  </p>

  <p class="note">While I use AI to support my studies, I don't rely on it as a primary resource. I use it to
    help me better understand the official resources I'm already using; mainly W3C documentation (for now). For example,
    when I come across something I find difficult to grasp, I ask AI (ChatGPT) to explain it or help break down parts of
    the WAS Body of Knowledge outline. I wouldn't recommend using AI as your main source of study, because it can
    sometimes provide inaccurate information.</p>

  <hr>

  <h3>Understanding Aria</h3>
  <p>I learned that ARIA was created to solve a very specific problem that came with the web becoming more robust and
    dynamic. While we currently have some semantic HTML, like <code>nav</code> to describe navigation, we don't have
    semantic tags for other roles like <code>tab</code>. So, when developers create a tab interface, it's usually made
    with just divs and buttons. Visually, it might look like a tab, but a screen reader user wouldn't know that. Cue
    WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications).</p>


  <p>ARIA solves these issues by providing accessible roles, states, and properties which, when used properly, are meant
    to give assistive technology users full context and information.
  </p>

  <h4>Roles vs States vs Properties</h4>
  <p>Roles, states, and properties are key parts of ARIA:</p>

  <ul>
    <li><strong>Roles</strong> define what an element is or what it does. For example, role="tab" tells assistive
      technologies that the element functions as a tab in a tabbed interface.</li>
    <li><strong>States</strong> describe the current condition or status of an element. For example,
      aria-disabled="true" indicates that the element is currently disabled and cannot be interacted with.</li>
    <li><strong>Properties</strong> provide additional information about the element to help users understand or
      interact with it. For example, aria-label="Close" gives a screen reader user a clear label describing the
      element's purpose.</li>
  </ul>
  <p>In summary, roles tell what something is, states tell what it is doing, and properties provide extra
    information.</p>

  <h3>5 Rules of ARIA</h3>
  <ol>
    <li><strong>Don't use ARIA if you can use native HTML</strong> if a native HTML element or attribute provides the
      necessary semantics and behavior, use it instead of ARIA. This is the most important rule.</li>
    <li><strong>Don't change the native semantic unless you really need to.</strong> In other words: <em>Do not override
        the semantics of native HTML elements unnecessarily with ARIA roles.</em>. Changing native roles can confuse
      assistive technology users.
    </li>
    <li><strong>All interactive ARIA controls must be keyboard accessible</strong> if you use ARIA to make something act
      like a widget (e.g., button, tab, menu), you must add all expected keyboard support manually. Interactive ARIA
      roles like <code>role="button"</code> do not come with keyboard interaction. You need to add it with JavaScript.
    </li>
    <li><strong>Don't use role="presentation" or aria-hidden="true" on focusable elements</strong> If you do this then
      some users will not be able to use the focusable element; Focusable elements must be visible to assistive
      technology. Also setting <code>display:none</code> or <code>visibility: hidden</code> on an interactive element
      makes it unfocusable, it is also removed from the accessibility tree, so you do not need to add
      <code>aria-hidden="true"</code> or <code>tabindex="-1"</code>
    </li>
    <li><strong>All interactive elements must have an accessible name</strong> All interactive components must expose
      their name (label), role (what it is), state (for example, checked, expanded), and properties (for example, value)
      programmatically to assistive technologies.</li>
  </ol>

  <h3>Conclusions</h3>
  <p>So far, I've learned that ARIA is a powerful tool for making web applications more accessible, but it should be
    used judiciously. The best practice is to use native HTML elements and attributes whenever possible, and only use
    ARIA when necessary to enhance accessibility. I also learned that ARIA is not a replacement for semantic HTML; it's
    meant to complement it.</p>

  <p>I've also learned that ARIA is not a one-size-fits-all solution. Different roles, states, and properties are
    needed for different components, and it's important to understand how they work together to create a seamless
    experience for users using assistive technologies. I also learned that ARIA is not just about adding attributes to
    elements;
    it's about understanding the context in which those elements are used and how they interact with each other.</p>

  <hr />

  <p>ARIA is a topic I've been looking forward to exploring for a while now, and I'm glad I've finally reached that
    point. However, there doesn't seem to be one single, dedicated resource—there are multiple. I started with MDN's
    WAI-ARIA basics (which I've added to the resources section). It explains the problem ARIA was created to solve and
    introduces some foundational concepts.</p>
  <p>Next, I read W3C's Using ARIA document, which focuses on how to properly use ARIA in HTML. I also went through 100
    Days of A11y, and it felt reassuring to see that Amy (the creator of 100 Days of A11y) also had a slow start with
    the ARIA documentation due to its structure (So I'm not alone). Her post also nicely ties in how the Robust
    principle of WCAG connects to ARIA.
  </p>
  <p>And I'll end this post just like she did:</p>

  <q><strong>Do not use ARIA if you don't have to... use semantic HTML first</strong></q>

  <h3>Resources</h3>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics"
        target="_blank" rel="noopener noreferrer">WAI-ARIA basics: MDN</a></li>
    <li><a href="https://www.w3.org/TR/using-aria/" target="_blank" rel="noopener noreferrer">Using ARIA</a></li>
    <li><a href="https://100daysofa11y.com/2018/12/10/day-11-diving-into-aria/" target="_blank"
        rel="noopener noreferrer">Day 11: Diving into ARIA (100 days of a11y)</a></li>
  </ul>
</div>