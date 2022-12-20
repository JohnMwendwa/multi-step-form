import { useState } from "react";

export default function useFormInput(steps: []) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const back = () => {
    setCurrentStepIndex((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  return {
    steps,
    currentStepIndex,
    back,
  };
}
