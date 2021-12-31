import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import hljs from "highlight.js";

@Component({
    selector: 'editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

    @Input() public editable!: boolean;

    private _language?: string;

    @Input() set language(val: string | undefined) {
        this._language = val;
        this.highlight();
    }

    get language(): string | undefined {
        return this._language;
    }

    @Output() modelChange = new EventEmitter<string>();

    private _model!: string;

    @Input() set model(val: string) {
        this._model = val;
        this.highlight();
        this.modelChange.emit(val);
    }

    get model() {
        return this._model;
    }

    highlightedContent!: string;

    highlight() {
        this.highlightedContent = (hljs.getLanguage(this.language || "") ?
                hljs.highlight(this.model, {language: this.language!}) :
                hljs.highlightAuto(this.model)
        ).value;
    }

    ngOnInit = this.highlight

    handleTab(event: Event) {
        event.preventDefault();
        let el = event.target as HTMLTextAreaElement;
        let idx = el.selectionStart;
        this.model = this.model.substring(0, idx) + "    " + this.model.substring(idx);
        el.selectionStart = idx + 4;
    }
}

