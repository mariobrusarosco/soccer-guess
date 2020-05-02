// LEARNING
import faker from "faker";
import { MarkerInterface } from "../../interfaces/MarkerInterface";

class Company implements MarkerInterface {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.color = "#49ab13";
  }

  markerContent() {
    return faker.company.catchPhrase();
  }
}

export default Company;
