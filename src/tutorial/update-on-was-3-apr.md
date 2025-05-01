---
title: "Using Voice Control on IOS"
description: "April 03, 2025, using Voice control"
tags: ["journal", "tutorial", "assistve-tech"]
permalink: "tutorial/{{ title | slug }}/"
date: "2025-04-03"
layout: "blog-layout"
---

<div class="blog">

  <p>Today, I gave Voice Control on iOS a try.</p>

  <p>After learning more on the WCAG principles, I've been trying to apply the principles in real life. One way I do
    this is by writing more intentional, accessible code. I've also been practicing keyboard navigation
    and using VoiceOver on my MacBook more often. VoiceOver is still a bit tricky for me the constant system voice can
    be overwhelming, but I'm slowly getting used to it.
  </p>
  <p>Today, I decided to try something new: Apple's Voice Control. It's a speech input tool designed to help people with
    motor impairments control their device using their voice. It was surprisingly easy to use aside from the fact that I
    had to repeat myself sometimes</p>

  <p>One interesting thing I noticed is how <strong>WCAG 2.5.3: Label in Name</strong> really shows up here. When using
    Voice Control, users should be able to say something like <strong>“Tap Search”</strong> and it works just like that.
    This only works well if the visible label and accessible name match.</p>

  <p>For example:</p>

  <ul>
    <li>A button that says “Search” should have the accessible name “Search”.</li>
    <li>A multi-word label like "Search App" should also respond to “Tap Search if that's how users naturally
      refer to it.</li>
    <li>If the button is just an icon (like a magnifying glass used for search), the accessible name still needs to be
      “Search” so the voice command works as expected.</li>
  </ul>

  <p>This made me realize how important it is to name things properly, in this case, for speech input users.</p>

  <p>I found Voice Control on iOS easier to use than VoiceOver on iOS, but both gave me a better understanding of how
    different assistive tools work.</p>

  <p class="note">Voice Control isn't one of the assistive technologies listed in the IAAP Body of Knowledge for
    WAS certification, but I think it's worth exploring. Understanding how it works helps us design and build with
    more users in mind.</p>

  <h3>How to use Voice Control on iOS</h3>

  <ol>
    <li>Open the Settings app.</li>
    <li>Go to Accessibility > Voice Control.</li>
    <li>Toggle Voice Control on.</li>
  </ol>

  <p>You can also start with the built-in tutorial—it does a great job explaining the basics and most common commands.
    <br /> <br /> Here are some Voice Control commands you might use:
  </p>

  <ul>
    <li>"Show Numbers" - Adds numbered labels to every interactive element on the screen.</li>
    <li>"Tap [label]" - Activates an element by name, like "Tap Search".</li>
    <li>"Stop Listening" / "Start Listening" - Pauses or resumes voice control.</li>
    <li>Stop/Start listening - will toggle listening</li>
    <li>"Scroll Up" / "Scroll Down"</li>
    <li>"Swipe Up/Down/Right/Left"</li>
    <li>"Two Fingers Swipe Up/Down/Left/Right" - For multi-touch gestures.t</li>
  </ul>

  <hr />

  <h3>Resources</h3>
  <ul>
    <li><a href="https://support.apple.com/en-gb/guide/iphone/iph2c21a3c88/ios" target="_blank"
        rel="noopener noreferrer">Use Voice Control commands to interact with iPhone</a></li>
    <li><a href="https://support.apple.com/en-us/102225" target="_blank" rel="noopener noreferrer">Use Voice Control on
        your Mac</a></li>
    <li><a href="https://www.w3.org/WAI/WCAG22/quickref/#label-in-name" target="_blank" rel="noopener noreferrer">WCAG
        2.5.3: Label in Name</a></li>

  </ul>

</div>
