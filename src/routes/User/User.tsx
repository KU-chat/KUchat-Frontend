import React, { useState } from "react";
import styles from "./User.module.css";
import ChatList from "./components/ChatList";
import FindFriend from "./components/FindFriend";
import UserProfile from "./components/Profile";
import ChatImg from "../../assets/img/User_chat.svg";
import FriendImg from "../../assets/img/User_Friend.svg";
import ProfileImg from "../../assets/img/User_Profile.svg";
import selectedChatImg from "../../assets/img/User_Selected_chat.svg";
import selectedFriendImg from "../../assets/img/User_Selected_Friend.svg";
import selectedProfileImg from "../../assets/img/User_Selected_Profile.svg";

type UserStep = "chatList" | "friend" | "profile";

const User = () => {
  const [step, setStep] = useState<UserStep>("profile");

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {step === "chatList" && <h1>채팅 목록</h1>}
        {step === "friend" && <h1>친구 찾기</h1>}
        {step === "profile" && <h1>나의 프로필</h1>}
      </div>
      <div className={styles.body}>
        {step === "chatList" && <ChatList />}
        {step === "friend" && <FindFriend />}
        {step === "profile" && <UserProfile />}
      </div>
      <div className={styles.footer}>
        <button onClick={() => setStep("chatList")}>
          <img
            src={step === "chatList" ? selectedChatImg : ChatImg}
            alt="채팅"
          />{" "}
        </button>
        <button onClick={() => setStep("friend")}>
          <img
            src={step === "friend" ? selectedFriendImg : FriendImg}
            alt="친구"
          />
        </button>
        <button onClick={() => setStep("profile")}>
          <img
            src={step === "profile" ? selectedProfileImg : ProfileImg}
            alt="프로필"
          />{" "}
        </button>
      </div>
    </div>
  );
};

export default User;