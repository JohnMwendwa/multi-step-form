import { useState } from "react";
import styled from "styled-components";

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

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<UserData>) =>
    setData((prev) => ({ ...prev, ...fields }));

  return <Container></Container>;
}

export default App;
