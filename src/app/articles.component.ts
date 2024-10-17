import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'articles',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './html/articles.component.html',
    styleUrl: './css/bio.component.css',
})

export class Articles {

}