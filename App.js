import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable
} from "react-native";
import React, { useState } from 'react';

const App = () => {

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="e.g abc@mail.com"
          keyboardType="email-address"
        />
        <Text style={styles.title}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="6-8 characters"
        />
        <Text style={styles.title}>Phone number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="e.g 0930475566"
          keyboardType="numeric"
          maxLength={10}
        />
        <Pressable
          disabled={authorized}
          onPress={() => {
            email !== "" && phone !== "" && password !== "" && setAuthorized(true);
            setEmail(''); setPhone(''); setPassword('');
          }}
          style={styles.login_bttn}
        >
          <Text style={styles.login_txt}>Login</Text>
        </Pressable>
        <Text>{authorized ? "You're logged in" : ""}</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  wrapper: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    padding: 5,
    backgroundColor: "#FAF5E4",
    marginBottom: 20,
  },
  login_bttn: {
    backgroundColor: "#125B50",
    width: 100,
    padding: 15,
    borderRadius: 5,
  },
  login_txt: {
    color: "#fff",
    textAlign: "center",
  }
});
