export interface MarkerInterface {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}
