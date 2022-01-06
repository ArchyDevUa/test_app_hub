import styled from "styled-components";

const StyledButton = styled.button`
  margin: 10px auto;
  font-size: 1rem;
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "100px"};
`;

export default StyledButton;