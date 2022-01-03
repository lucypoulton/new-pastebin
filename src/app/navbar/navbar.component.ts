import {Component, EventEmitter, Output} from '@angular/core';
import {DocumentService} from "../document.service";
import {HighlightService} from "../highlight.service";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    constructor(public documentService: DocumentService, public highlightService: HighlightService) {
    }

    public lockControls: boolean = false;

    newDocument() {
        this.documentService.newDocument();
        window.history.pushState({}, '', window.location.origin);
    }

    async save() {
        this.lockControls = true;
        let id = await this.documentService.save();
        window.history.pushState({}, '', `${window.location.origin}?${id}`);
        this.lockControls = false;
    }

    about() {
        this.lockControls = true;
        this.documentService.loadDocument("about");
        this.lockControls = false;
    }
}
