import { colorStyleType } from "./colorStyleType";

export interface btnConfigModel{
    key:colorStyleType,
    btnStyle:Object,
    textStyle:Object,
    outlineConfig?:{    
        key:"outlinePrimary" | "outlineSecondary" | "outlineSuccess" |
        "outlineDanger" | "outlineWarning" | "outlineInfo",
        pressStyle:Object
    }
}