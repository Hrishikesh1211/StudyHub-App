import * as React from "react";
import {StyleSheet, View, Image, Text, Pressable} from "react-native";

const BlackThemeCreateGroup = () => {
    return (
        <View style={newStyles.background}>
      			<View style={newStyles.screenContainer} />
      			<View style={newStyles.groupIcon} />
      			<Image style={newStyles.addIcon} resizeMode="cover" source="add.png" />

      			<View style={newStyles.addButton} />
      			<View style={newStyles.addButton} />
      			<View style={newStyles.addButton} />
      			<Text style={[styles.people, styles.fileTypo]}>People</Text>
      			<Text style={[styles.video, styles.fileTypo]}>Video</Text>
      			<Text style={[styles.file, styles.fileTypo]}>File</Text>

      			<Image style={[styles.addIcon1, styles.iconPosition1]} resizeMode="cover" source="add.png" />
      			<Image style={[styles.addIcon2, styles.iconLayout]} resizeMode="cover" source="add.png" />
      			<Image style={[styles.personIcon, styles.iconPosition1]} resizeMode="cover" source="person.png" />
      			<Image style={[styles.playArrowFilledIcon, styles.iconLayout]} resizeMode="cover" source="play_arrow_filled.png" />

      			<Text style={styles.communityGroup}>Community Group</Text>
      			<Text style={[styles.groupInfo, styles.membersTypo]}>Group Info</Text>
      			<Image style={[styles.personIcon1, styles.iconLayout]} resizeMode="cover" source="person.png" />
      			<Text style={[styles.members, styles.membersTypo]}>Members</Text>

      			<View style={[styles.blackThemeCreateGroupChild2, styles.blackGroupLayout1]} />
      			<View style={[styles.blackThemeCreateGroupChild3, styles.blackGroupLayout1]} />
      			<View style={[styles.blackThemeCreateGroupChild4, styles.blackGroupLayout]} />
      			<View style={[styles.blackThemeCreateGroupChild5, styles.blackGroupLayout]} />
      			<Image style={[styles.grayEllipseIcon, styles.grayIconLayout]} resizeMode="cover" source="Gray Ellipse.png" />
      			<Image style={[styles.grayEllipseIcon1, styles.grayIconLayout]} resizeMode="cover" source="Gray Ellipse.png" />
      			<Image style={[styles.grayEllipseIcon2, styles.grayIconLayout]} resizeMode="cover" source="Gray Ellipse.png" />
      			<Image style={[styles.grayEllipseIcon3, styles.grayIconLayout]} resizeMode="cover" source="Gray Ellipse.png" />
      			<Text style={[styles.name, styles.nameTypo]}>Name</Text>
      			<Text style={[styles.name1, styles.nameTypo]}>Name</Text>
      			<Text style={[styles.name2, styles.nameTypo]}>Name</Text>
      			<Text style={[styles.name3, styles.nameTypo]}>Name</Text>
      			<Text style={[styles.invited, styles.invitedTypo]}>Invited!!</Text>
      			<Text style={[styles.invited1, styles.invitedTypo]}>Invited!!</Text>
      			<Text style={[styles.inviteFailed, styles.inviteTypo]}>Invite Failed!</Text>
      			<View style={[styles.blackThemeCreateGroupChild6, styles.blackGroupBg1]} />

      			<Pressable style={[styles.create, styles.createPosition]} onPress={()=>{}}>
        				<Text style={[styles.create1, styles.fileTypo]}>Create</Text>
      			</Pressable>

      			<View style={[styles.blackThemeCreateGroupChild7, styles.blackGroupBg]} />
      			<Text style={styles.groupNameHere}>Group Name Here</Text>

      			<View style={[styles.blackThemeCreateGroupChild8, styles.blackGroupBg1]} />
      			<Text style={[styles.invite, styles.createPosition]}>Invite</Text>

      			<Image style={styles.rectangleIcon} resizeMode="cover" source="Rectangle 46.png" />
      			<Text style={styles.description}>Description</Text>
      			<Text style={[styles.members23Online, styles.fileTypo]}>419 members, 23 online</Text>

      			<View style={styles.homeParent}>
        				<Image style={[styles.homeIcon, styles.homeIconLayout]} resizeMode="cover" source="Home.png" />
        				<Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
        				<Text style={[styles.games, styles.gamesTypo]}>Games</Text>
        				<Image style={[styles.boxIcon, styles.personPosition]} resizeMode="cover" source="Box.png" />
        				<Pressable style={[styles.person, styles.personPosition]} onPress={()=>{}}>
          					<Image style={styles.icon} resizeMode="cover" source="person.png" />
        				</Pressable>
        				<Text style={[styles.profile, styles.gamesTypo]}>Profile</Text>
        				<Pressable style={[styles.chatBubble, styles.homeIconLayout]} onPress={()=>{}}>
          					<Image style={styles.icon} resizeMode="cover" source="chat_bubble.png" />
        				</Pressable>
        				<Text style={[styles.chats, styles.homeTypo]}>Chats</Text>
        				<Image style={styles.greenEllipseIcon} resizeMode="cover" source="Green Ellipse.png" />
        				<Image style={[styles.plusCircleIcon, styles.iconLayout]} resizeMode="cover" source="Plus circle.png" />
      			</View>
    		</View>
    )
};

const newStyles = StyleSheet.create({
    background: {
        backgroundColor: "#000",
    	flex: 1,
    	height: 1055,
    	overflow: "hidden",
    	width: "100%"
    },
    screenContainer: {
        top: 103,
    	left: 0,
    	borderRadius: 34,
    	width: 485,
    	height: 835,
    	backgroundColor: "#101010",
    },
    groupIcon: {
        left: 193,
    	borderRadius: 17,
    	backgroundColor: "#fff",
    	height: 100,
    	width: 100,
    	top: 81,
    	position: "absolute"
    },
    addIcon: {
        top: 109,
    	left: 219,
    	width: 50,
    	height: 51,
    	position: "absolute"
    },
    addButton: {
        left: 192,
        borderRadius: 22,
        top: 328,
        backgroundColor: "#1e1c1d",
        height: 100,
        width: 100
    },
    title: {
        left: 141,
    	width: 246,
    	height: 44,
    	fontSize: 24,
    	top: 26,
    	textAlign: "left",
    	color: "#fff",
    	fontFamily: "Inter-Regular",
    	position: "absolute"
    },
    groupInfoText: {
        top: 478,
    	left: 143,
    	width: 198,
    	height: 54,
    	textAlign: "center",
    	fontSize: 17,
    	color: "#fff",
    	fontFamily: "Inter-Regular",
    	position: "absolute"
    },
    membersListText: {
        textAlign: "center",
    	fontSize: 17,
    	color: "#fff",
    	fontFamily: "Inter-Regular",
    	position: "absolute",
    	textAlign: "center",
    	fontSize: 17,
    	color: "#fff",
    	fontFamily: "Inter-Regular",
    },
    memberButton: {
        height: 71,
    	width: 454,
    	borderRadius: 16,
    	left: 15,
    	backgroundColor: "#1e1c1d",
    	position: "absolute"
    },
    memberButtonIcon: {
        height: 50,
    	width: 54,
    	left: 34,
    	position: "absolute"
    },
    memberButtonText: {
        height: 12,
    	width: 63,
    	fontSize: 16,
    	left: 99,
    	textAlign: "center",
    	color: "#fff",
    	fontFamily: "Inter-Regular",
    	position: "absolute"
    },
    inviteStatusText: {
        color: "#0cca6e",
    	left: 385,
    	fontSize: 12,
    	textAlign: "center",
    	fontFamily: "Inter-Regular",
    	position: "absolute"
    },
    inviteFailedText: {
        color: "#ff0105",
    },
    createButtonText: {
        width: 52,
        height: 18,
        color: "#fff",
        fontSize: 15,
        fontFamily: "Inter-Regular"
    },
    groupNameContainer: {
        top: 188,
    	left: 77,
    	borderRadius: 13,
    	width: 324,
    	height: 48,
    	backgroundColor: "#101010",
    },
    groupNameText: {
        top: 197,
    	left: 138,
    	width: 218,
    	height: 38,
    	color: "#868686",
    	fontSize: 24,
    	textAlign: "left",
    	fontFamily: "Inter-Regular",
    	position: "absolute"
    },
    inviteButton: {
        top: 857,
    	left: 382,
    	borderRadius: 7,
    	width: 61,
    	height: 19,
        backgroundColor: "#101010",
    },
    descriptionContainer: {
        top: 435,
    	left: 123,
    	fontSize: 20,
    	color: "#808080",
    	width: 248,
    	height: 22,
    	position: "absolute"
    },
    descriptionText: {
        textAlign: "left",
    	fontFamily: "Inter-Regular"
    },
});

const OldPage = () => {
    return (
    		<View style={styles.blackThemeCreateGroup}>
      			<View style={[styles.blackThemeCreateGroupChild, styles.blackGroupBg1]} />
      			<View style={styles.blackThemeCreateGroupItem} />
      			<Image style={styles.addIcon} resizeMode="cover" source="add.png" />
      			<View style={[styles.blackThemeCreateGroupInner, styles.blackGroupBg]} />
      			<View style={[styles.rectangleView, styles.blackGroupBg]} />
      			<View style={[styles.blackThemeCreateGroupChild1, styles.blackGroupBg]} />
      			<Text style={[styles.people, styles.fileTypo]}>People</Text>
      			<Text style={[styles.video, styles.fileTypo]}>Video</Text>
      			<Text style={[styles.file, styles.fileTypo]}>File</Text>
      			<Image style={[styles.addIcon1, styles.iconPosition1]} resizeMode="cover" source="add.png" />
      			<Image style={[styles.addIcon2, styles.iconLayout]} resizeMode="cover" source="add.png" />
      			<Image style={[styles.personIcon, styles.iconPosition1]} resizeMode="cover" source="person.png" />
      			<Image style={[styles.playArrowFilledIcon, styles.iconLayout]} resizeMode="cover" source="play_arrow_filled.png" />

      			<Text style={styles.communityGroup}>Community Group</Text>
      			<Text style={[styles.groupInfo, styles.membersTypo]}>Group Info</Text>
      			<Image style={[styles.personIcon1, styles.iconLayout]} resizeMode="cover" source="person.png" />
      			<Text style={[styles.members, styles.membersTypo]}>Members</Text>

      			<View style={[styles.blackThemeCreateGroupChild2, styles.blackGroupLayout1]} />
      			<View style={[styles.blackThemeCreateGroupChild3, styles.blackGroupLayout1]} />
      			<View style={[styles.blackThemeCreateGroupChild4, styles.blackGroupLayout]} />
      			<View style={[styles.blackThemeCreateGroupChild5, styles.blackGroupLayout]} />
      			<Image style={[styles.grayEllipseIcon, styles.grayIconLayout]} resizeMode="cover" source="Gray Ellipse.png" />
      			<Image style={[styles.grayEllipseIcon1, styles.grayIconLayout]} resizeMode="cover" source="Gray Ellipse.png" />
      			<Image style={[styles.grayEllipseIcon2, styles.grayIconLayout]} resizeMode="cover" source="Gray Ellipse.png" />
      			<Image style={[styles.grayEllipseIcon3, styles.grayIconLayout]} resizeMode="cover" source="Gray Ellipse.png" />
      			<Text style={[styles.name, styles.nameTypo]}>Name</Text>
      			<Text style={[styles.name1, styles.nameTypo]}>Name</Text>
      			<Text style={[styles.name2, styles.nameTypo]}>Name</Text>
      			<Text style={[styles.name3, styles.nameTypo]}>Name</Text>
      			<Text style={[styles.invited, styles.invitedTypo]}>Invited!!</Text>
      			<Text style={[styles.invited1, styles.invitedTypo]}>Invited!!</Text>
      			<Text style={[styles.inviteFailed, styles.inviteTypo]}>Invite Failed!</Text>
      			<View style={[styles.blackThemeCreateGroupChild6, styles.blackGroupBg1]} />
      			<Pressable style={[styles.create, styles.createPosition]} onPress={()=>{}}>
        				<Text style={[styles.create1, styles.fileTypo]}>Create</Text>
      			</Pressable>
      			<View style={[styles.blackThemeCreateGroupChild7, styles.blackGroupBg]} />
      			<Text style={styles.groupNameHere}>Group Name Here</Text>
      			<View style={[styles.blackThemeCreateGroupChild8, styles.blackGroupBg1]} />
      			<Text style={[styles.invite, styles.createPosition]}>Invite</Text>
      			<Image style={styles.rectangleIcon} resizeMode="cover" source="Rectangle 46.png" />
      			<Text style={styles.description}>Description</Text>
      			<Text style={[styles.members23Online, styles.fileTypo]}>419 members, 23 online</Text>
      			<View style={styles.homeParent}>
        				<Image style={[styles.homeIcon, styles.homeIconLayout]} resizeMode="cover" source="Home.png" />
        				<Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
        				<Text style={[styles.games, styles.gamesTypo]}>Games</Text>
        				<Image style={[styles.boxIcon, styles.personPosition]} resizeMode="cover" source="Box.png" />
        				<Pressable style={[styles.person, styles.personPosition]} onPress={()=>{}}>
          					<Image style={styles.icon} resizeMode="cover" source="person.png" />
        				</Pressable>
        				<Text style={[styles.profile, styles.gamesTypo]}>Profile</Text>
        				<Pressable style={[styles.chatBubble, styles.homeIconLayout]} onPress={()=>{}}>
          					<Image style={styles.icon} resizeMode="cover" source="chat_bubble.png" />
        				</Pressable>
        				<Text style={[styles.chats, styles.homeTypo]}>Chats</Text>
        				<Image style={styles.greenEllipseIcon} resizeMode="cover" source="Green Ellipse.png" />
        				<Image style={[styles.plusCircleIcon, styles.iconLayout]} resizeMode="cover" source="Plus circle.png" />
      			</View>
    		</View>);
}

const styles = StyleSheet.create({
  	blackGroupBg1: {
    		backgroundColor: "#101010",
    		position: "absolute"
  	},
  	blackGroupBg: {
    		backgroundColor: "#1e1c1d",
    		position: "absolute"
  	},
  	fileTypo: {
    		textAlign: "left",
    		fontFamily: "Inter-Regular"
  	},
  	iconPosition1: {
    		top: 351,
    		position: "absolute"
  	},
  	iconLayout: {
    		width: 24,
    		height: 24,
    		position: "absolute"
  	},
  	membersTypo: {
    		textAlign: "center",
    		fontSize: 17,
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	blackGroupLayout1: {
    		height: 71,
    		width: 454,
    		borderRadius: 16,
    		left: 15,
    		backgroundColor: "#1e1c1d",
    		position: "absolute"
  	},
  	blackGroupLayout: {
    		left: 12,
    		height: 71,
    		width: 454,
    		borderRadius: 16,
    		backgroundColor: "#1e1c1d",
    		position: "absolute"
  	},
  	grayIconLayout: {
    		height: 50,
    		width: 54,
    		left: 34,
    		position: "absolute"
  	},
  	nameTypo: {
    		height: 12,
    		width: 63,
    		fontSize: 16,
    		left: 99,
    		textAlign: "center",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	invitedTypo: {
    		color: "#0cca6e",
    		left: 385,
    		fontSize: 12,
    		textAlign: "center",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	inviteTypo: {
    		fontSize: 12,
    		textAlign: "center",
    		fontFamily: "Inter-Regular"
  	},
  	createPosition: {
    		left: 397,
    		position: "absolute"
  	},
  	homeIconLayout: {
    		width: 40,
    		height: 40,
    		position: "absolute"
  	},
  	homeFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		letterSpacing: 0
  	},
  	gamesTypo: {
    		width: 53,
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22,
    		fontSize: 14,
    		textAlign: "center",
    		color: "#fff",
    		position: "absolute"
  	},
  	personPosition: {
    		top: 29,
    		width: 40,
    		height: 40,
    		position: "absolute"
  	},
  	homeTypo: {
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22,
    		fontSize: 14,
    		textAlign: "center",
    		color: "#fff",
    		position: "absolute"
  	},
  	blackThemeCreateGroupChild: {
    		top: 103,
    		left: 0,
    		borderRadius: 34,
    		width: 485,
    		height: 835
  	},
  	blackThemeCreateGroupItem: {
    		left: 193,
    		borderRadius: 17,
    		backgroundColor: "#fff",
    		height: 100,
    		width: 100,
    		top: 81,
    		position: "absolute"
  	},
  	addIcon: {
    		top: 109,
    		left: 219,
    		width: 50,
    		height: 51,
    		position: "absolute"
  	},
  	blackThemeCreateGroupInner: {
    		left: 192,
    		borderRadius: 22,
    		top: 328,
    		backgroundColor: "#1e1c1d",
    		height: 100,
    		width: 100
  	},
  	rectangleView: {
    		left: 336,
    		borderRadius: 22,
    		top: 328,
    		backgroundColor: "#1e1c1d",
    		height: 100,
    		width: 100
  	},
  	blackThemeCreateGroupChild1: {
    		left: 46,
    		borderRadius: 22,
    		top: 328,
    		backgroundColor: "#1e1c1d",
    		height: 100,
    		width: 100
  	},
  	people: {
    		left: 362,
    		color: "#fff",
    		fontSize: 15,
    		fontFamily: "Inter-Regular",
    		top: 384,
    		position: "absolute"
  	},
  	video: {
    		left: 223,
    		color: "#fff",
    		fontSize: 15,
    		fontFamily: "Inter-Regular",
    		top: 384,
    		position: "absolute"
  	},
  	file: {
    		left: 82,
    		color: "#fff",
    		fontSize: 15,
    		fontFamily: "Inter-Regular",
    		top: 384,
    		position: "absolute"
  	},
  	addIcon1: {
    		left: 390,
    		width: 15,
    		height: 15
  	},
  	addIcon2: {
    		left: 83,
    		height: 24,
    		top: 354,
    		width: 24
  	},
  	personIcon: {
    		left: 373,
    		width: 25,
    		height: 26
  	},
  	playArrowFilledIcon: {
    		left: 231,
    		height: 24,
    		top: 354,
    		width: 24
  	},
  	communityGroup: {
    		left: 141,
    		width: 246,
    		height: 44,
    		fontSize: 24,
    		top: 26,
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	groupInfo: {
    		top: 478,
    		left: 143,
    		width: 198,
    		height: 54
  	},
  	personIcon1: {
    		top: 556,
    		left: 30,
    		height: 24
  	},
  	members: {
    		top: 559,
    		left: 21,
    		width: 149,
    		height: 21
  	},
  	blackThemeCreateGroupChild2: {
    		top: 598
  	},
  	blackThemeCreateGroupChild3: {
    		top: 676
  	},
  	blackThemeCreateGroupChild4: {
    		top: 754
  	},
  	blackThemeCreateGroupChild5: {
    		top: 832
  	},
  	grayEllipseIcon: {
    		top: 609
  	},
  	grayEllipseIcon1: {
    		top: 682
  	},
  	grayEllipseIcon2: {
    		top: 765
  	},
  	grayEllipseIcon3: {
    		top: 842
  	},
  	name: {
    		top: 622
  	},
  	name1: {
    		top: 698
  	},
  	name2: {
    		top: 780
  	},
  	name3: {
    		top: 861
  	},
  	invited: {
    		top: 625
  	},
  	invited1: {
    		top: 698
  	},
  	inviteFailed: {
    		top: 777,
    		left: 371,
    		color: "#ff0105",
    		position: "absolute"
  	},
  	blackThemeCreateGroupChild6: {
    		top: 17,
    		left: 377,
    		borderRadius: 20,
    		width: 86,
    		height: 36
  	},
  	create1: {
    		width: 52,
    		height: 18,
    		color: "#fff",
    		fontSize: 15,
    		fontFamily: "Inter-Regular"
  	},
  	create: {
    		top: 26
  	},
  	blackThemeCreateGroupChild7: {
    		top: 188,
    		left: 77,
    		borderRadius: 13,
    		width: 324,
    		height: 48
  	},
  	groupNameHere: {
    		top: 197,
    		left: 138,
    		width: 218,
    		height: 38,
    		color: "#868686",
    		fontSize: 24,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	blackThemeCreateGroupChild8: {
    		top: 857,
    		left: 382,
    		borderRadius: 7,
    		width: 61,
    		height: 19
  	},
  	invite: {
    		top: 859,
    		fontSize: 12,
    		textAlign: "center",
    		fontFamily: "Inter-Regular",
    		color: "#fff"
  	},
  	rectangleIcon: {
    		left: 71,
    		borderRadius: 12,
    		width: 334,
    		height: 70,
    		top: 243,
    		position: "absolute"
  	},
  	description: {
    		left: 76,
    		width: 314,
    		height: 40,
    		top: 243,
    		color: "#868686",
    		fontSize: 16,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	members23Online: {
    		top: 435,
    		left: 123,
    		fontSize: 20,
    		color: "#808080",
    		width: 248,
    		height: 22,
    		position: "absolute"
  	},
  	homeIcon: {
    		top: 28,
    		left: 58,
    		overflow: "hidden"
  	},
  	home: {
    		top: 72,
    		width: 65,
    		fontFamily: "InstrumentSans-Bold",
    		fontWeight: "700",
    		lineHeight: 22,
    		fontSize: 14,
    		textAlign: "center",
    		color: "#fff",
    		position: "absolute",
    		height: 36,
    		left: 46
  	},
  	games: {
    		top: 76,
    		left: 140,
    		height: 29,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		letterSpacing: 0
  	},
  	boxIcon: {
    		left: 147,
    		overflow: "hidden"
  	},
  	icon: {
    		height: "100%",
    		width: "100%"
  	},
  	person: {
    		left: 414
  	},
  	profile: {
    		left: 406,
    		height: 24,
    		top: 81
  	},
  	chatBubble: {
    		left: 335,
    		top: 32
  	},
  	chats: {
    		left: 331,
    		width: 46,
    		height: 21,
    		top: 81
  	},
  	greenEllipseIcon: {
    		left: 236,
    		width: 60,
    		height: 60,
    		top: 26,
    		position: "absolute"
  	},
  	plusCircleIcon: {
    		top: 44,
    		left: 254,
    		height: 24,
    		overflow: "hidden"
  	},
  	homeParent: {
    		top: 932,
    		left: -10,
    		backgroundColor: "#282828",
    		width: 495,
    		height: 122,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	blackThemeCreateGroup: {
    		backgroundColor: "#000",
    		flex: 1,
    		height: 1055,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default BlackThemeCreateGroup;
