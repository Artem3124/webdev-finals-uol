const importHtml = (params = { path, elementId, document, styles, callback }) => {
  const {
    path = params.path ?? console.error("Path param is required"),
    elementId = params.elementId ?? console.error("ElementId param is required"),
    document = params.document ?? console.error("document param is required"),
    styles = null,
    callback = null,
  } = params;

  params.document.addEventListener("DOMContentLoaded", () => {
    fetch(params.path)
      .then((response) => response.text())
      .then((data) => {
        const element = params.document.getElementById(params.elementId);

        console.assert(element, `Element with id ${params.elementId} not found`);

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

        if (callback) {
            callback();
        }
      })
      .catch((error) => console.error("Error loading HTML:", error));
  });
};

const elementProcessor = (element, document) => {
    return {
        getTotalHeight: () => {
            const style = document.defaultView.getComputedStyle(element);
            const height = element.offsetHeight;
            const paddingTop = parseFloat(style.paddingTop);
            const paddingBottom = parseFloat(style.paddingBottom);
            const marginTop = parseFloat(style.marginTop);
            const marginBottom = parseFloat(style.marginBottom);

            return height + paddingTop + paddingBottom + marginTop + marginBottom;
        },
    };
};

export { importHtml, elementProcessor };
