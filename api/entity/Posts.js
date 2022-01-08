class Posts {
    /**
     * For initializing Post object
     * @param {number} id Post ID
     * @param {string} caption Caption
     * @param {string} picture Picture
     * @param {number} senderID SenderID
     * @param {string} postingDate PostingDate
     * @param {string} postingTime PostingTime
     */
    constructor(id, caption, picture, senderID, postingDate = null, postingTime = null) {
        this.id = id;
        this.picture = picture;
        this.caption = caption;
        this.senderId = senderID;
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
     * @param {string} caption
     */
    set Caption(caption) {
        this.caption = caption;
    }
    get Caption() {
        return this.caption;
    }

    /**
     * @param {string} picture
     */
    set Picture(picture) {
        this.picture = picture;
    }
    get Picture() {
        return this.picture;
    }

    /**
     * @param {number} senderID
     */
    set SenderID(senderID) {
        this.senderID = senderID;
    }
    get SenderID() {
        return this.senderID;
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

module.exports = Posts;