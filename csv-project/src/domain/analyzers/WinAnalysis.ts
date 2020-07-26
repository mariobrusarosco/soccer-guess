import { Analyzer } from "../../interfaces/Analyzer";
import { MatchData } from "../../enums/MatchData";
import { MatchResult } from "../../enums/MatchResult";

class WinAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}

export default WinAnalysis;
