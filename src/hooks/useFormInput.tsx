import { useState } from "react";

export default function useFormInput(steps: []) {
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

  return {
    steps,
    currentStepIndex,
    back,
    next,
    goTo,
  };
}
