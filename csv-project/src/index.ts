import CsvFileReader2 from "./CsvFileReader2";
import MatchReader from "./MatchReader";
import { MatchReader2 } from "./MatchReader2";

const matches = new MatchReader("football");
matches.read();
console.log(matches);

const csvFileReader = new CsvFileReader2("football");
const matches2 = new MatchReader2(csvFileReader);

matches2.load();

console.log(matches2.matches);
