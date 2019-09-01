import React, { Component } from "react";

import Post from "../Post";

import "./styles.css";

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Leonardo Motta",
          avatar: "https://avatars1.githubusercontent.com/u/36088219?s=460&v=4"
        },
        date: "04 Jun 2019",
        content:
          "Pessoal, alguém sabe se a Rocketseat está contratando?\nGostaria muito de saber, obrigado!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content:
              "Aqui na Rocketseat estamos sempre buscando novos desenvolvedores.\nGeralmente ficamos de olho nos melhores alunos do bootcamp, inclusive 80% do nosso time de devs esta composto por ex alunos do bootcamp."
          },
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars3.githubusercontent.com/u/16545335?s=400&v=4"
            },
            content: "Manda seu cv pra gente!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Leonardo Motta",
          avatar: "https://avatars1.githubusercontent.com/u/36088219?s=460&v=4"
        },
        date: "04 Jun 2019",
        content:
          "Pessoal, alguém sabe se a Rocketseat está contratando?\nGostaria muito de saber, obrigado!",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content:
              "Pessoal, alguém sabe se a Rocketseat está contratando?\nGostaria muito de saber, obrigado!"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
