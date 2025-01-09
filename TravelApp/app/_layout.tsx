import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {

  useFonts({
    'monserrat': require('../assets/fonts/Montserrat-Regular.ttf'),
    'monserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
    'monserrat-extra-bold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
  })
  
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false,
      }}/>
    </Stack>
  );
}
