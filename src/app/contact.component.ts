import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "./contentful.service";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";


@Component({
    selector: 'contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './html/contact.component.html',
    styleUrls: ['./css/app.component.css', './css/contact.component.css']
})

export class Contact implements OnInit{
    constructor(private contentfulService: ContentfulService) {}
    
      contact$: Observable<any> | undefined;
      backgroundColor: string = '';
    
      ngOnInit(): void {
        const contentTypeId = 'contactPage';
        this.contact$ = this.contentfulService.getEntriesByContentType(contentTypeId);
      }
}