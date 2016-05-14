import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <nav class="light-blue lighten-1" role="navigation">
            <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Angular Attack App Bjaanes</a></div>
        </nav>
    `
})
export class HeaderComponent {
}