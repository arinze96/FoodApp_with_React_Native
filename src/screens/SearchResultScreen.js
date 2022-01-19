import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import { colors } from 'react-native-elements';
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
      <SearchResultCard
        screenWidth={SCREEN_WIDTH}
        images={restaurantsData1[3].images}
        averageReview={restaurantsData1[3].averageReview}
        numberOfReview={restaurantsData1[3].numberOfReview}
        restaurantName={restaurantsData1[3].restaurantName}
        farAway={restaurantsData1[3].farAway}
        businessAddress={restaurantsData1[3].businessAddress}
      />
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  listHeader:{
      color: colors.grey1,
      fontSize:20,
      paddingHorizontal:10,
      paddingVertical:15,
      fontWeight:'bold'
  }
});
