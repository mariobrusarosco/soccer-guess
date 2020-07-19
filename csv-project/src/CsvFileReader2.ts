import fs from "fs";
import { join } from "path";

class CsvFileReader2 {
  data: string[][] = [];

  constructor(public filename: string) {}

  read() {
    this.data = fs
      .readFileSync(join(__dirname, "..", "src/", `${this.filename}.csv`), {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}

export default CsvFileReader2;
