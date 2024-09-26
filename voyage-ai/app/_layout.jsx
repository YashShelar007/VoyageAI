import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useState } from "react";
import { CreateTripContext } from "../context/CreateTripContext";

export default function RootLayout() {
  useFonts({
    "poppins-regular": require("./../assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("./../assets/fonts/Poppins-Medium.ttf"),
    "poppins-bold": require("./../assets/fonts/Poppins-Bold.ttf"),
  });
  const [tripData, setTripData] = useState([]);
  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
