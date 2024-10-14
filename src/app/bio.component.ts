import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'bio',
    standalone: true,
    imports: [RouterOutlet],
    template: `<h1>THIS IS THE BIO SECTION</h1>
    `,
})

export class Bio {

}