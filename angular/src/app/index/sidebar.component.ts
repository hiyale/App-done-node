import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html' ,
    styleUrls: ['./index.css']
})
export class SidebarComponent implements OnInit {

    @ViewChild("end") sidenav;

    constructor() { }

    ngOnInit() {
        this.sidenav.open();
    }

}