import { dateConverter } from "./utils";
import { MatchData } from "./enums/MatchData";
import { MatchResult } from "./enums/MatchResult";
import CsvFileReader2 from "./CsvFileReader2";
import MatchReader from "./MatchReader";

interface DataReader {
  read(): void;
  data: string[][];
}

class MatchReader2 {
  static fromCsv(filename: string): MatchReader2 {
    return new MatchReader2(new CsvFileReader2(filename));
  }

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
      },
    );
  }
}

export default MatchReader2;
