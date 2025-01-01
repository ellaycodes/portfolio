import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "./contentful.service";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'articles',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './html/articles.component.html',
    styleUrls: ['./css/app.component.css', './css/articles.component.css'],
})

export class Articles implements OnInit{
constructor(private contentfulService: ContentfulService) {}

  articles$: Observable<any> | undefined;

  ngOnInit(): void {
    const contentTypeId = 'articlesPage';
    this.articles$ = this.contentfulService.getEntriesByContentType(contentTypeId);
  }
}