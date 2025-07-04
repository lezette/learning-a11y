---
title: 'What Is EN 301 549 and How Does It Relate to WCAG?'
description: 'Take a deep dive into EN 301 549'
tags: ['en301549', 'tutorial']
permalink: 'tutorial/{{ title | slug }}/'
date: '2025-07-03'
layout: 'blog-layout'
---

<div class="blog">
  <h3>Introduction</h3>
  <p>If you're already familiar with WCAG, you'd be impressed to know that it's being integrated into laws in the EU.
    WCAG on
    its own is a set of guidelines, you're generally not legally required to follow them. But the EU took it a step
    further
    by releasing EN 301 549, which is an accessibility standard.</p>
  <p>So, what is this standard?</p>
  <p><strong>EN 301 549</strong> is the European standard for accessibility of ICT (Information and Communication
    Technology). Unlike WCAG, it doesn't just apply to websites, it covers everything from mobile apps to hardware,
    software, documentation, and even customer support. It includes WCAG, yes, but it also goes beyond it.</p>

  <p>This post will walk you through:</p>
  <ul>
    <li>What EN 301 549 is and why it exists</li>
    <li>What kinds of technologies it applies to</li>
    <li>How it incorporates WCAG 2.1 (and where WCAG fits inside it)</li>
    <li>What it covers that WCAG doesn't, like authoring tools, documentation, and hardware</li>
    <li>Why accessibility practitioners should care</li>
  </ul>

  <h3>Prerequisite</h3>
  <p>Before diving into EN 301 549, it's helpful to have a basic understanding of WCAG (Web Content Accessibility
    Guidelines). If you're not familiar with WCAG, I recommend checking out my previous post on <a
      href="/tutorial/understanding-wcag">Understanding WCAG</a>.</p>

  <p>So, let's get into it.</p>

  <h3>Who Is EN 301 549 For?</h3>
  <p>EN 301 549 is primarily aimed at public and private sector organizations in the European Union, but its relevance
    extends way beyond Europe.</p>
  <p>Here's who should care:</p>
  <ul>
    <li><strong>Accessibility practitioners and auditors</strong>, especially if you're working with clients in Europe
      or even prepping for the WAS exam</li>
    <li><strong>Developers and designers</strong> building ICT products that may be sold, used, or regulated in the EU
    </li>
    <li><strong>Policy and compliance teams</strong> who need to ensure their org meets legal accessibility obligations
      under the EU Web Accessibility Directive or the European Accessibility Act</li>
    <li><strong>Procurement teams</strong> evaluating tech tools or services based on accessibility standards</li>
    <li><strong>Educators and trainers</strong> teaching accessibility best practices or creating courseware/tools</li>
  </ul>
  <p>And if you're a solo dev, freelancer, or startup building products that might one day scale globally, understanding
    EN 301 549 helps you bake in accessibility from the start, not scramble to fix it under legal pressure.</p>

  <h3>What Technologies Does EN 301 549 Apply To?</h3>
  <p>Unlike WCAG, which is focused strictly on web content, EN 301 549 has a much wider scope. It applies to pretty much
    any ICT product or service used in the EU, whether it's for the public or private sector.</p>

  <h4>So what falls under that umbrella?</h4>
  <p>Here are some examples of technologies EN 301 549 covers:</p>
  <ul>
    <li>Websites and web apps</li>
    <li>Mobile apps (iOS, Android, etc.)</li>
    <li>Desktop software (productivity tools, design software, anything you install)</li>
    <li>Operating systems</li>
    <li>Hardware devices, including ATMs, POS (point-of-sale) terminals, ticket machines, and self-service kiosks</li>
    <li>Digital documents such as PDFs, Word docs, and EPUBs</li>
    <li>Telecommunication services like video relay or text-based emergency services</li>
    <li>Multimedia audio/video content, live streaming, captions, audio descriptions</li>
    <li>Documentation and support services, including help centers, customer service chat, or phone support</li>
  </ul>

  <h4>EN 301 549 Approach</h4>
  <p>One of the most important things to know about EN 301 549 is that it doesn't assume every product or service needs
    to meet every requirement. It uses what's called a <strong>feature-based</strong> or <strong>self-scoping</strong>
    approach.</p>
  <p>Each requirement usually starts with a condition like:</p>
  <blockquote>“Where ICT displays video with synchronized audio…”
    <br /> “Where the software includes user authentication…”
  </blockquote>
  <p>So if your product doesn't have that feature (for example, it doesn't play video at all), then that particular
    requirement doesn't apply. But if the condition is met, then you're expected to meet the requirement, and it will be
    tested during an audit.</p>
  <p>This makes EN 301 549 flexible and adaptable to different types of technologies, while still ensuring that
    accessibility is built in where it matters.</p>

  <h3>Understanding the Normative Sections in EN 301 549</h3>
  <p>EN 301 549 is divided into multiple clauses and annexes, but not all of them are required for conformance.
    <strong>normative</strong> (must be followed) and others are <strong>informative</strong> (nice to know, but not
    binding).
  </p>
  <p>If you're reading the spec for the first time, you might get overwhelmed if you don't know the difference, so let's
    break it down.</p>

  <h4>Key Normative Clauses You Should Know</h4>
  <p>These are the core sections you must follow if they apply to your ICT:</p>
  <ul>
    <li><strong>Clause 4: Functional Performance Statements</strong>
      <p>This clause doesn't include testable requirements, but it's the heart of the standard. It outlines the user
        needs that Clauses 5-13 aim to meet, focusing on how people with disabilities access and operate ICT.
        Understanding it helps explain the <em>why</em> behind the technical requirements. (Bonus: Annex B maps those
        requirements back to these user needs.)</p>
    </li>
    <li><strong>Clause 5: Generic Requirements</strong>
      <p>This clause covers requirements broadly applicable to all ICT products and services, regardless of the specific
        technology. Key areas include:</p>
      <ul>
        <li>Closed Functionality</li>
        <li>Activation of Accessibility Features</li>
        <li>Biometrics</li>
        <li>Preservation of Accessibility Information during Conversions</li>
        <li>Operable Parts</li>
        <li>Locking or Toggle Controls</li>
        <li>Key Repeat</li>
        <li>Double-Strike Key Acceptance</li>
        <li>Simultaneous User Actions</li>
      </ul>
    </li>
    <li><strong>Clause 6: ICT with Two-Way Voice Communication</strong>
      <p>This clause outlines requirements for ICT that enables two or more persons to communicate using their voices.
        Key requirements include:
      </p>
      <ul>
        <li>Audio Bandwidth for Speech</li>
        <li>Real-Time Text (RTT) Functionality</li>
        <li>Caller Identification</li>
        <li>Alternatives to Voice-Based Services</li>
        <li>Video Communication</li>
        <li>Speaker identification with video (sign language) communication</li>
        <li>Alternatives to Video-Based Services</li>
      </ul>
    </li>
    <li><strong>Clause 7: ICT with Video Capabilities</strong>
      <p>This clause focuses on accessibility aspects of video content within ICT solutions. It covers:</p>
      <ul>
        <li>Caption Processing Technology</li>
        <li>Audio Description Technology</li>
        <li>User Controls for Captions and Audio Description</li>
      </ul>
    </li>
    <li><strong>Clause 8: Hardware</strong>
      <p>This clause addresses both the physical components of ICT and how users physically access and interact with
        them. Key areas include:</p>
      <ul>
        <li>General Requirements</li>
        <li>Hardware Products with Speech Output</li>
        <li>Stationary ICT</li>
        <li>Mechanically Operable Parts</li>
        <li>Tactile Indication of Speech Mode</li>
      </ul>
    </li>
    <li>Clause 9: Web
      <p>This chapter primarily refers to the <strong>Web Content Accessibility Guidelines (WCAG)</strong> 2.1 Level AA.
        It covers the four principles of accessibility:
      </p>
      <ul>
        <li>Perceivable</li>
        <li>Operable</li>
        <li>Understandable</li>
        <li>Robust</li>
        <li>WCAG 2.1 AAA Success Criteria</li>
        <li>WCAG Conformance Requirements</li>
      </ul>
    </li>
    <li><strong>Clause 10: Non-Web Documents</strong>
      <p>This clause applies to digital documents that are not web pages, not embedded in web pages, or documents
        provided via web pages but not rendered with them (e.g., downloadable documents, user manuals, newsletters) It
        largely uses WCAG 2.1 success criteria, with specific adaptations for non-web documents. Some WCAG criteria are
        not applicable, resulting in "empty clauses". It also includes unique requirements for:</p>
      <ul>
        <li>Caption Positioning</li>
        <li>Audio Description Timing</li>
      </ul>
    </li>
    <li><strong>Clause 11: Software</strong>
      <p>This clause addresses requirements for platform software, software with a user interface (including its
        content),
        authoring tools, and mobile applications. It also bases many requirements on WCAG 2.1, with tables explaining
        their application in a non-web context. It also include:</p>
      <ul>
        <li>Interoperability with Assistive Technology</li>
        <li>Documented Accessibility Usage</li>
        <li>User Preferences</li>
        <li>Authoring Tools</li>
      </ul>
    </li>
    <li><strong>Clause 12: Documentation and Support Services</strong>
      <p>This clause ensures that information and assistance provided with ICT are accessible. It covers:</p>
      <ul>
        <li>Product Documentation</li>
        <li>Support Services</li>
      </ul>
    </li>
    <li><strong>Clause 13: ICT Providing Relay or Emergency Service Access</strong>
      <p>This clause addresses services that facilitate communication for individuals with varying abilities. It
        includes:</p>
      <ul>
        <li>Relay Services Requirements</li>
        <li>Access to Relay Services</li>
        <li>Access to Emergency Services</li>
      </ul>
    </li>
    <li>Annex C: Determination of Conformance
      <p>Annex C is a normative annex that outlines the means necessary to determine conformance with individual
        requirements through specific procedures for testing or inspection</p>
    </li>
  </ul>

  <h3>How EN 301 549 Relates to WCAG</h3>
  <p>One of the most important things to know about EN 301 549 is that it includes WCAG 2.1 Level AA as a normative
    requirement, but only as part of the bigger picture.</p>
  <p>As listed already, WCAG shows up in:</p>
  <ul>
    <li>Clause 9: Web Content - conformance to WCAG 2.1 Level AA for all web content.</li>
    <li>Clause 10: Non-Web Documents - if your digital document is meant to be consumed electronically, it should follow
      WCAG.</li>
    <li>Clause 11: Software - if your software has a user interface, it should follow WCAG.</li>
  </ul>
  <h4>So… If I Follow WCAG, Am I Covered?</h4>
  <p><strong>Not completely.</strong></p>
  <p>Conforming to WCAG 2.1 AA means you've met a subset of EN 301 549, but not the whole standard. WCAG only covers
    content, not:</p>
  <ul>
    <li>Hardware</li>
    <li>Support services</li>
    <li>Authoring tools</li>
    <li>Voice communication</li>
    <li>Functional performance</li>
    <li>Documentation</li>
  </ul>
  <p>To fully conform to EN 301 549, you have to look beyond WCAG and cover all applicable clauses (depending on your
    ICT type).</p>

  <h3>Understanding EN 301 549 Annexes</h3>
  <p>The EN 301 549 standard includes several annexes that provide additional important information and guidance. Here's
    a brief overview of Annexes A through E:</p>

  <h4>Annex A: Relationship between the present document and the essential requirements of Directive 2016/2102</h4>
  <p>This annex describes how the EN 301 549 standard relates to the European Web Accessibility Directive (Directive
    2016/2102). It provides tables that list the specific requirements from the standard that are relevant for
    fulfilling this Directive</p>
  <p>It is an informative annex. Annex A.1 focuses on web content, including web pages, downloadable documents, and
    software embedded in web pages, while Annex A.2 covers mobile applications. It also notes that certain requirements,
    such as those for live time-based media (e.g., live captions), are not relevant for the Web Accessibility Directive
  </p>

  <h4>Annex B: Relationship between requirements and functional performance statements</h4>
  <p>This annex contains a table that maps the technical requirements (from clauses 5 to 13) to the functional
    performance statements defined in Chapter 4. It helps you understand the impact that a specific accessibility
    issue might have on different user groups.</p>
  <p>The table uses abbreviations like <strong>"P" for a Primary relationship</strong> (the requirement directly
    supports the functional performance statement) and <strong>"S" for a Secondary relationship</strong> (partial
    support for some users in specific situations). This is a key instrument for making assessments, especially in
    procurement, by showing for whom each requirement is important.
  </p>
  <p>Like Annex A, Annex B is informative</p>

  <h4>Annex C: Determination of conformance</h4>
  <p>This annex is normative. It describes a test procedure for each requirement, detailing preconditions, procedures,
    and expected results (Pass, Fail, Not Applicable, or Not Testable)</p>
  <p>It's important to note that Annex C does not provide a detailed testing methodology itself; actual testing
    requires significant skills and experience, which necessites involvement of experts.</p>

  <h4>Annex D: Further resources for cognitive accessibility</h4>
  <p>This annex is informative and points to additional resources related to improving accessibility for users with
    limited cognitive, language, and learning abilities. It acknowledges that research in this area is ongoing and
    refers to the W3C Web Accessibility Initiative (WAI) for relevant standardization work</p>

  <h4>Annex E: Guidance for users of the present document</h4>
  <p>This annex is also informative and serves as an explanatory guide for users of the standard. It provides an
    overview and simple explanation of the structure of the EN 301 549 document, including how to effectively
    use it.</p>
  <p>It highlights the importance of Chapter 4 (Functional Performance Statements) as the "heart of the standard"
    because it explains the user needs that the accessibility requirements aim to solve. It also discusses the concept
    of "self-scoping" requirements, where applicability depends on specific preconditions.</p>

  <p>While these annexes may not get as much attention as the Clauses, they're critical for practitioners who want to:
  </p>
  <ul>
    <li>Scope accessibility work correctly</li>
    <li>Understand the user impact</li>
    <li>Perform or prepare for formal conformance testing</li>
  </ul>

  <h3>Why EN 301 549 Matters for Accessibility Practitioners</h3>
  <p>If you work in accessibility, especially in or around Europe, EN 301 549 isn't just “nice to know”, it's essential.
  </p>
  <h4>It's Part of the Legal Framework</h4>
  <p>EN 301 549 underpins major EU accessibility laws:</p>
  <ul>
    <li>The EU Web Accessibility Directive applies to public sector websites and mobile apps</li>
    <li>The European Accessibility Act (EAA) expands to the private sector, including e-commerce, banking, e-books, and
      more (enforceable from 2025)</li>
  </ul>
  <p>Both laws reference EN 301 549 as the standard to meet. That means your designs, products, and audits need to align
    with it if you're serving European users or institutions.</p>

  <h4>It Supports Better Audits, Design, and Procurement</h4>
  <p>Understanding EN 301 549 helps you:</p>
  <ul>
    <li>Scope accessibility audits beyond just websites</li>
    <li>Create accessible products across platforms not just for the web</li>
    <li>Evaluate tools or vendors during procurement using standardized criteria</li>
  </ul>
  <p>You'll be building systems that work for everyone, across the full range of tech experiences.</p>

  <h4>It's Useful Beyond Europe</h4>
  <p>Even outside the EU, EN 301 549 can give your work a major edge:</p>
  <ul>
    <li>It helps you future-proof your product for international markets</li>
    <li>It aligns closely with Section 508 (US) and WCAG</li>
    <li>It deepens your understanding of accessibility as a system-wide concern, not just a checklist for web content
    </li>
  </ul>

  <h3>Conclusion</h3>
  <p>EN 301 549 is more than just a European accessibility standard, it brings accessibility into every layer of the
    user experience.</p>
  <p>It goes beyond websites, or checklists, and into system-wide accessibility that includes hardware, documents,
    support services, and even emergency service access.</p>
  <p>If you're prepping for the WAS exam, building a global product, or shaping policy in your org, EN 301 549
    helps you level up.</p>
  <p>You can read the full spec at <a
      href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf" target="_blank"
      rel="noopener noreferrer">EN 301 549 v3.2.1 (ETSI Official Site)</a></p>
  <p>If you're new to this standard, I hope this guide gave you a clearer picture of what it covers and how to use it.
  </p>

  <hr />
  <h3>Resources</h3>
  <ul>
    <li><a href="https://www.youtube.com/playlist?list=PLfCFZkKjngqrnEaIymHKvsym025w0cOF3" target="_blank"
        rel="noopener noreferrer">Youtube: Introduction to the EN 301 549</a></li>
    <li><a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf"
        target="_blank" rel="noopener noreferrer">EN 301 549 V3.2.1 (2021-03)</a></li>
    <li><a href="https://digital-strategy.ec.europa.eu/en/policies/latest-changes-accessibility-standard"
        target="_blank" rel="noopener noreferrer">Web accessibility standards - latest changes</a></li>
    <li><a href="https://www.deque.com/en-301-549-compliance/" target="_blank" rel="noopener noreferrer">Deque: EN 301
        549: European standard for digital accessibility</a></li>
    <li><a href="https://www.w3.org/WAI/cognitive/" target="_blank" rel="noopener noreferrer">Cognitive Accessibility at
        W3C</a></li>
  </ul>
</div>