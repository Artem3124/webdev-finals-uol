
const reportComponent = () => {
  return {
    applyProperties: async (params = { parent, elementsInputProperties }) => {
      // const {
      //   parent,
      //   elementsInputProperties = elementsInputProperties ??
      //     console.error("Elements input properties are required"),
      // } = par

      console.log(params.parent);
      console.log(params.elementsInputProperties);
      const yearSectionElement = params.parent.querySelector(
        "div#yearReport.year-row",
      );
      console.log(yearSectionElement);
      yearSectionElement.prepend(params.elementsInputProperties.year);

      const descriptionSectionElement =
        parent.querySelector(".description-row");
      descriptionSectionElement.prepend(params.elementsInputProperties.description);

      return;
    },
  };
};

export { reportComponent };
