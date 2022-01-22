import React from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import {filterData2, filterData} from '../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width;
function SearchScreen({navigation}) {
  return (
    <View style={{flex: 1, marginTop: 50}}>
      <SearchComponent />
      <View>
        <FlatList
          style={{marginBottom: 1}}
          data={filterData2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('SearchResultScreen', {item: item.name});
              }}>
              <View style={styles.imageView}>
                <ImageBackground style={styles.image} source={item.image}>
                  <View style={styles.textView}>
                    <Text style={{color: 'white'}}>{item.name}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text style={styles.listHeader}>Top Category</Text>
          }
          ListFooterComponent={<Footer navigation={navigation} />}
        />
      </View>
    </View>
  );
}

const Footer = ({navigation}) => {
  return (
    <View style={{marginTop: 20, marginBottom: 30}}>
      <FlatList
        style={{marginBottom: 1}}
        data={filterData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('SearchResultScreen', {item: item.name});
              }}>
            <View style={styles.imageView}>
              <ImageBackground style={styles.image} source={item.image}>
                <View style={styles.textView}>
                  <Text style={{color: 'white'}}>{item.name}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        )}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={
          <Text style={styles.listHeader}>More Category</Text>
        }
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },
  image: {
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },
  listHeader: {
    fontSize: 16,
    color: '#5e6977',
    paddingBottom: 10,
    marginLeft: 12,
  },
  textView: {
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52,52,52,0.3)',
  },
});
