import styled from "styled-components";

const StyledTextArea = styled.textarea`
  padding: 0.5em;
  margin: 0px auto;
  border-radius: 3px;
  height: ${(props) => props.height || "100px"};
  width: ${(props) => props.width || "402px"};
  display: block;
`;

export default StyledTextArea;