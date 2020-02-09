import PropTypes from "prop-types"
import { StyleSheet, TouchableOpacity, Image} from "react-native";
import React from "react";
import {
  ListItem as BaseListItem,
  Button,
  Text,
  Left,
  View,
  Right,
  Body
} from 'native-base';
const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = (props) => {
  return(
    <BaseListItem >
      <Left>
        <Image
        style={{flex: 1, height: 90, marginRight: 5}}
        source={{uri: mediaUrl + props.singleMedia.filename}}
      /></Left>

      <Body >
        <Text numberOfLines={1}>{props.singleMedia.title}</Text>
        <Text numberOfLines={1}>{props.singleMedia.description}</Text>
      </Body>
      <Right>
      <Button  onPress={
        () => {
          props.navigation.push('Single', {filename: props.singleMedia.filename,
          title: props.singleMedia.title,
          desc: props.singleMedia.description});
        }
      }>
        <Text>View</Text>
      </Button>
      </Right>
    </BaseListItem>
  )
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};


/*const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#d4d4d4',
    marginBottom: 10,
    padding: 5,
    elevation: 5,
  },
  header: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 16,
  },
  image: {
    marginRight: 5,
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  textBlock: {
    flex: 2
  }

});
*/
export default ListItem;
