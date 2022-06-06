import styled from "styled-components/native";
import { theme } from "../../global/theme";
import { Dimensions, StyleSheet } from "react-native";
import { wrap } from "lodash";

const screenWidth = Dimensions.get("window").width;

export const ImagePlant = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const Wrapper = styled.View`
  width: ${screenWidth / 1.2}px;
  padding-bottom: 30px;
`;

export const LayoutImage = styled.View`
  height: 130px;
  margin-top: 10px;
`;

export const CheckBoxContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
`;

export const TextSwap = styled.Text`
  font-family: ${theme.fonts.poppins_500};
  color: ${theme.color.purpleDark};
  font-size: 16px;
`;

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
    width: screenWidth / 1.1,
    // margin: 10,
  },

  image: {
    width: 130,
    height: 130,
    borderRadius: 8,
  },

  information: {
    // paddingHorizontal: 5,
    flex: 1,
    alignItems: "flex-start",
    // justifyContent: "center",
    justifyContent: "space-between",
    // width: "auto",
    height: "auto",
    // backgroundColor:"red",
    paddingLeft: 10,
  },

  contentText: {
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor:"blue",
    width: `100%`,
  },

  title: {
    fontSize: 18,
    flex: 1,
    flexWrap: "wrap",
    color: theme.color.purpleDark,
    fontFamily: theme.fonts.poppins_700bold,
    // marginBottom: -10,
  },

  text: {
    color: theme.color.gray,
    fontFamily: theme.fonts.poppins_400,
    // paddingTop: 10,
    // marginBottom: -5,
  },

  price: {
    fontSize: 18,
    color: theme.color.green,
    fontFamily: theme.fonts.poppins_700bold,
  },

  contentEditDelete: {
    flex: 1,
    flexWrap: "wrap",
    // backgroundColor: "orange",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    height: `100%`,
    width: 50,
  },

  edit: {
    // opacity: 0.7,
    flex: 1,
    backgroundColor: theme.color.green,
    borderTopRightRadius: 16,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    height: `100%`,
  },

  remove: {
    // opacity: 0.7,
    flex: 1,
    backgroundColor: theme.color.orange,
    borderBottomRightRadius: 16,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    height: `100%`,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonPlant: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: theme.color.whiteHeading,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },

  inputPrice: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: theme.color.whiteHeading,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
});
