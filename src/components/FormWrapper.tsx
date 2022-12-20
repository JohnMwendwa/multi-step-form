import { ReactNode } from "react";
import styled from "styled-components";

interface FormWrapperProps {
  title: string;
  children: ReactNode;
}
const Title = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
`;
const Wrapper = styled.div`
  display: grid;
  gap: 1rem 0.5rem;
  justify-content: flex-start;
  grid-template-columns: auto minmax(auto, 400px);
`;

export default function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <Title>{title}</Title>
      <Wrapper>{children}</Wrapper>
    </>
  );
}
