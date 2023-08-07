"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const base_1 = require("./base");
class like extends base_1.base {
    constructor(_user) {
        super ();
        this._user = _user;
    }
    get user() {
        return this._user;
    }
}
exports.like = like;