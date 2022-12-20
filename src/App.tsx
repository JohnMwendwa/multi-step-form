import { useState } from "react";
import styled from "styled-components";

import useFormInput from "./hooks/useFormInput";
import AccountDetailsForm from "./components/AccountDetailsForm";

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
  ]);

  return (
    <Container>
      <form>
        <Counter>
          {currentStepIndex + 1} / {steps.length}
        </Counter>
        {currentPage}

        <ButtonGroup>
          {!isFirstPage && <Btn type="button">Back</Btn>}

          <Btn type="submit">{isLastPage ? "Submit" : "Next"}</Btn>
        </ButtonGroup>
      </form>
    </Container>
  );
}

export default App;
