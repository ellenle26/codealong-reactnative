import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from 'react/cjs/react.development';

export default function App() {
  const [greeting, setGreeting] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{greeting ? "Hey yo, Linh!" : "hey yo!"}</Text>
      <Pressable onPress={() => setGreeting(!greeting)} style={styles.button}>
        <Text>Greets</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

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
  button: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 8,
  }
});
