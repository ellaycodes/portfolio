import { afterRender, Component, ElementRef } from '@angular/core';
import { Home } from './home.component';
import { Bio } from './bio.component';
import { Intro } from './intro.component';
import { Articles } from './articles.component';
import { Contact } from './contact.component';
import { Accolades } from './accolades.component';
import { Education } from './education.component';
import { Testimonials } from './testimonials.component'; 
import { Work } from './work.component';
import { Gallery } from "./gallery.component";

@Component({
  selector: 'body-component',
  standalone: true,
  imports: [Home, Intro, Bio, Articles, Contact, Accolades, Education, Testimonials, Work, Gallery],
  template: `
    <home class="section"/>
    <intro class="section"/>
    <bio class="section"/>
    <education class="section"/>
    <work class="section"/>
    <accolades class="section"/>
    <gallery class="section"/>
    <articles class="section"/>
    <testimonials class="section"/>
    <contact class="section"/>
  `,
  styleUrl: './css/app.component.css',
})

export class BodyComponent {
  title = 'Body';

}
