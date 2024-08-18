const importHtml = (params = { path, elementId, document, styles }) => {
  const {
    path = params.path ?? console.log("Path param is required"),
    elementId = params.elementId ?? console.log("ElementId param is required"),
    document = params.document ?? console.log("document param is required"),
    styles = null,
  } = params;
  params.document.addEventListener("DOMContentLoaded", () => {
    fetch(params.path)
      .then((response) => response.text())
      .then((data) => {
        const element = params.document.getElementById(params.elementId);
        element.innerHTML = data;
        Object.assign(element.style, params.styles);

        const internalScripts = element.querySelectorAll("script:not([src])");
        internalScripts.forEach((script) => {
          const newScript = params.document.createElement("script");
          newScript.textContent = script.textContent;
          newScript.type = "module";
          document.body.appendChild(newScript);
        });

        const externalScripts = element.querySelectorAll("script[src]");
        externalScripts.forEach((script) => {
          const newScript = params.document.createElement("script");
          newScript.src = script.src;
          document.body.appendChild(newScript);
        });
      })
      .catch((error) => console.error("Error loading HTML:", error));
  });
};

export { importHtml };
