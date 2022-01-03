import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {stringify} from "@angular/compiler/src/util";

interface Document {
    data: string,
    key: string
}

/**
 * Wrapper around the haste-server API.
 */
@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    private _document!: Document;

    /**
     * Gets the current loaded document.
     */
    get document() {
        return this._document
    }

    constructor() {
        this.newDocument();
    }

    /**
     * Creates a new document.
     */
    newDocument() {
        this._document = {
            data: "",
            key: ""
        };
    }

    /**
     * Creates a copy of this document for editing.
     */
    makeCopy() {
        this.document.key = "";
    }

    /**
     * Loads a document from the server.
     * @return the status code from the server
     */
    async loadDocument(id: string): Promise<number> {
        let response = await fetch(`${environment.apiUrl}/documents/${id}`);
        if (response.status != 200) {
            return response.status;
        }

        this._document = await response.json();
        return 200;
    }

    /**
     * Saves the current document
     * @return the new document's ID
     */
    async save(): Promise<string> {
        let response = await fetch(`${environment.apiUrl}/documents`, {
            method: "POST",
            body: this.document.data
        });

        let json = await response.json();
        this.document.key = json.key;
        return json.key;
    }
}
