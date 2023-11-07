import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FileDownloadService {
    constructor(private http: HttpClient) { }

    downloadFile(url: string): Observable<Blob> {
        return this.http.get(url, {
            responseType: 'blob',
            headers: new HttpHeaders().append('Content-Type', 'application/pdf')
        });
    }
}
