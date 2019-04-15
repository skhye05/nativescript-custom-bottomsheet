import { Observable } from 'tns-core-modules/data/observable';
import { CustomBottomsheet, CBSheetOption } from 'nativescript-custom-bottomsheet';
import { alert } from "tns-core-modules/ui/dialogs";

export class HelloWorldModel extends Observable {
  private customBottomsheet: CustomBottomsheet;

  constructor() {
    super();
    this.customBottomsheet = new CustomBottomsheet();
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
        if (item) {
          alert(`Action Selected : "${item.title}"`);
        }
      },
      cancelButtonText: 'Cancel'
    };

    this.customBottomsheet.show(options);
  }
}
