"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var CsvFileReader2 = /** @class */ (function () {
    function CsvFileReader2(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader2.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(path_1.join(__dirname, "..", "src/", this.filename + ".csv"), {
            encoding: "utf-8",
        })
            .split("\n")
            .map(function (row) { return row.split(","); })
            .map(this.mapRow);
    };
    return CsvFileReader2;
}());
exports.CsvFileReader2 = CsvFileReader2;
