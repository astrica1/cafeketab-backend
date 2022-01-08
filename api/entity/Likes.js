class Likes {
    /**
     * For initializing Post object
     * @param {number} id Post ID
     * @param {number} userID User ID
     * @param {number} postID Post ID
     */
    constructor(id, userID, postID) {
        this.id = id;
        this.userID = userID;
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
     * @param {number} userID
     */
    set UserID(userID) {
        this.userID = userID;
    }
    get UserID() {
        return this.userID;
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

module.exports = Likes;