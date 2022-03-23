import { StyleSheet } from "react-native";

const primaryColor:string = "#0d6efd";
const secondaryColor:string = "#6c757d";
const successColor:string = "#198754";
const dangerColor:string = "#dc3545";
const warningColor:string="#ffc107";
const infoColor:string = "#0dcaf0";
const styleBtn = StyleSheet.create(
    {
        parentComponent:{
            flexDirection:"row",
        },

        buttonDefault: {
            
            backgroundColor: '#f01d71',
            flexDirection:"row",
        },

        primary: {
            flexDirection:"row",
            alignSelf:"flex-start",
            
            backgroundColor: primaryColor,
        },
        secondary: {
            backgroundColor: secondaryColor,
            flexDirection:"row",
            alignSelf:"flex-start",
            

        },
        success: {
            backgroundColor: successColor,
            flexDirection:"row",
            alignSelf:"flex-start",
            

        },
        danger: {
            backgroundColor: dangerColor,
            flexDirection:"row",
            alignSelf:"flex-start",
            

        },
        warning: {
            backgroundColor: warningColor,
            flexDirection:"row",
            alignSelf:"flex-start",
            

        },
        info: {
            backgroundColor: infoColor,
            flexDirection:"row",
            alignSelf:"flex-start",
            

        },
        //outline Styles
        outline:{
            backgroundColor:'transparent',
            borderWidth:1,
            flexDirection:"row",
            alignSelf:"flex-start",
 

        },
        outlinePrimary:{
            borderColor:primaryColor,

            

        },
        outlineSecondary:{
            borderColor:secondaryColor,

            

        },
        outlineSuccess:{
            borderColor:successColor,

            

        },
        outlineDanger: {
            borderColor: dangerColor,

            

        },
        outlineWarning: {
            borderColor: warningColor,

            

        },
        outlineInfo: {
            borderColor: infoColor,

            

        },

        //size style
        lg: {
            paddingHorizontal: 24,
            paddingVertical: 18
        },
        md: {
            paddingHorizontal: 14, //15
            paddingVertical: 13  //14
        },
        sm: {
            paddingHorizontal: 8,
            paddingVertical: 10
        },

        //text
        warningColorText: {
            color: "#000000",
            fontSize:16,
        },
        defaultButtonText: {
            fontSize: 16,
            textAlign: "center",
            padding: 0,
            margin: 0,
            color: "#ffffff"
        },
    //outileTextStyle
        outlinePrimaryText:
        {
            color:primaryColor
        },
        outlineSecondaryText:{
            color:secondaryColor
        },
        outlineSuccessText:{
            color:successColor
        },
        outlineDangerText: {
            color: dangerColor
        },
        outlineWarningText: {
            color: warningColor
        },
        outlineInfoText: {
            color: infoColor
        },
        mdText:{
            fontSize:16,
        },
        lgText:{
            fontSize:20,
            fontWeight:"bold",
            textTransform:"uppercase"
        },
        smText:{
            fontSize:14
        },

        //onPress Styles
        whiteColorText:{
            color:"#fff"
        },
        btnOutlinePrimaryPress:
        {
            backgroundColor:primaryColor
        },
        btnOutlineSecondaryPress:
        {
            backgroundColor:secondaryColor
        },
        btnOutlineSuccessPress:
        {
            backgroundColor:successColor
        },
        btnOutlineDangerPress:{
            backgroundColor:dangerColor,
        },
        btnOutlineInfoPress:{
            backgroundColor:infoColor
        },
        btnOutlineWarningPress:{
            backgroundColor:warningColor
        }
        
    }
);

export {styleBtn as ButtonStyle};