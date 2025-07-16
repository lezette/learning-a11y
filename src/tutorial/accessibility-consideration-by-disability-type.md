---
title: 'Accessibility Considerations by Disability Type'
description: 'Inclusive Design'
tags: ['tutorial']
permalink: 'tutorial/{{ title | slug }}/'
date: '2025-07-16'
layout: 'blog-layout'
---

<div class="blog">
  <p>When it comes to building for accessibility, there's a lot to say. It's also easy to fall into the trap of thinking
    it's just about screen readers or color contrast.</p>
  <p>However, disability is a spectrum. For example, people with low vision aren't always of one type, and preferences
    vary. Some people may also experience multiple disabilities at once. Because of this, it's important to acknowledge
    that "100% accessibility" may never be possible, but that doesn't mean we shouldn't try.</p>
  <p>Whether someone has low vision, is colorblind, or experiences cognitive overload, thoughtful design can open the
    web up to them. Here's a breakdown of design considerations categorized by disability type, so you can create
    genuinely inclusive experiences.</p>

  <h3>Blindness</h3>
  <p>There's a common misconception that people who are blind don't have 100% sight. This misconception
    isn't just wrong, it's dangerous. The term blind covers a wide range of vision loss. Some people who are legally
    blind can still see something (maybe light, shadows, blurry shapes), but not enough for tasks like reading or
    recognizing faces without assistive tools. And there are people with complete loss of vision (no light perception at
    all). But this is <em>rare</em>. Most people who are "blind" have some remaining vision.</p>
  <p>People who are blind generally rely on screen readers.</p>
  <p>Here are some design considerations for blindness</p>
  <ul>
    <li>All content must have a text alternative: Use alt text, captions, ARIA labels.</li>
    <li>Don't rely on visual attributes alone to convey a message</li>
    <li>Enusre full keyboard accessibility: Test keyboard-only navigation.</li>
    <li>Use semantic HTML: Headings, landmarks, lists help screen reader users navigate.</li>
    <li>Enusre that custom components must have correct name/role/value: Use ARIA when needed.</li>
    <li>Announce feedback for all actions: Don't leave users in the dark after form submissions or state changes.</li>
    <li>Provide audio descriptions for videos to describe important visual info.</li>
  </ul>

  <h3>Low Vision</h3>
  <p>People with low vision might have permanent vision loss that isn't correctable with glasses, contacts, or surgery,
    but still has usable sight.</p>
  <p>Some examples are</p>
  <ul>
    <li>Blurry central vision (macular degeneration)</li>
    <li>Patchy blind spots (glaucoma)</li>
    <li>Light sensitivity</li>
    <li>Difficulty with contrast or night vision</li>
  </ul>
  <p>Someone with low vision might still read large print or use magnifiers, struggle in dim lighting or glare and use
    their vision with assistive tech like screen magnifiers or high contrast modes</p>
  <p>Here are some design considerations for low vision</p>
  <ul>
    <li>Avoid disabling pinch-to-zoom: Don't use <code>&lt;meta name="viewport" content="user-scalable=no"&gt;</code>
      because screen magnifier users rely on zooming to read.
    </li>
    <li>Ensure sufficient text contrast: Text and background must meet contrast guidelines to stay readable.</li>
    <li>Provide visible focus and hover states: Help users track keyboard and mouse interactions.</li>
    <li>Use clear visual distinction between content and controls: Avoid controls blending into text or background.</li>
  </ul>

  <h3>Colorblindness</h3>
  <p>Just like with blindness, there's a misconception that people with color blindness cannot see color. Color
    blindness (or color vision deficiency) means a person has difficulty distinguishing between
    certain colors, not that they can't see any color at all.</p>
  <p>It's usually genetic, and most common in males, about 1 in 12 men and 1 in 200 women worldwide have some form of
    it.</p>
  <h4>Types of Color Blindness</h4>
  <p>There are different types of color blindness:</p>
  <ol>
    <li><strong>Red-Green Color Blindness (most common): May confuse reds, greens, browns, and oranges, especially in
        low light.</strong>
      <ul>
        <li><strong>Protanopia/Protanomaly</strong>: Trouble seeing red</li>
        <li><strong>Deuteranopia/Deuteranomaly</strong>: Trouble seeing green</li>
      </ul>
    </li>
    <li>Blue-Yellow Color Blindness (Tritanopia/Tritanomaly) (less common): Hard to tell blue from green, or yellow from
      pink.</li>
    <li><strong>Monochromacy</strong> (very rare): Can see only in black, white, and gray, This is super rare, like 1 in
      30,000 people.</li>
  </ol>
  <p>Design considerations for Color Blindness</p>
  <ul>
    <li><strong>Don't rely on color alone</strong>: Use text, icons, or patterns to differentiate content. Especially
      avoid red-green only indicators.</li>
  </ul>

  <h3>Deafness</h3>
  <p>Deafness means <strong>partial or complete hearing loss</strong> in one or both ears. </p>
  <p>There are levels of deafness:</p>
  <ul>
    <li><strong>Mild</strong>: May miss soft sounds like whispering or background noise</li>
    <li><strong>Moderate</strong>: Trouble hearing normal conversation, especially in noise</li>
    <li><strong>Severe</strong>: Can only hear loud sounds or shouting</li>
    <li><strong>Profound</strong>: May hear very loud sounds or feel vibrations, but not speech</li>
    <li><strong>Deaf (capital "D")</strong>: Often used by those who identify with Deaf culture</li>
  </ul>
  <p>Hearing loss affects people of all ages and can be caused by many different factors. There are two main types:</p>
  <ul>
    <li><strong>Conductive hearing loss</strong>: Problem in the outer or middle ear (e.g. ear infection, fluid,
      blockage). It is often treatable or reversible
    </li>
    <li><strong>Sensorineural hearing loss</strong>: Damage to inner ear (cochlea) or auditory nerve, often permanent
      and is the most common cause of long-term deafness. It includes age-related hearing loss, noise exposure, genetics
    </li>
    <li><strong>Mixed</strong>: Some people have a mixed type with both</li>
  </ul>
  <p>Design considerations for Deafness</p>
  <ul>
    <li>Caption all videos: Ensure critical information in narration/dialogue are visible.</li>
    <li>Provide transcripts for audio-only content: Dialogue, sound effects, and speakers should be included.</li>
    <li>Consider sign language interpretation: For users who prefer it over text.</li>
  </ul>

  <h3>Deafblindness</h3>
  <p>Deafblindness means a person has both significant hearing and vision loss, to the point where one sense can't
    compensate for the other.</p>
  <p>It doesn't have to mean total blindness + total deafness, in fact, most Deafblind people still have some residual
    vision or hearing. But it's still disabling enough that:</p>
  <ul>
    <li>They can't rely on vision for communication</li>
    <li>They can't rely on hearing for communication</li>
    <li>They need alternative communication methods and support for navigation, information access, and social
      interaction</li>
  </ul>
  <p>Deafblindness can be:</p>
  <ul>
    <li><strong>Congenital</strong>: Meaning it is present at birth (e.g., CHARGE syndrome, congenital rubella syndrome)
    </li>
    <li><strong>Acquired</strong>: Develops later in life due to illness, injury, aging (e.g., Usher syndrome, stroke,
      diabetes complications)</li>
    <li><strong>Progressive</strong>: Where both vision and hearing loss worsen over time (like in Usher syndrome: born
      deaf or hard of hearing, vision loss comes later)</li>
  </ul>
  <p>People with Deafblindness might use Braille (plus other assistive tech like screen readers)</p>
  <p>Design considerations for Deafblindness</p>
  <ul>
    <li>Combine blindness and deafness considerations: Use screen reader + braille display support.</li>
    <li>Provide transcripts for both audio and visual media. Some users can't rely on captions.</li>
  </ul>

  <h3>Motor Disabilities</h3>
  <p>Motor (or physical) disabilities affect a person's movement, coordination, or ability to control their muscles.
    That means they might:</p>
  <ul>
    <li>Struggle to use a mouse or touchscreen</li>
    <li>Be unable to press small buttons or keys</li>
    <li>Need alternative input like voice, eye tracking, switch devices, or keyboard navigation</li>
  </ul>
  <p>Motor disability can be:</p>
  <ul>
    <li><strong>Neurological</strong> for example, Cerebral palsy, multiple sclerosis, Parkinson's, stroke</li>
    <li><strong>Musculoskeletal</strong> like,, Arthritis, muscular dystrophy, spinal cord injury</li>
    <li><strong>Amputation / Limb difference</strong> example: missing fingers, arms, or use of prosthetics</li>
    <li><strong>Developmental</strong> like, developmental coordination disorder (DCD), some autism spectrum disorder
      (ASD)</li>
    <li><strong>Temporary</strong> for example, a broken arm, post-surgery recovery</li>
    <li><strong>Fatigue-based</strong> for example, chronic fatigue, long COVID, fibromyalgia</li>
  </ul>
  <p>Basically, if using a device takes extra effort, precision, or stamina, this group is affected.</p>

  <p>Someone with a motor disability may:</p>
  <ul>
    <li>Rely on keyboard-only navigation (can't use a mouse)</li>
    <li>Use voice control software (like Dragon NaturallySpeaking)</li>
    <li>Navigate with switch controls (one button to cycle through options)</li>
    <li>Use a head pointer, eye tracker, or joystick</li>
    <li>Prefer auto-suggestions and predictive text (typing is effortful)</li>
  </ul>
  <p>Design considerations for Motor Disabilities</p>
  <ul>
    <li>Everything must work via keyboard</li>
    <li>Provide visible focus and hover states</li>
    <li>Ensure large enough touch targets: Minimum 44x44 pixels for buttons and links</li>
    <li>Allow enough time for actions: Don't auto-submit forms or time out too quickly</li>
    <li>Warn before timeouts: Give users time to respond and option to extend sessions.</li>
    <li>Provide alternative input methods: Voice commands, switch controls, etc.</li>
    <li>Allow users to customize controls: For example, remap keys or change gestures</li>
    <li>Provide undo/redo options: Mistakes happen, so let users easily correct them</li>
    <li>Use clear visual indicators for errors: Don't just rely on color to show errors</li>
    <li>Allow users to pause or stop animations: Some users may find them distracting or overwhelming</li>
    <li>Use consistent navigation patterns: Don't change how things work unexpectedly</li>
    <li>Provide clear feedback for actions: Let users know when something is submitted, saved, or completed</li>
  </ul>

  <h3>Speech Disabilities</h3>
  <p>A speech disability means a person has difficulty producing spoken language in a way that's easily understood by
    others. This can affect:</p>
  <ul>
    <li>Voice (e.g. hoarseness, no voice)</li>
    <li>Fluency (e.g. stuttering)</li>
    <li>Articulation (e.g. slurred or unclear speech)</li>
    <li>Rhythm or pitch (e.g. monotone, robotic, or high-pitched delivery)</li>
  </ul>
  <p>Speech disability can be:</p>
  <ul>
    <li>Congenital: Cerebral palsy, autism, Down syndrome</li>
    <li>Acquired: Stroke (aphasia), brain injury, ALS, Parkinson's</li>
    <li>Situational: Laryngectomy (surgical removal of voice box), trauma, vocal strain</li>
  </ul>
  <p>Some people use speech-generating devices (SGDs), text-to-speech tools, or Augmentative and Alternative
    Communication
    (AAC) systems to express themselves.</p>
  <p>Design considerations for Speech Disabilities</p>
  <ul>
    <li>Don't rely on voice input, offer alternatives like chat, forms, buttons.</li>
  </ul>

  <h3>Cognitive Disabilities</h3>
  <p>Cognitive disabilities affect how a person processes information, learns, communicates, or pays attention. This
    isn't
    about intelligence, it's about how the brain handles tasks like:</p>
  <ul>
    <li>Reading</li>
    <li>Understanding instructions</li>
    <li>Concentrating</li>
    <li>Solving problems</li>
    <li>Remembering things</li>
    <li>Organizing actions or thoughts</li>
  </ul>
  <p>Some examples of cognitive disabilities are:</p>
  <ul>
    <li>Learning disabilities: Dyslexia (reading), dyscalculia (math), dysgraphia (writing)</li>
    <li>Neurodivergence: Autism, ADHD, executive dysfunction</li>
    <li>Intellectual disabilities: Down syndrome, Fragile X syndrome</li>
    <li>Brain injuries: Traumatic brain injury (TBI), stroke</li>
    <li>Age-related cognitive decline: Dementia, Alzheimer's</li>
  </ul>
  <p>Design considerations for Cognitive Disabilities</p>
  <ul>
    <li>Simplify interfaces and content</li>
    <li>Provide help features: Tooltips, glossaries, and guides.</li>
    <li>Design for predictability: Use consistent layout and navigation.</li>
    <li>Avoid autoplay, popups, flashy carousels.</li>
  </ul>
  <p>For learning disabilities:</p>
  <li>Supplement text with visuals and audio: Some users may find it easier to understand multimedia.</li>
  <li>Avoid extreme contrast like black-on-white: Slightly softer combinations like dark grey on off-white may improve
    readability. But stay within contrast thresholds needed for low vision.</li>

  <h3>Seizure Disorders</h3>
  <p>Seizure disorders (epilepsy) are conditions where the brain's electrical activity suddenly get's disturbed, leading
    to symptoms like: loss of awareness, convulsions, muscle spasms, staring spells, or sensory disruptions</p>
  <p>Triggers vary, but for some people, visual content on screens can trigger a seizure, especially when it flashes,
    blinks, or strobe-flickers.</p>
  <p>Photosensitive epilepsy affects around 3% of people with epilepsy, it's more common in children and teens.</p>
  <p>Design considerations for Seizure Disorders</p>
  <ul>
    <li>Avoid flashing/blinking more than 3 times/second: This can trigger photo-sensitive epilepsy.</li>
    <li>Use safe colors and patterns: Avoid high-contrast flashing or strobe effects.</li>
    <li>Provide options to disable animations or use <code>prefers-reduced-motion</code></li>
    <li>Allow users control video playback: Let them pause, stop, or slow down videos.</li>
  </ul>

  <h3>Multiple Disabilities</h3>
  <p>Disability is layered, not linear. Some people can experience two or more disabilities that intersect and compound
    to affect their interaction with the world, and the web. It can be any combination of: vision + hearing (like
    Deafblindness), cognitive + motor, speech + hearing, or any other combination.</p>
  <p>Designing for multiple disabilities means considering how different impairments interact and affect each other.
    For example, a person with low vision and cognitive disabilities may struggle with complex layouts and small text,
    while someone with motor and hearing disabilities may need alternative input methods and visual feedback.</p>
  <p>Design considerations for Multiple Disabilities</p>
  <ul>
    <li>Support multiple modes of input</li>
    <li>Support multiple ways of consuming content</li>
    <li>Don't rely on one sense to convey information</li>
    <li>Design with flexibility, let users turn off animations, save progress in forms, skip long sections etc.</li>
  </ul>

  <hr>

  <h3>Final Thoughts</h3>
  <p>People are complex, and accessibility must be multi-modal, multi-sensory, and user-tested with intersectional needs
    in mind. Disabilities overlap. And when they do? Accessibility needs way more nuance.
  </p>
  <p>Accessible design is inclusive design. The more we understand how different users interact with the web, the better
    we can create experiences that work for all. Accessibility isn't just about compliance; it's about empathy, equity,
    and user experience.</p>
  <p>Thank you for reading, If you found this helpful, consider sharing.
  </p>

  <h3>Resources</h3>
  <ul>
    <li><a href="https://www.w3.org/WAI/people/" target="_blank" rel="noopener noreferrer">Accessibility: It's About
        People</a></li>
    <li><a href="https://www.w3.org/WAI/people-use-web/" target="_blank" rel="noopener noreferrer">How People with
        Disabilities Use the Web</a></li>
    <li><a href="https://youtu.be/qL4shFJHOvc?si=rnpGMfLYnZQFd7cU" target="_blank" rel="noopener noreferrer">Helping the
        blind navigate the online world</a></li>
    <li><a href="https://www.archimedes-lab.org/colorblindnesstest.html" target="_blank" rel="noopener noreferrer">Color
        Blindness or Color Vision Deficiencys</a>
    </li>
    <li><a href="https://www.parentcenterhub.org/multiple/" target="_blank" rel="noopener noreferrer">Multiple
        Disabilities</a></li>
    <li><a href="https://www.w3.org/WAI/fundamentals/accessibility-principles/" target="_blank"
        rel="noopener noreferrer">Accessibility Principles</a></li>
  </ul>

</div>