# Scroll Page Watcher (CSS Only)

If your browser supports `animation-timeline: scroll()` CSS, a horizontal line will appear at the top of the screen as you scroll, indicating how far you have travelled down the page. If it doesn't, the line will not appear.

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: scroll()) {
    .body {
      padding-top: 1rem;
    }

    .scroll-watcher {
      height: 1rem;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1000;
      background-color: var(--timeline);
      scale: 0 1;
      transform-origin: left;

      animation: scroll-watcher linear;
      animation-timeline: scroll();
    }

    @keyframes scroll-watcher {
      to {
        scale: 1 1;
      }
    }
  }
}
```

This CSS code snippet includes the use of `@media` queries to target devices that prefer no-reduced motion and `@supports` to check if the browser supports the `animation-timeline: scroll()` property. If supported, it triggers the animation for the `.scroll-watcher` class.

## Testing

Tested on Windows 10 with:

- Chrome
- Firefox
- Microsoft Edge

The page has been tested in both browser and device views.
