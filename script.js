window.onbeforeunload = () => {
  for (const form of document.getElementsById("formss")) {
    form.reset();
  }
};
