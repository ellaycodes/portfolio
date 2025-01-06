import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "./contentful.service";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";


@Component({
    selector: 'work',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './html/work.component.html',
    styleUrls: ['./css/app.component.css', './css/work.component.css'],
})

export class Work implements OnInit{
constructor(private contentfulService: ContentfulService) {}

  work$: Observable<any> | undefined;
  backgroundColor: string = '';

  ngOnInit(): void {
    const contentTypeId = 'bodyOfWorkPage';
    this.work$ = this.contentfulService.getEntriesByContentType(contentTypeId);

    this.work$.subscribe((data: any) => {
        this.backgroundColor = data.items[0].fields.stylingOptions.fields.backgroundColor || ''
      })
  }
}