// External libraries
import React, { useEffect, useState } from 'react'
import {
	Image,
	Text,
	TouchableOpacity,
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
	const [star, setStar] = useState(false)

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{data.name}</Text>
			<Image source={{ uri: data.image }} style={styles.image} />
			<View style={styles.about}>
				<Text style={styles.textAbout}>Status: {data.status}</Text>
				<Text style={styles.textAbout}>Origin: {data.origin.name}</Text>
				<Text style={styles.textAbout}>Location: {data.location.name}</Text>
			</View>
			<TouchableOpacity onPress={() => setStar(!star)}>
				{!star ? <Text style={styles.star}>SALVAR</Text> : <Text style={styles.star}>REMOVER</Text>}
			</TouchableOpacity>
		</View>
	)
}

export default CharacterItem