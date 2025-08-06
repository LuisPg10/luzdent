export const scrollToHash = () => {
  const hash = window.location.hash;

  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView();
    }
  }
};
