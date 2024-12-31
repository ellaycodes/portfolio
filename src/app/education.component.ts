import { Component, signal } from "@angular/core";

@Component({
    selector: 'education',
    standalone: true,
    imports: [],
    templateUrl: './html/edu.component.html',
    styleUrls: ['./css/app.component.css', './css/edu.component.css'],
})

export class Education {
    title = signal('Education')
}