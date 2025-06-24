---
title: 'EN 301 549 Clause 5 - Generic Requirements'
description: 'WAS Log 05'
tags: ['was', 'en301549', 'journal']
permalink: 'was/{{ title | slug }}/'
date: '2025-05-24'
layout: 'blog-layout'
---

<div class="blog">
  <h3>Generic Requirements</h3>
  <p>This section coveres:</p>

  <ul>
    <li>Visual access</li>
    <li>Auditory access</li>
    <li>Physical access</li>
    <li>Speech input</li>
    <li>Motor control</li>
    <li>Cognitive processing</li>
    <li>Privacy</li>
  </ul>

  <h4>5.1 Closed Functionality</h4>
  <p>Clause 5.1 talks about what Closed functionality is and how an ICT with closed functionality should ensure
    accessibility. The clause states that an ICT with closed functionality <strong>should not require that users attach
      assistive technologies</strong> to use the system. Personal headsets and personal induction loops are not
    considered assistive technology for the purpose of this clause.</p>

  <p>I especially liked:</p>
  <ul>
    <li>The details in 5.1.3 about non-visual access, the system should not only speak but also allow control, protect
      privacy, and even manage volume accessibly.</li>
    <li>The inclusion of <strong>privacy</strong> as a non-negotiable. WCAG doesn't really say much about it, but
      <strong>EN 301 549</strong> clearly ensures that accessibility doesn't cost people their privacy.
    </li>
    <li>5.1.7 Access without speech: because yes, making a non-verbal person speak to activate a non-speech alternative
      is just... <em>straight to jail behavior.</em></li>
  </ul>

  <hr />

  <p>One important thing to keep in mind is that if you have an ICT with closed functionality you need to consider the
    requirement in other clauses (5.2 - 13) in the standard.</p>

  <hr />

  <h4>5.2 Activation of Accessibility Features</h4>
  <p>This section is the <q>you can't put the ramp inside the locked building</q>.</p>
  <p>In short it's saying: <q>Don't require people to use what they can't use in order to activate what they
      need.</q> and while that sounds obvious, in practice, Some apps require blind people to go through a visual
    settings to toggle voice guidance</p>
  <p>It's could be a real problem. I mean, a websites that requires you to log in to change your accessibility settings,
    OR a system that requires you to use a mouse to turn on keyboard navigation should not be considered accessible.</p>

  <h4>5.3 Biometrics</h4>
  <p>This one is especially relevant now that Face ID or fingerprint-only security are common.</p>

  <p>In summary, it's not saying "Don't use biometrics", it's saying give people choices. If someone can't provide a
    fingerprint, give them a PIN. If someone can't speak clearly for voice ID, let them scan a card.</p>

  <h4>5.4 Preservation of Accessibility Information During Conversion</h4>
  <p>This part is about <strong>respecting the integrity of accessible content</strong>.</p>
  <p>It says that if you convert a document, you have to make sure that the accessibility features stay intact in the
    converted format.</p>
  <p>Accessibility info can be fragile. When you convert files, it's easy to lose alt text, headings, captions, and this
    clause ensures that this doesn't happen.</p>

  <h4>5.5 Operable Parts</h4>
  <p>This clause had two parts: </p>
  <ol>
    <li>making sure things don't require grasping, pinching, or wrist-twisting</li>
    <li>making sure people can find controls by touch.</li>
  </ol>
  <p>It made me realize just how many modern devices fail this. From flat touchscreen ovens to
    slippery volume buttons. This clause makes sure that people with motor impairments can use the controls without
    needing to do things that are physically impossible for them.</p>

  <h4>5.6 Locking or Toggle Controls</h4>
  <p>This part addresses both tactile/auditory and visual states, It ensures that an ICT provides at least one mode of
    operation where the status of the control can be determined either through touch or sound without operating the
    control.</p>
  <p>An example of a locking or toggle control is the "Caps Lock" key. because even something as “small” as Caps Lock
    can cause chaos if you can't tell what it's state is.</p>

  <h4>5.7 Key Repeat</h4>

  <p>Key repeat is about making sure that if you hold down a key, it doesn't just keep repeating endlessly. This is
    important for people with <strong>motor impairments</strong> who might not be able to release a key
    quickly.</p>
  <p>It's refreshing to see a standard that slows things down instead of expecting users to keep up with tech. It
    recognizes that some users:</p>
  <ul>
    <li>Hold keys too long</li>
    <li>Can't lift their fingers quickly</li>
    <li>Might hit the key accidentally</li>
  </ul>
  <p>It also says that if you have a key repeat feature, it should be adjustable. So if someone needs more time to
    release a key, they can set it up that way.</p>

  <h4>5.8 Double-Strike Key Acceptance</h4>
  <p>This part focuses on accessibility for people with tremors, or inconsistent movement. It ensures that users can
    adjust how long a system waits before accepting a repeated keystroke. The recommended time is <strong>at least 0.5
      seconds.</strong></p>

  <h4>5.9 Simultaneous User Actions</h4>
  <p>Actions that require two hands or multi-touch gestures, must have a one-step, one-hand, or one-finger alternative.
  </p>
  <p>Having to use both hands to open the lid of a laptop, having to press two or more keys at the same time or
    having to touch a surface with more than one finger (for example: pinch to zoom) are examples of simultaneous user
    actions.</p>

  <hr />
  <p><strong>Up next:</strong> Clause 6, ICT with two-way voice communication.</p>
  <hr />

  <h3>Check-In</h3>

  <p>I've not been posting as often as I want to, life's been doing its thing 😅. But I've still been reading and
    studying, even if it's just 30 minutes a day. Writing it all out takes a different kind of focus though.</p>
  <p>Once things settle down a bit, I'll get back to writing more regularly. For now, slow progress is still progress.
  </p>

   <h3>Resources</h3>
  <ul>
    <li><a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf"
        target="_blank" rel="noopener noreferrer">EN 301 549 V3.2.1 (2021-03)</a></li>
    <li><a href="https://youtube.com/playlist?list=PLfCFZkKjngqrnEaIymHKvsym025w0cOF3&si=z6tpXFb0ZqTwHneD"
        target="_blank" rel="noopener noreferrer">Introduction to the EN 301 549 - Youtube</a></li>
  </ul>

</div>
