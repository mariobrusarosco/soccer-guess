"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader2_1 = __importDefault(require("./CsvFileReader2"));
var MatchReader_1 = __importDefault(require("./MatchReader"));
var MatchReader2_1 = require("./MatchReader2");
var matches = new MatchReader_1.default("football");
matches.read();
console.log(matches);
var csvFileReader = new CsvFileReader2_1.default("football");
var matches2 = new MatchReader2_1.MatchReader2(csvFileReader);
matches2.load();
console.log(matches2.matches);
