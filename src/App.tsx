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

const Container = styled.div``;

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  return <Container></Container>;
}

export default App;
