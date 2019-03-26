/// <reference path="./typings/cbs.android.d.ts" />
import { CBSheetOption } from "./custom-bottomsheet.common";
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';


export class CustomBottomsheet {

    private _cbsDelegateImpl: LCActionSheetDelegateImpl;

    constructor() {

        this._cbsDelegateImpl = LCActionSheetDelegateImpl.new();

    }

    public show(options: any): void {
        const bottomSheet = LCActionSheet.sheetWithTitleDelegateCancelButtonTitleOtherButtonTitleArray("TEST", this._cbsDelegateImpl, 'Cancel', ['Test 1', 'Test 2', 'Test 3']);

        bottomSheet.show();
    }
}

class LCActionSheetDelegateImpl extends NSObject implements LCActionSheetDelegate {
    static objCProtocols = [LCActionSheetDelegate];

    static new(): LCActionSheetDelegateImpl {
        return <LCActionSheetDelegateImpl>super.new();
    }

    public actionSheetClickedButtonAtIndex(actionSheet, index): void {
        console.log(index);
    }

    public willPresentActionSheet(actionSheet): void {
        console.log('will present')
    }

    public didPresentActionSheet(actionSheet): void {
        console.log('did present');
    }

    public actionSheetWillDismissWithButtonIndex(actionSheet, index): void {
        console.log('Button present');
    }

    public actionSheetDidDismissWithButtonIndex(actionSheet, index): void {
        console.log('rrrrr')
    }
}

const rootVC = function () {
    let appwindow = UIApplication.sharedApplication.keyWindow;
    return appwindow.rootViewController;
};
