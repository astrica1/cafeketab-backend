class Directs {
    /**
     * For initializing Post object
     * @param {number} id Post ID
     * @param {string} content Content
     * @param {number} senderID Sender ID
     * @param {number} recieverID Reciever ID
     * @param {string} sentDate Sent Date
     * @param {string} sentTime Sent Time
     */
    constructor(id, content, senderID, recieverID, sentDate = null, sentTime = null) {
        this.id = id;
        this.content = content;
        this.senderId = senderID;
        this.recieverID = recieverID;
        this.sentDate = sentDate;
        this.sentTime = sentTime;
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
     * @param {number} senderID
     */
    set SenderID(senderID) {
        this.senderID = senderID;
    }
    get SenderID() {
        return this.senderID;
    }

    /**
     * @param {number} recieverID
     */
    set RecieverID(recieverID) {
        this.recieverID = recieverID;
    }
    get RecieverID() {
        return this.recieverID;
    }

    /**
     * @param {string} sentDate
     */
    set SentDate(sentDate) {
        this.sentDate = sentDate;
    }
    get SentDate() {
        return this.sentDate;
    }

    /**
     * @param {string} sentTime
     */
    set SentTime(sentTime) {
        this.sentTime = sentTime;
    }
    get SentTime() {
        return this.sentTime;
    }
}

module.exports = Directs;