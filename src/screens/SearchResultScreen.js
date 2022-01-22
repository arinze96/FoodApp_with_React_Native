import React from 'react';
import {Dimensions, StyleSheet, Text, View, FlatList} from 'react-native';
import {colors} from 'react-native-elements';
import SearchResultCard from '../components/SearchResultCard';
import {restaurantsData1} from '../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.listHeader}>
          {restaurantsData1.length} Results for {route.params.item}
        </Text>
      </View>
      <View>
        <FlatList
          style={styles.flatstyles}
          data={restaurantsData1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({index, item}) => (
            <SearchResultCard
              screenWidth={SCREEN_WIDTH}
              images={item.images}
              averageReview={item.averageReview}
              numberOfReview={item.numberOfReview}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              businessAddress={item.businessAddress}
              productData={item.productData}
              OnpressRestaurantCard={() => {navigation.navigate('RestaurantHomeScreen', {id:index, restaurant:item.restaurantName})}}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  flatstyles: {
    backgroundColor: colors.cardbackground,
  },
  listHeader: {
    color: colors.grey1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontWeight: 'bold',
  },
});
