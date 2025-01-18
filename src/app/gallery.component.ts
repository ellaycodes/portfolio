import {
  Component,
  OnInit,
  Inject,
  InjectionToken,
  Optional,
} from '@angular/core';
// import { ContentfulService } from './contentful.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MarkdownService } from 'ngx-markdown';

// export const CONTENTFUL_SERVICE = new InjectionToken<ContentfulService>(
//   'ContentfulService'
// );
export const MARKDOWN_SERVICE = new InjectionToken<MarkdownService>(
  'MarkdownService'
);

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './html/gallery.component.html',
  providers: [
    // { provide: CONTENTFUL_SERVICE, useClass: ContentfulService },
    { provide: MARKDOWN_SERVICE, useClass: MarkdownService },
  ],
  styleUrls: ['./css/app.component.css', './css/gallery.component.css'],
})
export class Gallery implements OnInit {
  gallery$: Observable<any> | undefined;
  backgroundColor: string = '';
  startIndex: number = 0;
  galleryLength: number = 0;

  constructor(
    // @Optional()
    // @Inject(CONTENTFUL_SERVICE)
    // private contentfulService: ContentfulService,
    @Optional()
    @Inject(MARKDOWN_SERVICE)
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    // if (this.contentfulService) {
    //   this.getContent();
    // }
    if (this.markdownService) {
      this.implementMarkdown();
    }
  }

  // getContent(): void {
  //   const contentTypeId = 'contentBlock';
  //   this.gallery$ =
  //     this.contentfulService.getEntriesByContentType(contentTypeId);

  //   this.gallery$.subscribe({
  //     next: (data: any) => {
  //       this.backgroundColor =
  //         data.items[0].fields.stylingOptions.fields.backgroundColor || '';
  //       const gallery = data.items[0].fields.contentCard;
  //       this.galleryLength = gallery.length;
  //       console.log(this.galleryLength);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching content:', err);
  //     },
  //   });
  // }

  implementMarkdown(): void {
    console.log(this.markdownService.parse('# Test'));
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
}
