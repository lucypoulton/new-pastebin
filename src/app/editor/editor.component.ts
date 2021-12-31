import {Component, Input} from '@angular/core';
import hljs from "highlight.js";

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  @Input() editable?: string;
  @Input() content: string = "";
  @Input() language?: string;

  hljs = hljs;
  highlightedContent = "";

  isEditable() {
    return this.editable != null;
  }

  onTextEdit(value: string) {
    this.content = value;
    this.highlightedContent = (this.language ?
      hljs.highlight(this.content, {language: this.language}) :
      hljs.highlightAuto(this.content)
    ).value;
  }

  handleTab(event: Event) {
    event.preventDefault();
    let el = event.target as HTMLTextAreaElement;
    let idx = el.selectionStart;
    this.content = this.content.substring(0, idx) + "    " + this.content.substring(idx);
    el.selectionStart = idx + 4;

  }
}

