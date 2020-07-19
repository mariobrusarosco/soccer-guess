import fs from "fs";
import { join } from "path";

abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read() {
    this.data = fs
      .readFileSync(join(__dirname, "..", "src/", `${this.filename}.csv`), {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}

export default CsvFileReader;
