import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-view',
    templateUrl: `
        <div class="btn-group-gray">
            <button md-raised-button bottom-absolute color="primary" 
                class="tab-style" routerLink="/page">Left</button>
            <button md-raised-button bottom-absolute color="accent" 
                class="tab-style" routerLink="/page">MiddleMiddleMiddleMiddle</button>
            <button md-raised-button bottom-absolute color="accent" 
                class="tab-style" routerLink="/">Right</button>
        </div>
        <structure></structure>
    `,
    styleUrls: ['index.css']
})
export class AppViewComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}