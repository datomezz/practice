import React from "react";

function Avatar(props) {
  return (
    <img src={props.user.avatarUrl} alt={props.user.name} className="comment__img" />
  )
}

function CommentBody(props) {
  return(
    <div className={"comment__body"}>
      <h4 className={"comment__title"}>{props.body.text}</h4>
      <p className={"comment__date"}>{props.body.date}</p>
    </div>
  )
}

function Comment (props) {
  return (
    <div className="comment__container">
      <div className="comment__avatar">
        <Avatar user={props.author} />
      </div>
      <CommentBody body={props.info} />
    </div>
  )
}

export default Comment;