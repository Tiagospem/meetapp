import styled, { css, keyframes } from 'styled-components'

export const keyFramesFilter = keyframes`
0% {
  opacity: 0.5;
  filter: grayscale(1);
}
100% {
  filter: grayscale(0);
}`

export const Container = styled.div``

export const Label = styled.label`
  animation-name: ${keyFramesFilter};
  animation-duration: 1s;
  animation-iteration-count: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  border: 1px dashed rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0 0 10px;
  width: 100%;
  height: 230px;
  ${props =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      svg {
        display: none;
      }
    `}
  &:hover {
    color: #333;
    border: 1px dashed rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  input {
    display: none;
  }
`
