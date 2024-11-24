import {StyleSheet} from 'react-native'

export const TextStyles = StyleSheet.create({
    appTitle: {
        fontSize: 40,
        fontFamily: "InstrumentSans-Bold",
        textShadowColor: "#00000040",
   		textShadowOffset: {
            width: 16,
     		height: 20
   		},
        textShadowRadius: 1,
    	textAlign: "center",
   		color: "#fff",
   		fontWeight: "700",
   		letterSpacing: 0,
    },
    pageTitle: {
        fontSize: 24,
    	color: "#fff",
    	textAlign: "center",
    	fontFamily: "InstrumentSans-Bold",
    	fontWeight: "700",
    },
    header1: {
        textAlign: "center",
        fontFamily: "InstrumentSans-Bold",
        fontWeight: "500",
        color: "#fff",
        fontSize: 24
    },
    header2: {
        fontSize: 20,
        fontFamily: "InstrumentSans-Bold",
        fontWeight: "500",
        textAlign: "center",
        color: "#fff",
    },
    whiteText1: {
    	textAlign: "left",
    	fontFamily: "InstrumentSans-Regular",
    	color: "#fff",
    	fontSize: 18,
    },
    grayText1: {
        textAlign: "left",
    	fontFamily: "InstrumentSans-Regular",
    	color: "#868686",
    	fontSize: 18,
    },
    whiteText2: {
        fontSize: 14,
        textAlign: "left",
        color: "#fff",
        fontFamily: "InstrumentSans-Regular"
    },
    grayText2: {
        fontSize: 14,
        textAlign: "left",
        color: "#868686",
        fontFamily: "InstrumentSans-Regular"
    }
});