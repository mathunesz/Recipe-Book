import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: []
})
export class HeaderComponent {
    constructor() {}

    @Output() changedTab = new EventEmitter<{tabName: string}>();

    changeTab(newTab: string) {
        this.changedTab.emit({tabName: newTab});
    }
}