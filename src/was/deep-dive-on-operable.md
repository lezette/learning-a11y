---
title: "An overview of the Operable principle"
description: "A breakdown of the WCAG 2.2 Operable principle"
tags: ["was", "wcag", "tutorial"]
permalink: "was/{{ title | slug }}/"
date: "2025-03-20"
layout: "blog-layout"
---

<div class="blog">
  <p>The WCAG Operable principle states that your UI component or navigation must be operable.</p>
  <p>What this means plainly is that you need to build your component in a way that doesn't block your users from
    viewing
    or performing certain actions regardless of their input type.</p>

  <p class="big-text">So let's look at the guidelines under this principle</p>

  <p>Here are the guidelines to ensure your platform is operable</p>

  <h3 id="keyboard-accessible">2.1 Keyboard Accessible</h3>
  <p>This guideline ensures that all functionalities are available from keyboard or keystroke input.</p>
  <p>If content can be operated through the keyboard, it means people who use screen readers, alternative keyboards,
    keyboard emulators (like speech input software, switch controls like sip-and-puff, and on-screen keyboards) can use
    your platform. Many people rely on keyboard or keyboard emulators. Keyboard input has a lot of flexibility, making
    it
    one of the most operable inputs for people with different disabilities.</p>
  <p>This guideline has four Success Criteria:</p>

  <h4 id="2.1.1">2.1.1 Keyboard (Level A)</h4>
  <p>This Success Criterion (SC) ensures that every operation can be performed using the keyboard except freehand
    movements.</p>
  <p>In this case, freehand movements mean functions that require input depending on the user's path of movement and not
    just endpoints. Examples are watercolor painting.</p>
  <p>Drag and drop (when drop paths are not relevant) are not examples of freehand movement, so a keyboard alternative
    to
    drag and drop is required.</p>
  <p>For this guideline, as long as a user can carry out functions through the keyboard, they pass this SC. For example,
    if you have a search with a button accessible only by mouse, but keyboard users can still press the <kbd>Enter</kbd>
    key to submit, they pass this SC.</p>
  <p>Another example of passing this SC is a drag-and-drop feature that also supports <code>cut</code> and
    <code>paste</code> or another way to move the object.
  </p>

  <p>This SC benefits people who are blind or have low vision and people with certain motor impairments.</p>

  <h4>2.1.2 No Keyboard Trap (Level A)</h4>
  <p>This SC ensures that users have a way to navigate out of a component. Basically, if content can receive focus using
    the keyboard, users should be able to move the focus away instead of being trapped within hidden subsections of that
    component.</p>
  <p>An example of meeting this SC is ensuring that when a user opens a modal, the modal receives focus, and the rest of
    the page cannot receive focus until the modal is closed.</p>
  <p>This SC benefits keyboard users.</p>

  <h4>2.1.3 Keyboard No Exception (Level AAA)</h4>
  <p>This, like <a href="#2.1.1">2.1.1</a>, ensures all functionality is operable via keyboard alone but without
    exceptions.</p>
  <p>Guideline 2.1.1 allows rare exceptions (for example, certain complex interactions like some drag-and-drop
    features).
    In contrast, 2.1.3 requires that every interaction be accessible via keyboard, including those complex interactions
    typically exempted.</p>

  <h4>2.1.4 Single Key Shortcut (Level A)</h4>
  <p>This SC ensures that single-character keyboard shortcuts can either be remapped or turned off.</p>
  <p>When a single key is used as a shortcut, it could unintentionally activate for speech input users or keyboard users
    prone to accidentally hitting keys, leading to a frustrating experience. To ensure compliance, WCAG strongly
    discourages single-character shortcuts, but if used, there should be a way to either:</p>

  <ul>
    <li>Turn it off</li>
    <li>Remap the shortcut to include non-printable keyboard keys like <kbd>Ctrl</kbd> or <kbd>Shift</kbd></li>
    <li>Make it available only on focus</li>
  </ul>
  <p>This SC benefits people who use speech input, keyboard users with dexterity challenges, and users with cognitive
    impairments who can remap the shortcut to perform the same action across different platforms.</p>

  <h3 id="enough-time">2.2 Enough Time</h3>
  <p>This guideline ensures that enough time is provided for users to read content and complete tasks because many users
    with disabilities might need more time. If users aren't given enough time, they may not be able to complete tasks,
    read content, or find information, making your platform inaccessible to them.</p>

  <p>The Success Criteria for this guideline are:</p>
  <h4>2.2.1 Timing Adjustable (Level A)</h4>
  <p>This SC ensures that users have adequate time to complete tasks. If there's a time limit set by a component, users
    should be able to:</p>
  <ul>
    <li>Adjust the time limit.</li>
    <li>Turn it off before encountering it.</li>
    <li>Extend it by giving at least a 20-second warning to extend it through a simple action like pressing any key.
    </li>
  </ul>

  <p>Exceptions to this SC include:</p>
  <ul>
    <li>Time-based real-time events, like online auctions.</li>
    <li>Activities where extending the time would invalidate the activity (e.g., typing tests).</li>
    <li>Activities with time limits longer than 20 hours.</li>
  </ul>
  <p>An example of meeting this SC is a ticket-purchase platform that provides a warning as users approach the time
    limit,
    with an option to extend the time.</p>

  <p>This SC benefits people with low vision, cognitive disabilities, and physical disabilities who may require extra
    time.</p>

  <h4>2.2.2 Pause, Stop, Hide (Level A)</h4>
  <p>This SC ensures that for moving, blinking, scrolling, or auto-updating content that autoplays, lasts for more than
    five seconds, and is presented alongside static content, users have a way to pause, stop, or hide it unless it's
    essential.</p>
  <p>An example of meeting this SC is an animated carousel that auto-plays every few seconds but also has a pause button
    allowing users to turn off autoplay.</p>
  <p>This SC benefits people with cognitive impairments, screen reader users, magnification software users, and people
    with motor impairments.</p>

  <h4>2.2.3 No Timing (Level AAA)</h4>
  <p>This SC ensures that users do not face a time limit unless it's for videos or live events. If timing isn't critical
    to the activity, users should have unlimited time to complete tasks, read, and interact with content.</p>
  <p>An example of meeting this SC is an online training module that allows users unlimited time to move through each
    step
    rather than automatically progressing or timing out.</p>
  <p>This SC benefits people with cognitive impairments, motor impairments, and visual impairments who need extra time
    to
    interact comfortably.</p>

  <h4>2.2.4 Interruptions (Level AAA)</h4>
  <p>This SC ensures users can turn off or delay interruptions unless they involve an emergency. This helps users with
    attention disorders by enabling them to focus on content.</p>
  <p>An example of meeting this SC is ensuring pop-up advertisements don't automatically appear, covering content and
    distracting users from their current activity.</p>
  <p>This SC benefits users with cognitive impairments, motor impairments, and screen reader users.</p>

  <h4>2.2.5 Re-authenticating (Level AAA)</h4>
  <p>This SC ensures users do not have to restart a process or lose content due to re-authentication.</p>
  <p>If users are logged out due to inactivity or session timeout, they should retain their progress after logging back
    in
    without needing to start over. Some sites implement authentication time limits for security, but losing progress can
    be frustrating.</p>
  <p>An example of meeting this SC is an online form that auto-saves on session timeout, allowing users to continue from
    where they left off after logging back in.</p>
  <p>This SC benefits people with cognitive impairments and motor impairments who might need additional time.</p>

  <p class="note-no-prefix">This SC demonstrates how accessibility benefits everyone, though it's crucial for some
    users.
    Losing progress can be frustrating for everyone, but for some, it creates significant barriers.</p>

  <h4>2.2.6 Timeouts (Level AAA)</h4>
  <p>This SC ensures users are informed in advance if a webpage has a timeout that could cause loss of progress or
    require
    re-authentication. Users should receive a clear warning before a session ends, with an option to extend the session
    if
    possible.</p>
  <p>An example of meeting this SC is a banking app that logs users out after inactivity but displays a pop-up warning
    users two minutes before logging out, giving them an option to stay logged in.</p>
  <p>This SC benefits all users, particularly those who may need extra time due to cognitive or motor impairments.</p>

  <h3 id="seizures-and-physical-reactions">2.3 Seizures and Physical Reactions</h3>
  <p>This guideline ensures your platform doesn't trigger seizures in users. Flashing content can cause seizures in
    individuals with seizure disorders. If a platform triggers photosensitive seizures, it becomes unusable for affected
    users. The objective is to avoid content that might trigger seizures even when viewed briefly.</p>

  <h4>2.3.1 Three Flashes or Below Threshold (Level A)</h4>
  <p>This Success Criterion ensures that content either avoids flashing or keeps it below thresholds, as rapid flashing
    can trigger seizures, particularly in people with photosensitive epilepsy.</p>
  <p>The recommended threshold is no more than three flashes per second or three general flashes.</p>
  <p>If flashing content is unavoidable, it must be dimmed or slowed to stay below the seizure-triggering threshold.</p>
  <p class="note">If a component violates this criterion, it can render the entire page inaccessible, even if other
    Success Criteria are met.</p>

  <p>To meet this SC, websites <strong>must not</strong> contain content that:</p>
  <ul>
    <li>Flashes more than three times per second</li>
    <li>Has high-contrast flashes</li>
    <li>Includes flashing that covers a large area of the screen</li>
  </ul>
  <p>The <a href="https://www.w3.org/TR/WCAG21/#dfn-general-flash-and-red-flash-thresholds" target="_blank"
      rel="noopener noreferrer">general flash and red flash thresholds</a> are based on research into photosensitive
    epilepsy and help determine if flashing content is safe.</p>
  <p class="note">You can use the Photosensitive Epilepsy Analysis Tool (PEAT) to test if a video or animation exceeds
    safe flash limits.</p>
  <p>An example of meeting this SC is a game that uses explosion effects where flashing is slowed down or dimmed to
    remain
    within safe limits.</p>
  <p>This SC benefits people with photosensitive epilepsy.</p>

  <h4>2.3.2 Three Flashes (Level AAA)</h4>
  <p>This SC ensures content does not flash more than three times per second, regardless of contrast or size. It is a
    stricter version of SC 2.3.1, eliminating all rapid flashing entirely.</p>
  <p>An example of meeting this SC is a website banner showing "50% OFF SALE!" but flashing fewer than three times per
    second.</p>
  <p>SC 2.3.1 allows some limited flashing if dim or small, whereas SC 2.3.2 completely prohibits any rapid flashing.
  </p>

  <h4>2.3.3 Animation from Interactions (Level AAA)</h4>
  <p>This SC ensures animations respect user preferences for reduced motion unless the animation is essential to
    functionality.</p>
  <p>Some users may experience discomfort, dizziness, or difficulty focusing when animations unexpectedly occur from
    scrolling, hovering, or clicking. Motion-based animations must be disabled if users have motion sensitivity
    preferences enabled (e.g., "Reduce Motion" in their operating system).</p>
  <p class="note">This SC doesn't ban animations—it just requires an option to disable them unless essential.</p>
  <p>An example of meeting this SC is a website using parallax scrolling effects that disable the effect for users who
    have enabled <code>prefers-reduced-motion</code>.</p>
  <p>This SC benefits users with vestibular (inner ear) disorders.</p>

  <h3>2.4 Navigable</h3>
  <p>This guideline helps users understand their location on a page and find the content they need. It also ensures that
    information is presented in a logical, linear order, especially beneficial for screen reader users. Some Success
    Criteria in this guideline overlap with guideline 1.3 Adaptable, such as using headings.</p>

  <h4>2.4.1 Bypass Blocks (Level A)</h4>
  <p>This SC ensures that users have a way to skip repetitive content like menus and jump directly to the main content.
  </p>
  <p>"Bypass Blocks" ensures that users navigating a website using keyboard or assistive technologies (ATs) can navigate
    quickly and efficiently, avoiding frustration from repeatedly tabbing through headers, navigation bars, or long
    lists.
  </p>
  <p>The most common example of meeting this SC is providing a skip link to bypass the navigation menu.</p>
  <p class="note-no-prefix">Tip: You can hide the skip link visually and show it only when a user presses the Tab key.
    Ensure the skip link is the first link on your webpage, before repetitive content; otherwise, it defeats its
    purpose.
  </p>
  <p>This SC benefits users who rely on screen readers and keyboard navigation.</p>

  <h4>2.4.2 Page Titled (Level A)</h4>
  <p>This SC ensures users can distinguish between different pages by providing descriptive page titles.</p>
  <p>Page titles help users understand their location within a website and briefly describe the page content.</p>
  <p>An example of meeting this SC is adding a descriptive HTML <code>&lt;title&gt;</code> tag within the
    <code>&lt;head&gt;</code> element.
  </p>
  <p>This SC benefits screen reader users and those with motor impairments.</p>

  <h4>2.4.3 Focus Order (Level A)</h4>
  <p>This SC ensures keyboard navigation follows a logical order.</p>
  <p>It prevents confusion and ensures keyboard focus doesn't jump randomly or skip essential elements. Interactive
    elements like links, buttons, and form inputs should sequentially receive keyboard focus.</p>
  <p>An example of meeting this SC is a login form where keyboard focus moves logically from username input to password
    input and then to the submit button.</p>
  <p>This SC benefits keyboard and screen reader users.</p>

  <h4>2.4.4 Link Purpose (In Context) (Level A)</h4>
  <p>This SC ensures that link text or surrounding context clearly indicates where the link leads or what it will do.
    Users should not have to guess or click a link to understand its destination or action.</p>
  <p>To meet this SC, avoid vague link texts like "click here" or "read more" unless their context clearly indicates
    their
    purpose.</p>
  <p>An example is: "To download the 'Book Title' ebook, click here," where "click here" is a link. However, the best
    practice is always to use meaningful link text.</p>
  <p>This SC benefits visually impaired users, screen reader users, people with cognitive disabilities, and
    keyboard-only
    users.</p>

  <h4 id="multiple-ways">2.4.5 Multiple Ways (Level AA)</h4>
  <p>This SC ensures multiple methods exist for users to find a webpage unless the page is part of a sequential process.
    It simplifies content discovery, particularly for users who might struggle with complex navigation structures.</p>
  <p>Users shouldn't be limited to a single navigation method (such as a menu). Instead, provide multiple options like
    search, table of contents, site maps, breadcrumb navigation, or links to related content.</p>
  <p>An example of meeting this SC is a blog using categories and tags to help users find related posts.</p>
  <p>This SC benefits screen reader users, people with cognitive disabilities, and users with motor impairments.</p>

  <h4>2.4.6 Headings and Labels (Level AA)</h4>
  <p>This SC ensures that headings and labels are descriptive, helping users understand what information follows and how
    webpage sections are organized.</p>
  <p>Used alongside SC 1.3.1 (Info and Relationships, Level AA), this SC is particularly helpful for screen reader
    users,
    enabling quick scanning of page sections.</p>
  <p>To meet this SC:</p>
  <ul>
    <li>Use clear, descriptive headings summarizing each section's content.</li>
    <li>Ensure form labels clearly describe the information required.</li>
  </ul>
  <p>This SC benefits screen reader users and users with cognitive disabilities.</p>

  <p class="note">This SC ensures headings and labels are descriptive, differing from SC 1.3.1, which focuses on
    structural understanding by assistive technology. SC 2.4.6 emphasizes meaningfulness, whereas SC 1.3.1 emphasizes
    proper HTML structure (e.g., using proper heading tags like <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, etc.).
    It's possible to meet SC 1.3.1 without meeting SC 2.4.6, and vice versa.</p>

  <h4>2.4.7 Focus Visible (Level AA)</h4>
  <p>This SC ensures elements receiving keyboard focus have a visible indicator, assisting users in navigating
    effectively.</p>
  <p>To meet this SC, avoid removing the browser's default focus indicator unless you provide a highly visible
    alternative.</p>
  <p class="note">SC 2.1.1 ensures keyboard operability, while SC 2.4.7 ensures visibility of the keyboard focus
    indicator.</p>

  <p>Though primarily addressing keyboard focus, visible focus indicators may benefit mouse and touch device users:</p>
  <ul>
    <li>Users switching between keyboard and mouse can maintain their position easily.</li>
    <li>Users with cognitive disabilities or low vision may find visible indicators helpful regardless of input type.
    </li>
    <li>Keeping the focus style visible even for mouse clicks is a good accessibility practice.</li>
  </ul>
  <p class="note">This SC ensures a visible focus indicator exists but doesn't specify its visibility criteria. WCAG 2.2
    introduced <a href="#focus-appearance">2.4.13 Focus Appearance (Level AAA)</a>, specifying high visibility
    requirements.</p>

  <p>This SC benefits keyboard users and individuals with cognitive disabilities affecting memory.</p>

  <h4>2.4.8 Location (Level AAA)</h4>
  <p>This SC, similar to <a href="#multiple-ways">2.4.5 Multiple Ways</a>, emphasizes ensuring users understand the
    current page's position within a site.</p>
  <p>This prevents users from feeling lost and aids navigation back to previous sections or the homepage.</p>
  <p>To meet this SC, use breadcrumb navigation, highlight the current page in menus, or provide structured URLs (e.g.,
    https://example.com/products/audio/headphones clearly shows "headphones" under "audio" in the "products" section).
  </p>

  <p>This SC benefits users with cognitive disabilities related to memory and screen reader users.</p>

  <h4>2.4.9 Link Purpose (Link Only) (Level AAA)</h4>
  <p>This SC extends SC 2.4.4, ensuring all links have descriptive names without relying solely on surrounding context,
    unless the context makes the link's purpose evident.</p>
  <p>Descriptive link text benefits all users, especially assistive technology users. Screen reader users navigating by
    links alone can understand the link's purpose without additional context.</p>
  <p>An example is "Read more about our services" instead of "click here."</p>
  <p>This SC benefits users with cognitive disabilities, screen reader users, and those with motor impairments.</p>

  <h4>2.4.10 Section Headings (Level AAA)</h4>
  <p>This SC ensures clear headings are provided for page sections, helping users easily understand and navigate
    content.
  </p>
  <p>To meet this SC, organize pages using descriptive headings at the start of each section.</p>
  <p>This SC benefits visually impaired users, users with learning disabilities, and keyboard users.</p>

  <h4 id="focus-not-obscured-minimum" class="inline-block me-3">2.4.11 Focus Not Obscured (Minimum) (Level AA)</h4><span
    class="new-badge">New to WCAG 2.2</span>
  <p>This SC ensures that when keyboard users navigate the page, the focused element is not completely hidden by other
    content. A focusable element must be at least partially visible so users do not need to scroll to locate it.</p>
  <p>This SC prevents users from becoming lost or disoriented while navigating with a keyboard. If the focused element
    is
    entirely hidden, it can make the page unusable for keyboard navigation.</p>

  <p>To meet this SC, ensure that when an element receives focus, at least part of it remains visible. Adjust styling
    for
    sticky headers, overlays, or pop-ups to ensure focused elements remain partially visible, such as by using CSS
    <code>scroll-margin</code>.
  </p>
  <p>This SC benefits keyboard-only users, screen magnifier users, and users with cognitive disabilities.</p>

  <h4 class="inline-block me-3">2.4.12 Focus Not Obscured (Enhanced) (Level AAA)</h4><span class="new-badge">New to WCAG
    2.2</span>
  <p>This SC expands on <a href="#focus-not-obscured-minimum">2.4.11 Focus Not Obscured (Minimum)</a>, ensuring the
    focused element is fully visible.</p>
  <p>While SC 2.4.11 ensures elements are at least partially visible (e.g., a form input isn't fully hidden by a sticky
    header), SC 2.4.12 requires elements to be completely visible (e.g., the form input is fully visible and
    unobstructed).</p>

  <h4 class="inline-block me-3" id="focus-appearance">2.4.13 Focus Appearance (Level AAA)</h4><span
    class="new-badge">New
    to WCAG 2.2</span>
  <p>This SC ensures the keyboard focus indicator is highly visible, making it easier for users to identify the focused
    element.</p>
  <p>To meet this SC, ensure the keyboard focus indicator:</p>
  <ul>
    <li>Has an area at least 2px thicker than the unfocused state.</li>
    <li>Has a contrast ratio of at least 3:1 between the focused and unfocused states.</li>
  </ul>
  <p>For example, if an unfocused element has a 1px border, its focused state should have at least a 3px border. If
    color
    indicates focus, the contrast ratio between focused and unfocused states should be at least 3:1.</p>
  <p>This SC benefits users with low vision, cognitive disabilities, and keyboard users.</p>

  <h3>2.5 Input Modalities</h3>
  <p>The goal of this guideline is to ensure that people can interact with websites and apps using various input methods
    beyond just the keyboard. People may interact using a mouse pointer, touch screen, stylus, or laser pointer.</p>
  <p>Not everyone prefers or can use a traditional keyboard or mouse; some people rely on voice commands, switch
    controls,
    or eye-tracking devices.</p>

  <h4>2.5.1 Pointer Gestures (Level A)</h4>
  <p>This SC ensures users can operate touchscreens with one finger and simplified gestures. Complex operations
    requiring
    multipoint or <strong>path-based gestures</strong> (like pinch-to-zoom or two-finger swipes) must offer a
    single-pointer alternative. This SC covers <em>path-based</em> gestures rather than free-form, as free-form gesture
    alternatives can be difficult or impossible.</p>
  <p>An example of meeting this SC is a photo gallery that requires two-finger swipes to move between images but also
    provides arrow buttons for single-tap navigation.</p>
  <p>This SC benefits people with motor impairments and users with cognitive or learning disabilities.</p>

  <h4>2.5.2 Pointer Cancellation (Level A)</h4>
  <p>This SC ensures users can cancel or undo unintended actions when using a mouse or touch device.</p>
  <p>Users sometimes accidentally tap, click, or press elements. This SC ensures they can cancel the action before
    completion.</p>
  <p>To meet this criterion:</p>
  <ul>
    <li><strong>No</strong> immediate action should occur on <strong>"down"</strong> events; actions should only
      complete
      on the "up" event.</li>
    <li>Allow users to move the pointer away to cancel before releasing.</li>
    <li>If an action must occur on "down" (like pressing a digital piano key), provide a method to undo or confirm the
      action.</li>
  </ul>
  <p>This SC doesn't apply when completing the action on the down-event is essential.</p>
  <p>An accessible way to incorporate pointer cancellation is to activate actions on the "up-event" (upon pointer
    release).</p>
  <p>An example is a link that only activates when the user releases the click or tap.</p>
  <p>This SC benefits everyone, especially users with visual disabilities, cognitive limitations, and motor impairments.
  </p>

  <h4>2.5.3 Label in Name (Level A)</h4>
  <p>This SC ensures the visible label of an interactive element matches its accessible name. Consistency helps users
    with
    disabilities. If a button visually displays "Search," a screen reader should also announce "Search," not something
    different like "Find" or "Go." Users relying on voice interaction also use visible labels in their commands. Thus,
    saying “Click 'Send'” should work if the button visually displays "Send."</p>
  <p>To meet this SC, ensure the visible text on buttons or links matches their programmatic names (such as
    <code>aria-label</code>, <code>alt text</code>, or <code>name</code> attributes).
  </p>
  <p>This SC benefits voice command users and screen reader users.</p>

  <h4>2.5.4 Motion Actuation (Level A)</h4>
  <p>This SC ensures that performing an operation does not depend solely on device motion.</p>
  <p>To meet this SC, ensure users can disable motion-based controls (like shaking or tilting) and provide alternative
    controls.</p>
  <p>For example, an app might allow shaking the device to perform an "Undo" action. However, this isn't possible for
    users with motor impairments or devices mounted to a wheelchair. Additionally, users with tremors might accidentally
    trigger motion-based actions, making alternative controls essential.</p>
  <p>An example of meeting this SC is an app that allows tilting to confirm an action but also provides buttons to
    perform
    the same action.</p>
  <p>This SC benefits users with motor impairments.</p>

  <h4 id="target-size-enhanced">2.5.5 Target Size (Enhanced) (Level AAA)</h4>
  <p>This SC ensures interactive elements (buttons, links, and controls) are large enough to be easily clicked or tapped
    without accidental activation. Users with motor impairments, tremors, or touchscreen users often struggle with small
    or closely packed elements.</p>
  <p>To meet this SC:</p>
  <ul>
    <li>Ensure interactive elements are at least <strong>44x44</strong> pixels.</li>
    <li>If smaller, provide sufficient spacing to prevent accidental clicks.</li>
    <li>Use padding or whitespace to increase clickable areas without enlarging the element itself.</li>
  </ul>
  <p>An example is a modal close button (X) with a 44x44 pixel tap area.</p>
  <p>This SC benefits users with motor impairments and low vision.</p>

  <h4>2.5.6 Concurrent Input Mechanisms (Level AAA)</h4>
  <p>This SC ensures users can switch freely between different input methods unless essential restrictions exist.</p>
  <p>Allow users to interact using multiple inputs like keyboard, mouse, voice control, switch devices, or eye-tracking
    software. Don't disable standard input methods unless absolutely necessary, and ensure switching inputs doesn't
    erase
    user progress (e.g., switching from touch to keyboard shouldn't reset form data).</p>
  <p>This SC benefits users with motor impairments, voice control users, and users employing multiple input methods.</p>

  <h4 class="inline-block me-3">2.5.7 Dragging Movements (Level AA)</h4> <span class="new-badge">New to WCAG 2.2</span>
  <p>This SC ensures there's a simpler alternative for actions requiring dragging unless dragging is essential. Users
    unable to perform drag-and-drop actions (due to motor impairments or assistive technology limitations) should have
    alternatives like simple clicks or keyboard actions.</p>
  <p>To meet this SC, provide clearly visible and easily accessible alternatives to dragging actions.</p>
  <p>This SC benefits users who find dragging movements challenging.</p>

  <h4 class="inline-block me-3">2.5.8 Target Size (Minimum) (Level AA)</h4><span class="new-badge">New to WCAG
    2.2</span>
  <p>This SC ensures interactive elements are large enough (minimum 24x24 pixels) for comfortable tapping or clicking
    without accidental activation, except when an equivalent control meeting this size exists, the target is inline, or
    essential.</p>
  <p>Meeting this minimum is recommended regardless of spacing; however, for important controls, aim for <a
      href="#target-size-enhanced">2.5.5 Target Size (Enhanced)</a>.</p>
  <p>This SC benefits users with motor impairments and low vision.</p>

  <h3>Conclusions</h3>
  <p>I did my best to cover most of the information covered in the Operable principle, however, I encourage you to read
    the actual WCAG documentaion, I have added the resources in the next section.</p>
  <p>I also encourage you to read other resources, I've added some of the ones I found helpful in the resources section
  </p>
  <p>This article took me longer than I hoped to complete because I actually realized that there were some guidelines or
    requirement I didn't understand. I had to read some additional resources while going through the WCAG documentaion
  </p>
  <p>I'm so glad I did this, On to the next guideline, While I'm done with the studying the Understandable guideline,
    I'll be spending the rest of the week and weekend writing on the guideline, That should be quick (famous last words
    <span aria-hidden="true">🤓</span>). I can't wait to share that with you as well. So the next time you'll hear from
    me would be hopefully on Monday 24th March with the next WCAG guideline.
  </p>
  <p>In the meantime I'll also spend time re-running my test on AriaAT which was removed due to a bug in the system. I'm
    going in with less anxiety thus time.</p>

  <p>This has been one of the most productive and structured period of my life recently. I wake up everyday excited
    about what new thing to learn on A11y. It's worth it</p>
  <p>Thank you for reading, I hope you learned something new today. I'll see you on Monday. Have a great weekend.</p>

  <!-- Resources -->
  <h3>Resources</h3>
  <ul>
    <li>
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard-accessible" target="_blank"
        rel="noopener noreferrer">Understanding Guideline 2.1: Keyboard Accessible
      </a>
    </li>
    <li>
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/enough-time" target="_blank"
        rel="noopener noreferrer">Understanding Guideline 2.2: Enough Time</a>
    </li>
    <li>
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/seizures-and-physical-reactions" target="_blank"
        rel="noopener noreferrer">Understanding Guideline 2.3: Seizures and Physical Reactions</a>
    </li>
    <li>
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/input-modalities" target="_blank"
        rel="noopener noreferrer">Understanding Guideline 2.5: Input Modalities</a>
    </li>
    <li>
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/navigable" target="_blank"
        rel="noopener noreferrer">Understanding Guideline 2.4: Navigable</a>
    </li>
    <li>
      <a href="https://trace.umd.edu/peat/" target="_blank" rel="noopener noreferrer">Photosensitive Epilepsy Analysis
        Tool (PEAT)</a>
    </li>
    <li>
      <a href="https://contentcreation.ai/writing-better-titles/" target="_blank" rel="noopener noreferrer">Writing
        Better Page Titles for SEO</a>
    </li>
    <li>
      <a href="https://www.smashingmagazine.com/2021/10/respecting-users-motion-preferences/" target="_blank"
        rel="noopener noreferrer">Respecting
        Users' Motion Preferences</a>
    </li>
  </ul>
</div>