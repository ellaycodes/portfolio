import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'articles',
    standalone: true,
    imports: [RouterOutlet],
    template: `<h1>Articles</h1>
    `,
})

export class Articles {

}