import { Component } from '@angular/core';
import { NavBar } from './nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBar],
  template: `
    <nav-bar />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
