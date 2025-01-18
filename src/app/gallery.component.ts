import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {marked} from 'marked';

@Component({
    selector: 'gallery',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './html/gallery.component.html',
    styleUrls: ['./css/app.component.css', './css/gallery.component.css']
})
export class Gallery implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  gallery$: Observable<any> | undefined;
  backgroundColor: string = '';
  startIndex: number = 0;
  galleryLength: number = 0;

  ngOnInit(): void {
    const contentTypeId = 'contentBlock';
    this.gallery$ =
      this.contentfulService.getEntriesByContentType(contentTypeId);

    this.gallery$.subscribe((data: any) => {
      this.backgroundColor =
        data.items[0].fields.stylingOptions.fields.backgroundColor || '';
      const gallery = data.items[0].fields.contentCard;
      this.galleryLength = gallery.length;
      console.log(this.galleryLength);
    });
  }

  prevImage(): void {
    if (this.startIndex > 0) {
      this.startIndex -= 1;
    }
  }

  nextImage(): void {
    if (this.startIndex + 3 < this.galleryLength) {
      this.startIndex += 1;
    }
  }

  getVisibleImages(images: any[]): any[] {
    return images.slice(this.startIndex, this.startIndex + 3).length === 3
      ? images.slice(this.startIndex, this.startIndex + 3)
      : [
          ...images.slice(this.startIndex),
          ...images.slice(0, 3 - images.slice(this.startIndex).length),
        ];
  }

  // markdown(description: string) {
  //   return marked.parse(description)
  // }
}
