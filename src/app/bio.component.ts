import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "./contentful.service";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'bio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './html/bio.component.html',
    styleUrls: ['./css/app.component.css', './css/bio.component.css'],
})

export class Bio implements OnInit{
    constructor(private contentfulService: ContentfulService) {}
    
      bio$: Observable<any> | undefined;
    
      ngOnInit(): void {
        const contentTypeId = 'bio';
        this.bio$ = this.contentfulService.getEntriesByContentType(contentTypeId);
      }
}