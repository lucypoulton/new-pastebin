import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";

interface Document {
    data: string,
    key: string
}

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    private _document: Document = {
        data: "",
        key: ""
    };

    get document() {
        return this._document
    }

    async loadDocument(id: string): Promise<number> {
        let response = await fetch(`${environment.apiUrl}/documents/${id}`);
        if (response.status != 200) {
            return response.status;
        }

        this._document = await response.json();
        return 200;
    }
}
