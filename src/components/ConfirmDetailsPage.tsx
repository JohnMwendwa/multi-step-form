import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
`;
const Wrapper = styled.div`
  display: grid;
  gap: 0.2rem 0.5rem;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto minmax(auto, 400px);

  h3 {
    margin: 0;
    padding: 0;
  }
`;

interface ConfirmDetailsPageProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function ConfirmDetailsPage({
  firstName,
  lastName,
  email,
  password,
}: ConfirmDetailsPageProps) {
  const pass = password.split("").map((letter, idx) => {
    if (idx === password.length - 1 && idx !== 0) return letter;
    return (letter = "*");
  });

  const hiddenPassword = pass.join("");

  return (
    <>
      <Title>Confirm Details</Title>
      <Wrapper>
        <h3>First Name :</h3>
        <p>{firstName}</p>
        <h3>Last Name :</h3>
        <p>{lastName}</p>
        <h3>Email :</h3>
        <p>{email}</p>
        <h3>Password</h3>
        <p>{hiddenPassword}</p>
      </Wrapper>
    </>
  );
}

export default ConfirmDetailsPage;
