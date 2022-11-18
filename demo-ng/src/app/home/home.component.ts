import { Component, OnInit, NgZone } from "@angular/core";
import { CustomBottomsheet, CBSheetOption, CBSheetItem } from 'nativescript-custom-bottomsheet';
import { Dialogs } from '@nativescript/core';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    private customBottomsheet: CustomBottomsheet;

    constructor(private zone: NgZone) {
        // Use the component constructor to inject providers.
        this.customBottomsheet = new CustomBottomsheet();
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public onTap(): void {
        const options: CBSheetOption = {
            icon: 'contact',
            title: 'John Doe',
            items: [
                {
                    icon: 'call',
                    title: 'Make a call'
                },
                {
                    icon: 'sms',
                    title: 'Send a text message'
                },
                {
                    icon: 'email',
                    title: 'Send an email'
                },
                {
                    icon: 'comments',
                    title: 'Leave a comment'
                },
                {
                    icon: 'delete',
                    title: 'Delete contact'
                }
            ],
            onItemTap: (index, item) => {
                this.zone.run(() => {
                    console.log('index', index);
                    if (item) {
                        Dialogs.alert(`Action Selected => "${item.title}"`);
                    }
                })
            },
            cancelButtonText: 'Cancel'
        };


        this.customBottomsheet.show(options);
    }
}
