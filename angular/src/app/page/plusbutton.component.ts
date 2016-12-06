import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'plusbtn',
    template: `
        <button md-fab color="warn">
            <md-icon class="md-24">add</md-icon>
        </button>
    `
})
export class PlusButtonComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}