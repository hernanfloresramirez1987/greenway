import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-como-funciona',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.css'],
  animations: [
    trigger(
      'fadeIn', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateY(40px)' }),
          animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ]
    )
  ]
})
export default class ComoFuncionaComponent {
  currentYear = new Date().getFullYear();

  verPerfiles() {
    console.log('Ver perfiles');
  }

}
