import { Analyzer } from "./interfaces/Analyzer";
import { OutputTarget } from "./interfaces/OutputTarget";
import { MatchData } from "./enums/MatchData";

class Summary {
  constructor(
    public analyzer: Analyzer,
    public outputHandler: OutputTarget,
  ) {}

  buildAndPrintReport(matches: MatchData[]) {
    const output = this.analyzer.run(matches);

    this.outputHandler.print(output);
  }
}

export default Summary;
