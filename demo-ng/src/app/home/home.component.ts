import { Component, OnInit } from "@angular/core";
import { CustomBottomsheet, CBSheetOption } from 'nativescript-custom-bottomsheet';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    private customBottomsheet: CustomBottomsheet;

    constructor() {
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
            items: [{
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
                console.log('index', index);
            }
        };

        this.customBottomsheet.show(options);
    }
}
