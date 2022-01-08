class Comments {
    /**
     * For initializing Post object
     * @param {number} id Post ID
     * @param {string} caption Caption
     * @param {number} userID User ID
     * @param {number} postID Post ID
     * @param {string} postingDate PostingDate
     * @param {string} postingTime PostingTime
     */
    constructor(id, content, userID, postID, postingDate = null, postingTime = null) {
        this.id = id;
        this.content = content;
        this.userID = userID;
        this.postID = postID;
        this.postingDate = postingDate;
        this.postingTime = postingTime;
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
     * @param {string} content
     */
    set Content(content) {
        this.content = content;
    }
    get Content() {
        return this.content;
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

    /**
     * @param {string} sendingDate
     */
    set SendingDate(sendingDate) {
        this.sendingDate = sendingDate;
    }
    get SendingDate() {
        return this.sendingDate;
    }

    /**
     * @param {string} sendingTime
     */
    set SendingTime(sendingTime) {
        this.sendingTime = sendingTime;
    }
    get SendingTime() {
        return this.sendingTime;
    }
}

module.exports = Comments;