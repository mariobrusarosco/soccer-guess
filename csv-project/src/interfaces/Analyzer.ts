import { MatchData } from "../enums/MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}
