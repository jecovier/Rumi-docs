function isClickInsideDialog(event: MouseEvent) {
  if (!event?.target) {
    return false;
  }

  const element = event.target as HTMLElement;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width
  );
}

export default function useClickOutsideDialog(callback: Function) {
  function clickOutside(event: MouseEvent) {
    if (!event?.target) {
      return;
    }

    const element = event.target as HTMLElement;
    // avoid issues when you click elements inside dialog
    if (element.nodeName !== "DIALOG") return;

    if (!isClickInsideDialog(event)) {
      callback(event);
    }
  }

  function listenStart() {
    document.addEventListener("click", clickOutside);
  }
  function listenStop() {
    document.removeEventListener("click", clickOutside);
  }

  return { listenStart, listenStop };
}
