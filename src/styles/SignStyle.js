import styled from "styled-components";

export const SignWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .signBox {
    width: 500px;
    background: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    padding: 100px 30px;
    box-shadow: 0 4px 5px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

    h1 {
      font-size: 36px;
      text-align: center;
      font-weight: bold;
      color: #a5d8ff;
      margin-bottom: 50px;
    }

    &.signUp {
     
      h1 {
        color: #ffc9c9;
      }
    }
  }
`

export const Input = styled.input`
  width: 100%;
  display: block;
  border: 1px solid #d1d1d1;
  border-radius: 25px;
  padding: 10px 18px;
  margin: 20px 0;
  color: #5e5e5e;

  &.submitBtn {
    width: 120px;
    padding: 10px 0;
    text-align: center;
    margin: 0 auto;
    margin-top: 30px;
    border: 0;
    background: #a5d8ff;
    color: #fff;
    cursor: pointer;

    &.signUp {
      background: #ffc9c9;
    }
  }
  &.submitBtn:active {
    transform: scale(0.98);
  }
`
