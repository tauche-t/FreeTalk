import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import gravatar from "gravatar/lib/gravatar";
import { useState } from "react";
import { auth, db, storageService } from "../fbase";
import { Chating, ChatWrap, UserProfile } from "../styles/HomeStyle";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Chat = ({ chatObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newChat, setNewChat] = useState(chatObj.text);

  const onClickDelet = async () => {
    const ok = window.confirm("Are you sure you want to delete the nweet?");

    if(ok) {
      await deleteDoc(doc(db, `chats/${chatObj.id}`));
      await deleteObject(ref(storageService, chatObj.attachmentUrl));
    }
  }

  const onClickEdit = () => {
    setEditing(prev => !prev);
  }

  const onChange = (event) => {
    const { target: {value} } = event;

    setNewChat(value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    await updateDoc(doc(db, `chats/${chatObj.id}`), {
      text: newChat
    });

    setEditing(false);
  }

  
  return (
    <li>
      <ChatWrap>
        <UserProfile>
          {/* <div className="photo"></div> */}
          <img className="photo" src={gravatar.url(chatObj.displayName, { s: '28px', d: 'mp' })} alt="" />
          <h3>{auth.currentUser.displayName}</h3>
        </UserProfile>
        <Chating>
          {editing ? (
            <>
              <form onSubmit={onSubmit}>
                <input type="text" value={newChat} onChange={onChange} required />
                <input className="edit" type="submit" value="완료" />
              </form>
              <button className="cancelBtn" onClick={onClickEdit}>Cancel</button>
            </>
          ) : (
            <>
              <p>{chatObj.text}</p>
              {chatObj.attachmentUrl && (
                <img src={chatObj.attachmentUrl} alt="" className="chatImg" />
              )}
              {isOwner && (
                <div className="hide">
                  <button onClick={onClickDelet}><AiFillDelete /></button>
                  <button onClick={onClickEdit}><AiFillEdit /></button>
                </div>
              )}
            </>
          )}
        </Chating>
      </ChatWrap>
    </li>
  );
}

export default Chat;