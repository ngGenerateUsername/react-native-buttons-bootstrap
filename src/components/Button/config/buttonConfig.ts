import { ButtonStyle } from "../buttonStyle";
import { btnConfigModel } from "../types/btnConfigModel";

const styleBtn = ButtonStyle;
const configButtonStyle:btnConfigModel[]=[
    {
        key:"primary",
        btnStyle:styleBtn.primary,
        textStyle:styleBtn.defaultButtonText
    },
    {
        key:"secondary",
        btnStyle:styleBtn.secondary,
        textStyle:styleBtn.defaultButtonText
    },
    {
        key:"success",
        btnStyle:styleBtn.success,
        textStyle:styleBtn.defaultButtonText
    },
    {
        key:"danger",
        btnStyle:styleBtn.danger,
        textStyle:styleBtn.defaultButtonText
    },
    {
        key:"warning",
        btnStyle:styleBtn.warning,
        textStyle:styleBtn.warningColorText
    },
    {
        key:"info",
        btnStyle:styleBtn.info,
        textStyle:styleBtn.defaultButtonText
    },
    {
        key:"outlinePrimary",
        btnStyle:{...styleBtn.outline,...styleBtn.outlinePrimary},
        textStyle:styleBtn.outlinePrimaryText,
        outlineConfig:{
            key:"outlinePrimary",
            pressStyle:styleBtn.btnOutlinePrimaryPress
        }
    },
    {
        key:"outlineSecondary",
        btnStyle:{...styleBtn.outline,...styleBtn.outlineSecondary},
        textStyle:styleBtn.outlineSecondaryText,
        outlineConfig:{
            key:"outlineSecondary",
            pressStyle:styleBtn.btnOutlineSecondaryPress
        }
    },
    {
        key:"outlineSuccess",
        btnStyle:{...styleBtn.outline,...styleBtn.outlineSuccess},
        textStyle:styleBtn.outlineSuccessText,
        outlineConfig:{
            key:"outlineSuccess",
            pressStyle:styleBtn.btnOutlineSuccessPress
        }
    },
    {
        key:"outlineDanger",
        btnStyle:{...styleBtn.outline,...styleBtn.outlineDanger},
        textStyle:styleBtn.outlineDangerText,
        outlineConfig:{
            key:"outlineDanger",
            pressStyle:styleBtn.btnOutlineDangerPress
        }
    },
    {
        key:"outlineWarning",
        btnStyle:{...styleBtn.outline,...styleBtn.outlineWarning},
        textStyle:styleBtn.outlineWarningText,
        outlineConfig:{
            key:"outlineWarning",
            pressStyle:styleBtn.btnOutlineWarningPress
        }
    },
    {
        key:"outlineInfo",
        btnStyle:{...styleBtn.outline,...styleBtn.outlineInfo},
        textStyle:styleBtn.outlineInfoText,
        outlineConfig:{
            key:"outlineInfo",
            pressStyle:styleBtn.btnOutlineInfoPress
        }
    },
    {
        key:"sm",
        btnStyle:styleBtn.sm,
        textStyle:styleBtn.smText
    },
    {
        key:"md",
        btnStyle:styleBtn.md,
        textStyle:styleBtn.mdText
    },
    {
        key:"lg",
        btnStyle:styleBtn.lg,
        textStyle:styleBtn.lgText
    }
    

]
export {configButtonStyle}
