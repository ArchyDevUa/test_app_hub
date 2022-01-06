import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 5px auto;
  border-radius: 3px;
  height: ${(props) => props.height || "20px"};
  width: ${(props) => props.width || "400px"};
  display: block;
`;

export default StyledInput;