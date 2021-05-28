import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import BadgeIconComponent from '../Components/BadgeIconComponent';
import Data from '../Data/Local-Data.json';
import ProductItem from '../Components/ProductItem';
import {cartAction} from '../Store/action/cart';

const HomeScreen = ({navigation}) => {
  //const getCartNo = useSelector(state => state.cart.cartNumbers);

  const dispatch = useDispatch();

  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.cartStyle}>
            <BadgeIconComponent />
          </View>
        ),
      }),
    [],
  );

  const renderItem = ({item}) => {
    return (
      <ProductItem image={item.image} price={item.price} title={item.title}>
        <Button
          color="#C2185B"
          title="To Cart"
          onPress={() => {
            dispatch(cartAction(item));
          }}
        />
      </ProductItem>
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={Data.data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cartStyle: {
    marginRight: 30,
  },
});
