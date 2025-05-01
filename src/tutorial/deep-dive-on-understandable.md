---
title: "An overview of the Understandable principle"
description: "A detailed breakdown of the WCAG 2.2 Perceivable principle"
tags: ["wcag", "tutorial"]
permalink: "tutorial/{{ title | slug }}/"
date: "2025-03-23"
layout: "blog-layout"
---

<div class="blog">
  <p>WCAG's third principle, <strong>Understandable</strong>, ensures that web platforms are built in a way that makes
    it
    easy for users to understand. This includes ensuring that content is easy to understand, interfaces are predictable
    across all pages, and instructions and error messages are clear so that users know what to do.</p>

  <p>The principle introduced four new Success Criteria in WCAG 2.2: 3.2.6 Consistent Help, 3.3.7 Redundant Entry, 3.3.8
    Accessible Authentication (Minimum), and 3.3.9 Accessible Authentication (Enhanced). I've explained them in this
    article.</p>

  <p class="big-text">Let's look at the guidelines</p>

  <h3>3.1 Readable</h3>
  <p>Readable ensures that content on your page is easy to understand for everyone. This involves specifying the
    language the content is in so that Assistive Technologies (<abbr title="Assistive Technologies">AT</abbr>) like
    screen readers can read the content correctly in the specified language. It also ensures that the meanings of words
    are
    easy to find and abbreviations are expanded. Let's look into the Success Criteria for this guideline.</p>

  <h4>3.1.1 Language of Page (Level A)</h4>
  <p>This Success Criterion (<abbr title="Success Criteria">SC</abbr>) ensures that the human language of a page is
    provided so that both user agents (like the browser) and AT can render the content more accurately. If the
    predominant language of a page is specified, then screen readers can read the content in that language.
    If it's audio content, then the media player can show the correct captions. WCAG also states that if multiple
    languages are
    used equally on a page, then the first language used should be set as the main language of the page.
  </p>
  <p>An example of passing this SC is using the <code>lang</code> attribute in HTML. If a page contains two languages,
    English and French, but most of the content is in English, then English should be specified as the main language
    of the page.</p>
  <p>This SC helps people who use screen readers, people with certain learning disabilities who use Text-to-Speech
    (<abbr title="Text-to-Speech">TTS</abbr>), and people who rely on captions for media.</p>

  <h4>3.1.2 Language of Parts (Level AA)</h4>
  <p>This SC ensures that user agents and AT can correctly present words that are in a language different from the main
    language of a page. While "language of page" is used for the main page, "language of parts" is used for portions of
    the
    main page. This is useful for AT like screen readers and Braille displays to interpret the change in the specified
    language.</p>
  <p>For example, if the main language of a page is English but a particular word or sentence is in French, then the
    language of that word should be specified.</p>
  <p>This SC helps people who use screen readers, people with certain learning disabilities who use text-to-speech
    software, and people who rely on captions for media.</p>
  <p class="note">Some Text-to-Speech (<abbr>TTS</abbr>) systems don't automatically detect and switch languages based
    on the <code>lang</code> attribute. For example, Apple TTS on macOS and iOS doesn't always switch voices when
    reading
    web content
    unless the user manually changes the language settings. <br>
    However, this doesn't mean you should skip the <code>lang</code> attribute. Screen readers <strong>do</strong>
    respect it because they're built to understand semantic HTML. Using <code>lang</code> helps screen readers pronounce
    content
    correctly and provides a better experience for multilingual users.</p>

  <h4>3.1.3 Unusual Words (Level AAA)</h4>
  <p>This SC ensures that specific definitions of words or phrases that are unusual or used in a specific way are
    provided. This is useful for people with certain cognitive disabilities who may not understand uncommon words or
    idioms.</p>
  <p>To meet this criterion, you should:</p>
  <ul>
    <li>Provide definitions of unusual or technical words.</li>
    <li>Explain idioms or slang if used.</li>
    <li>Use tooltips, glossaries, or inline definitions.</li>
    <li>Avoid or clarify figurative language when possible.</li>
  </ul>
  <p>This SC helps people with language and learning disabilities who have difficulty understanding words and phrases,
    or
    have difficulty using context to aid understanding.</p>

  <h4>3.1.4 Abbreviations (Level AAA)</h4>
  <p>This ensures that when an abbreviation is used, the meaning or expanded form is provided.</p>
  <p>To meet this SC, you can:</p>
  <ul>
    <li>Provide an abbreviation expansion the first time the abbreviation appears in the content. For example, I
      provided the expanded form of <abbr title="Assistive Technologies">AT</abbr>, which means Assistive Technologies,
      the first time it was used in this article.</li>
    <li>Provide links to definitions.</li>
    <li>Provide definitions for abbreviations by using the <code>&lt;abbr&gt;</code> element.</li>
    <li>Provide a glossary.</li>
  </ul>
  <p>This SC helps people with certain learning disabilities and people who rely on screen magnifiers (since
    magnification can hide context).</p>
  <h3>3.1.5 Reading Level (Level AAA)</h3>
  <p>This SC ensures that content is written as clearly and simply as possible (lower secondary education level). If you
    must use complex terms (for example, legal, medical, or academic), then provide a simpler version of the content or
    offer help (like summaries, illustrations, or definitions) to make it easier to understand.</p>
  <p>To meet this success criterion, you should provide:</p>
  <ul>
    <li>A simplified summary</li>
    <li>Visual aids (like infographics or diagrams)</li>
    <li>Examples</li>
    <li>Glossaries or tooltips</li>
  </ul>
  <p>For example, on a government website, instead of using something like "Applicants must furnish verifiable
    documentation to substantiate their eligibility,” reword to say “Applicants must provide documents that prove they
    are
    eligible,” or provide a summary like "Summary: You need to show proof that you qualify."</p>
  <p>This SC helps people with cognitive disabilities, people with low literacy, and people who are not fluent in the
    language of the content.</p>

  <h4>3.1.6 Pronunciation (Level AAA)</h4>
  <p>This SC ensures that if understanding a word depends on knowing how it's pronounced—or the pronunciation is not
    obvious or familiar to most users—then a way to determine the pronunciation should be provided, either directly or
    through a link, audio, or phonetic syllabary.</p>
  <p class="note">Avoid forcing pronunciation through screen readers, as it can become confusing rather than helpful.
    Different screen readers interpret phonetic spellings, abbreviations, and symbols in inconsistent ways — what sounds
    right in one might come out broken, robotic, or even misleading in another.<br>
    Avoid trying to "hack" pronunciation with tricks like <code>aria-label="WEE-CAG"</code> for WCAG. While the
    intention
    is good, the result can be unpredictable.</p>
  <p>This SC helps people with reading disabilities (like dyslexia) and people using screen readers.</p>

  <h3>3.2 Predictable</h3>
  <p>This guideline helps ensure that content is presented in a predictable order across web pages and that the behavior
    and functions of interactive components are consistent. This predictability can help many users with different
    disabilities. For example, it can be confusing for a user with a cognitive disability if components appear in
    different places on different pages.</p>

  <h4>3.2.1 On Focus (Level A)</h4>
  <p>This SC ensures that when someone focuses on a part of a page (like a button or input field), nothing unexpected
    happens automatically. For example, if a user tabs into a dropdown menu, it shouldn't automatically open a new page.
    Only trigger actions on explicit input (like pressing <kbd>Enter</kbd> or <kbd>Space</kbd>), not on focus.</p>
  <p>An example is a dropdown menu: focus can expand the menu if expected, but it should not cause navigation.</p>
  <p>This SC helps people with visual impairments, cognitive limitations, and motor impairments.</p>

  <h4>3.2.2 On Input (Level A)</h4>
  <p>This SC ensures that changes in input value don't automatically trigger a major change (like submitting a form or
    navigating to another page) unless the user expects it.</p>
  <p>An example of an acceptable pattern is a search input that shows suggestions below without disrupting focus or
    submitting the form. Redirection should only happen after intentional actions like pressing Enter.</p>
  <p>This SC helps users with cognitive disabilities who need predictability, as well as people with motor and visual
    impairments.</p>

  <h4>3.2.3 Consistent Navigation (Level AA)</h4>
  <p>This SC ensures that navigation repeated across multiple pages is presented in the same order each time. This is
    important for users with low vision who use screen magnification to read small portions of the screen at a time.
    These
    users rely on visual cues and page boundaries to quickly locate repeated content.</p>
  <p>An example of passing this SC is using a skip link as the first link on every page of a site, helping AT users with
    predictability.</p>
  <p>This is helpful for users with cognitive limitations and visual impairments.</p>

  <h4>3.2.4 Consistent Identification (Level AA)</h4>
  <p>This SC ensures that if a component appears in multiple places and performs the same function, it should always be
    identified in the same way—both visually and programmatically. For example, a search field at the top of every page
    should be labeled the same across all pages. It shouldn’t be labeled "Search" on one page and "Find" on another.</p>
  <p>This SC applies to links, buttons, icons, and ARIA roles or labels.</p>
  <p>To meet this SC, always use the same visible label and accessible name for repeated UI components with the same
    function.</p>
  <p>This SC helps users who use screen readers, users with cognitive limitations, and keyboard users who may memorize
    locations and roles based on repetition.</p>

  <h4>3.2.5 Change on Request (Level AAA)</h4>
  <p>This SC encourages websites to be built in a way that puts the user in control. Don’t make big changes (like
    navigating, opening windows, or submitting forms) happen unless the user clearly asks for them.</p>
  <p>If something unexpected happens—like a form auto-submitting after choosing an option from a dropdown—it can
    disorient
    users, especially those who rely on AT. Automatic changes are only okay if the user knows they’re going to happen or
    has enabled them through preferences.</p>
  <p>Some acceptable behaviors include:</p>
  <ul>
    <li>Using clear triggers like buttons or links for major actions</li>
    <li>Not auto-submitting forms or auto-navigating based on input or focus</li>
    <li>Providing the user a way to confirm or cancel an action</li>
  </ul>
  <p>This SC helps people with cognitive disabilities, screen reader users, and users with motor impairments.</p>

  <h4 class="inline-block me-3">3.2.6 Consistent Help (Level A)</h4><span class="new-badge">New to WCAG 2.2</span>
  <p>This SC ensures that if your website provides any kind of help—like contact info, a chatbot, FAQs, or a support
    link—and this help appears on multiple pages, it should appear in the same spot on each page (same order relative to
    the rest of the content).</p>
  <p>Types of help this applies to:</p>
  <ul>
    <li>Human contact info - Phone number, email, hours of operation</li>
    <li>Contact mechanisms - Chat, contact form, social media links</li>
    <li>Self-help - FAQ page, support links, “Help” pages</li>
    <li>Automated help - Chatbots, virtual assistants</li>
  </ul>
  <p>For example, if your site has a “Help” link in the top-right corner, and that link appears in the top-right corner
    on
    all pages, then you conform to this SC.</p>
  <p class="note">This SC only applies if you offer help on multiple pages. It doesn’t say you must provide help—but if
    you do, and it repeats, it should be consistently located.</p>

  <h3>3.3 Input Assistance</h3>
  <p>This guideline is all about helping users avoid mistakes when filling out forms or providing input—and helping them
    recover when mistakes happen. It recognizes that many users (especially those with cognitive, motor, or visual
    disabilities) can easily make errors when typing information, selecting options, or interacting with controls.</p>

  <p>It's about making sure that forms are easy to fill out, that users know what's expected of them, and that they can
    correct errors without losing their work. It's especially important for forms used in banking, healthcare,
    e-commerce,
    job applications—basically, anywhere a mistake could cause stress or real-life consequences.</p>

  <h4 id="error-identification">3.3.1 Error Identification (Level A)</h4>
  <p>This SC ensures that if an input error is detected, the error must be clearly identified in text so the user knows
    what went wrong. When a form validation fails or a form submission is unsuccessful, it’s not enough to simply
    re-display the form without providing any indication that something went wrong.</p>
  <p>For example, if a user leaves a required field empty, like an "Email Address" field, the form should display a
    message like "Please enter a valid email address." It’s not enough to just highlight the field in red or block
    submission without an explanation.</p>
  <p>This SC doesn't discourage indicating errors in other ways (like using colors, images, or other visual indicators),
    but these should be used in addition to a text description.</p>
  <p class="note">This SC doesn't specify how the error message should be displayed. The message can be shown at the top
    of the form or next to the specific field that has the error. The only requirement is that the errors are presented
    to
    users in text.</p>
  <p>This success criterion benefits users with visual impairments and users with cognitive impairments.</p>

  <h4>3.3.2 Labels or Instructions (Level A)</h4>
  <p>This SC ensures that if a user has to enter information (like typing text, selecting an option, or choosing from a
    dropdown), they are given clear labels or instructions so they understand what to do.</p>
  <p class="note">Placeholders should not be used as a replacement for labels. They should only be used as extra help.
  </p>
  <p>For example, a text input for "Phone number" should have a clear label and explain if it requires a specific format
    (like 0801-234-5678).</p>
  <p>This SC doesn't require labels to be programmatically associated with the input (like using <code>for</code> in
    HTML). That’s covered in SC 1.3.1 (Info and Relationships) and SC 4.1.2 (Name, Role, Value). This means a field
    might
    pass 3.3.2 if the label is visible on the screen, but still fail 1.3.1 or 4.1.2.</p>
  <p>This SC benefits all users, but it's especially important for screen reader users and users with cognitive
    impairments.</p>

  <h4>3.3.3 Error Suggestion (Level AA)</h4>
  <p>This SC ensures that if there's an input error, then appropriate suggestions are provided to help users fix it. <a
      href="#error-identification">3.3.1 Error Identification</a> ensures that users are notified of the error, while
    this
    SC ensures they get help resolving it.</p>
  <p>An example: If a user enters an incorrect email format, the form can provide a suggestion like "The email should be
    in the format example@email.com."</p>
  <p>This SC helps users with certain learning disabilities, visual impairments, and motor impairments.</p>
  <p class="note">In short: SC 3.3.1 says, “There’s a problem here” (e.g., "This field is required"), and SC 3.3.3 adds,
    “Here’s how to fix it” (e.g., "Please enter your phone number in this format: 0801-234-5678").</p>

  <h4>3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)</h4>
  <p>This SC ensures that users with disabilities can avoid serious consequences from mistakes when performing actions
    that can’t be reversed. If a user is about to do something serious and permanent—like spending money, signing a
    contract, or deleting important data—the website or app should help them avoid mistakes by:</p>
  <ul>
    <li>Letting them review and confirm the information first</li>
    <li>Allowing them to cancel the action</li>
    <li>Giving them a way to undo the action if a mistake happens</li>
  </ul>
  <p>An example: A user booking a flight should see a review screen with travel details, a “Confirm Purchase” button,
    and
    a “Cancel” or “Back” option before final payment.</p>
  <p>A real-life example of this SC being done right is the UK visa application process.</p>
  <p>This SC helps users with reading disabilities (who may enter incorrect information), users with motor disabilities
    (who may accidentally click the wrong button), and users with cognitive or memory disabilities (who may forget to
    double-check or get confused by unclear steps).</p>
  <p class="note">This SC only applies to actions with serious consequences. It doesn’t apply to everyday actions like
    changing a profile photo or saving a blog draft.</p>

  <h4>3.3.5 Help (Level AAA)</h4>
  <p>This SC ensures that users can avoid mistakes by providing contextual help. If a webpage has a form or task that
    might be confusing, and a label alone isn’t sufficient, then additional help must be provided. This help should be
    obvious to users.</p>
  <p>Contextual help could be a tooltip, hint, or short guidance text.</p>
  <p>For example, if a form field is labeled “Tax ID,” some users might not know what that is or where to find it.
    Adding
    a “?” icon next to the field that opens an explanation like “This is your TIN (Tax Identification Number), usually
    found on your tax documents or issued by FIRS,” helps clarify things.</p>
  <p>This SC helps people with intellectual disabilities.</p>

  <h4>3.3.6 Error Prevention (All) (Level AAA)</h4>
  <p>This SC ensures that whenever a website asks users to submit information (like filling and submitting a form), it
    must allow users to either undo the action, check for errors before finalizing, or confirm the information before
    submission.</p>
  <p>For example, if someone is submitting an online scholarship form, and the form highlights errors, allows them to
    fix
    the mistakes, shows a summary screen to confirm the information, or sends a confirmation email with an “Edit
    Submission” link—then that form passes this criterion.</p>
  <p>This SC helps users with cognitive disabilities, users with low literacy, and users who may have difficulty using a
    mouse or keyboard.</p>

  <h4 class="inline-block me-3">3.3.7 Redundant Entry (Level A)</h4><span class="new-badge">New to WCAG 2.2</span>
  <p>This SC ensures that users don’t have to enter the same information more than once. If a website or app asks users
    to
    re-enter the same data during a multi-step process, it should <strong>auto-fill</strong> it or allow users to
    <strong>re-use</strong> the previously entered data.
  </p>
  <p>To conform to this criterion, you should:</p>
  <ul>
    <li>Auto-fill fields from previous steps when possible</li>
    <li>Provide checkboxes to reuse earlier values (e.g., “Same as above”)</li>
    <li>Show previous entries on the same page so users can copy/paste them if needed</li>
    <li>Avoid asking for the same info again unless absolutely necessary</li>
  </ul>
  <p>This SC has exceptions. It doesn’t apply if the repetition is required for security (e.g., confirming a password),
    if
    the info is no longer valid, if users are uploading a file instead of typing, or if the repetition is part of the
    activity (like memory games).</p>
  <p>This SC helps users with cognitive disabilities and users with mobility impairments.</p>

  <h4 id="accessible-authentication-minimum">3.3.8 Accessible Authentication (Minimum) (Level AA)</h4><span
    class="new-badge">New to WCAG 2.2</span>
  <p>This SC ensures that logging in is possible with minimal mental effort. Users should not have to solve cognitive
    function tests (like solving puzzles, remembering passwords, or recognizing images) just to log in or prove their
    identity—<strong>unless there is an accessible alternative</strong>.</p>
  <p>Cognitive function tests include tasks that rely on memory, problem-solving, or pattern recognition. Examples:</p>
  <ul>
    <li>Typing a memorized password</li>
    <li>Solving a CAPTCHA with distorted text</li>
    <li>Selecting all images with buses</li>
    <li>Remembering a specific pattern or sequence</li>
  </ul>
  <p>To meet this SC, offer at least one of the following alternatives:</p>
  <ul>
    <li>Biometrics (Face ID, fingerprint)</li>
    <li>Link-based login (“Send me a login link to my email”)</li>
    <li>Copy-paste method (“Enter this one-time code we sent you”)</li>
    <li>Password manager support (let the browser or device auto-fill login credentials)</li>
  </ul>
  <p>For example, if a user is asked to upload a photo of a specific object to prove they’re human, the website should
    offer an alternative like biometric or link-based login.</p>
  <p>While this SC discourages requiring users to type passwords, it’s acceptable in some cases (like creating a
    password
    to be saved by a password manager). In such cases, there should be an option to show the password while typing.</p>
  <p>This SC helps users with cognitive disabilities.</p>

  <h4 class="inline-block me-3">3.3.9 Accessible Authentication (Enhanced) (Level AAA)</h4><span class="new-badge">New
    to
    WCAG 2.2</span>
  <p>This SC is an enhanced version of <a href="#accessible-authentication-minimum">3.3.8 Accessible Authentication
      (Minimum)</a>, but without exceptions for object recognition—even if the content is user-generated. In addition to
    the requirements of 3.3.8:</p>
  <ul>
    <li>You cannot ask users to identify images they uploaded earlier (e.g., "Which of these 3 images did you upload?")
    </li>
    <li>You cannot show a grid of images and ask “Which ones show a traffic light?” (even if it’s based on the user’s
      own
      content)</li>
  </ul>
  <p>This SC helps users with cognitive disabilities.</p>

  <h3>Conclusion</h3>
  <p>I’ve provided a breakdown of the Understandable principle in WCAG 2.2 using simpler language—which is how I prefer
    to
    read it. If you're just looking to understand the guidelines and success criteria, I hope this article has been
    helpful. If you're looking to implement them, I recommend reading the official WCAG documentation for more detailed
    implementation guidance.</p>

  <p>YAY!! I was able to write this over the weekend. I’ll be reading the last principle, Robust, by Monday and hope to
    write about that soon too. So, I’ll see you soon!</p>

  <h3>Resources</h3>
  <ul>
    <li>
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/readable" target="_blank"
        rel="noopener noreferrer">Understanding Guideline 3.1: Readable</a>
    </li>
    <li>
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/predictable" target="_blank"
        rel="noopener noreferrer">Understanding Guideline 3.2: Predictable</a>
    </li>
    <li>
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/input-assistance" target="_blank"
        rel="noopener noreferrer">Understanding Guideline 3.3: Input Assistance</a>
    </li>
    <li>For 3.1.4 Abbreviations
      <a href="https://www.acronymfinder.com/" target="_blank" rel="noopener noreferrer">Acronym finder</a>
    </li>
    <li>For 3.1.4 Abbreviations
      <a href="https://www.abbreviations.com/" target="_blank" rel="noopener noreferrer">Abbreviations.com</a>
    </li>
    <li> For 3.1.5 Reading Level
      <a href="https://uis.unesco.org/en/topic/international-standard-classification-education-isced" target="_blank"
        rel="noopener noreferrer">International Standard Classification of Education (ISCED)</a>
    </li>
    <li>For 3.1.5 Reading Level
      <a href="https://www.plainenglish.co.uk/campaigning/examples.html" target="_blank" rel="noopener noreferrer">The
        Plain English Campaign Web site</a>
    </li>
    <li>
      <a href="https://www.ibm.com/able/" target="_blank" rel="noopener noreferrer">IBM Accessibility</a>
    </li>
  </ul>
</div>
