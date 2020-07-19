import Sorter from "../Sorter";

class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number) {
    const leftHandValue = this.data[leftIndex];

    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHandValue;
  }
}

export default NumbersCollection;
