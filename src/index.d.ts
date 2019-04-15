
import { CBSheetOption } from "./custom-bottomsheet.common";

export declare class CustomBottomsheet {
  constructor();
  show(options: CBSheetOption): void;
}

export interface CBSheetOption {
  title: string;
  icon: string;
  items: Array<any>;
  onItemTap?: (index: any, item: CBSheetItem) => void;
}
export interface CBSheetItem {
  title: string;
  icon: string;
}
