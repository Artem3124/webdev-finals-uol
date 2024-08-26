const reportComponentActions = (props = { parent, elementsInputProperties }) => {
  const {
    parent = parent ?? console.error("Parent is required"),
    elementsInputProperties = elementsInputProperties ?? console.error("Elements input properties are required"),
  } = props;

  return {
    applyProperties: () => {
        console.log(parent);
      const yearSectionElement = parent.querySelector("#yearReport");
      yearSectionElement.prepend(elementsInputProperties.year);

      const descriptionSectionElement = parent.querySelector("#descriptionReport");
      descriptionSectionElement.prepend(elementsInputProperties.description);

      return;
    },
  };
};

export { reportComponentActions };
