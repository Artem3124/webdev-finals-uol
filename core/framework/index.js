const importHtml = (props = { path, elementId, document }) => {
  props.document.addEventListener("DOMContentLoaded", () => {
    fetch(props.path)
      .then((response) => response.text())
      .then((data) => {
        const element = props.document.getElementById(props.elementId);
        element.innerHTML = data;

        const internalScripts = element.querySelectorAll("script:not([src])");
        internalScripts.forEach((script) => {
          const newScript = props.document.createElement("script");
          newScript.textContent = script.textContent;
          newScript.type = "module";
          console.log("script", newScript);
          document.body.appendChild(newScript);
        });

        const externalScripts = element.querySelectorAll("script[src]");
        externalScripts.forEach((script) => {
          const newScript = props.document.createElement("script");
          newScript.src = script.src;
          document.body.appendChild(newScript);
        });
      })
      .catch((error) => console.error("Error loading HTML:", error));
  });
};

export { importHtml };
