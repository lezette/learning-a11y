---
title: "Journey to WAS update, Thursday, March 13 2025"
description: "My journey to WAS update March 13 2025"
tags: ["journal", "tutorial"]
permalink: "tutorial/{{ title | slug }}/"
date: "2025-03-13"
layout: "blog-layout"
---

<div class="blog">

  <h3>So, Yayy, I completed the Operable principle, finally.</h3>

  <p>It honestly took me a bit longer than I'd hoped, mostly because I was dealing with a
    <a href="https://migrainetrust.org/understand-migraine/types-of-migraine/migraine-with-aura/" target="_blank"
      rel="noopener noreferrer">migraine with aura</a>.
  </p>

  <div class="note">
    Did you know women experience migraines more frequently than men? Studies consistently show that migraines affect
    women approximately 2-3 times more often than men.
  </div>

  <div class="note-no-prefix">Statistically, approximately 18% of women worldwide experience migraines compared to about
    6% of men.</div>

  <p>The Operable principle ensures that users can operate your component without blockers, regardless of how they use
    it. So someone using a keyboard, screen reader, switch controls, or any other assistive technology can visit your
    platform and perform any action without being restricted.</p>

  <p>Guidelines 2.4 Navigable and 2.5 Input Modalities have some new success criteria introduced in WCAG 2.2. I found
    them interesting because I've already been implementing some of them, for example, focus appearance. I'll discuss
    them further in an upcoming deep-dive article dedicated specifically to the Operable principle.</p>

  <p>I'll be conducting an audit for an actual client soon, and I'm excited about that. The previous audits I've done
    were just me visiting random sites (including ones I've worked on) and performing audits on them.
  </p>

  <p>I have also been watching some videos about how different people approach accessibility audits. It's been really
    insightful and interesting. I've seen people ask what the best tool for automated testing is, and honestly, in my
    opinion, I don't think there's a single best tool out there. You experiment with different tools and find what works
    best for you. If you're just starting out, you can check out Google Lighthouse; it's built into the Chrome browser.
    I sometimes use WAVE or Arc Toolkit. Don't you worry your busy head; I'll definitely be sharing my process and tips
    for conducting accessibility audits in a future article.</p>

  <p>Also, I visited a big-name brand recently, and I've been feeling lazy about using a trackpad, so I
    was navigating with my keyboard. I was quite shocked by how inaccessible the site was. The keyboard focus order was
    jumping, and I was tabbing through hidden content. Then, they had accessibility overlays on the site that I couldn't
    even open. Do not use accessibility overlays or widgets. Here's a list of reasons why:
  </p>
  <ul>
    <li>They typically can't achieve full compliance, so primarily relying on them tends to leave significant barriers
      unaddressed. For example, a widget may include text-resize controls without addressing layout responsiveness, so
      if a website isn't fully responsive, using the text-resize control might cause layout breakage.</li>
    <li>They rarely address fundamental accessibility issues. For example, a widget might auto-generate alt text for
      images based on filenames or AI guessing, which can be inaccurate or meaningless.</li>
    <li>Some overlays might interfere with screen readers or other assistive technologies, making experiences worse
      rather than better for people with disabilities.</li>
    <li>Users are forced to adapt to the widget rather than a genuinely accessible, user-centered design.</li>
  </ul>
  <p>If you're considering using them, please treat them as temporary tools alongside more substantial and ongoing
    accessibility improvements.</p>

  <p>Thanks for reading, have a nice day!</p>
</div>
