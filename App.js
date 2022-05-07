import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper1}>
        <View style={styles.view1}>
          <Text>1</Text>
        </View>
        <View style={styles.view2}>
          <Text>2</Text>
        </View>
        <View style={styles.view3}>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <Text>4</Text>
      </View>
      <View style={styles.view5}>
        <Text>5</Text>
      </View>
      <View style={styles.wrapper2}>
        <View style={styles.view6}>
          <Text>6</Text>
        </View>
        <View style={styles.view7}>
          <Text>7</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  wrapper1: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  view1: {
    flex: 1,
    backgroundColor: "#F1DDBF",
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    flex: 1,
    backgroundColor: "#E4AEC5",
    justifyContent: "center",
    alignItems: "center",
  },
  view3: {
    flex: 1,
    backgroundColor: "#92BA92",
    justifyContent: "center",
    alignItems: "center",
  },
  view4: {
    flex: 1,
    width: "100%",
    backgroundColor: "#8FBDD3",
    justifyContent: "center",
    alignItems: "center",
  },
  view5: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFCD38",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper2: {
    flex: 10,
    width: "100%",
    flexDirection: "row",
  },
  view6: {
    flex: 1,
    backgroundColor: "#BE8C63",
    justifyContent: "center",
    alignItems: "center",
  },
  view7: {
    flex: 1,
    backgroundColor: "#A97155",
    justifyContent: "center",
    alignItems: "center",
  },
});
