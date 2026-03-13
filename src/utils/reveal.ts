// Simple reveal-on-scroll utility using IntersectionObserver
export function initReveal(rootMargin = '0px 0px -10% 0px', threshold = 0.12, defaultStagger = 80) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  // helper: apply stagger delays for containers marked with data-reveal-stagger
  const staggerContainers = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal-stagger]'));
  staggerContainers.forEach((container) => {
    const staggerAttr = container.getAttribute('data-reveal-stagger');
    const stagger = staggerAttr ? Number(staggerAttr) : defaultStagger;
    const items = Array.from(container.querySelectorAll<HTMLElement>('.reveal'));
    items.forEach((it, i) => {
      const delay = i * stagger;
      // apply small incremental transition delay
      it.style.transitionDelay = `${delay}ms`;
    });
  });

  const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  if (els.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        el.classList.add('reveal--visible');
        // optionally unobserve to avoid repeated work
        observer.unobserve(el);
      }
    });
  }, { root: null, rootMargin, threshold });

  els.forEach((el) => observer.observe(el));

  // return a cleanup function
  return () => {
    observer.disconnect();
  };
}
