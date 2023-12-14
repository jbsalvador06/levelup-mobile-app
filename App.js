import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./navigation/appNavigation";

const App = () => {
  
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}

export default App;