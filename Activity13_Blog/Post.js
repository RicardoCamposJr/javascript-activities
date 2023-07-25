const Comment = require("./Comment")

class Post {
    constructor(author) {
        this.author = author
        this.comments = []
    }
    addComment(commentAuthor, descriptionComment) {
        const comment = new Comment(commentAuthor, descriptionComment)
        this.comments.push(comment)
    }
}

module.exports = Post