// LEARNING
import faker from "faker";
import { MarkerInterface } from "../../interfaces/MarkerInterface";

class User implements MarkerInterface {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.color = "#5a5ad5";
  }

  markerContent() {
    return faker.company.catchPhrase();
  }
}

export default User;
