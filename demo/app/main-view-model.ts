import { Observable } from 'tns-core-modules/data/observable';
import { CustomBottomsheet, CBSheetOption } from 'nativescript-custom-bottomsheet';

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
      }
    };

    this.customBottomsheet.show(options);
  }
}
