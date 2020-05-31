import Sorter from "../Sorter";

class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number) {
    const characters = this.data.split("");
    const leftCharacter = characters[leftIndex];

    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftCharacter;

    this.data = characters.join("");
  }
}

export default CharactersCollection;
