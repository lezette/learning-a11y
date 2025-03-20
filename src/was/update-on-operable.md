---
title: "Journey to WAS update, Monday March 10 2025"
description: "My journey to WAS update March 10th 2025"
tags: ["journal", "was"]
permalink: "was/{{ title | slug }}/"
date: "2025-03-10"
layout: "blog-layout"
---

<div class="blog">

  <h3>My Journey to WAS update</h3>

  <p>So, Last Thursday, I published a <a href="/was/a-deep-dive-on-the-perceivable-principle/">deep dive on the
      Perceivable
      principle</a>, covering all its guidelines, success criteria, and tips on testing if a webpage is perceivable.
  </p>

  <p>I had so much fun writing that as I was revisiting what I covered already. I found it impressive that I could cover
    all of that.</p>

  <p>While writing that article, I was also doing a deep dive on the Operable principle. I had covered <strong>Keyboard
      Accessible</strong> guideline and before and from last thursday till today (Monday) I have covered</p>

  <ul>
    <li>Enough Time</li>
    <li>Seizures and Physical Reactions</li>
    <li>Navigable (which I covered today)</li>
  </ul>

  <p>Going through Seizures and Physical Reactions was quite emotional for me, it's one of the reasons why A11y is
    important to me</p>

  <p>While studying the Seizures and Physical Reactions guideline I saw this on the <a
      href="https://www.w3.org/WAI/WCAG22/Understanding/seizures-and-physical-reactions.html">WCAG's page</a></p>

  <blockquote>
    In 1997, a cartoon on television in Japan sent over 700 children to the hospital, including about 500 who had
    seizures.
  </blockquote>

  <p><q>Well, I didn't know that!</q> so I decided to read more about the incident, but reading about that sent me down
    a rabbit hole of learning how various events shaped the accessibility laws we have today. So here are some of what I
    spent my weekend reading:</p>

  <h3>Pokemon Shock <span lang="ja">(ポケモンショック, Pokemon Shokku)</span></h3>

  <p>This incident happened on December 16, 1997, in Japan when an episode of Pokémon titled <q>Dennō Senshi
      Porygon</q>.
    During the episode, there was a sequence where Pikachu used an electric attack to destroy missiles in a virtual
    world. This scene contained rapidly flashing red and blue lights at a high frequency (about 12 Hz per second), which
    triggered photosensitive seizures in some viewers. Many children reported dizziness, headaches, nausea, and in more
    severe cases, seizures.
  </p>

  <p>The impact of this led to the hospitalization of <strong>around 685 children</strong>, with about <strong>500
      experiencing epileptic symptoms.</strong></p>

  <p>The Aftermath</p>
  <ul>
    <li>The incident made international news and was heavily covered by Japanese media.</li>
    <li><em>Pokémon</em> was temporarily pulled off the air in Japan for four months while the network investigated.
    </li>
    <li>The episode remains banned.</li>
  </ul>

  <p>As a result, <b>Japan's TV industry adopted new guidelines on animation techniques, particularly avoiding
      high-frequency flashing lights.</b>
  </p>

  <h3>The Capitol Crawl (1990)</h3>

  <p>In March 1990, more than 60 disability rights activists abandoned their wheelchairs and mobility aids to crawl up
    the steps of the U.S. Capitol in Washington, D.C. They were demanding the passage of the Americans with Disabilities
    Act (ADA).</p>

  <p>The protest played a huge role in convincing the US Congress to pass the ADA later that year, which is now one of
    the most important disability rights laws. The ADA led to accessible buildings, ramps, curb cuts, workplace
    accommodations, and digital accessibility regulations.</p>

  <h3>The 9/11 Emergency Response (2001)</h3>

  <p>After the 9/11 attack in the US, many emergency response websites were not accessible to people with disabilities.
    For example, blind users couldn't access text-only alerts, and deaf users couldn't get audio-based warnings.
  </p>
  <p>After this event:</p>
  <ul>
    <li>The U.S. government created new emergency accessibility requirements.</li>
    <li>WCAG emphasized alternative formats for emergency alerts.</li>
    <li>Inspired real-time captioning and ASL integration in disaster communications.</li>
  </ul>
  <h3>The Domino's Pizza Lawsuit (2019)</h3>
  <p>A blind man, Guillermo Robles, sued Domino's Pizza because their website and app were not compatible with screen
    readers, preventing him from ordering food.</p>
  <p>The impact of the Lawsuit</p>
  <ul>
    <li>The U.S. Supreme Court ruled that business websites must be accessible under the ADA.</li>
    <li>Caused many businesses to take web accessibility more seriously.</li>
    <li>There was an increase in lawsuits against companies with inaccessible websites.</li>
  </ul>

  <h3>The Netflix Captioning Lawsuit (2012)</h3>
  <p>The National Association of the Deaf (NAD) sued Netflix for not providing captions on many of its movies and shows.
  </p>
  <p>Impact on Accessibility:</p>
  <ul>
    <li>Netflix was forced to add captions for all content.</li>
    <li>It caused other streaming platforms like Disney+ and Amazon Prime to follow.</li>
    <li>Now, captions and transcripts are a standard feature in online video content.</li>
  </ul>
  <h3>Accessibility in Nigeria</h3>
  <p>Many African countries don't have strong accessibility laws yet. In Nigeria, the <strong>Discrimination Against
      Persons with Disabilities (Prohibition) Act</strong> was only signed into law in 2019, and even then,
    the enforcement is still weak.</p>
  <p>Many public spaces, offices, and even new buildings don't have ramps, elevators, or accessible restrooms. Digital
    accessibility is also barely recognized, in Nigeria with even some traditional bank apps failing WCAG 2.1 Level A
  </p>

  <p>Reading about accessibility in Nigeria was interesting, as someone who lives here (lol). Accessibiilty isn't a big
    topic in Nigeria and when discussed a lot of people/cooperations ignore the importance. To some it's down to
    <q>accessibility is too expensive</q> and to some others it's <q>Well the country is going through a lot already
      accessibility isn't just a priority.</q>
  </p>
  <p>It'll be writing in more about lack of accessibility in Nigeria soon (be on the lookout)</p>

  <p><em>Also, this weekend...</em></p>

  <p>I ran my first test for ARIA-AT <span aria-label="tada">🎉</span></p>

  <p>The W3C Aria-AT project is working on defining clear expectations for how assistive technologies (AT) should
    interpret and convey ARIA semantics. The goal is to ensure consistent behavior across all ATs—so that any time a
    browser or screen reader makes a change, we can verify that accessibility remains intact. I read about the work done
    and joined the community. If you'd like to contribute more you can read more about this on the <a
      href="https://aria-at.w3.org/" target="_blank" rel="noopener noreferrer">Aria-AT website</a>
  </p>
  <p>It's been an interesting couple of days!</p>

  <p>I have one more guideline to cover under the <strong>Operable</strong> principle and then I'll do a deep dive. See
    you then</p>
</div>