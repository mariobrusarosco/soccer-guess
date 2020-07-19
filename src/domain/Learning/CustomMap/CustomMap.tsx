import { MarkerInterface } from "../../../interfaces/MarkerInterface";

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapHtmlSelector: string) {
    const map = document.querySelector(mapHtmlSelector) as HTMLElement;

    this.googleMap = new google.maps.Map(map, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(marker: MarkerInterface) {
    const createdMaker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: marker.markerContent(),
    });

    createdMaker.addListener("click", () => {
      infoWindow.open(this.googleMap, createdMaker);
    });
  }
}

export default CustomMap;
