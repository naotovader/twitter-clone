import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import picAvatar from "./pic/picture_avatar.jpg";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={picAvatar}></Avatar>
          <input placeholder="What's happening?" type="text"></input>
        </div>
        <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"></input>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
