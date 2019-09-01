import React from "react";

import "./styles.css";

export default function Comment({ comment }) {
  const commentLines = comment.content.split("\n");

  return (
    <div className="comment">
      <img
        className="avatar"
        src={comment.author.avatar}
        alt={comment.author.name}
      />

      <div className="comment-content">
        <strong className="author">{comment.author.name}</strong>

        {commentLines.map(line => (
          <p className="comment-line">{line}</p>
        ))}
      </div>
    </div>
  );
}
