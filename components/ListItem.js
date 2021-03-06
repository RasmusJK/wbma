import PropTypes from "prop-types"
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const ListItem = (props) => {
  return(
    <TouchableOpacity style={styles.listItem}>
      <Image style={styles.image}
             source={{uri: props.singleMedia.thumbnails.w160}}
      />
      <View style={styles.textBlock}>
        <Text style={styles.header}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  )
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};


const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#d4d4d4',
    marginBottom: 10,
    padding: 5
  },
  header: {
    fontWeight: 'bold',
    padding: 2
  },
  image: {
    marginRight: 5,
    flex: 1,
    width: 100,
    height: '100%',
  },
  textBlock: {
    flex: 2
  }

});

export default ListItem;
