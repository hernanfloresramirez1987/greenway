import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export default class HomeComponent {
  searchValue: String = '';
  suggestedCats: any = [];
  hidden: boolean = true;

  constructor(private router: Router) {
    const carousel: any = document.getElementById('carousel');
    let index = 0;

    setInterval(() => {
      index = (index + 1) % 3; // Número de slides
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 4000); // Cambia cada 4 segundos
  }

  mostSearched() {
    this.router.navigate(['/most-searched']);
  }
}
