import * as React from "react";
import {Image, StyleSheet, Text, Pressable, View, FlatList} from "react-native";
import {BlackThemeCreateGroup} from "./CreateGroup.tsx"
import { useNavigation, } from '@react-navigation/native';

const BlackThemeHomePage = () => {

    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => (
                <View>
                    <GroupButton/>
                    <GroupButton/>
                </View>
            )}
        />
    )
};

const DATA: object[] = [
   {
       "title": "test"
   },
   {
       "title": "test"
   },
   {
        "title": "test"
   },
   {
        "title": "test"
   },
   {
        "title": "test"
   },
]

const GroupButton = () => {

    return (
        <View>
            <Text>test</Text>
        </View>
   )
}

const oldpage = () => {
    const nav = useNavigation();

      	return (
        		<View style={styles.blackThemeHomePage}>
          			<View style={styles.homeParent}>
            				<Image style={[styles.homeIcon, styles.iconLayout1]} resizeMode="cover" source="Home.png" />
            				<Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
            				<Text style={[styles.games, styles.gamesTypo]}>Games</Text>
            				<Image style={[styles.boxIcon, styles.iconLayout1]} resizeMode="cover" source="Box.png" />
            				<Image style={[styles.personIcon, styles.iconLayout1]} resizeMode="cover" source="person.png" />
            				<Text style={[styles.profile, styles.profileLayout]}>Profile</Text>
            				<Pressable style={styles.chatBubble} onPress={()=>{}}>
              					<Image style={styles.iconLayout} resizeMode="cover" source="chat_bubble.png" />
            				</Pressable>
            				<Text style={styles.chats}>Chats</Text>
            				<Image style={styles.greenEllipseIcon} resizeMode="cover" source="Green Ellipse.png" />
            				<Pressable style={[styles.plusCircle, styles.profileLayout]} onPress={()=>{}}>
              					<Image style={[styles.icon1, styles.iconLayout]} resizeMode="cover" source="Plus circle.png" />
            				</Pressable>
          			</View>
          			<Pressable style={[styles.blackThemeHomePageChild, styles.blackChildLayout2]} onPress={()=>{
                            nav.navigate("Profile");
                          }} />
          			<Text style={styles.myGroups}>My Groups</Text>
          			<View style={[styles.blackThemeHomePageItem, styles.blackChildLayout1]} />
          			<Text style={[styles.addFavorite, styles.addTypo]}>Add Favorite</Text>
          			<View style={[styles.stateLayer, styles.stateFlexBox]}>
            				<Image style={styles.icon2} resizeMode="cover" source="Icon.png" />
          			</View>
          			<Text style={[styles.webDevelopment, styles.webTypo]}>Web Development</Text>
          			<Text style={[styles.angularForBeginners, styles.angularTypo]}>Angular for beginners</Text>
          			<View style={[styles.blackThemeHomePageInner, styles.blackChildLayout]} />
          			<View style={[styles.rectangleView, styles.blackChildLayout2]} />
          			<View style={[styles.blackThemeHomePageChild1, styles.blackChildLayout1]} />
          			<Text style={[styles.addFavorite1, styles.addTypo]}>Add Favorite</Text>
          			<View style={[styles.stateLayer1, styles.stateFlexBox]}>
            				<Image style={styles.icon2} resizeMode="cover" source="../images/black_icon.png" />
          			</View>
          			<Text style={[styles.webDevelopment1, styles.webDevelopment1Position]}>Web Development</Text>
          			<Text style={[styles.angularForBeginners1, styles.angularTypo]}>Angular for beginners</Text>
          			<View style={[styles.blackThemeHomePageChild2, styles.webDevelopment1Position]} />
          			<View style={[styles.blackThemeHomePageChild3, styles.blackChildLayout2]} />
          			<View style={[styles.blackThemeHomePageChild4, styles.blackChildLayout1]} />
          			<Text style={[styles.addFavorite2, styles.addTypo]}>Add Favorite</Text>
          			<View style={[styles.stateLayer2, styles.stateFlexBox]}>
            				<Image style={styles.icon2} resizeMode="cover" source="Icon.png" />
          			</View>
          			<Text style={[styles.webDevelopment2, styles.webDevelopment2Position]}>Web Development</Text>
          			<Text style={[styles.angularForBeginners2, styles.angularTypo]}>Angular for beginners</Text>
          			<View style={[styles.blackThemeHomePageChild5, styles.webDevelopment2Position]} />
          			<View style={[styles.blackThemeHomePageChild6, styles.blackChildLayout2]} />
          			<View style={[styles.blackThemeHomePageChild7, styles.blackChildLayout1]} />
          			<Text style={[styles.addFavorite3, styles.addTypo]}>Add Favorite</Text>
          			<View style={[styles.stateLayer3, styles.stateFlexBox]}>
            				<Image style={styles.icon2} resizeMode="cover" source="Icon.png" />
          			</View>
          			<Text style={[styles.webDevelopment3, styles.webDevelopment3Position]}>Web Development</Text>
          			<Text style={[styles.angularForBeginners3, styles.angularTypo]}>Angular for beginners</Text>
          			<View style={[styles.blackThemeHomePageChild8, styles.webDevelopment3Position]} />
        		</View>);
}

const styles = StyleSheet.create({
  	iconLayout1: {
    		height: 40,
    		width: 40,
    		top: 30,
    		position: "absolute"
  	},
  	homeFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		letterSpacing: 0,
    		position: "absolute"
  	},
  	gamesTypo: {
    		width: 53,
    		color: "#fff",
    		textAlign: "center",
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22,
    		fontSize: 14
  	},
  	profileLayout: {
    		height: 24,
    		position: "absolute"
  	},
  	iconLayout: {
    		height: "100%",
    		width: "100%"
  	},
  	blackChildLayout2: {
    		height: 143,
    		width: 363,
    		borderRadius: 20,
    		left: 33,
    		backgroundColor: "#282828",
    		position: "absolute"
  	},
  	blackChildLayout1: {
    		height: 25,
    		width: 100,
    		backgroundColor: "#1b1b1b",
    		borderRadius: 10,
    		left: 278,
    		position: "absolute"
  	},
  	addTypo: {
    		height: 22,
    		width: 85,
    		color: "#595959",
    		fontSize: 10,
    		left: 293,
    		textAlign: "center",
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22,
    		position: "absolute"
  	},
  	stateFlexBox: {
    		paddingVertical: 4,
    		paddingHorizontal: 20,
    		flexDirection: "row",
    		height: 32,
    		width: 25,
    		left: 280,
    		justifyContent: "center",
    		alignItems: "center",
    		position: "absolute"
  	},
  	webTypo: {
    		width: 112,
    		textAlign: "left",
    		fontSize: 12,
    		left: 126,
    		height: 21,
    		color: "#fff",
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22
  	},
  	angularTypo: {
    		height: 48,
    		width: 214,
    		textAlign: "left",
    		left: 126,
    		fontSize: 20,
    		color: "#fff",
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22,
    		position: "absolute"
  	},
  	blackChildLayout: {
    		height: 70,
    		width: 70,
    		backgroundColor: "#d9d9d9",
    		left: 45,
    		borderRadius: 20
  	},
  	webDevelopment1Position: {
    		top: 334,
    		position: "absolute"
  	},
  	webDevelopment2Position: {
    		top: 488,
    		position: "absolute"
  	},
  	webDevelopment3Position: {
    		top: 642,
    		position: "absolute"
  	},
  	homeIcon: {
    		left: 39,
    		overflow: "hidden"
  	},
  	home: {
    		top: 70,
    		left: 26,
    		color: "#0cca6e",
    		width: 65,
    		height: 36,
    		textAlign: "center",
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22,
    		fontSize: 14,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		letterSpacing: 0
  	},
  	games: {
    		top: 75,
    		left: 113,
    		height: 29,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		letterSpacing: 0,
    		position: "absolute",
    		width: 53,
    		color: "#fff"
  	},
  	boxIcon: {
    		left: 120,
    		overflow: "hidden"
  	},
  	personIcon: {
    		left: 353
  	},
  	profile: {
    		top: 80,
    		left: 348,
    		width: 53,
    		color: "#fff",
    		textAlign: "center",
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22,
    		fontSize: 14
  	},
  	chatBubble: {
    		top: 33,
    		left: 288,
    		height: 40,
    		width: 40,
    		position: "absolute"
  	},
  	chats: {
    		top: 79,
    		width: 46,
    		height: 21,
    		left: 288,
    		color: "#fff",
    		textAlign: "center",
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22,
    		fontSize: 14,
    		position: "absolute"
  	},
  	greenEllipseIcon: {
    		left: 185,
    		width: 60,
    		height: 60,
    		top: 30,
    		position: "absolute"
  	},
  	icon1: {
    		overflow: "hidden"
  	},
  	plusCircle: {
    		left: 203,
    		top: 49,
    		width: 24
  	},
  	homeParent: {
    		top: 810,
    		left: 0,
    		width: 430,
    		height: 122,
    		backgroundColor: "#282828",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	blackThemeHomePageChild: {
    		top: 163
  	},
  	myGroups: {
    		top: 119,
    		left: 25,
    		width: 119,
    		height: 23,
    		fontSize: 20,
    		color: "#fff",
    		textAlign: "center",
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22,
    		position: "absolute"
  	},
  	blackThemeHomePageItem: {
    		top: 269
  	},
  	addFavorite: {
    		top: 271
  	},
  	icon2: {
    		width: 20,
    		height: 20
  	},
  	stateLayer: {
    		top: 266
  	},
  	webDevelopment: {
    		top: 180,
    		position: "absolute"
  	},
  	angularForBeginners: {
    		top: 201
  	},
  	blackThemeHomePageInner: {
    		top: 180,
    		position: "absolute"
  	},
  	rectangleView: {
    		top: 317
  	},
  	blackThemeHomePageChild1: {
    		top: 423
  	},
  	addFavorite1: {
    		top: 425
  	},
  	stateLayer1: {
    		top: 420
  	},
  	webDevelopment1: {
    		width: 112,
    		textAlign: "left",
    		fontSize: 12,
    		left: 126,
    		height: 21,
    		color: "#fff",
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22
  	},
  	angularForBeginners1: {
    		top: 355
  	},
  	blackThemeHomePageChild2: {
    		height: 70,
    		width: 70,
    		backgroundColor: "#d9d9d9",
    		left: 45,
    		borderRadius: 20
  	},
  	blackThemeHomePageChild3: {
    		top: 471
  	},
  	blackThemeHomePageChild4: {
    		top: 577
  	},
  	addFavorite2: {
    		top: 579
  	},
  	stateLayer2: {
    		top: 574
  	},
  	webDevelopment2: {
    		width: 112,
    		textAlign: "left",
    		fontSize: 12,
    		left: 126,
    		height: 21,
    		color: "#fff",
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22
  	},
  	angularForBeginners2: {
    		top: 509
  	},
  	blackThemeHomePageChild5: {
    		height: 70,
    		width: 70,
    		backgroundColor: "#d9d9d9",
    		left: 45,
    		borderRadius: 20
  	},
  	blackThemeHomePageChild6: {
    		top: 625
  	},
  	blackThemeHomePageChild7: {
    		top: 731
  	},
  	addFavorite3: {
    		top: 733
  	},
  	stateLayer3: {
    		top: 728
  	},
  	webDevelopment3: {
    		width: 112,
    		textAlign: "left",
    		fontSize: 12,
    		left: 126,
    		height: 21,
    		color: "#fff",
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22
  	},
  	angularForBeginners3: {
    		top: 663
  	},
  	blackThemeHomePageChild8: {
    		height: 70,
    		width: 70,
    		backgroundColor: "#d9d9d9",
    		left: 45,
    		borderRadius: 20
  	},
  	blackThemeHomePage: {
    		backgroundColor: "#000",
    		flex: 1,
    		height: 932,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default BlackThemeHomePage;
