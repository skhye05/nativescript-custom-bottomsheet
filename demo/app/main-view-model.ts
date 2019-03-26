import { Observable } from 'tns-core-modules/data/observable';
import { CustomBottomsheet } from 'nativescript-custom-bottomsheet';

export class HelloWorldModel extends Observable {
  public message: string;
  private customBottomsheet: CustomBottomsheet;

  constructor() {
    super();

    this.customBottomsheet = new CustomBottomsheet();
    this.message = this.customBottomsheet.message;
  }
}
