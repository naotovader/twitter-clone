import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      dysplayName: "hoge",
      username: "hogehoge",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://kai-you.net/r/img/a/752x/Fall-Guy.jpeg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kai-you.net/r/img/a/752x/Fall-Guy.jpeg"></Avatar>
          <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"></input>
        </div>
        <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"></input>
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
