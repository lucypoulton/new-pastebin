import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'pastebin';
  exampleCode = `compat = when(version) {
            "1.8.8" -> Compat1_8()
            "1.9.4" -> Compat1_9()
            "1.10.2" -> Compat1_10()
            else -> {
                throw IllegalStateException("Compat for version \`$version\` is unavailable")
            }
        }`;
}
