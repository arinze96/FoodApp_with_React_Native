import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import ProductCard from './ProductCard';

const SearchResultCard = ({
  OnpressRestaurantCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  productData,
  images,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={OnpressRestaurantCard}>
        <View style={styles.view1}>
          <View style={styles.imageCarrier}>
            <ImageBackground
              style={{height: 160}}
              source={images}
              imageStyle={styles.imageStyle}
            />
            <View style={styles.image}>
              <Text style={styles.text1}>{averageReview}</Text>
              <Text style={styles.text2}>{numberOfReview} reviews</Text>
            </View>
          </View>
          <View style={styles.view3}>
            <View styles={styles.viewUp}>
              <Text style={styles.text5}>{restaurantName}</Text>
            </View>
          </View>
          <View style={styles.locat}>
            <View style={styles.view4}>
              <Icon
                name="place"
                type="material"
                color={colors.grey1}
                size={18}
                iconStyle={{marginTop: 3}}
              />
              <Text style={styles.view5}>{farAway} Min</Text>
            </View>
            <View style={{flex: 6}}>
              <Text style={styles.view5}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.selection}>
        <FlatList
          style={styles.flatstyles}
          data={productData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <ProductCard
              image={item.images}
              productName={item.name}
              price={item.price}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchResultCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatstyles: {
    backgroundColor: colors.cardbackground,
  },
  selection: {
    marginTop: 5,
    paddingBottom: 20,
  },
  locat: {
    flexDirection: 'row',
  },
  viewUp: {
    paddingTop: 5,
  },
  view1: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  imageCarrier: {
    height: 150,
    width: 390,
    borderRadius: 10,
  },
  imageStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  text2: {
    color: 'white',
    fontSize: 13,
    marginRight: 0,
    marginLeft: 0,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -5,
  },
  text3: {
    color: colors.grey2,
    fontSize: 10,
    fontWeight: 'bold',
  },
  text4: {
    color: colors.grey2,
    fontSize: 10,
    fontWeight: 'bold',
  },
  view3: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginBottom: 2,
    marginLeft: 0,
    marginTop: 20,
  },
  text5: {
    color: colors.grey1,
    fontSize: 17,
    fontWeight: 'bold',
  },
  view4: {
    flex: 2,
    flexDirection: 'row',
    borderRightWidth: 1,
    borderRightColor: colors.grey4,
  },
  view5: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 5,
    color: colors.grey3,
  },
  text6: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10,
  },
});
