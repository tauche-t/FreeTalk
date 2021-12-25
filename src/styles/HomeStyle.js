import styled from "styled-components";

export const HomeWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeBox = styled.div`
  position: relative;
  width: 520px;
  height: 800px;
  border: 1px solid #000;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatArea = styled.div`
  height: 700px;
  overflow-y: scroll;
  border: 1px solid #000;
`;

export const ChatForm = styled.div`
  .chatForm {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
  }
`;

export const ChatInput = styled.input`
  width: 380px;
  padding: 7px 45px 7px 15px;
  border-radius: 25px;
  border: 1px solid #a5d8ff;
`;

export const ChatBtn = styled.button`
  width: 41px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 67px;
  top: -2px;
  border-radius: 50%;
  background: #a5d8ff;
  border: 0;
  outline: 0;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
`;



export const UserProfile = styled.div`

  .photo {
    width: 70px;
    height: 70px;
    background: #d0ebff;
    border-radius: 50%;
  }

  h3 {
    text-align: center;
  }
`;

export const Chating = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 7px;
  padding: 20px;

  p {
    color: #505050;
  }

  .hide {
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover {
    .hide {
      opacity: 1;
    }
  }
`;

export const ChatWrap = styled.div`
  display: flex;
`;
