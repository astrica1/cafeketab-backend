class Assigns {
    /**
     * For initializing Post object
     * @param {number} id Post ID
     * @param {number} bookID Following ID
     * @param {number} postID Follower ID
     */
    constructor(id, bookID, postID) {
        this.id = id;
        this.bookID = bookID;
        this.postID = postID;
    }

    /**
     * @param {number} id
     */
    set ID(id) {
        this.id = id;
    }
    get ID() {
        return this.id;
    }

    /**
     * @param {number} bookID
     */
    set BookID(bookID) {
        this.bookID = bookID;
    }
    get BookID() {
        return this.bookID;
    }

    /**
     * @param {number} postID
     */
    set PostID(postID) {
        this.postID = postID;
    }
    get PostID() {
        return this.postID;
    }
}

module.exports = Assigns;