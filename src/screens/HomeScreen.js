import React, { useState } from 'react';
import {Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Icon } from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import { filterData, restaurantsData, restaurantsData1 } from '../global/Data';
import Countdown from 'react-native-countdown-component'
import FoodCard from '../components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

function HomeScreen({navigation}) {

    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState('0');

  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white', paddingBottom: 5}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? '#ff8c52' : '#e1e8ee',
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('RestaurantsMapScreen')
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? '#e1e8ee' : '#ff8c52',
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Icon
                type="material-community"
                name="map-marker"
                color="#43484d"
                size={26}
              />
              <Text style={{marginLeft: 5}}>22 Bessie Street</Text>
            </View>

            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color="#43484d"
                size={26}
              />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="tune"
              color="#43484d"
              size={26}
            />
          </View>
        </View>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryHeaderTextView}>Categories</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallCardSelected}
                      : {...styles.smallCard}
                  }>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 30}}
                    source={item.image}
                  />
                  <Text
                    style={
                      indexCheck === item.id
                        ? {...styles.smallCardTextSelected}
                        : {...styles.smallCardText}
                    }>
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.categoryHeader}>
          <Text style={styles.categoryHeaderTextView}>Free Delivery Now</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
              marginTop: -10,
              marginRight: 10,
              color: 'black',
            }}>
            Options changing in
          </Text>
          <Countdown
            until={3600}
            size={14}
            digitStyle={{backgroundColor: '#66DF48'}}
            digitTxtStyle={{color: 'white'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: 'min', s: 'sec'}}
          />
        </View>

        <View>
          <FlatList
            style={{marginTop: 10, margiBottom: 10}}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.categoryHeader}>
          <Text style={styles.categoryHeaderTextView}>
            Promotions Available
          </Text>
        </View>

        <View>
          <FlatList
            style={{marginTop: 10, margiBottom: 10}}
            horizontal={true}
            data={restaurantsData1}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.categoryHeader}>
          <Text style={styles.categoryHeaderTextView}>
            Restaurant in Your Area
          </Text>
        </View>

        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {restaurantsData.map(item => (
            <View key={item.id} style={{paddingBottom: 20}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {delivery &&
        <View style={styles.floatButton}>
          <TouchableOpacity 
            onPress={()=>{navigation.navigate('RestaurantsMapScreen')}}
          >
              <Icon
                name="place"
                type="material"
                size={32}
                color= '#ff8c52'
              />
              <Text style={{ color:'#5e6977' }}>Map</Text>
          </TouchableOpacity>
      </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: '#e1e8ee',
    borderRadius: 15,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: 'white',
  },
  smallCardText: {
    fontWeight: 'bold',
    color: '#86939e',
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: '#e1e8ee',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: '#ff8c52',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  categoryHeaderTextView: {
    color: '#5e6977',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingVertical: 5,
  },
  categoryHeader: {
    backgroundColor: '#e1e8ee',
  },
  floatButton: {
      position: 'absolute',
      bottom: 10,
      right: 15,
      backgroundColor: 'white',
      elevation: 10,
      width: 60,
      height:60,
      borderRadius: 30,
      alignItems: 'center'
  }
});

export default HomeScreen;
