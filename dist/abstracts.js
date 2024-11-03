"use strict";
class Camere {
    constructor(mode, filter) {
        this.mode = mode;
        this.filter = filter;
    }
}
class Insta extends Camere {
    constructor(mode, filter, countings) {
        super(mode, filter);
        this.mode = mode;
        this.filter = filter;
        this.countings = countings;
    }
    getPhoto() {
        return 'done';
    }
}
