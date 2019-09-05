import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native'
import films from '../helpers/filmData'
import FilmItem from "./FilmItem";
import {getFilmsfromApiWithSearchedText} from '../api/TMDBapi'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
        this.searchText= ""
    }


    loadFilm() {
        if (this.searchText.length > 0)
            getFilmsfromApiWithSearchedText(this.searchText).then((data) => this.setState({films: data.results}));
    }

    searchTextInputChange(text) {
        this.searchText= text
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput onChangeText={(text) => this.searchTextInputChange(text)} style={styles.textinput}
                           placeholder="Titre du film"/>
                <Button style={{height: 2}} title="Rechercher" onPress={() => {
                    this.loadFilm()
                }}/>
                <FlatList style={{marginLeft: 5, marginRight: 5}}
                          data={this.state.films}
                          keyExtractor={(item) => item.id}
                          renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {marginTop: 20, flex: 1},
    textinput: {marginLeft: 5, marginRight: 5, height: 50, borderColor: '#000000', borderWidth: 2, paddingLeft: 5}
});

export default Search