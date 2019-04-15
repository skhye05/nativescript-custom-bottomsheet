
export interface CBSheetOption {
  title: string;
  icon: string;
  items: Array<any>;
  onItemTap?: (index, item: CBSheetItem) => void;
  cancelButtonText?: string;

}

export interface CBSheetItem {
  title: string;
  icon: string;
}
