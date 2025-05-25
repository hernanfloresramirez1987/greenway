import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export default class HomeComponent implements OnInit {
  searchValue: String = '';
  suggestedCats: any = [];
  hidden: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.carouselBanner();
    this.carouselMiddle();
  }

  mostSearched() {
    this.router.navigate(['/most-searched']);
  }
  
  carouselBanner() {
    const carousel: any = document.getElementById('carousel');
    let index = 0;

    setInterval(() => {
      index = (index + 1) % 4; // Número de slides
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 2000); // Cambia cada 4 segundos
  }

  carouselMiddle() {
    const carousel: any = document.getElementById('carouselmd');
    let index = 0;

    setInterval(() => {
      index = (index + 1) % 4; // Número de slides
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 4000); // Cambia cada 1 segundo
  }
}
