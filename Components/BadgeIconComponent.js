import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {withBadge, Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BadgeIconComponent = () => {
  const getCartNo = useSelector(state => state.cart.cartNumbers);

  const BadgedIcon = withBadge(getCartNo.length)(Icon);

  return (
    <View>
      {/* <Ionicons name="cart" color="tomato" size={24} /> */}
      {getCartNo.length === 0 ? (
        <Ionicons name="cart" color="#3dbe29" size={24} />
      ) : (
        <BadgedIcon type="ionicon" name="cart" color="#3dbe29" />
      )}
    </View>
  );
};

export default BadgeIconComponent;

const styles = StyleSheet.create({});
