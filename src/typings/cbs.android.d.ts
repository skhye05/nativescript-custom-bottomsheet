declare namespace com {
 export namespace eljo {
  export namespace skhye05 {
   export namespace custombottomsheet {
    export class BuildConfig {
     public static class: java.lang.Class<com.eljo.skhye05.custombottomsheet.BuildConfig>;
     public static DEBUG: boolean;
     public static APPLICATION_ID: string;
     public static BUILD_TYPE: string;
     public static FLAVOR: string;
     public static VERSION_CODE: number;
     public static VERSION_NAME: string;
     public constructor();
    }
   }
  }
 }
}

declare namespace com {
 export namespace eljo {
  export namespace skhye05 {
   export namespace custombottomsheet {
    export class CustomBottomSheetAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.eljo.skhye05.custombottomsheet.CustomBottomSheetAdapter.MyViewHolder> {
     public static class: java.lang.Class<com.eljo.skhye05.custombottomsheet.CustomBottomSheetAdapter>;
     public onBindViewHolder(param0: com.eljo.skhye05.custombottomsheet.CustomBottomSheetAdapter.MyViewHolder, param1: number): void;
     public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.eljo.skhye05.custombottomsheet.CustomBottomSheetAdapter.MyViewHolder;
     public getItemCount(): number;
     public constructor(param0: java.util.List<com.eljo.skhye05.custombottomsheet.CustomBottomSheetItem>);
    }
    export namespace CustomBottomSheetAdapter {
     export class MyViewHolder {
      public static class: java.lang.Class<com.eljo.skhye05.custombottomsheet.CustomBottomSheetAdapter.MyViewHolder>;
      public title: globalAndroid.widget.TextView;
      public icon: globalAndroid.widget.ImageView;
      public constructor(param0: com.eljo.skhye05.custombottomsheet.CustomBottomSheetAdapter, param1: globalAndroid.view.View);
     }
    }
   }
  }
 }
}

declare namespace com {
 export namespace eljo {
  export namespace skhye05 {
   export namespace custombottomsheet {
    export class CustomBottomSheetFragment {
     public static class: java.lang.Class<com.eljo.skhye05.custombottomsheet.CustomBottomSheetFragment>;
     public constructor(param0: number, param1: string, param2: java.util.List<com.eljo.skhye05.custombottomsheet.CustomBottomSheetItem>);
     public onCreate(param0: globalAndroid.os.Bundle): void;
     public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
     public setTitleTextColor(param0: number): void;
     public setItems(param0: java.util.List<com.eljo.skhye05.custombottomsheet.CustomBottomSheetItem>): void;
     public getmRecyclerView(): globalAndroid.support.v7.widget.RecyclerView;
     public setOnItemClickListener(param0: com.eljo.skhye05.custombottomsheet.CustomBottomSheetFragment.OnItemClickListener): void;
     public setTitleContainerBg(param0: number): void;
    }
    export namespace CustomBottomSheetFragment {
     export class OnItemClickListener {
      public static class: java.lang.Class<com.eljo.skhye05.custombottomsheet.CustomBottomSheetFragment.OnItemClickListener>;
      /**
       * Constructs a new instance of the com.eljo.skhye05.custombottomsheet.CustomBottomSheetFragment$OnItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
       onClick(param0: number): void;
      });
      public constructor();
      public onClick(param0: number): void;
     }
    }
   }
  }
 }
}

declare namespace com {
 export namespace eljo {
  export namespace skhye05 {
   export namespace custombottomsheet {
    export class CustomBottomSheetItem {
     public static class: java.lang.Class<com.eljo.skhye05.custombottomsheet.CustomBottomSheetItem>;
     public getTitle(): string;
     public constructor();
     public setTitle(param0: string): void;
     public seticon(param0: number): void;
     public constructor(param0: string, param1: number);
     public geticon(): number;
    }
   }
  }
 }
}

declare namespace com {
 export namespace eljo {
  export namespace skhye05 {
   export namespace custombottomsheet {
    export class CustomBottomSheetTouchListener {
     public static class: java.lang.Class<com.eljo.skhye05.custombottomsheet.CustomBottomSheetTouchListener>;
     public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
     public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.support.v7.widget.RecyclerView, param2: com.eljo.skhye05.custombottomsheet.CustomBottomSheetTouchListener.ClickListener);
     public onTouchEvent(param0: globalAndroid.support.v7.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void;
     public onInterceptTouchEvent(param0: globalAndroid.support.v7.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean;
    }
    export namespace CustomBottomSheetTouchListener {
     export class ClickListener {
      public static class: java.lang.Class<com.eljo.skhye05.custombottomsheet.CustomBottomSheetTouchListener.ClickListener>;
      /**
       * Constructs a new instance of the com.eljo.skhye05.custombottomsheet.CustomBottomSheetTouchListener$ClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
       onClick(param0: globalAndroid.view.View, param1: number): void;
       onLongClick(param0: globalAndroid.view.View, param1: number): void;
      });
      public constructor();
      public onClick(param0: globalAndroid.view.View, param1: number): void;
      public onLongClick(param0: globalAndroid.view.View, param1: number): void;
     }
    }
   }
  }
 }
}
