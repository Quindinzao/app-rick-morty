// External libraries
import React, { useEffect, useState } from 'react'
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

// Components
import CharacterItem from './src/components/CharacterItem'

// Services
import api from './src/services/api'
import theme from './src/styles/theme'

const App = () => {
	const [character, setCharacter] = useState<any>()
	const [characterList, setCharacterList] = useState<any>()
	const [searchText, setSearchText] = useState('')
	const [id, setId] = useState(1)

	const loadAPI = async () => {
		await api
			.get(`/character?page=${id}`)
			.then(response =>	setCharacter(response.data.results))
			.catch(err => console.log('Oops! An error ocurred in', err))
	}

	useEffect(() => {
		loadAPI()
	}, [id])

	useEffect(() => {
		if (searchText !== '') setCharacterList(character.filter((item: { name: string | string[] }) => 
			(item.name.indexOf(searchText) > -1)))
		else setCharacterList(character)
	}, [searchText])

	useEffect(() => {
		setCharacterList(character)
	}, [character])
	
	return (
		<LinearGradient colors={[ theme.black, theme.purple ]} style={styles.gradient}>
			<SafeAreaView style={styles.container}>
				<TextInput 
					style={styles.input} 
					placeholder='Search character name...' 
					placeholderTextColor={theme.light_gray}
					value={searchText}
					onChangeText={item => setSearchText(item)}
				/>
				<FlatList
					data={characterList}
					keyExtractor={item => item.id}
					renderItem={(item) => 
						<CharacterItem data={item.item} />
					}
				/>
			</SafeAreaView>
			{id !== 1 && 
				<TouchableOpacity onPress={() => setId(id - 1)} style={styles.buttonPrevious}>
					<Text style={styles.textButton}>PREVIOUS</Text>
				</TouchableOpacity>
			}
			{id !== 42 &&
				<TouchableOpacity onPress={() => setId(id + 1)} style={styles.buttonNext}>
					<Text style={styles.textButton}>NEXT</Text>
				</TouchableOpacity>
			}
		</LinearGradient>
		
	)
}

const styles = StyleSheet.create({
	gradient: {
		flex: 1
	},
	container: {
		marginBottom: 77,
		paddingHorizontal: 24,
	},
	input: {
		marginVertical: 12,
		paddingHorizontal: 16,

		borderRadius: 24,
		borderWidth: 2,
		borderColor: theme.green,

		color: theme.light_gray
	},
	buttonPrevious: {
		width: 100,

		paddingHorizontal: 16,
		paddingVertical: 8,

		alignItems: 'center',

		backgroundColor: theme.green,
		borderRadius: 24,
		borderWidth: 1,
		borderColor: theme.purple,

		position: 'absolute',
		left: 12,
		bottom: 32
	},
	buttonNext: {
		width: 100,

		paddingHorizontal: 16,
		paddingVertical: 8,

		alignItems: 'center',

		backgroundColor: theme.green,
		borderRadius: 24,
		borderWidth: 1,
		borderColor: theme.purple,

		position: 'absolute',
		right: 12,
		bottom: 32
	},
	textButton: {
		color: theme.purple
	}
})

export default App
