import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Chat from "../components/Chat";
import { auth, db } from "../fbase";
import { ChatArea, ChatBtn, ChatForm, ChatInput, HomeBox, HomeWrap, User } from "../styles/HomeStyle";
import { BiRightArrowAlt } from 'react-icons/bi';

const Home = ({ userObj }) => {
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    onSnapshot(query(collection(db, "chats"), orderBy("createdAt", "asc")), (snapshot) => {
      const chatArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChats(chatArray);
    });
  }, []);

  const onChange = (event) => {
    setChat(event.target.value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    await addDoc((collection(db, "chats")), {
      text: chat,
      username: userObj.displayName,
      createdAt: Date.now(),
      createId: userObj.uid,
    });

    setChat("");
  }

  const onLogOutClick = () => {
    auth.signOut();
  }

  return (
    <HomeWrap>
      <HomeBox>
        <User>
          <div>{userObj.displayName}</div>
          <button onClick={onLogOutClick}>Log Out</button>
        </User>
        <ChatArea>
        <ul>
            {chats.map((chat) => (
              <Chat key={chat.id} chatObj={chat} isOwner={chat.createId === userObj.uid} />
            ))}
          </ul>
        </ChatArea>
        <ChatForm>
          <form onSubmit={onSubmit} className="chatForm">
            <ChatInput type="text" className="chatInput" onChange={onChange} value={chat} max={120}/>
            {/* <input type="file" accept="image/*" onChange={onFileChange} /> */}
            <ChatBtn><BiRightArrowAlt /></ChatBtn>
            {/* {attachment && (
              <div>
                <img src={attachment} width="50px" height="50px" alt="img" />
                <button onClick={onClearPhotoClick}>Clear image</button>
              </div>
            )} */}
          </form>
        </ChatForm>
      </HomeBox>
    </HomeWrap>
  );
}

export default Home;