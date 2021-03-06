import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {EditorComponent} from './editor/editor.component';
import {FormsModule} from "@angular/forms";
import { LanguageDropdownComponent } from './language-dropdown/language-dropdown.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        EditorComponent,
        LanguageDropdownComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
