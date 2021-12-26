import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useEffect, useState } from "react";
import Chat from "../components/Chat";
import { v4 } from "uuid";
import { auth, db, storageService } from "../fbase";
import { ChatArea, ChatBtn, ChatForm, ChatInput, HomeBox, HomeWrap, User } from "../styles/HomeStyle";
import { BiRightArrowAlt } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdLogout } from 'react-icons/md';
import gravatar from "gravatar/lib/gravatar";

const Home = ({ userObj }) => {
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState([]);
  const [attachment, setAttachment] = useState("");

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

    if(chat === "" && attachment === "") {
      return;
    }

    let attachmentUrl = "";
    if(attachment !== "") {
      const attachmentRef = ref(storageService, `${userObj.uid}/${v4()}`);
      const response = await uploadString(attachmentRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(response.ref);
    }
    
    const chatObj = {
      text: chat,
      username: userObj.displayName,
      createdAt: Date.now(),
      createId: userObj.uid,
      attachmentUrl
    }
    await addDoc((collection(db, "chats")), chatObj);


    // await addDoc((collection(db, "chats")), {
    //   text: chat,
    //   username: userObj.displayName,
    //   createdAt: Date.now(),
    //   createId: userObj.uid,
    // });

    setChat("");
    setAttachment("");
  }

  const onLogOutClick = () => {
    auth.signOut();
  }

  const onFileChange = (event) => {
    const { target: {files} } = event;

    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const { currentTarget: {result} } = finishedEvent;
      setAttachment(result);
    }
    reader.readAsDataURL(theFile);
  }

  const onClearPhotoClick = () => setAttachment("");

  return (
    <HomeWrap>
      <HomeBox>
        <User>
          {/* <div className="profile"></div> */}
          <img className="profile" src={gravatar.url(userObj.displayName, { s: '28px', d: 'mp' })} alt="" />
          <div className="userProfile">{auth.currentUser.displayName}</div>
          <button onClick={onLogOutClick}><MdLogout /></button>
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
            <label className="imgBtn" htmlFor="fileButton">
              <AiOutlinePlus />
            </label>
            <input id="fileButton" type="file" accept="image/*" onChange={onFileChange} style={{ display: 'none' }} />
            <ChatBtn><BiRightArrowAlt /></ChatBtn>
            {attachment && (
              <div className="imgFile">
                <img src={attachment} alt="img" className="thumnail" />
                <button className="clearBtn" onClick={onClearPhotoClick}><TiDeleteOutline /></button>
              </div>
            )}
          </form>
        </ChatForm>
      </HomeBox>
    </HomeWrap>
  );
}

export default Home;