import CsvFileReader2 from "./CsvFileReader2";
import MatchReader from "./MatchReader";
import ConsoleReport from "./domain/reports/ConsoleReport";
import Summary from "./Summary";
import WinAnalysis from "./domain/analyzers/WinAnalysis";
import HtmlReport from "./domain/reports/HtmlReport";
import Summary2 from "./Summary2";
import MatchReader2 from "./MatchReader2";

// const matches = new MatchReader("football");
// matches.read();
// console.log(matches);

// const csvFileReader = new CsvFileReader2("football");
// const matches2 = new MatchReader2(csvFileReader);
// matches2.load();
// console.log(matches2.matches);

const matchReader = MatchReader2.fromCsv("football");
matchReader.load();
const matches3 = matchReader.matches;
console.log(matches3);

const summary = new Summary(
  new WinAnalysis("Man City"),
  // new ConsoleReport(),
  new HtmlReport(),
);

// ---------
summary.buildAndPrintReport(matches3);

// ---------
const summary2 = Summary2.winsAnalysisWithHtmlReport("Everton");
summary2.buildAndPrintReport(matches3);
