import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {

    private _tagHistory: string[] = [];

    constructor() { }

    get tagHistory() {
        return [...this._tagHistory];
    }

    searchTag(tag: string) {
        if (tag.trim().length === 0) return
        this._tagHistory.unshift(tag);
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