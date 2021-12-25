import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storageService } from "../fbase";
import { Chating, ChatWrap, UserProfile } from "../styles/HomeStyle";

const Chat = ({ chatObj, isOwner }) => {
  const onClickDelet = async () => {
    const ok = window.confirm("Are you sure you want to delete the nweet?");

    if(ok) {
      await deleteDoc(doc(db, `chats/${chatObj.id}`));
      // await deleteObject(ref(storageService, chatObj.attachmentUrl));
    }
  }

  return (
    <li>
      <ChatWrap>
        <UserProfile>
          <div className="photo"></div>
          <h3>{chatObj.username}</h3>
        </UserProfile>
        <Chating>
            <p>{chatObj.text}</p>
            {/* {chatObj.attachmentUrl && (
              <img src={chatObj.attachmentUrl} width="50px" height="50px" alt="" />
            )} */}
            {isOwner && (
              <div className="hide">
                <button onClick={onClickDelet}>Delete</button>
                {/* <button onClick={onClickEdit}>Edit</button> */}
              </div>
            )}
        </Chating>
      </ChatWrap>
    </li>
  );
}

export default Chat;