---
title: "A deep dive on the Perceivable principle"
description: "looking more into the perceivable principles, guidelines and Success Criteria"
tags: ["was", "wcag"]
permalink: "was/{{ title | slug }}/"
date: "2025-03-06"
layout: "blog-layout"
---

<div class="blog">
  <p>In my last article, I gave a brief overview of the Perceivable principle, including a general understanding and
    examples. However, I did not cover the Success Criteria for each guideline. Since this blog is intended as a
    reference point for everything I've learned, I've decided to do a deep dive into the Perceivable principle.</p>

  <p>Let's jump right in:</p>

  <h3>What does Perceivable mean?</h3>

  <p>Don't judge me, but initially, I didn't understand how the guidelines under "Perceivable" correlated with the word
    itself. I thought "perceivable" meant something else. However, after a quick Google search, it became clearer.</p>

  <p>Here's what I found: </p>

  <blockquote>Perceivable means something can be seen, heard, or noticed. It can also mean something can be understood
    or apprehended.</blockquote>

  <p><q>Oh, that makes sense!</q> I then searched for synonyms of "perceivable," and some of the words I found include:
    apprehensible, graspable, intelligible, understandable, and comprehensible.</b></p>

  <p><q>Okay! So, for a component to be perceivable, users need to be able to comprehend it.</q> Now the guidelines make
    sense—silly me <span aria-hidden="true">😅</span></p>

  <p class="text-3xl">So, let's look at the guidelines.</p>

  <p>In order for your web component to be marked as perceivable WCAG provided the following guidelines</p>

  <h4>1.1 Text alternative</h4>
  <p>You should provide text alternatives for non-text content so it can be converted into other forms to meet people's
    needs. An example of another form that text can be converted into is Braille. I also think this could help users who
    speak a different language from the primary language translate the content.</p>

  <p>"Text," in this context, refers to actual text, not images of text—because an image is itself considered non-text
    content. <span class="italic text-light">Duh!</span></p>

  <p>This guideline is quite clear, so it only has one success criterion.</p>

  <h5>1.1.1 Non text content (Level A): </h5>

  <p>This success criterion (SC) benefit people who can't see or have low vision, people who find
    graphical media (like charts) difficult to understand, people who are deaf-blind (allowing them to read in Braille),
    people who are deaf (there's ongoing research on translating text into sign language), and people who speak
    different languages.
  </p>

  <p>This SC has some exceptions:</p>

  <ul>
    <li><strong>Controls or input fields:</strong> If the non-text content functions as a control or accepts user input,
      assistive technologies
      (AT) can already detect the accessible name for that content, making a separate text alternative unnecessary.</li>
    <li><a href="#time-based-media"><strong>Time-based media:</strong></a> There's a separate guideline dedicated to
      time-based media; however, but you can still provide a text alternative describing the media.</li>
    <li><strong>Tests or exams:</strong> If the content is a test that would become invalid if presented in text, the
      text alternative should include a descriptive identification of the content rather than the test itself.</li>
    <li><strong>CAPTCHA:</strong> an alternative form of CAPTCHA that can accommodate different disabilities should be
      provided</li>
    <li><strong>Decorative content:</strong> Decorative content should be hidden from assistive technologies (AT).</li>
  </ul>

  <p>An example of passing this SC is providing a bar chart accompanied by a descriptive text alternative. The text
    alternative would clearly state the purpose of the chart, specify its type, and present the data in a table format.
  </p>

  <h4 id="time-based-media">1.2 Time based media</h4>
  <p>You should provide alternative formats for audio and video content. In this case, a simple text alternative might
    not always fully accommodate users' needs, which is why the Success Criteria for this guideline provide more
    specific guidance.</p>

  <h4>1.2.1 Audio-only and Video-only (Prerecorded) (Level A)</h4>

  <p>You should provide an alternative for media content that's perceivable through only one sense:</p>
  <ul>
    <li>If it's audio-only content, provide a word-for-word transcript of the audio.</li>
    <li>If it's video-only content, provide an audio alternative describing what's happening in the video.</li>
  </ul>
  <p>This Success Criterion benefits people with visual impairments, hearing impairments, or both.</p>

  <h4>1.2.2 Captions (Prerecorded) (Level A)</h4>

  <p>Provide captions for prerecorded videos. This SC benefits people with hearing impairments, but it can also be
    helpful for people who are situationally unable to listen to the video—for example, people in public spaces who
    don't want to play a video out loud.</p>

  <p>Captions only pass this SC if they are synchronized with the audio of the video. If a video is an alternative
    presentation of content already provided via text on a webpage, it does not fail this SC.</p>

  <h4>1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)</h4>

  <p>Provide an audio description or present all of the information from the video in text form. This benefits people
    with visual impairments and people who have difficulty understanding moving images.</p>

  <h4>1.2.4 Captions (Live) (Level AA)</h4>

  <p>Provide captions for live videos. This enables people with hearing impairments to follow along with the video in
    real-time. The captions should include not only the audio but also identify who is speaking. An example of this is
    when a news station provides captions for a live broadcast.</p>

  <h4>1.2.5 Audio Description (Prerecorded) (Level AA)</h4>

  <p>This SC ensures that you provide a synchronized audio description of what's shown in a video. This benefits people
    with visual impairments, as the visual information in the video is described to them. The audio description is read
    during pauses in the dialogue, providing information about actions, characters, scene changes, and on-screen text
    that are important but not described or spoken in the main soundtrack.</p>

  <p>An audio description is a separate audio track that describes the visual elements of a video or multimedia product.
    It provides information such as actions performed in the video, scene changes, and important on-screen text that
    isn't spoken in the main soundtrack.</p>

  <h4>1.2.6 Sign Language (Prerecorded) (Level AAA)</h4>

  <p>Provide sign language interpretation for prerecorded audio. This benefits people who are deaf or have hearing
    impairments and are fluent in sign language. People whose primary language is sign language sometimes have limited
    reading ability and may find it difficult to comprehend captions. Therefore, providing synchronized sign language
    interpretation with your video accommodates these users.</p>

  <h4>1.2.7 Extended Audio Description (Prerecorded) (Level AAA)</h4>

  <p>This SC extends 1.2.5 Audio Description to ensure you can provide an even more detailed audio description for a
    video. In this SC, if the pauses in the audio aren't long enough to accommodate an extensive description, the media
    is paused to insert the additional audio description, then resumed once the description is complete.</p>

  <h4>1.2.8 Media Alternative (Prerecorded) (Level AAA)</h4>

  <p>Provide a text equivalent for all content in videos. This SC accommodates more people, especially those who are
    deaf-blind, ensuring they can better understand the media content at their own pace.</p>

  <h4>1.2.9 Audio-only (Live) (Level AAA)</h4>

  <p>Provide a text equivalent for live audio-only content. This benefits people with hearing impairments.</p>

  <h3>1.3 Adaptable</h3>
  <p>This guideline ensures that content is structured properly so it can be understood by all users, regardless of how
    they access it. If the structure or information on a webpage isn't clear to assistive technologies, users might not
    be able to understand it when presented in a different form. The Success Criteria under this guideline provide
    examples of how a webpage can be adaptable.</p>

  <h4>1.3.1 Info and Relationship (Level A)</h4>
  <p>This SC ensures that the information and relationships of content remain the same regardless of the presentation
    format.</p>
  <p>For example: Headings are usually bigger, list items are typically presented differently from regular paragraphs,
    tables are organized systematically, and form fields are commonly grouped together.</p>
  <p>This SC ensures that your page is semantically structured so that headings are correctly presented as headings,
    regardless of how users access them. If a developer uses a <code>p</code> tag styled visually as a heading instead
    of using actual heading tags, they fail this SC because a screen reader would interpret the content as a paragraph,
    not a heading. The same rule applies to lists and tables. This SC benefits people with visual impairments who use
    screen readers and people who are deaf-blind using braille displays.</p>
  <p>A good way to test this is to check if the information still makes sense when accessed sequentially through
    different means (e.g., read aloud by a screen reader).</p>
  <p>Sometimes, these relationships might not be clearly understood by assistive technology. In such cases, provide a
    written description nearby. For example, in a form, you might add: "All required fields are marked with an asterisk
    (*)".</p>

  <h4>1.3.2 Meaningful Sequence (Level A)</h4>
  <p>This SC ensures that content appears in a logical sequence for all users. If the sequence of the content is
    important
    for understanding, it should be structured correctly in HTML rather than using CSS to visually reorder it. This
    benefits users who rely on assistive technology to read content aloud.</p>
  <h4>1.3.3 Sensory Characteristics (Level A)</h4>
  <p>When providing instructions for operating a component, avoid describing the component solely by sensory
    characteristics such as color, location, size, or shape. Sensory characteristics can be included in addition to
    clear
    text or labels. For example, instead of saying "Click the red button to cancel this operation," or "Click the red
    button with the X icon to cancel this operation," you should say, "Click the red button with the X icon labeled
    'Cancel' to cancel this operation."</p>
  <p>This SC doesn't discourage using sensory characteristics entirely, as these descriptions can benefit users with
    cognitive impairments. However, since some users cannot perceive sensory characteristics, it's important not to rely
    solely on them.</p>
  <h4>1.3.4 Orientation (Level AA)</h4>
  <p>Do not restrict content to either portrait or landscape orientation unless it's essential. This SC benefits users
    with motor impairments who have mounted devices or users with visual impairments who prefer a certain device
    orientation for easier reading.</p>
  <p>An example where orientation restriction might be essential is a piano app designed to emulate a piano.</p>
  <h4>1.3.5 Identify Input Purpose (Level AA)</h4>
  <p>Provide clear identification for form inputs that collect user information, enabling user agents to communicate the
    purpose of each input to users. An example of this is using the HTML <code>autocomplete</code> attribute.</p>
  <blockquote> Using and repurposing predefined autocomplete definitions allows user agents and assistive technologies
    to
    present the purpose of input fields to users in different modalities. For example, assistive technologies might
    display familiar icons next to input fields to help users who have difficulty reading. An icon of a birthday cake
    might be shown beside an input field with <code>autocomplete="bday"</code>, or a telephone icon next to a field with
    <code>autocomplete="tel"</code>.
  </blockquote>
  <p>This SC benefits users with cognitive impairments who may not understand the purpose of an input from the label
    alone. It also aids users with motor impairments by enabling user agents to autofill form inputs.</p>
  <h4>1.3.6 Identify Purpose (Level AAA)</h4>
  <p>This SC ensures the purpose of different parts of a webpage (like buttons, links, icons, and sections) is clearly
    understandable by user agents. When a user agent understands what each element represents, it can communicate this
    purpose clearly to users visually, audibly, or through symbols. An example of achieving this is using ARIA roles and
    semantic HTML, enabling users to hide elements that don't have a certain role. This helps users with cognitive
    impairments consistently understand content, regardless of the technology they're using.</p>

  <h3>1.4 Distinguishable</h3>
  <p>This guideline ensures the default presentation of components is easy to perceive for people with disabilities. An
    example is making sure users can clearly distinguish foreground information from background information.</p>
  <p>The Success Criteria for this guideline expand on this:</p>

  <h4>1.4.1 Use of Color (Level A)</h4>
  <p>This SC ensures that color isn't the only way information is presented. For example, in a form field, color
    shouldn't
    be the only way to indicate a required field or an error. Instead, required fields should include the word
    "required"
    or an asterisk (*) alongside the color, and fields with errors should display error text along with the color.
    Similarly, links shouldn't rely on color alone to indicate they're clickable; they should also have additional
    styling, such as an underline.</p>

  <p>This benefits people with visual impairments, as not everyone sees colors or perceives them in the same way.</p>

  <h4>1.4.2 Audio Control (Level A)</h4>
  <p>This SC ensures that if audio autoplay lasts more than 3 seconds, users have a way to turn it off or mute it.
    Autoplaying audio that lasts longer than 3 seconds is discouraged because it may interfere with a screen reader
    user's
    ability to locate the audio controls. Instead, audio should only play when the user explicitly initiates an action
    that clearly informs them about the audio playback.</p>

  <p>This SC benefits users with visual impairments who rely on screen readers, as well as users with cognitive
    impairments or difficulty focusing when there's background sound.</p>

  <h4 id="minimum-contrast">1.4.3 Minimum Contrast (Level AA)</h4>
  <p>This SC ensures there's sufficient contrast between text and its background. It states that text and images of text
    must have a contrast ratio of at least <strong>4.5:1 for normal text</strong> and at least <strong>3:1 for large
      text</strong>. Large text is defined as text that's at least 18.5px bold or 24px normal. Logos have no contrast
    requirements.</p>

  <p>This SC benefits people with low vision who struggle to read faint text.</p>

  <h4>1.4.4 Resize Text (Level AA)</h4>
  <p>This SC ensures users can resize text without assistive technology up to 200% without losing content or
    functionality. For example, using relative units like <code>em</code> instead of fixed units helps achieve this.</p>

  <p>This SC benefits users with visual impairments, allowing them to comfortably adjust text size.</p>

  <h4 id="images-of-text">1.4.5 Images of Text (Level AA)</h4>
  <p>This Success Criterion ensures electronic text is used instead of images of text, especially when the same visual
    result can be achieved through styled text. Images of text should only be used when necessary, and if used, they
    should either be customizable or have a text alternative. This is because resizing or zooming an image of text may
    cause pixelation, making the content difficult to read.</p>

  <p>This SC benefits people with visual impairments and those with cognitive impairments affecting reading.</p>

  <h4>1.4.6 Contrast (Enhanced) (Level AAA)</h4>
  <p>This SC is an enhanced version of <a href="#minimum-contrast">1.4.3 Minimum Contrast</a>. It ensures even greater
    contrast, stating text and images of text must have a contrast ratio of at least <strong>7:1 for normal
      text</strong>
    and <strong>4.5:1 for large text</strong>, unless the text is purely decorative.</p>

  <p>This SC benefits people with low vision and those who cannot distinguish colors.</p>

  <h4>1.4.7 Low or No Background Audio (Level AAA)</h4>
  <p>This SC ensures that audio containing speech in the foreground should either:</p>
  <ul>
    <li>Have no background sounds.</li>
    <li>Have a way to turn off background sounds.</li>
    <li>Ensure background sounds are at least 20 decibels lower than the foreground audio.</li>
  </ul>

  <p>This SC does not apply to audio CAPTCHA, audio logos, or music. It benefits people who are hard of hearing.</p>

  <h4>1.4.8 Visual Presentation (Level AAA)</h4>
  <p>This SC ensures users can adjust text styles to meet their preferences. Some of these preferences include:</p>
  <ul>
    <li>Selecting foreground and background colors.</li>
    <li>Adjusting content width to at most 80 characters (80ch).</li>
    <li>Changing justified text alignment.</li>
    <li>Adjusting line height (leading) to at least 1.5.</li>
    <li>Adjusting text size up to 200% without requiring horizontal scrolling.</li>
  </ul>

  <p>Your content doesn't have to meet these criteria by default; however, it should allow users the ability to adjust
    these aspects.</p>
  <p>This SC benefits users with certain visual or cognitive impairments. For instance, some people
    struggle to follow text when lines are too wide, and narrower blocks of text help them move easily from line to
    line.</p>

  <h4>1.4.9 Images of Text (No Exception) (Level AAA)</h4>
  <p>This SC builds on <a href="#images-of-text">1.4.5 Images of Text</a>. It ensures that no images of text are used
    without exception.</p>

  <p class="note">This SC does not apply to logos or text that's part of a picture.</p>

  <h4>1.4.10 Reflow (Level AA)</h4>
  <p>This SC ensures text automatically rearranges itself (reflows) to fit the screen width when users zoom in. It
    states
    that <q>content must remain clear, usable, and easy to read without requiring simultaneous horizontal and vertical
      scrolling when users zoom up to 400%.</q></p>

  <p>When users zoom into a page, text should rearrange neatly into a single column rather than forcing horizontal
    scrolling. This arrangement is called <strong>"reflow."</strong> The best way to meet this SC is through
    <strong>responsive design</strong>, where pages adjust their layout based on screen size or zoom level. For example,
    content may be displayed in three columns on large screens but adjust to a single column when users zoom in.
  </p>

  <p>Some content, such as maps, videos, and tables, naturally requires a two-dimensional layout and does not have to
    rearrange into a single column, as this would remove essential meaning.</p>

  <p>This SC is similar to <strong>1.4.4 Resize Text</strong>, but Resize Text ensures text can enlarge up to 200%,
    whereas Reflow ensures users don't need two-directional scrolling at 400% zoom.</p>

  <p>This SC benefits people with low vision.</p>

  <h4>1.4.11 Non-text Contrast (Level AA)</h4>
  <p>This SC ensures interactive elements and essential graphics are clearly visible by providing adequate color
    contrast.
    It requires at least a <strong>3:1 contrast ratio</strong> for:</p>
  <ul>
    <li>Interactive elements (user interface components): buttons, form fields, and links.</li>
    <li>Elements indicating states (e.g., active, selected) or essential parts of graphics needed to understand content.
    </li>
  </ul>
  <p>This SC does not apply to disabled elements or elements styled by the browser itself. It benefits people with low
    vision.</p>

  <h4>1.4.12 Text Spacing (Level AA)</h4>
  <p>This SC ensures users can adjust spacing between lines, paragraphs, words, and letters to improve readability.
    Specifically, content should remain usable when users set:</p>
  <ul>
    <li>Line height (leading) to at least 1.5 times the font size.</li>
    <li>Paragraph spacing to at least 2 times the font size.</li>
    <li>Letter spacing to at least 0.12 times the font size.</li>
    <li>Word spacing to at least 0.16 times the font size.</li>
  </ul>

  <p>This adjustment is particularly important for users with dyslexia or certain visual impairments who require
    additional spacing for comfortable reading.</p>

  <h4>1.4.13 Content on Hover or Focus (Level AA)</h4>
  <p>This SC ensures popups, tooltips, and dropdowns follow these rules:</p>
  <ul>
    <li>They can be dismissed without losing focus (e.g., pressing Esc, clicking outside, or other methods).</li>
    <li>They remain visible long enough for users to read.</li>
    <li>If interactive, they accept focus without disappearing.</li>
  </ul>

  <p>This SC benefits users with visual impairments and cognitive impairments.</p>

  <h3>Final Thought and Ramblings</h3>
  <p>While some Success Criteria (SC) are straightforward, I still find it difficult to understand the differences
    between <strong>1.4.8 Visual Presentation</strong> and <strong>1.4.12 Text Spacing</strong>. They seem similar to
    me, but I'll be doing further reading to understand them better.
  </p>

  <p>For color contrast testing, you can use Chrome DevTools' built-in contrast checker. However, it doesn't assess
    contrast ratios when. I also use the <a href="https://www.tpgi.com/color-contrast-checker/">TPGi Color Contrast
      Analyser (CCA)</a>, which also supports
    testing for <strong>1.4.11 Non-text Contrast (AA)</strong>. These don't test contrast when background images are
    involved</p>

  <p>When testing the Perceivable principle, you should also try navigating the page using a screen reader. This
    approach can help you uncover issues that might not even be explicitly covered in this principle.</p>

  <p>Currently, my screen reader testing is limited to VoiceOver, as that's the only tool I have access to. However, as
    part of my goal to become a Web Accessibility Specialist, I'm making arrangements to get a PC so I can also test
    with JAWS and NVDA.</p>

  <p>🎯 I really struggle with using VoiceOver on mobile, but I'll need to learn it at some point—I don't really have a
    choice!</p>

  <p>Thank you for reading! I hope you enjoyed this post and found it helpful. See you in a day or two.</p>

  <h3 class="text-2xl font-semibold">Resources</h3>
  <ul>
    <li><a href="https://www.w3.org/TR/WCAG22/#perceivable" target="_blank">1. Perceivable (opens in new tab)</a></li>
    <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/text-alternatives.html" target="_blank">Understanding
        Guideline 1.1: Text Alternatives (opens in new tab)</a></li>
    <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/time-based-media.html" target="_blank">Understanding
        Guideline 1.2: Time-based Media (opens in new tab)</a></li>
    <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/adaptable.html" target="_blank">Understanding Guideline
        1.3: Adaptable (opens in new tab)</a></li>
    <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/distinguishable.html" target="_blank">Understanding
    <li><a href="https://www.youtube.com/watch?v=SgfICec18Gw" target="_blank">Integrated Audio </a></li>
    <li>
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum#dfn-contrast-ratio"
        target="_blank">Integrated Audio Contrast Ratio (opens in new tab)</a>
    </li>
    <li>
      <a href="https://ds.gpii.net/content/about-decibels-db" target="_blank">About
        Decibels (opens in new tab)</a>
    </li>
  </ul>
  <div>