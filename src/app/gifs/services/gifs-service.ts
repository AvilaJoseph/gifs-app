import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GifsService {

    private _tagHistory: string[] = [];
    private apiKey: string = environment.API_KEY_GIFS;
    private service_url: string = 'https://api.giphy.com/v1/gifs'

    constructor(private http:HttpClient) { }

    get tagHistory() {
        return [...this._tagHistory];
    }

    async searchTag(tag: string) {
        if (tag.trim().length === 0) return
        this._tagHistory.unshift(tag);

        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', tag)

        this.http.get(`${this.service_url}/search`, {params})
            .subscribe((response: any) => {
                console.log(response)
        });
        console.log(this.tagHistory)
    }
    

    private organizeTags(tag: string) {
        tag = tag.toUpperCase();
        if (this._tagHistory.includes(tag)) {
            this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag);
        }
        this._tagHistory.unshift(tag);
        this._tagHistory = this._tagHistory.splice(0, 10);
    }

}