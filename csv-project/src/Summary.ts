import { Analyzer } from "./interfaces/Analyzer";
import { OutputTarget } from "./interfaces/OutputTarget";

export default class Summary {
  constructor(public analyzer: Analyzer, public target: OutputTarget) {}
}
