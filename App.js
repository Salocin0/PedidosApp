import Main from './src/components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { fontCollection } from "./src/Styles/Fonts";

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection);
  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  );
}