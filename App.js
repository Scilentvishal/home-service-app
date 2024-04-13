import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import TabNavigation from "./App/Navigations/TabNavigation";

import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
  });

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_Y3VkZGx5LXdhc3AtMzIuY2xlcmsuYWNjb3VudHMuZGV2JA"
    >
      <View style={styles.container}>
        {/* Sign In Component */}
        <SignedIn>
        <NavigationContainer>
        <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        {/* Signout */}
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});
