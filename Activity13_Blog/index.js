const Post = require("./Post");
const Author = require("./Author");
const Comment = require("./Comment");

//Criação do autor do post e o post:
const author = new Author("Ricardo");
const post = author.createPost();

//Comentários no post:
const commentAuthor = new Author("Rodrigo");
post.addComment(commentAuthor, "Muito legal!");
const commentAuthor1 = new Author("Sarah");
post.addComment(commentAuthor1, "Muito legal!");

//Exibição:
console.log(author);
console.log(author.posts[0].comments);
