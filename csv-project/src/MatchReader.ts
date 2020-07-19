import CsvFileReader from "./CsvFileReader";
import { MatchData } from "./enums/MatchData";
import { MatchResult } from "./enums/MatchResult";
import { dateConverter } from "./utils";

class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
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
}

export default MatchReader;
