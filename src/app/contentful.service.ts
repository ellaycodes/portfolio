import { Injectable } from '@angular/core';
import { createClient, Entry, ContentfulClientApi } from 'contentful';
import { environment } from './environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  // Get all entries
  getAllEntries() {
    const promise = this.client.getEntries();
    return from(promise);
  }

  // Get a specific entry by ID
  getEntryById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }

  // Filter entries by content type ID
  getEntriesByContentType(contentTypeId: string) {
    const promise = this.client.getEntries({ content_type: contentTypeId });
    return from(promise);
  }

  // Get a specific content type by ID
  getContentType(id: string) {
    const promise = this.client.getContentType(id);
    return from(promise);
  }
}
