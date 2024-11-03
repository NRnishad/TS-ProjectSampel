"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Scan {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
let insta = new Instagram('adf', 'fjsdl', 233);
let scan = new Scan('fjkldhsf', 'ksdjfks', 3434);
console.log(insta.cameraMode);
console.log(scan.cameraMode);
