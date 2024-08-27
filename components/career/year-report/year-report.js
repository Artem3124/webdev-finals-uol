const reportComponent = () => {
  return {
    applyProperties: async (params = { parent, elementsInputProperties }) => {
      console.assert(params.parent, "parent is required");
      console.assert(
        params.elementsInputProperties.hasOwnProperty("year"),
        "year field of elementsInputProperties is required",
      );
      console.assert(
        params.elementsInputProperties.hasOwnProperty("description"),
        "description field of elementsInputProperties is required",
      );

      console.log(params.parent);
      console.log(params.elementsInputProperties);
      const yearSectionElement = params.parent.querySelector(
        "div#yearReport.year-row",
      );
      console.log(yearSectionElement);
      yearSectionElement.prepend(params.elementsInputProperties.year);

      const descriptionSectionElement =
        parent.querySelector(".description-row");
      descriptionSectionElement.prepend(
        params.elementsInputProperties.description,
      );

      return;
    },
  };
};

export { reportComponent };
