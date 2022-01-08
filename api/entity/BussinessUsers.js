class BussinessUsers {
    /**
     * For initializing User object
     * @param {number} id User Id
     * @param {string} userName UserName
     * @param {string} hashedPassword User password
     * @param {string} mailAddress User mail address
     */
    constructor(id, userName, hashedPassword, mailAddress = null) {
        this.id = id;
        this.userName = userName;
        this.hashedPassword = hashedPassword;
        this.mailAddress = mailAddress;
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
     * @param {string} brandName
     */
    set BrandName(brandName) {
        this.brandName = brandName;
    }
    get BrandName() {
        return this.brandName;
    }

    /**
     * @param {string} userName
     */
    set UserName(userName) {
        this.userName = userName;
    }
    get UserName() {
        return this.userName;
    }

    /**
     * @param {string} hashedPassword
     */
    set Password(hashedPassword) {
        this.password = hashedPassword;
    }
    get Password() {
        return this.password;
    }

    /**
     * @param {string} mailAddress
     */
    set MailAddress(mailAddress) {
        this.mailAddress = mailAddress;
    }
    get MailAddress() {
        return this.mailAddress;
    }

    /**
     * @param {string} phoneNumber
     */
    set PhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    get PhoneNumber() {
        return this.phoneNumber;
    }

    /**
     * @param {string} providenceName
     */
    set ProvidenceName(providenceName) {
        this.providenceName = providenceName;
    }
    get ProvidenceName() {
        return this.providenceName;
    }

    /**
     * @param {string} cityName
     */
    set CityName(cityName) {
        this.cityName = cityName;
    }
    get CityName() {
        return this.cityName;
    }

    /**
     * @param {string} address
     */
    set Address(address) {
        this.address = address;
    }
    get Address() {
        return this.address;
    }

    /**
     * @param {string} postalCode
     */
    set PostalCode(postalCode) {
        this.postalCode = postalCode;
    }
    get PostalCode() {
        return this.postalCode;
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
     * @param {string} registrationDate
     */
    set RegistrationDate(registrationDate) {
        this.registrationDate = registrationDate;
    }
    get RegistrationDate() {
        return this.registrationDate;
    }
}

module.exports = BussinessUsers;