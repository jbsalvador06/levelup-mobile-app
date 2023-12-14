import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./navigation/appNavigation";
import HUD from "./components/HUD";
import { StatusBar } from "react-native";

const App = () => {
  
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'#F4C524'}/>
      <AppNavigation />
    </SafeAreaProvider>
  );
}

export default App;