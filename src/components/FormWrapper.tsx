import { ReactNode } from "react";
import styled from "styled-components";

interface FormWrapperProps {
  title: string;
  children: ReactNode;
}

const Wrapper = styled.div``;

export default function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div>{children}</div>
    </Wrapper>
  );
}
