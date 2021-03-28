//Second screen in the drawer should have a searchable list of all the RSVP'd users
//The list can have the name and locality of the RSVP’d user. The entire list should be searchable with a single text input by the user’s locality and name. 
//Clicking an user in the list will open a new screen that contains all the details collected in the first form.

import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import mockData from './mockData.json'

const RSVPUsersListScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setfilteredData] = useState([]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = mockData.filter(function (item) {
        const itemData = item.user_name
          ? item.user_name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilteredData(newData);
      setSearch(text);
    } else {
      setfilteredData(mockData);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
          {item.user_name.toUpperCase()}
          {'-'}
          {item.user_locality}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  //Navigation of Detials Screen, onPress of searched list item
  const getItem = (item) => {
    this.props.navigation.navigate('DetailsScreen', {userDetails: item});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{size: 24}}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  }
  itemStyle: {
    padding: 10,
  },
});

export default RSVPUsersListScreen;
