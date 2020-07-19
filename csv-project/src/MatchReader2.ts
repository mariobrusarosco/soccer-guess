import { dateConverter } from "./utils";
import { MatchData } from "./enums/MatchData";
import { MatchResult } from "./enums/MatchResult";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader2 {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load() {
    this.reader.read();

    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateConverter(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}
