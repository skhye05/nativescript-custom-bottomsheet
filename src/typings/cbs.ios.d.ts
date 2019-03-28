
declare class LCActionSheet extends UIView {

	static alloc(): LCActionSheet; // inherited from NSObject

	static appearance(): LCActionSheet; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): LCActionSheet; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): LCActionSheet; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LCActionSheet; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): LCActionSheet; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LCActionSheet; // inherited from UIAppearance

	static new(): LCActionSheet; // inherited from NSObject

	static sheetWithTitleMainIconIconArrayCancelButtonTitleClickedOtherButtonTitleArray(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], cancelButtonTitle: string, clickedHandler: (p1: LCActionSheet, p2: number) => void, otherButtonTitleArray: NSArray<string> | string[]): LCActionSheet;

	static sheetWithTitleMainIconIconArrayCancelButtonTitleClickedOtherButtonTitles(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], cancelButtonTitle: string, clickedHandler: (p1: LCActionSheet, p2: number) => void, otherButtonTitles: string): LCActionSheet;

	static sheetWithTitleMainIconIconArrayCancelButtonTitleDidDismissOtherButtonTitleArray(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], cancelButtonTitle: string, didDismissHandler: (p1: LCActionSheet, p2: number) => void, otherButtonTitleArray: NSArray<string> | string[]): LCActionSheet;

	static sheetWithTitleMainIconIconArrayCancelButtonTitleDidDismissOtherButtonTitles(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], cancelButtonTitle: string, didDismissHandler: (p1: LCActionSheet, p2: number) => void, otherButtonTitles: string): LCActionSheet;

	static sheetWithTitleMainIconIconArrayDelegateCancelButtonTitleOtherButtonTitleArray(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], delegate: LCActionSheetDelegate, cancelButtonTitle: string, otherButtonTitleArray: NSArray<string> | string[]): LCActionSheet;

	static sheetWithTitleMainIconIconArrayDelegateCancelButtonTitleOtherButtonTitles(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], delegate: LCActionSheetDelegate, cancelButtonTitle: string, otherButtonTitles: string): LCActionSheet;

	animationDuration: number;

	autoHideWhenDeviceRotated: boolean;

	blurBackgroundColor: UIColor;

	blurEffectStyle: UIBlurEffectStyle;

	buttonBgColor: UIColor;

	buttonColor: UIColor;

	buttonCornerRadius: number;

	buttonEdgeInsets: UIEdgeInsets;

	buttonFont: UIFont;

	buttonHeight: number;

	cancelButtonBgColor: UIColor;

	cancelButtonColor: UIColor;

	readonly cancelButtonIndex: number;

	cancelButtonTitle: string;

	clickedHandler: (p1: LCActionSheet, p2: number) => void;

	darkOpacity: number;

	darkViewNoTaped: boolean;

	delegate: LCActionSheetDelegate;

	destructiveButtonBgColor: UIColor;

	destructiveButtonColor: UIColor;

	destructiveButtonIndexSet: NSIndexSet;

	didDismissHandler: (p1: LCActionSheet, p2: number) => void;

	didPresentHandler: (p1: LCActionSheet) => void;

	disableAutoDismissAfterClicking: boolean;

	mainIcon: UIImage;

	numberOfTitleLines: number;

	redButtonIndexSet: NSIndexSet;

	scrolling: boolean;

	separatorColor: UIColor;

	title: string;

	titleColor: UIColor;

	titleEdgeInsets: UIEdgeInsets;

	titleFont: UIFont;

	unBlur: boolean;

	visibleButtonCount: number;

	willDismissHandler: (p1: LCActionSheet, p2: number) => void;

	willPresentHandler: (p1: LCActionSheet) => void;

	constructor(o: { title: string; mainIcon: UIImage; iconArray: NSArray<string> | string[]; cancelButtonTitle: string; clicked: (p1: LCActionSheet, p2: number) => void; otherButtonTitleArray: NSArray<string> | string[]; });

	constructor(o: { title: string; mainIcon: UIImage; iconArray: NSArray<string> | string[]; cancelButtonTitle: string; clicked: (p1: LCActionSheet, p2: number) => void; otherButtonTitles: string; });

	constructor(o: { title: string; mainIcon: UIImage; iconArray: NSArray<string> | string[]; cancelButtonTitle: string; didDismiss: (p1: LCActionSheet, p2: number) => void; otherButtonTitleArray: NSArray<string> | string[]; });

	constructor(o: { title: string; mainIcon: UIImage; iconArray: NSArray<string> | string[]; cancelButtonTitle: string; didDismiss: (p1: LCActionSheet, p2: number) => void; otherButtonTitles: string; });

	constructor(o: { title: string; mainIcon: UIImage; iconArray: NSArray<string> | string[]; delegate: LCActionSheetDelegate; cancelButtonTitle: string; otherButtonTitleArray: NSArray<string> | string[]; });

	constructor(o: { title: string; mainIcon: UIImage; iconArray: NSArray<string> | string[]; delegate: LCActionSheetDelegate; cancelButtonTitle: string; otherButtonTitles: string; });

	appendButtonWithTitleAtIndex(title: string, index: number): void;

	appendButtonsWithTitles(titles: string): void;

	appendButtonsWithTitlesAtIndexes(titles: NSArray<string> | string[], indexes: NSIndexSet): void;

	buttonTitleAtIndex(index: number): string;

	initWithTitleMainIconIconArrayCancelButtonTitleClickedOtherButtonTitleArray(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], cancelButtonTitle: string, clickedHandler: (p1: LCActionSheet, p2: number) => void, otherButtonTitleArray: NSArray<string> | string[]): this;

	initWithTitleMainIconIconArrayCancelButtonTitleClickedOtherButtonTitles(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], cancelButtonTitle: string, clickedHandler: (p1: LCActionSheet, p2: number) => void, otherButtonTitles: string): this;

	initWithTitleMainIconIconArrayCancelButtonTitleDidDismissOtherButtonTitleArray(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], cancelButtonTitle: string, didDismissHandler: (p1: LCActionSheet, p2: number) => void, otherButtonTitleArray: NSArray<string> | string[]): this;

	initWithTitleMainIconIconArrayCancelButtonTitleDidDismissOtherButtonTitles(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], cancelButtonTitle: string, didDismissHandler: (p1: LCActionSheet, p2: number) => void, otherButtonTitles: string): this;

	initWithTitleMainIconIconArrayDelegateCancelButtonTitleOtherButtonTitleArray(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], delegate: LCActionSheetDelegate, cancelButtonTitle: string, otherButtonTitleArray: NSArray<string> | string[]): this;

	initWithTitleMainIconIconArrayDelegateCancelButtonTitleOtherButtonTitles(title: string, mainIcon: UIImage, iconArray: NSArray<string> | string[], delegate: LCActionSheetDelegate, cancelButtonTitle: string, otherButtonTitles: string): this;

	setButtonTitleAtIndex(title: string, index: number): void;

	show(): void;
}

declare class LCActionSheetCell extends UITableViewCell {

	static alloc(): LCActionSheetCell; // inherited from NSObject

	static appearance(): LCActionSheetCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): LCActionSheetCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): LCActionSheetCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LCActionSheetCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): LCActionSheetCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LCActionSheetCell; // inherited from UIAppearance

	static new(): LCActionSheetCell; // inherited from NSObject

	buttonEdgeInsets: UIEdgeInsets;

	cellSeparatorColor: UIColor;

	iconImage: UIImage;

	lineView: UIView;

	titleLabel: UILabel;
}

declare class LCActionSheetConfig extends NSObject {

	static alloc(): LCActionSheetConfig; // inherited from NSObject

	static new(): LCActionSheetConfig; // inherited from NSObject

	static shared(): LCActionSheetConfig;

	animationDuration: number;

	autoHideWhenDeviceRotated: boolean;

	blurBackgroundColor: UIColor;

	blurEffectStyle: UIBlurEffectStyle;

	buttonBgColor: UIColor;

	buttonColor: UIColor;

	buttonCornerRadius: number;

	buttonEdgeInsets: UIEdgeInsets;

	buttonFont: UIFont;

	buttonHeight: number;

	cancelButtonBgColor: UIColor;

	cancelButtonColor: UIColor;

	readonly cancelButtonIndex: number;

	cancelButtonTitle: string;

	darkOpacity: number;

	darkViewNoTaped: boolean;

	destructiveButtonBgColor: UIColor;

	destructiveButtonColor: UIColor;

	destructiveButtonIndexSet: NSIndexSet;

	disableAutoDismissAfterClicking: boolean;

	numberOfTitleLines: number;

	scrolling: boolean;

	separatorColor: UIColor;

	title: string;

	titleColor: UIColor;

	titleEdgeInsets: UIEdgeInsets;

	titleFont: UIFont;

	unBlur: boolean;

	visibleButtonCount: number;

	static readonly config: LCActionSheetConfig;
}

interface LCActionSheetDelegate extends NSObjectProtocol {

	actionSheetClickedButtonAtIndex?(actionSheet: LCActionSheet, buttonIndex: number): void;

	actionSheetDidDismissWithButtonIndex?(actionSheet: LCActionSheet, buttonIndex: number): void;

	actionSheetWillDismissWithButtonIndex?(actionSheet: LCActionSheet, buttonIndex: number): void;

	didPresentActionSheet?(actionSheet: LCActionSheet): void;

	willPresentActionSheet?(actionSheet: LCActionSheet): void;
}
declare var LCActionSheetDelegate: {

	prototype: LCActionSheetDelegate;
};

declare var LCActionSheetVersionNumber: number;

declare var LCActionSheetVersionString: interop.Reference<number>;

declare class LCActionSheetViewController extends UIViewController {

	static alloc(): LCActionSheetViewController; // inherited from NSObject

	static new(): LCActionSheetViewController; // inherited from NSObject

	statusBarHidden: boolean;

	statusBarStyle: UIStatusBarStyle;
}
