import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactos',
  imports: [RouterModule, HeaderComponent, GoogleMapsModule],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export default class ContactosComponent implements OnInit {

  userLocation: google.maps.LatLngLiteral | null = null;
  destination = { lat: -17.778136, lng: -63.196647 }; // Mercado Mutualista
  zoom = 13;
  center!: google.maps.LatLngLiteral;

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.userLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        this.center = this.userLocation;
      });
    }
  }
}
