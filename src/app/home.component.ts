import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router'


@Component({
    selector: 'home',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './html/home.component.html',
    styleUrl: './css/home.component.css',
})

export class Home {
    
}