// External libraries
import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 320,

		marginVertical: 12,
		padding: 18,

		alignItems: 'center',
		justifyContent: 'space-around',

		borderRadius: 24,
		borderWidth: 2,
		borderColor: theme.green,
	},
	image: {
		width: 160,
		height: 160,

		borderRadius: 12
	},
	about: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	name: {
		color: theme.light_gray,
		fontSize: 20,
		fontWeight: '700'
	},
	textAbout: {
		color: theme.light_gray,
		fontWeight: '600'
	},
	star: {
		color: theme.green,
		fontSize: 16,
		fontWeight: '700'
	}
})