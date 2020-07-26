"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputHandler) {
        this.analyzer = analyzer;
        this.outputHandler = outputHandler;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputHandler.print(output);
    };
    return Summary;
}());
exports.default = Summary;
