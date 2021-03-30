import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { firedb } from "./firebaseConfig";
import TopHeader from "./TopHeader";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import ChatItem from "./ChatItem";

function Chat() {
  const params = useParams();
  const [chat, SetChat] = useState([]);
  const [ticket, Setticket] = useState(null);
  const [message, setmessage] = useState(false);
  const [{ user }] = useStateValue();

  const submitmessage = () => {
    console.log(message);
    if (!message) return;

    firedb
      .collection("user")
      .doc(user.email)
      .collection("tickets")
      .doc(params.id)
      .collection("chat")
      .add({ message: message, by: true, date: Date.now() })
      .then((doc) => {
        //do nothing
        console.log(doc);
        setmessage(" ");
      })
      .catch((e) => {
        alert(e);
      });
  };

  useEffect(() => {
    firedb
      .collection("user")
      .doc(user.email)
      .collection("tickets")
      .doc(params.id)
      .collection("chat")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        var a = [];
        snapshot.docs.forEach((doc) => {
          a.unshift(doc.data());
        });
        SetChat(a);
      });
    firedb
      .collection("user")
      .doc(user.email)
      .collection("tickets")
      .doc(params.id)
      .get()
      .then((doc) => {
        Setticket(doc.data());
      });
  }, []);

  const style = {
    height: {
      height: "60vh",
      overflowY: "scroll",
    },
  };

  return (
    <div className="dashboard col-sm p-0">
      <div className="top-header-container ">
        <TopHeader heading="Tickets" />
      </div>
      <div className="p-2 bg-dark text-light d-flex justify-content-around   flex-wrap align-items-center">
        <label>
          <p className="text-muted">Reason</p>
          <h6> {ticket?.reason} </h6>
        </label>
        <label>
          <p className="text-muted">Date</p>
          <h6> {Date(ticket?.date)} </h6>
        </label>
        <label>
          <p className="text-muted">status</p>
          <h6> {ticket?.status} </h6>
        </label>
      </div>
      <div
        className="container card d-flex flex-column align-items-end border justify-content-end"
        style={style.height}
      >
        {chat.map((c, index) => (
          <ChatItem key={index} item={c} />
        ))}
      </div>
      <div className=" card d-flex  flex-row">
        <input
          type="text"
          value={message}
          className="form-control flex-fill"
          placeholder="enter a message..."
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        />
        <button className="btn btn-outline-dark" onClick={submitmessage}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default Chat;
