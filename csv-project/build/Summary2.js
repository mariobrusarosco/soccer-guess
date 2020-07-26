"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WinAnalysis_1 = __importDefault(require("./domain/analyzers/WinAnalysis"));
var HtmlReport_1 = __importDefault(require("./domain/reports/HtmlReport"));
var Summary_1 = __importDefault(require("./Summary"));
var Summary2 = /** @class */ (function () {
    function Summary2(analyzer, outputHandler) {
        this.analyzer = analyzer;
        this.outputHandler = outputHandler;
    }
    Summary2.winsAnalysisWithHtmlReport = function (team) {
        return new Summary_1.default(new WinAnalysis_1.default(team), new HtmlReport_1.default());
    };
    Summary2.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputHandler.print(output);
    };
    return Summary2;
}());
exports.default = Summary2;
