import React from "react";

export function useScrollLock(lock) {
  React.useEffect(() => {
    if (lock) return scrollLock();
  }, [lock]);
}

export function scrollLock() {
  const scrollTop = window.pageYOffset;
  const html = document.documentElement;
  const scrollbarWidth =
    html.offsetHeight > window.innerHeight ? getScrollbarWidth() : 0;
  const style = {
    overflow: "hidden",
    position: "fixed",
    top: -scrollTop + "px",
    width: `calc(100% - ${scrollbarWidth}px)`,
  };
  const prevStyle = setHtmlStyle(style);
  return () => {
    setHtmlStyle(prevStyle);
    window.scroll(0, scrollTop);
  };
}

function setHtmlStyle(style) {
  const html = document.documentElement;
  return Object.entries(style).reduce((a, [k, v]) => {
    a[k] = html.style[k];
    html.style[k] = v;
    return a;
  }, {});
}

let scrollbarWidth;
function getScrollbarWidth() {
  if (scrollbarWidth !== void 0) return scrollbarWidth;
  const el = document.createElement("div");
  el.style.position = "absolute";
  el.style.top = "-9999px";
  el.style.overflow = "scroll";
  document.body.appendChild(el);
  const width = el.offsetWidth;
  document.body.removeChild(el);
  scrollbarWidth = width;
  return width;
}
