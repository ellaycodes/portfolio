import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ContentfulService } from './contentful.service';
import { Observable } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './html/home.component.html',
  styleUrl: './css/home.component.css',
})

export class Home implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  homePage$: Observable<any> | undefined;

  ngOnInit(): void {
    const contentTypeId = 'landingPage';
    this.homePage$ = this.contentfulService.getEntriesByContentType(contentTypeId);
  }
}