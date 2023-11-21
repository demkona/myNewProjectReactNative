import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (text) => setLogin(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  useEffect(() => {}, []);

  const onLogin = () => {
    Alert.alert("Credentials", `${login} + ${email} + ${password}`);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/Photo-BG.png")}
        >
          <View style={styles.imageBg}>
            <ImageBackground source={require("./assets/BG.png")}>
              <View style={styles.imageBgFon}>
                <View style={styles.bgImgUser}>
                  <Image
                    style={styles.imgAdd}
                    source={require("./assets/add.png")}
                  />
                </View>
              </View>
              <View style={styles.form}>
                <KeyboardAvoidingView
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                  <View>
                    <Text style={styles.textTitle}>Реєстрація</Text>
                  </View>
                  <View>
                    <TextInput
                      placeholder="Логін"
                      style={styles.input}
                      onChangeText={loginHandler}
                    />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Адреса електронної пошти"
                      style={styles.input}
                      onChangeText={emailHandler}
                    />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Пароль"
                      style={styles.input}
                      onChangeText={passwordHandler}
                      secureTextEntry={true}
                    />
                  </View>
                </KeyboardAvoidingView>
                <TouchableOpacity
                  onPress={onLogin}
                  activeOpacity={0.8}
                  style={styles.btn}
                >
                  <Text style={styles.btnRegister}>Зареєстуватися</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.textSingIn}>Вже є акаунт? Увійти</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8ede5",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  imageBg: {
    justifyContent: "flex-end",
    flex: 1,
    borderRadius: 25,
  },
  imageBgFon: {
    position: "absolute",
    left: "50%",
    top: -60,
  },
  bgImgUser: {
    right: "50%",
    width: 120,
    height: 120,
    textAlign: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
  },
  imgAdd: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  textTitle: {
    marginTop: 92,
    marginBottom: 33,
    fontSize: 30,
    textAlign: "center",
    color: "black",
  },
  input: {
    padding: 16,
    backgroundColor: "#f6f6f6",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    height: 50,
    marginBottom: 40,
    borderRadius: 8,
    color: "#212121",
  },
  form: {
    marginHorizontal: 16,
  },
  inputTitle: {
    color: "#f8ede5",
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  btnRegister: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  textSingIn: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
});
