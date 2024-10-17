import { Routes } from '@angular/router';
import { Bio } from './bio.component';
import { Intro } from './intro.component';
import { Education } from './education.component';
import { Work } from './work.component';
import { Testimonials } from './testimonials.component';
import { Accolades } from './accolades.component';
import { Articles } from './articles.component';
import { Contact } from './contact.component';
import { Home } from './home.component';

export const routes: Routes = [
  { path: '', title: 'Home',component: Home },
  { path: 'intro', title: 'Introduction', component: Intro },
  { path: 'bio', title: 'Biography',component: Bio },
  { path: 'education', title: 'Education',component: Education },
  { path: 'work', title: 'Work',component: Work },
  { path: 'testimonials', title: 'Testimonials',component: Testimonials },
  { path: 'accolades', title: 'Accolades',component: Accolades },
  { path: 'articles', title: 'Articles',component: Articles },
  { path: 'contact', title: 'Contact',component: Contact },
];
