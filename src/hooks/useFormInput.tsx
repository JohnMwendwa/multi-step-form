import { ReactElement, useState } from "react";

export default function useFormInput(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const back = () => {
    setCurrentStepIndex((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  const next = () => {
    setCurrentStepIndex((prev) => {
      if (prev >= steps.length - 1) return prev;
      return prev + 1;
    });
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  const isFirstPage = currentStepIndex === 0;

  const isLastPage = currentStepIndex === steps.length - 1;

  return {
    steps,
    currentStepIndex,
    back,
    next,
    goTo,
    isFirstPage,
    isLastPage,
  };
}
