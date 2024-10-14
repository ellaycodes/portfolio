import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'home',
    standalone: true,
    imports: [RouterOutlet],
    template: `<h1>Home</h1>
    `,
})

export class Home {

}