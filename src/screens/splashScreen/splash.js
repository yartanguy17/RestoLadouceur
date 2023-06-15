import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import Home from '../home/home'
export default function Splash(){
    const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      // Keep the splash screen visible
      await SplashScreen.preventAutoHideAsync();
      // Do what you need before the splash screen gets hidden
    //   console.log("I'm a task that gets executed before splash screen disappears");
        <Home/>
      // Then tell the application to render
      setAppIsReady(true);
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Hide the splash screen
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello Word!</Text> 
    </View>
  );
}