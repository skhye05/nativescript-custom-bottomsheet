/// <reference path="./typings/cbs.ios.d.ts" />
import { CBSheetOption } from "./custom-bottomsheet.common";

// UIImage.imageNamed(options.icon)
export class CustomBottomsheet {

    constructor() {

    }

    public show(options: CBSheetOption): void {

        const titles: Array<string> = new Array<string>();
        const icons: Array<string> = new Array<string>();

        options.items.forEach((val: any) => {
            titles.push(val.title);
            icons.push(val.icon);
        });

        const bottomSheet = LCActionSheet.sheetWithTitleMainIconIconArrayCancelButtonTitleClickedOtherButtonTitleArray(
            options.title,
            UIImage.imageNamed(options.icon),
            icons,
            options.cancelButtonText || 'Cancel',
            (actionSheet: LCActionSheet, index: number) => {
                if (index === 0) {
                    options.onItemTap(-1, null);
                    return;
                }

                options.onItemTap(index - 1, options.items[index - 1]);
            },
            titles
        );


        bottomSheet.show();
    }
}

// class LCActionSheetDelegateImpl extends NSObject implements LCActionSheetDelegate {
//     static objCProtocols = [LCActionSheetDelegate];

//     static new(): LCActionSheetDelegateImpl {
//         return <LCActionSheetDelegateImpl>super.new();
//     }

//     public actionSheetClickedButtonAtIndex(actionSheet, index): void {
//         console.log(index);
//     }

//     public willPresentActionSheet(actionSheet): void {
//         console.log('will present')
//     }

//     public didPresentActionSheet(actionSheet): void {
//         console.log('did present');
//     }

//     public actionSheetWillDismissWithButtonIndex(actionSheet, index): void {
//         console.log('Button present');
//     }

//     public actionSheetDidDismissWithButtonIndex(actionSheet, index): void {
//         console.log('rrrrr')
//     }
// }

