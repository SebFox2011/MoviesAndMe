import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native'
import films from '../helpers/filmData'
import FilmItem from "./FilmItem";
import {getFilmsfromApiWithSearchedText} from '../api/TMDBapi'
import {ActivityIndicator} from "react-native";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            isLoading: false
        }
        this.searchText = ""
    }

    displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                    {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
                </View>
            )
        }
    }

    loadFilm() {
        this.setState({isLoading: true})
        if (this.searchText.length > 0)
            getFilmsfromApiWithSearchedText(this.searchText)
                .then((data) => this.setState({
                    films: data.results,
                    isLoading: false
                }));
    }

    searchTextInputChange(text) {
        this.searchText = text
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput onSubmitEditing={() => this.loadFilm()}
                           onChangeText={(text) => this.searchTextInputChange(text)} style={styles.textinput}
                           placeholder="Titre du film"/>
                <Button style={{height: 2}} title="Rechercher" onPress={() => {
                    this.loadFilm()
                }}/>
                <FlatList style={{marginLeft: 5, marginRight: 5}}
                          data={this.state.films}
                          keyExtractor={(item) => item.id}
                          renderItem={({item}) => <FilmItem film={item}/>}
                />
                {this.displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {marginTop: 20, flex: 1},
    textinput: {marginLeft: 5, marginRight: 5, height: 50, borderColor: '#000000', borderWidth: 2, paddingLeft: 5},
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Search