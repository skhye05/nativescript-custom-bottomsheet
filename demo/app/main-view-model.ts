import { Observable } from 'tns-core-modules/data/observable';
import { CustomBottomsheet } from 'nativescript-custom-bottomsheet';
import { CBSheetOption } from '../../src/custom-bottomsheet.common';
import { isAndroid } from 'tns-core-modules/ui/page/page';


export class HelloWorldModel extends Observable {
  public message: string;
  private customBottomsheet: CustomBottomsheet;

  constructor() {
    super();

    this.customBottomsheet = new CustomBottomsheet();
  }

  public onTap(): void {

    const options: CBSheetOption = {
      icon: isAndroid ? 'icon' : 'lock',
      title: 'Test hjhgdsg dshjgjgdhjh hdjgdsghghgjhsd hjhjhsdjv hjsdjhsdjhyure hjduyuysduyuyyusduuy',
      items: [{
        icon: isAndroid ? 'icon' : 'lock',
        title: 'test-list'
      },
      {
        icon: isAndroid ? 'icon' : 'lock',
        title: 'test-list'
      },
      {
        icon: isAndroid ? 'icon' : 'lock',
        title: 'test-list'
      }
      ],
      onItemTap: (index, item) => {
        console.log('index', index);
      }
    };

    this.customBottomsheet.show(options);

    console.log('sssss');
  }
}
