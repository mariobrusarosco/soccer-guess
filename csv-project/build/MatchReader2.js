"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var CsvFileReader2_1 = __importDefault(require("./CsvFileReader2"));
var MatchReader2 = /** @class */ (function () {
    function MatchReader2(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader2.fromCsv = function (filename) {
        return new MatchReader2(new CsvFileReader2_1.default(filename));
    };
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
exports.default = MatchReader2;
