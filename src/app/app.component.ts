import { Component } from '@angular/core';
import { NavBar } from './nav.component';
import { BodyComponent } from './body.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BodyComponent],
  template: `
    <body-component />
  `,
  styleUrl: './css/app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
