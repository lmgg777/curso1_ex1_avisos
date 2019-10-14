import React from "react";

const marginStyle = { marginTop: "30px" };

const MessageContent = props => {
  return (
    <div className="ui container" style={marginStyle}>
      {props.children}
    </div>
  );
};

export default MessageContent;
