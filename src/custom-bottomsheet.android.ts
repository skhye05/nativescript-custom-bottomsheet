/// <reference path='./typings/cbs.android.d.ts' />

import { CBSheetOption } from './custom-bottomsheet.common';
import {Application, Utils} from "@nativescript/core";

export class CustomBottomsheet {

    constructor() { }

    public show(options: CBSheetOption): void {
        let itemList: java.util.List<com.eljo.skhye05.custombottomsheet.CustomBottomSheetItem> = new java.util.ArrayList<any>();

        options.items.forEach((val: any) => {
            const item: com.eljo.skhye05.custombottomsheet.CustomBottomSheetItem = new com.eljo.skhye05.custombottomsheet.CustomBottomSheetItem(val.title, Utils.ad.resources.getDrawableId(val.icon));
            itemList.add(item);
        });

        const bottomSheetFragment: any = new com.eljo.skhye05.custombottomsheet.CustomBottomSheetFragment(Utils.ad.resources.getDrawableId(options.icon), options.title, (itemList as any));

        bottomSheetFragment.setOnItemClickListener(new com.eljo.skhye05.custombottomsheet.CustomBottomSheetFragment.OnItemClickListener({
            onClick: (position) => {
                options.onItemTap(position, options.items[position]);
                bottomSheetFragment.dismiss();
            }
        }));

        bottomSheetFragment.show(Application.android.foregroundActivity.getSupportFragmentManager(), bottomSheetFragment.getTag());
    }
}
