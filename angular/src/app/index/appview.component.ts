import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar.component'

@Component({
    selector: 'app-view',
    template: `
        <div class="btn-group-gray">
            <button md-raised-button bottom-absolute color="primary" 
                class="tab-style" routerLink="/page">Left</button>
            <button md-raised-button bottom-absolute color="accent" 
                class="tab-style" routerLink="/page">MiddleMiddleMiddleMiddle</button>
            <button md-raised-button bottom-absolute color="accent" 
                class="tab-style" routerLink="/">Right</button>
        </div>
        <structure></structure>
        <sidebar class="sidebar"></sidebar>
    `,
    styleUrls: ['./index.css']
})
export class AppViewComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}