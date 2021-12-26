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
    width: 50px;
    height: 50px;
    border-radius: 50%;
    /* background: tomato; */
    margin-bottom: 10px;
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
  padding: 15px 70px 15px 10px;

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

    .imgBtn {
      /* border: 0;
      outline: 0;
      background: 0;
      text-indent: -9999em; */
      position: absolute;
      right: 14px;
      top: 0px;
      border: 1px solid #a5d8ff;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 37px;
      height: 37px;
      cursor: pointer;
    }

    .imgFile {
      position: absolute;
      left: 70px;
      top: -131px;

      .thumnail {
        width: 120px;
      }

      .clearBtn {
        border: 0;
        outline: 0;
        background: 0;
        font-size: 24px;
        color: #ff9292;
        cursor: pointer;
      }
    }
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
    width: 35px;
    height: 35px;
    background: #d0ebff;
    border-radius: 50%;
    margin-bottom: 10px;
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
  padding: 20px 15px;
  position: relative;
  word-break: break-all;

  p {
    color: #505050;
  }

  .hide {
    opacity: 0;
    transition: opacity 0.5s;
    position: absolute;
    right: -64px;
    top: 0;
  }

  &:hover {
    .hide {
      opacity: 1;
    }
  }

  button {
    border: 0;
    outline: 0;
    background: none;
    font-size: 18px;
    cursor: pointer;
  }

  .edit {
      border: 1px solid #a5d8ff;
      border-radius: 5px;
      padding: 5px;
      position: absolute;
      right: -47px;
      bottom: 0;
      font-size: 12px;
      color: #a5d8ff;
    }

    .cancelBtn {
      border: 1px solid #adadad;
      border-radius: 5px;
      padding: 4px;
      position: absolute;
      right: -101px;
      bottom: 0;
      font-size: 12px;
      color: #adadad;
    }

    .chatImg {
      width: 350px;
    }
`;

export const ChatWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
