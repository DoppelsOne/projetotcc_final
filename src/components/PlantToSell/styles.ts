import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  background: {
    marginRight: 8,
    borderRadius: 8,
    marginBottom: 15
  },

  container: {
    margin: 12,
    marginBottom: 15,
  },

  flatlist: {
    padding: 10,
    backgroundColor: theme.color.attention
  },
  
  content: {
    // marginRight: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  image: {
    width: 200,
    height: 150,
  },

  contentText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.color.white,
    paddingVertical: 10,
  },

  price: {
    fontSize: 22,
    // fontWeight: 'bold',
    color: theme.color.white
  },

  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.color.white,
    backgroundColor: theme.color.green,
    borderRadius: 8,
    padding: 5,
  },

})