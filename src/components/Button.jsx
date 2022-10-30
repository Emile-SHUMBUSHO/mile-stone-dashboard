import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
background-color: #ffc107;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 15rem;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  margin-top:1rem;
`;
