---
title: 'How to build an accessible tab'
tags: ['tutorial', 'aria']
permalink: 'tutorial/{{ title | slug }}/'
date: '2025-08-08'
layout: 'blog-layout'
---

<div class="blog">

  <p>When building web components, it's always a good idea to use the native HTML elements available. However, there are
    times when you may need to create custom components. In such cases, it's crucial to ensure that those components
    behave like their native counterparts, especially when it comes to accessibility.</p>

  <p>For example, when creating a custom button, you'd need to add the <code>role="button"</code> ARIA attribute to
    mimic the native <code>&lt;button&gt;</code> element. Beyond that, you'd also want to ensure the component responds
    to keyboard interactions, such as the <kbd>Enter</kbd> or <kbd>Space</kbd> keys, to activate the button. This also
    includes setting up things like <code>tabindex</code>, managing focus, and handling other accessibility
    considerations.
  </p>

  <p>This tutorial, however, isn't about building custom buttons, it's about building a tab component. As of writing,
    there's no native HTML element specifically for tabs, making it essential to implement ARIA roles and behavior to
    make the component accessible.</p>

  <p>In this guide, I'll walk you through how to create an accessible tab component from scratch. The full
    code is available on <a href="https://codepen.io/leezee/pen/jEbwyWv" target="_blank"
      rel="noopener noreferrer">Codepen</a>
  </p>

  ### Prerequisite
  <p>To follow along with this tutorial, you'll need knowledge of:</p>
  <ul>
    <li>Basic HTML, CSS, and JavaScript knowledge</li>
    <li>ARIA</li>
  </ul>

  ### ARIA Authoring Practices (APG)

  <p>When I need to build components that aren't available as native HTML elements, I typically check the ARIA Authoring
    Practices Guide (APG) to review the accessibility considerations for the component. In this case, we'll be looking
    at the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabs/" target="_blank" rel="noopener noreferrer">Tabs
      Pattern</a>.</p>

  <p>The APG outlines the roles we'll be using for our tab component:</p>
  <ul>
    <li><a href="https://w3c.github.io/aria/#tablist" target="_blank" rel="noopener noreferrer">Tablist</a>: A list of
      tab elements that reference corresponding <code>tabpanel</code> elements.</li>
    <li><a href="https://w3c.github.io/aria/#tab" target="_blank" rel="noopener noreferrer">Tab</a>: A label that
      provides a mechanism for selecting the tab content that will be displayed.</li>
    <li><a href="https://w3c.github.io/aria/#tabpanel" target="_blank" rel="noopener noreferrer">Tabpanel</a>: A
      container for the content associated with a tab, where each tab is linked to its respective tabpanel.</li>
  </ul>

  <p>The APG also specifies key ARIA attributes for each role:</p>
  <ul>
    <li>The <strong>tablist</strong> SHOULD include an <code>aria-labelledby</code> attribute if the list has a visible
      label, or an <code>aria-label</code> if it doesn't.</li>
    <li>Each <strong>tab</strong> MUST include <code>aria-selected</code> (true or false), <code>tabindex</code>, and
      <code>aria-controls</code> attributes:
      <ul>
        <li><code>aria-selected</code>: to indicate the current state of the tab (whether it's active or not).</li>
        <li><code>tabindex</code>: The active tab should have tabindex="0" and inactive tabs should have tabindex="-1",
          to prevent them from being focusable until activated.</li>
        <li><code>aria-controls</code>: should point to the id of the respective tabpanel, this will link the tab to its
          associated tabpanel.</li>
      </ul>
    </li>
    <li>Each <strong>tabpanel</strong> MUST have <code>tabindex="0"</code> to ensure it's focusable when activated, and
      <code>aria-labelledby</code>. The <code>aria-labelledby</code> attribute should link to the <code>id</code> of the
      respective tab, to indicate which tab controls the panel.
    </li>
  </ul>

  ### Tab Behaviors
  <p>APG provides two examples of the tab behaviour:</p>
  <ul>
    <li><strong>Tabs With Automatic Activation:</strong> The tabs are automatically activated as they receive focus, and
      the respective panel is displayed. This behavior should ideally be the default. However, this behaviour is only
      recommended when switching tabs does not cause content loading delays or layout shifts. If delays are present,
      manual activation should be used to avoid a frustrating user experience.
    </li>
    <li><strong>Tabs With Manual Activation:</strong> The tabs are activated by pressing the <kbd>Space</kbd> or
      <kbd>Enter</kbd> key. This behavior works well in scenarios where the user might need to carefully choose or
      confirm the content they wish to view, such as in a form with dynamic content that could change based on the
      user's choice.
    </li>
  </ul>

  ### Accessibility Features
  <ul>
    <li><strong>Tab Indexing</strong>: The active tab has a <code>tabindex="0"</code>, while the other tabs have
      <code>tabindex="-1"</code>. This ensures that keyboard and screen reader users can move between content
      efficiently without having to go through all of the tabs.
    </li>
    <li><strong>Tabpanel Focus:</strong> The tabpanel has a tabindex="0" to make it easy for screen reader users to move
      from a tab to the beginning of the tabpanel content.</li>
    <li><strong>Keyboard Navigation:</strong> Keyboard users can navigate between tabs using the left and right arrow
      keys. The tab navigation is looped, so if the user is at the beginning of the tab list and presses the left arrow
      key, focus will move to the last tab.
    </li>
    <li><strong>Visible Focus State:</strong> The active tab has a visible style that doesn't rely on color alone, so
      users with low vision, color blindness, or high contrast settings can easily distinguish the active tab from the
      others.</li>
    <li><strong>Responsive Design:</strong> Relative units are used to specify the component's width (if provided),
      ensuring that the tab content remains accessible and visible when the screen is magnified.</li>
    <li><strong>Clear Labeling:</strong> The <strong>aria-labelledby</strong> attribute is used to associate the
      tabpanel with the corresponding tab, making it clear for screen reader users which content corresponds to which
      tab.</li>
    <li><strong>Focus Management:</strong> When a tab is activated (either through keyboard or mouse interaction), the
      focus should move to the tabpanel or the first interactive element inside the tabpanel, this ensures a smooth
      navigation for screen reader and keyboard users.</li>
    <li><strong>Consistent Order:</strong> Ensure that the tab focus follows a logical, visual order. For example, a
      keyboard user should not move from tab 1 to tab 6 and then to tab 3 if that isn't the visible order of the tabs.
      The tablist should follow the visual sequence, and each tabpanel should correspond to the active tab in that same
      order, to ensure a predictable navigation.
    </li>
    <li><strong>Auto-activation of Tabs:</strong> APG recommends that tabs should <strong>automatically
        activate</strong> when they receive focus, except when switching tabs could cause content delay, layout shifts,
      or page reloads. This allows for a simpler navigation experience for keyboard users.</li>
  </ul>

  ### Keyboard Interaction
  <ul>
    <li><kbd>Tab</kbd>:
      <ul>
        <li>Moves focus to the active tab element</li>
        <li>If a tab is focused, the focus moves to the next focusable element which should be the tabpanel, or the
          first focusable element in the tabpanel</li>
      </ul>
    </li>
    <li>In the tab list
      <ul>
        <li><kbd>Left Arrow</kbd>: Moves focus to the previous tab. If the first tab is focused, focus moves to the last
          tab in the list (looping behavior)</li>
        <li><kbd>Right Arrow</kbd>: Moves focus to the next tab. If the last tab is focused, focus moves to the first
          tab</li>
        <li><kbd>Home</kbd>: Moves focus to the first tab in the tab list.</li>
        <li><kbd>End</kbd>: Moves focus to the last tab in the tab list.</li>
        <li><kbd>Space</kbd> or <kbd>Enter</kbd>: Activates the focused tab if it wasn't activated automatically on
          focus</li>
        <li><kbd>Delete</kbd>(Optionally): If deletion is allowed, deletes the current tab and its associated tabpanel.
          After deletion, the next or previous tab is activated, depending on availability</li>
      </ul>
    </li>
  </ul>

  ### Implementation
  <p>In this implementation, I used Tailwind CSS for styling the elements, and I've ensured that the layout is flexible
    and responsive. The primary focus here is on the accessibility and functionality of the tab interaction, which I've
    implemented using TypeScript.</p>

  <h4>The <code>activateTab</code> Function</h4>
  <p>In the code, both the tab components use the <code>activateTab</code> function. The function takes three params
    <code>(tabs, panels, index)</code> however, you don't need that for your implementation. Ideally, you'll only need
    the <code>index</code> parameter.

    The function does the following:
  </p>
  <ul>
    <li>Sets the <code>aria-selected</code> attribute: This tells screen readers and other assistive technologies which
      tab is selected. The active tab gets <code>aria-selected="true"</code>, and inactive tabs get
      <code>aria-selected="false"</code>.
    </li>
    <li>Manages <code>tabindex</code> for Focus: The active tab has a <code>tabindex="0"</code>, which means it is
      focusable and navigable via keyboard. The inactive tabs get a <code>tabindex="-1"</code>, which makes them
      non-focusable until they're activated.</li>
    <li>Visibility of Content: Each tab has a <code>.active</code> class that is toggled to add an active style to the
      active tab. Each <code>tabpanel</code> has a corresponding <code>.active-panel</code> class that is toggled to
      show or hide the content based on the active tab. Only the tabpanel that corresponds to the selected tab is
      visible.</li>
    <li>Focus Handling: Finally, after making the tab active, <code>tabs[index].focus()</code> ensures that focus is
      moved to the selected tab, so the user can immediately interact with it, whether via keyboard or screen reader.
    </li>
  </ul>
  </p>

  <iframe height="500" style="width: 100%;" scrolling="no" title="Accessible Tab Panel"
    src="https://codepen.io/leezee/embed/jEbwyWv?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy"
    allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/leezee/pen/jEbwyWv"> Accessible Tab Panel</a> by Elizabeth (<a
      href="https://codepen.io/leezee">@leezee</a>) on <a href="https://codepen.io">CodePen</a>.
  </iframe>

  <p>Feel free to explore the working examples on CodePen and experiment with both versions of the tab component.</p>

  <hr>
  <p>If you found this tutorial helpful, connect with me for more accessibility tips and updates!</p>
</div>