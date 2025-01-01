import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "./contentful.service";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'testimonials',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './html/testimonials.component.html',
    styleUrls: ['./css/app.component.css', './css/testimonials.component.css'],
})

export class Testimonials implements OnInit{
constructor(private contentfulService: ContentfulService) {}

  testimonials$: Observable<any> | undefined;

  ngOnInit(): void {
    const contentTypeId = 'testimonialPage';
    this.testimonials$ = this.contentfulService.getEntriesByContentType(contentTypeId);
  }
}