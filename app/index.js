import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
	<View style={styles.container}>
		<Text>Index JS. Lorem ipsum dolor sit amet. Test.</Text>
	</View>
)

export default App
