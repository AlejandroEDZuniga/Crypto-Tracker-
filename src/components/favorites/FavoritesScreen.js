import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CoinsItem from '../coins/CoinsItem';
import colors from '../../res/colors';
import FavoritesEmptyState from './FavoritesEmptyState';
import Storage from '../../libs/storage';

class FavoritesScreen extends Component {
  state = {
    favorites: [],
  };

  getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();
      const keys = allKeys.filter(key => key.includes('favorite-'));
      const favs = await Storage.instance.multiGet(keys);
      const favorites = favs.map(fav => JSON.parse(fav[1]));

      console.log('favoritos', favorites);

      this.setState({favorites});
    } catch (err) {
      console.log('Get favorites error', err);
      throw Error(err);
    }
  };
  handlePress = coin => {
    this.props.navigation.navigate('CoinDetailScreen', {coin});
  };
  componentDidMount() {
    this.props.navigation.addListener('focus', this.getFavorites);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus', this.getFavorites);
  }

  render() {
    const {favorites} = this.state;

    return (
      <View style={styles.container}>
        {favorites.length == 0 ? <FavoritesEmptyState /> : null}

        {favorites.length > 0 ? (
          <FlatList
            data={favorites}
            renderItem={({item}) => (
              <CoinsItem item={item} onPress={() => this.handlePress(item)} />
            )}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.charade,
    flex: 1,
  },
});

export default FavoritesScreen;
