const progressBar = (
  params = { element, initialValue, maxValue, speed, isEnd },
) => {
  const {
    element = element ?? console.error("element is required"),
    initialValue = 10,
    maxValue = 100,
    speed = 10,
    isEnd = false,
  } = params;

  let elementRef = element;
  let progress = initialValue;
  let endReached = isEnd;

  elementRef.style.width = initialValue + "%";

  return {
    elementRef,
    progress,
    endReached,
    speed,
    maxValue,
    move: async () => {
      if (endReached) {
        return;
      }
      let interval = setInterval(() => {
        if (progress >= maxValue) {
          clearInterval(interval);
          endReached = true;
        } else {
          console.log(progress);
          progress++;
          elementRef.style.width = progress + "%";
        }
      }, 100 / speed);
    },
  };
};

export { progressBar };
