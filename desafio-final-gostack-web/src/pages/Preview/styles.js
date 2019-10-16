import styled, { keyframes } from 'styled-components'

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

export const Meetup = styled.div`
  background: #fff;
  box-shadow: 0px 0px 2px -1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
`

export const Image = styled.div`
  filter: grayscale(0);
  animation-name: ${keyFramesFilter};
  animation-duration: 2s;
  animation-iteration-count: 1;
  background-image: url(${props => props.background});
  opacity: 1;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 200px;
  width: 100%;
  transition: background-position 2s;
`

export const Content = styled.div`
  margin-top: 20px;
  padding: 30px;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;
`

export const Local = styled.div`
  padding-bottom: 10px;
  border-top: 1px dashed rgba(0, 0, 0, 0.09);
  padding-top: 10px;
  color: #666;
`

export const Description = styled.div`
  margin-bottom: 15px;
  color: #666;
`

export const Date = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.09);
  padding-bottom: 10px;
  color: #666;
`

export const SubscriptionTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  border-top: 1px dashed rgba(0, 0, 0, 0.09);
  padding-top: 10px;
  padding-bottom: 10px;
`
export const Subscriptions = styled.div``
export const Subscription = styled.div`
  background: #f7f7f7;
  padding: 5px;
  margin: 5px 0;
  border-radius: 4px;
`
export const Name = styled.div`
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 5px;
  font-weight: bold;
`
export const Email = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`
