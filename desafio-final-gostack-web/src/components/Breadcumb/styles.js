import styled from 'styled-components'

export const Container = styled.div`
  height: 80px;
  h1 {
    font-size: 22px;
    color: #666;
    display: flex;
    width: 100%;
    align-items: center;
    &::after {
      content: '';
      width: 100%;
      border-bottom: 1px solid #d0d0d0;
      display: block;
      margin-left: 10px;
    }
    span {
      margin-left: 10px;
      display: block;
      white-space: nowrap;
    }
  }
  p {
    color: #969696;
  }
`
