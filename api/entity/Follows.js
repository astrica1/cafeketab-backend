class Follows {
    /**
     * For initializing Post object
     * @param {number} id Post ID
     * @param {number} followingID Following ID
     * @param {number} followerID Follower ID
     */
    constructor(id, followingID, followerID) {
        this.id = id;
        this.followingID = followingID;
        this.followerID = followerID;
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
     * @param {number} followingID
     */
    set FollowingID(followingID) {
        this.followingID = followingID;
    }
    get FollowingID() {
        return this.followingID;
    }

    /**
     * @param {number} followerID
     */
    set FollowerID(followerID) {
        this.followerID = followerID;
    }
    get FollowerID() {
        return this.followerID;
    }
}

module.exports = Follows;