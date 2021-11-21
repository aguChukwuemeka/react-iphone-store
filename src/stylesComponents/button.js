import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1, 5rem;
  background: transparent;
  text-decoration: none !important;
  border: 0.05rem solid var(--lightBlue);
  border-radius: 0.5rem;
  color: ${(props) =>
    props.gotocart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-color: ${(props) =>
    props.gotocart ? "var(--mainYellow)" : "var(--lightBlue)"};
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0.5rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.gotocart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;