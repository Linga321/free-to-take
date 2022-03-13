import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Card, ListItem, Avatar, Text, Button, Icon} from 'react-native-elements';
import {routes} from '../utils/api';
import {View} from 'react-native';
import Time from './DateTime';
import MiniProfile from './MiniProfile';
import colors from '../utils/colors';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types'


export function ChatMessageListItem({item, user, media, index, onFocus, onProfilePress}) {
  const isOwnComment = item.user_id == user.user_id;
  const isItemOwnerComment = item.user_id == media.owner.user_id;
  const commentOwner = isItemOwnerComment ? media.owner : item.owner;


  return (
    <View>
      <ListItem key={index}>
        <ListItem.Content>
          <View style={{flex: 1, width:'100%', backgroundColor: isOwnComment ? colors.active : colors.inactive }}>
            <View style={{flex: 1, flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              {commentOwner ? <MiniProfile user={commentOwner} style={{margin: 10}}/> : <></>}
              {isItemOwnerComment ? <Icon type="font-awesome" name="gift"/> : <></>}
            </View>
            <View style={{margin: 10}}>
              <Text>{item.comment}</Text>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Time ISOString={item.time_added} />
              </View>
            </View>
          </View>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}


ChatMessageListItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onFocus: PropTypes.func.isRequired,
}