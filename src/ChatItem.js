import React from "react";

function ChatItem({ item }) {
  const style = {
    minwidth: "100px",
    maxwidth: "70%",
    border: "1px solid #e7dada",
    backgroundColor: item.by ? "#ece4e4" : "white",
    padding: "10px",
    borderRadius: item.by ? "5px 5px 0 5px" : "5px 5px 5px 0",
  };

  return (
    <p style={style} className="">
      <span>{item.message}</span>
      <span className="text-muted">{item?.time}</span>
    </p>
  );
}

export default ChatItem;
