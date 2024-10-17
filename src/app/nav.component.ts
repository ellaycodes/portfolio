import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './html/nav.components.html',
  styleUrl: './css/nav.component.css',
})
export class NavBar {
  
}