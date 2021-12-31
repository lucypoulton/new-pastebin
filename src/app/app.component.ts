import {Component, OnInit} from '@angular/core';
import {DocumentService} from "./document.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'pastebin';
    language?: string;

    constructor(public documentService: DocumentService) {
    }


    async ngOnInit() {
        let documentId = window.location.search;
        if (documentId == undefined || documentId.length < 1) return;

        let [id, lang] = documentId.substring(1).split(".")

        let status = await this.documentService.loadDocument(id);
        if (status != 200) {
            // TODO
            window.alert("Error " + status);
        }
        this.language = lang;
    }
}
