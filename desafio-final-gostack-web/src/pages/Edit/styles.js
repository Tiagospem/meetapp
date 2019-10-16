import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding-top: 20px;
  max-width: 900px;
  margin: 0 auto;
  form {
    background: #fff;
    box-shadow: 0px 0px 2px -1px rgba(0, 0, 0, 0.1);
    padding: 30px;
    border-radius: 8px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    textarea {
      padding-top: 10px !important;
      min-height: 120px;
    }

    input,
    textarea {
      width: 100%;
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
    span {
      width: 100%;
      color: #7159c1;
      text-align: left;
      margin-bottom: 5px;
      position: relative;
      top: -7px;
      font-size: 12px;
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

export const Button = styled.button`
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
`
