import { Analyzer } from "./interfaces/Analyzer";
import { OutputTarget } from "./interfaces/OutputTarget";
import { MatchData } from "./enums/MatchData";
import WinAnalysis from "./domain/analyzers/WinAnalysis";
import HtmlReport from "./domain/reports/HtmlReport";
import Summary from "./Summary";

class Summary2 {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinAnalysis(team),
      new HtmlReport(),
    );
  }

  constructor(
    public analyzer: Analyzer,
    public outputHandler: OutputTarget,
  ) {}

  buildAndPrintReport(matches: MatchData[]) {
    const output = this.analyzer.run(matches);

    this.outputHandler.print(output);
  }
}

export default Summary2;
