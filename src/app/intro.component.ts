import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'intro',
    standalone: true,
    imports: [RouterOutlet],
    template: `<h1>THIS IS THE INTRO SECTION</h1>`,
})

export class Intro {

}