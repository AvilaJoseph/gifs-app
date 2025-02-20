import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

    public gifList: Gif[] = [];

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

        this.http.get<SearchResponse>(`${this.service_url}/search`, {params})
            .subscribe((res) => {
                this.gifList = res.data;
                console.log(res.data)
        });
        console.log(this.tagHistory)
    }
    

     organizeTags(tag: string) {
        tag = tag.toLowerCase();
        if (this._tagHistory.includes(tag)) {
            this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag);
        }
        this._tagHistory.unshift(tag);
        this._tagHistory = this._tagHistory.splice(0, 10);
    }

}