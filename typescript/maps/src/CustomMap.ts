export interface Mappable {
  location: {
    lat: number
    lng: number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(user: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: user.location
    })
  }
}
