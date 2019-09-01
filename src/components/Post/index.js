import React from "react";

import Comment from "../Comment";

import "./styles.css";

export default function Post({ post }) {
  const contentLines = post.content.split("\n");

  return (
    <div className="post">
      <header className="post-header">
        <img
          className="avatar"
          src={post.author.avatar}
          alt={post.author.name}
        />
        <div>
          <strong>{post.author.name}</strong>
          <small>{post.date}</small>
        </div>
      </header>

      <div className="content">
        {contentLines.map(content => (
          <p key={content} className="line-break">
            {content}
          </p>
        ))}
      </div>

      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
