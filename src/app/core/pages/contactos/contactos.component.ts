import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contactos',
  imports: [RouterModule, HeaderComponent, FooterComponent, GoogleMapsModule],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export default class ContactosComponent implements OnInit {

  // userLocation: google.maps.LatLngLiteral | null = null;
  // destination = { lat: -17.778136, lng: -63.196647 }; // Mercado Mutualista
  // zoom = 13;
  // center!: google.maps.LatLngLiteral;

  // ngOnInit(): void {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(pos => {
  //       this.userLocation = {
  //         lat: pos.coords.latitude,
  //         lng: pos.coords.longitude
  //       };
  //       this.center = this.userLocation;
  //     });
  //   }
  // }

  userLocation: google.maps.LatLngLiteral | null = null;
  destination: google.maps.LatLngLiteral = { lat: -17.778136, lng: -63.196647 };
  center: google.maps.LatLngLiteral = this.destination;
  zoom = 13;

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.userLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        this.center = this.userLocation;
      }, err => {
        console.error('Error al obtener la ubicación:', err);
        // fallback center
        this.center = this.destination;
      });
    } else {
      this.center = this.destination;
    }
  }
}
