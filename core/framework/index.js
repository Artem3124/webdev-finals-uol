const importHtml = (props = { path, elementId, document }) => {
  props.document.addEventListener("DOMContentLoaded", () => {
    fetch(props.path)
      .then((response) => response.text())
      .then((data) => {
        props.document.getElementById(props.elementId).innerHTML = data;
      })
      .catch((error) => console.error("Error loading HTML:", error));
  });
};

export { importHtml };
