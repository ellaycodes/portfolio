import { Component } from '@angular/core';
import { NavBar } from './nav.component';
import { Home } from './home.component';
import { RouterOutlet } from '@angular/router';
import { Bio } from './bio.component';
import { Intro } from './intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBar, Home, RouterOutlet, Intro, Bio],
  template: `
    <nav-bar id='navBar' />
    <router-outlet />
  `,
  styleUrl: './css/app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
