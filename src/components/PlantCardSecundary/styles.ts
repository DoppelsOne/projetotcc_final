import { Poppins_100Thin, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  background: {
    // width: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 8,
    // paddingRight: 50,
    // marginBottom: 10
  },

  container: {
    padding: 10,
    backgroundColor: theme.color.whiteHeading,
    borderRadius: 8,
    shadowColor: theme.color.purpleDark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    flexDirection: "row",
    height: 150,
    width: `100%`,
  },

  image: {
    width: 130,
    height: 130,
    borderRadius: 8,
  },

  information: {
    paddingHorizontal: 5,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 130,
    width: 150,
  },

  contentText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    textAlign: "left",
    fontSize: 18,
    color: theme.color.purpleDark,
    fontFamily: theme.fonts.poppins_700bold,
    marginBottom: -10,
    maxWidth: 150,
  },

  text: {
    color: theme.color.gray,
    fontFamily: theme.fonts.poppins_400,
    paddingTop: 10,
    marginBottom: -5,
  },

  price: {
    fontSize: 18,
    color: theme.color.green,
    fontFamily: theme.fonts.poppins_700bold,
  },
  content: {
    flex: 1,
    flexWrap: "wrap",
    // backgroundColor: "orange",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    height: `100%`,
    width: 50,
  },
  edit: {
    opacity: 0.7,
    flex: 1,
    backgroundColor: "#09ffff",
    borderTopRightRadius: 16,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    height: `100%`,
  },
  remove: {
    opacity: 0.7,
    flex: 1,
    backgroundColor: theme.color.orange,
    borderBottomRightRadius: 16,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    height: `100%`,
  },
});
