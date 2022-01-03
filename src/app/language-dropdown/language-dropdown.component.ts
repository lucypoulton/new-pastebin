import {Component, Input, OnInit} from '@angular/core';
import {HighlightService} from "../highlight.service";
import hljs from "highlight.js";

@Component({
    selector: 'app-language-dropdown',
    templateUrl: './language-dropdown.component.html',
    styleUrls: ['./language-dropdown.component.scss']
})
export class LanguageDropdownComponent implements OnInit {

    private _extended: boolean = false;

    @Input() set extended(val: boolean) {
        this._extended = val;
        if (val) this.suggestedLanguages = this.defaultLanguages;
    }

    get extended() {
        return this._extended
    }

    public defaultLanguages = ["Auto", "Plaintext", "Python", "Java", "JavaScript", "TypeScript", "PHP", "HTML", "CSS"]

    public suggestedLanguages: Array<string> = this.defaultLanguages;

    constructor(public hightlightService: HighlightService) {
    }

    ngOnInit(): void {
    }

    setLanguage(val: string) {
        this.hightlightService.language = val == "Auto" ? undefined : val;
        console.log(`Setting language to ${val}`)
        this.extended = false;
    }

    updateSearch(val: string) {
        this.suggestedLanguages = val == "" ?
            this.defaultLanguages :
            hljs.listLanguages().filter(lang => lang.startsWith(val));
    }
}
