class Books {
    /**
     * For initializing Book object
     * @param {number} id Book Id
     * @param {string} bookName Book Name
     * @param {string} isbn Book ISBN
     * @param {number} adderID Bussiness User ID
     * @param {string} writersName Writers Name(optional)
     * @param {string} translatorsName Translators Name(optional)
     */
    constructor(id, bookName, isbn, adderID, writersName = null, translatorsName = null) {
        this.id = id;
        this.bookName = bookName;
        this.isbn = isbn;
        this.adderID = adderID;
        this.writersName = writersName;
        this.translatorsName = translatorsName;
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
     * @param {string} isbn
     */
    set ISBN(isbn) {
        this.isbn = isbn;
    }
    get ISBN() {
        return this.isbn;
    }

    /**
     * @param {string} bookName
     */
    set BookName(bookName) {
        this.bookName = bookName;
    }
    get BookName() {
        return this.bookName;
    }

    /**
     * @param {string} writersName
     */
    set WritersName(writersName) {
        this.writersName = writersName;
    }
    get WritersName() {
        return this.writersName;
    }

    /**
     * @param {string} translatorsName
     */
    set TranslatorsName(translatorsName) {
        this.translatorsName = translatorsName;
    }
    get TranslatorsName() {
        return this.translatorsName;
    }

    /**
     * @param {string} publisherName
     */
    set PublisherName(publisherName) {
        this.publisherName = publisherName;
    }
    get PublisherName() {
        return this.publisherName;
    }

    /**
     * @param {string} description
     */
    set Description(description) {
        this.description = description;
    }
    get Description() {
        return this.description;
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
     * @param {string} adderID
     */
    set AdderID(adderID) {
        this.adderID = adderID;
    }
    get AdderID() {
        return this.adderID;
    }
}

module.exports = Books;