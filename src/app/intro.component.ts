import { Component } from "@angular/core";

@Component({
    selector: 'intro',
    standalone: true,
    imports: [],
    templateUrl: './html/intro.component.html',
    styleUrls: ['./css/app.component.css', './css/intro.component.css']
})

export class Intro {
    title = 'Introduction';
}