const Post = require("./Post")

class Author {
    constructor(authorName) {
        this.authorName = authorName
        this.posts = []
    }
    createPost() {
        const post = new Post(this.authorName)
        this.posts.push(post)
        return post
    }
}

module.exports = Author