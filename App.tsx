import { NativeBaseProvider } from "native-base";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import store from "./store";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
