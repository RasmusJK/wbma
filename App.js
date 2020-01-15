/*import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

const mediaArray = [
  {
    'key': '0',
    'title': 'Title 1',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'thumbnails': {
      w160: 'http://placekitten.com/160/161',
    },
    'filename': 'http://placekitten.com/2048/1920',
  },
  {
    'key': '1',
    'title': 'Title 2',
    'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/162',
    },
    'filename': 'http://placekitten.com/2041/1922',
  },
  {
    'key': '2',
    'title': 'Title 3',
    'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/163',
    },
    'filename': 'http://placekitten.com/2039/1920',
  },
];


const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mediaArray}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.listItem}>
              <Image
                style={styles.image}
                source={{uri: item.thumbnails.w160}}
              />
              <View style={styles.textblock}>
                <Text style={styles.Title}>{item.title}</Text>
                <Text style={styles.Text}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

  },

  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'grey'
  },
  image: {
    marginLeft: 100,
    marginTop: 1,
    width: 100,
    height: 100
  },
  Title: {
    fontSize:18
  },
  textBlock: {
    flex:1
  }


});

export default App;*/
import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import List from "./components/List";
import {MediaProvider} from "./contexts/MediaContext";


const App = () => {
  return (
    <MediaProvider>
      <List/>
    </MediaProvider>
  );
};



export default App;
