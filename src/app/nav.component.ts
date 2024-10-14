import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <a routerLink="/bio">Bio</a> 
   |
  <a routerLink="/intro">Intro</a>
  |
  <a routerLink="/education">Education</a>
  |
  <a routerLink="/work">Work</a>
  |
  <a routerLink="/testimonials">Testimonials</a>
  |
  <a routerLink="/accolades">Accolades</a>
  |
  <a routerLink="/articles">Articles</a>
  |
  <a routerLink="/contact">Contact</a>
  <router-outlet></router-outlet>

  <div>
    <a routerLink="/">Back To Top</a>
  </div>
  `,
  styleUrl: './app.component.css',
})
export class NavBar {
  
}