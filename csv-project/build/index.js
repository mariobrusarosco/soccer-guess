"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Summary_1 = __importDefault(require("./Summary"));
var WinAnalysis_1 = __importDefault(require("./domain/analyzers/WinAnalysis"));
var HtmlReport_1 = __importDefault(require("./domain/reports/HtmlReport"));
var Summary2_1 = __importDefault(require("./Summary2"));
var MatchReader2_1 = __importDefault(require("./MatchReader2"));
// const matches = new MatchReader("football");
// matches.read();
// console.log(matches);
// const csvFileReader = new CsvFileReader2("football");
// const matches2 = new MatchReader2(csvFileReader);
// matches2.load();
// console.log(matches2.matches);
var matchReader = MatchReader2_1.default.fromCsv("football");
matchReader.load();
var matches3 = matchReader.matches;
console.log(matches3);
var summary = new Summary_1.default(new WinAnalysis_1.default("Man City"), 
// new ConsoleReport(),
new HtmlReport_1.default());
// ---------
summary.buildAndPrintReport(matches3);
// ---------
var summary2 = Summary2_1.default.winsAnalysisWithHtmlReport("Everton");
summary2.buildAndPrintReport(matches3);
