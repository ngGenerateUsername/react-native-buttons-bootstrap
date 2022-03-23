
import React, {useState} from "react";
import { View, Text, GestureResponderEvent, TouchableHighlight } from "react-native";
import { colorStyleType } from "./types/colorStyleType";
import { ButtonStyle } from "./buttonStyle";
import { configButtonStyle } from "./config/buttonConfig";
import { btnConfigModel } from "./types/btnConfigModel";

export type buttonProps = {
    btnText?: string,
    onPress?: (event: GestureResponderEvent) => void;

    btnSize?: "lg" | "md" | "sm";
    btnStyle?: colorStyleType;
    custumTextStyle?: Object;
    btnRadius?:number,
    onLongPress?:(event: GestureResponderEvent) => void;
}
const buttonComp: React.FC<buttonProps> = (btnProps: buttonProps) => {
    const [Press, setPress] = useState(false);
    //implement button Style of dev choice
    var btnStyleFinder: btnConfigModel;
    if (btnProps.btnStyle) {
        btnStyleFinder = configButtonStyle.find((style) => style.key == btnProps.btnStyle);
    }
    var btnSizeFinder: btnConfigModel;
    if (btnProps.btnSize) {
        btnSizeFinder = configButtonStyle.find((style) => style.key == btnProps.btnSize);
    }
    const outLineFind = btnStyleFinder?.outlineConfig ? true : false;

    return(
        <View  style={ButtonStyle.parentComponent}>
            <TouchableHighlight style={{borderRadius:btnProps?.btnRadius || 4}}  onPress={btnProps.onPress} onPressIn={() => { if (outLineFind) setPress(!Press) }} onPressOut={() => { if (outLineFind) setPress(!Press) }} onLongPress={btnProps.onLongPress}>
                <View style={[btnStyleFinder ? btnStyleFinder.btnStyle : ButtonStyle.buttonDefault, btnSizeFinder ? btnSizeFinder.btnStyle : ButtonStyle.md, Press && outLineFind ? btnStyleFinder.outlineConfig.pressStyle : {},{borderRadius:btnProps?.btnRadius ||4}]}>
                    <Text style={[btnStyleFinder ? btnStyleFinder.textStyle : ButtonStyle.defaultButtonText, btnSizeFinder ? btnSizeFinder.textStyle : {}, Press && outLineFind ? ButtonStyle.whiteColorText : {}, btnProps?.custumTextStyle]} > {btnProps.btnText || "DEFAULT"} </Text>

                </View>

            </TouchableHighlight>

            <View></View>
        </View>);

}


export default buttonComp;