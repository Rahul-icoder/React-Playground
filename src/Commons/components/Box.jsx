import styled from "styled-components";

export const Box = styled.div`
  margin-top: ${(props) => `${props.mt}rem` || 0};
  margin-top: ${(props) => `${props.mb}rem` || 0};
  margin-left: ${(props) => `${props.ml}rem` || 0};
  margin-right: ${(props) => `${props.mr}rem` || 0};
  padding-top: ${(props) => `${props.pb}rem` || 0};
  padding-top: ${(props) => `${props.pb}rem` || 0};
  padding-right: ${(props) => `${props.pr}rem` || 0};
  padding-left: ${(props) => `${props.pl}rem` || 0};
  background-color: tomato;
`;
