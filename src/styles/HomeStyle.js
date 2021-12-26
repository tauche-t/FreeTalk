import styled from "styled-components";

export const HomeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeBox = styled.div`
  height: 100%;
  position: relative;
  width: 520px;
  height: 800px;
  margin-top: 20px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  margin-bottom: 10px;

  .profile {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: tomato;
  }

  button {
    border: 0;
    outline: 0;
    background: none;
    font-size: 18px;
  }

  .userProfile {
    font-family: 'ONE_Mobile_POP';
    color: #495057;
  }
`;

export const ChatArea = styled.div`
  height: 700px;
  overflow-y: scroll;
  padding: 15px 30px 15px 15px;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e8e8e8;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 10px;
  }
;
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
  margin-right: 20px;

  .photo {
    width: 70px;
    height: 70px;
    background: #d0ebff;
    border-radius: 50%;
  }

  h3 {
    text-align: center;
    font-family: 'ONE_Mobile_POP';
    color: #495057;
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
  margin-bottom: 20px;
`;
