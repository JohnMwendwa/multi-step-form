import { useState, FormEvent } from "react";
import styled from "styled-components";

import useFormInput from "./hooks/useFormInput";
import AccountDetailsForm from "./components/AccountDetailsForm";
import PasswordDetails from "./components/PasswordDetails";
import ConfirmDetailsPage from "./components/ConfirmDetailsPage";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const INITIAL_DATA: UserData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Container = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid black;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  font-family: arial;
  max-width: max-content;
`;
const Counter = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;
const Btn = styled.button``;

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<UserData>) =>
    setData((prev) => ({ ...prev, ...fields }));

  const {
    currentPage,
    currentStepIndex,
    back,
    next,
    steps,
    isFirstPage,
    isLastPage,
  } = useFormInput([
    <AccountDetailsForm {...data} updateFields={updateFields} />,
    <PasswordDetails {...data} updateFields={updateFields} />,
    <ConfirmDetailsPage {...data} />,
  ]);

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastPage) return next();

    alert("Account created successfuly!");
    setData(INITIAL_DATA);
  };

  return (
    <Container>
      <form onSubmit={handleNext}>
        <Counter>
          {currentStepIndex + 1} / {steps.length}
        </Counter>
        {currentPage}

        <ButtonGroup>
          {!isFirstPage && (
            <Btn type="button" onClick={back}>
              Back
            </Btn>
          )}

          <Btn type="submit">{isLastPage ? "Submit" : "Next"}</Btn>
        </ButtonGroup>
      </form>
    </Container>
  );
}

export default App;
