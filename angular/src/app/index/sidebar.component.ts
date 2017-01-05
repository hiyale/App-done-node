import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'sidebar',
    template: `
<md-sidenav-container class="sidenav-container">
    <md-sidenav #end align="end">
        <div style="width:300px">
                hello alladdaff  safddfas
        </div>
        <button md-button (click)="end.close()">Close</button>
    </md-sidenav>

<button md-button (click)="end.open()" style="right:0; top:0; position:fixed">Open end sidenav</button>

</md-sidenav-container>`,
    styleUrls: ['./index.css']
})
export class SidebarComponent implements OnInit {

    @ViewChild("end") sidenav;

    constructor() { }

    ngOnInit() {
        this.sidenav.open();
    }

}