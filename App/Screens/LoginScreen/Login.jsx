import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import Colors from "../../Utils/Colors";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/images/login.png")}
        style={styles.loginImage}
        resizeMode="contain"
      />
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 27,
            color: Colors.WHITE,
            textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          Let's Find
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Professional cleaning and repair{" "}
          </Text>{" "}
          service
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: Colors.WHITE,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Best App to Find Services Near You Which Deliver You Professional
          Service
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: Colors.PRIMARY,
              fontWeight: "bold",
            }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    overflow: "scroll",
  },
  loginImage: {
    width: 200,
    height: 300, // Set your desired height
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    overflow: "scroll",
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 40,
  },
});
