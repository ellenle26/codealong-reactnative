import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from "react-native";
import React from 'react';

const App = () => {

  const [sections, setSections] = React.useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2'],
    },
  ]);

  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    const adding_index = sections.length + 1;
    setSections([...sections,
    {
      title: 'Title ' + adding_index,
      data:
        [
          'Item ' + adding_index + '-1',
          'Item ' + adding_index + '-2'
        ],
    }
    ]);
    setRefreshing(false);
  }


  return (
    <SafeAreaView>
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={sections}
        renderItem={({ item }) => (
            <Text style={styles.text}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
        refreshControl={
          < RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
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
