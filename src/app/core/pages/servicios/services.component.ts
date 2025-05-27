import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-services',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export default class ServicesComponent {
  currentYear = new Date().getFullYear();
}
