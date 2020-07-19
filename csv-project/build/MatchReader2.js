"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var MatchReader2 = /** @class */ (function () {
    function MatchReader2(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader2.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateConverter(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    };
    return MatchReader2;
}());
exports.MatchReader2 = MatchReader2;
