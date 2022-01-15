import React, {useState, useRef} from 'react';
import {
  FlatList,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {filterData} from '../global/Data';
import { filter } from 'lodash';

function SearchComponent() {
  const navigation = useNavigation();
  const [data, setData] = useState([...filterData]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocused, setTextInputFocused] = useState(true);
  const textInput = useRef(0);

  const contains = ({name}, query)=>{
      if(name.includes(query)){
          return true
      }else{
          return false
      }
  }

  const handleSearch = (text) =>{
      const dataS = filter(filterData, userSearch =>{
          return contains(userSearch, text);
      })
      setData([...dataS])
  }
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.SearchArea}>
          <Icon
            name="search"
            style={styles.searchIcon}
            type="material"
            iconStyle={{marginLeft: 5}}
            size={32}
          />
          <Text style={{fontSize: 15}}>what are you looking for?</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.TextInput}>
              <View>
                <Icon
                  name={textInputFocused ? 'arrow-back' : 'search'}
                  onPress={() => {
                    if (textInputFocused) {
                      setModalVisible(false);
                      setTextInputFocused(true);
                    }
                  }}
                  style={styles.icon2}
                  type="material"
                  iconStyle={{marginRight: 5}}
                />
              </View>
              <TextInput
                style={{width: '90%'}}
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onFocus={() => {
                  setTextInputFocused(true);
                }}
                onBlur={() => {
                  setTextInputFocused(false);
                }}
                onChangeText={handleSearch}
              />
              <View>
                <Icon
                  name={textInputFocused ? 'cancel' : null}
                  iconStyle={{color: '#86939e'}}
                  type="material"
                  style={{marginRight: -10}}
                  onPress={() => {
                    textInput.current.clear();
                  }}
                />
              </View>
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate('SearchResultScreen', {
                    item: item.name,
                  });
                  setModalVisible(false);
                  setTextInputFocused(true);
                }}>
                <View style={styles.view2}>
                  <Text style={{color: '#5e6977', fontSize: 15}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
    </View>
  );
}

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: '#86939e',
    fontSize: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  SearchArea: {
    marginTop: 10,
    width: '94%',
    height: 50,
    backgroundColor: '#e1e8ee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: '#5e6977',
  },
  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  view2: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    paddingLeft: 20,
  },
  icon2: {
    fontSize: 24,
    padding: 5,
    color: '#5e6977',
  },
  modal: {
    flex: 1,
  },
});
