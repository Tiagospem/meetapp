import styled, { css, keyframes } from 'styled-components'
import { lighten } from 'polished'

export const keyFramesFilter = keyframes`
0% {
  opacity: 0.5;
  filter: grayscale(1);
}
100% {
  filter: grayscale(0);
}`

export const Container = styled.div`
  padding-top: 20px;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 20px;
`
export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`
export const Card = styled.li`
  z-index: 1;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s;
  &:hover {
    box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
  }
  ${props =>
    props.past &&
    css`
      filter: grayscale(1);
      opacity: 0.6;
    `}
`
export const CardHeader = styled.header`
  animation-name: ${keyFramesFilter};
  animation-duration: 1s;
  animation-iteration-count: 1;
  border-top-left-radius: 4px;
  height: 80px;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
`
export const CardBody = styled.div`
  word-break: break-all;
  line-height: 15px;
  font-size: 13px;
  height: 120px;
  padding: 8px;
  color: #999;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  svg {
    color: #333;
    margin-right: 5px;
    width: 30px;
  }
  > div p {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
`
export const CardFooter = styled.div`
  background: #f9f9f9;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  justify-content: flex-end;
  button {
    position: relative;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
    top: -15px;
    left: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px;
    border: 1px solid #f1f1f1;
    border-radius: 50%;
    padding: 10px;
    color: #666;
    transition: background 0.3s;
    background: #fff;
    &:hover {
      background: ${lighten(0.09, '#4da753')};
      svg {
        color: #fff;
      }
    }
  }
  button:first-child {
    &:hover {
      background: ${lighten(0.09, '#4da753')};
      svg {
        color: #fff;
      }
    }
  }
  button:last-child {
    &:hover {
      background: ${lighten(0.09, '#72191c')};
      svg {
        color: #fff;
      }
    }
  }
`

export const NoMeetup = styled.div`
  color: #ccc;
  display: flex;
  align-items: center;
  &::after {
    content: '';
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    display: block;
    margin-left: 10px;
  }
  span {
    display: block;
    white-space: nowrap;
  }
`
