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

  let progress = initialValue;
  let endReached = isEnd;
  let elementRef = element;

  return {
    ...params,
    move: () => {
      if (endReached) {
        return;
      }
      var interval = setInterval(() => {
        if (progress >= maxValue) {
          clearInterval(interval);
          endReached = true;
        } else {
          progress++;
          elementRef.style.width = progress + "%";
          elementRef.innerHTML = progress + "%";
        }
      }, speed);
    },
  };
};

export { progressBar };
