import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.1);
`
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      width: 10%;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: bold;
      color: #333;
      margin-right: 10px;
      transition: color 0.4s;
      &:hover {
        color: #7159c1;
      }
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  justify-content: space-between;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      width: 100px;
      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  button {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 10px;
    background: #ddd;
    color: #fff;
    transition: background 0.4s;
    &:hover {
      background: #7159c1;
    }
    span {
      position: relative;
      top: -1px;
    }
  }
`
