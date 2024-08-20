import React from "react";
import NavigationComponent from "@presentation/components/shared/NavComponent";
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
	console.log("=== start App ===")

	return (
		<SafeAreaProvider>
			<NavigationComponent />
		</SafeAreaProvider>
	);
}

export default App;
