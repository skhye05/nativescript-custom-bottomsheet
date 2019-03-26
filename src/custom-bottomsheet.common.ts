
export interface CBSheetOption {
  title: string;
  icon: string;
  items: Array<any>;
  onItemTap?: (index, item: CBSheetItem) => void;
}

export interface CBSheetItem {
  title: string;
  icon: string;
}
