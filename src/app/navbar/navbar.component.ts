import { Component} from '@angular/core';
import {DocumentService} from "../document.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public documentService: DocumentService) { }
}
