import React, { StrictMode } from "react";
import NavigationComponent from "@presentation/components/shared/NavComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "@application/redux/store";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

function App(): JSX.Element {
	console.log("=== start App ===");

	return (
		<StrictMode>
			<Provider store={store}>
				<SafeAreaProvider>
					<GluestackUIProvider config={config}>
						<NavigationComponent />
					</GluestackUIProvider>
				</SafeAreaProvider>
			</Provider>
		</StrictMode>
	);
}

export default App;
