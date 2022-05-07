import { StyleSheet, Text, View, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import React from 'react';

const App = () => {

  const [list, setList] = React.useState([
      { id: 1, name: "item1" },
      { id: 2, name: "item2" },
      { id: 3, name: "item3" },
      { id: 4, name: "item4" },
      { id: 5, name: "item5" },
      { id: 6, name: "item6" },
      { id: 7, name: "item7" },
      { id: 8, name: "item8" },
      { id: 9, name: "item9" },
      { id: 10, name: "item10" },
      { id: 11, name: "item11" },
      { id: 12, name: "item12" },
      { id: 13, name: "item13" },
      { id: 14, name: "item14" },
      { id: 15, name: "item15" },
      { id: 16, name: "item16" },
      { id: 17, name: "item17" },
      { id: 18, name: "item18" },
      { id: 19, name: "item19" },
      { id: 20, name: "item20" },
  ]);
  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    setList([...list, { id: Math.random(), name: "newItem added"}]);
    setRefreshing(false);
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper} refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors="blue"
        />
      }>
        {list.map((item) => {
          return (
            <View key={item.id} style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  wrapper: {
    padding: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  item: {
    flex: 1,
    height: 50,
    backgroundColor: "#92BA92",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
});
