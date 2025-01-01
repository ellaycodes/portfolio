import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './html/intro.component.html',
  styleUrls: ['./css/app.component.css', './css/intro.component.css'],
})
export class Intro implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  intro$: Observable<any> | undefined;

  ngOnInit(): void {
    const contentTypeId = 'introductionPage';
    this.intro$ = this.contentfulService.getEntriesByContentType(contentTypeId);
  }
}
