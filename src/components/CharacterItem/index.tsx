// External libraries
import React from 'react'
import {
	Image,
	Text,
	View,
} from 'react-native'

// Styled
import { styles } from './styles'

interface CharacterItemProps {
	data: {
		image: string
		name: string
		status: string
		origin: {
			name: string
		}
		location: {
			name: string
		}
	}
}

const CharacterItem: React.FC<CharacterItemProps> = ({ data }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{data.name}</Text>
			<Image source={{ uri: data.image }} style={styles.image} />
			<View style={styles.about}>
				<Text style={styles.textAbout}>Status: {data.status}</Text>
				<Text style={styles.textAbout}>Origin: {data.origin.name}</Text>
				<Text style={styles.textAbout}>Location: {data.location.name}</Text>
			</View>
		</View>
	)
}

export default CharacterItem