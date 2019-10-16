import styled, { keyframes } from 'styled-components'
import { darken } from 'polished'
import bg from '~/assets/bg.jpg'

export const keyFrames = keyframes`
  0% {
    width: 30%;
    filter: grayscale(1);
  }
  100% {
    filter: grayscale(0);
    width: 50%;
  }`

export const keyFramesFilter = keyframes`
0% {
  filter: grayscale(1);
}
100% {
  filter: grayscale(0);
}`

export const Wrapper = styled.div`
  height: 100%;
  opacity: 0.99;
  background: rgba(113, 89, 193, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    filter: grayscale(0);
    animation-name: ${keyFramesFilter};
    animation-duration: 3s;
    animation-iteration-count: 1;
    background-image: url(${bg});
    background-size: cover;
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
`
export const Content = styled.div`
  img {
    width: 50%;
    animation-name: ${keyFrames};
    animation-duration: 500ms;
    animation-iteration-count: 1;
    filter: grayscale(0);
  }
  background: #fff;
  box-shadow: 0px 0px 40px -1px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 415px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: #fff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: rgba(0, 0, 0, 0.9);
      margin: 0 0 10px;

      &:placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
      &:focus {
        transition: all 0.3s;
        border: 1px solid rgba(0, 0, 0, 0.3);
        box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.35);
      }
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7159c1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.08, '#7159c1')};
      }
    }
    span {
      width: 100%;
      color: #7159c1;
      text-align: left;
      margin-bottom: 10px;
      position: relative;
      top: -7px;
      font-size: 12px;
      padding-left: 10px;
    }
    a {
      color: #000;
      margin-top: 15px;
      font-size: 14px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`
