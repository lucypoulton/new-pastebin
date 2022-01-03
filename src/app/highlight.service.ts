import {Injectable} from '@angular/core';
import hljs from "highlight.js";

@Injectable({
    providedIn: 'root'
})
export class HighlightService {

    public language: string | undefined;

    constructor() {
        //hljs.registerLanguage("plaintext", () => {})
    }
}
