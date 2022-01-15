import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

function FoodCard({
    OnpressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth,
  }) {
    return (
      <TouchableOpacity>
        <View style={{...styles.cardView, width: screenWidth}}>
          <Image
            style={{...styles.image, width: screenWidth}}
            source={images}
          />
  
          <View>
            <View>
              <Text style={{...styles.restaurantName}}>{restaurantName}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.distance}>
                <Icon
                  type="material"
                  name="place"
                  color="#5e6977"
                  iconStyle={{marginTop: 3}}
                  size={18}
                />
                <Text style={styles.min}>{farAway} Min</Text>
              </View>
              <View style={{flex: 9, flexDirection: 'row'}}>
                <Text style={styles.address}>{businessAddress}</Text>
              </View>
            </View>
          </View>
        </View>
  
        <View style={styles.review}>
          <Text style={styles.average}>{averageReview}</Text>
          <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
        </View>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    numberOfReview: {
        color: 'white',
        fontSize: 13,
        marginRight: 0,
        marginLeft: 0,
      },
      average: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 0.3,
      },
      review: {
        position: 'absolute',
        top: 0,
        right: 10,
        backgroundColor: 'rgba(52,52,52,0.3)',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12,
      },
      address: {
        fontSize: 12,
        paddingTop: 5,
        color: '#86939e',
        paddingHorizontal: 10,
      },
      min: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        color: '#86939e',
      },
    distance: {
        flex: 4,
        flexDirection: 'row',
        borderRightColor: '#bdc6cf',
        paddingHorizontal: 5,
        borderRightWidth: 1,
      },
      restaurantName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#43484d',
        marginTop: 5,
        marginLeft: 10,
      },
      image: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: 150,
      },
      cardView: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: 1,
        borderColor: '#bdc6cf',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
      },
})

export default FoodCard