import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../global/styles';
import { menuData, specialData } from '../../global/Data';
import { Icon } from 'react-native-elements';

const MenuScreen = ({navigation, restaurant}) => {
    const handlePress = () =>{}
  return (
    <View style={styles.container}>
        <View>
            {
                specialData.map((items) => 
                    <View key = {items.key} style={styles.view1}>
                        <TouchableOpacity onPress={handlePress}>
                            <View style={styles.view2}>
                                <Icon name="star" type="material-community" color="gold"/>
                                <Text style={styles.text1}>{items.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
        <View>
            {
                menuData.map((items) => 
                    <View key = {items.key} style={styles.view1}>
                        <TouchableOpacity onPress={handlePress}>
                            <View style={styles.view2}>
                                <Text style={styles.text1}>{items.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    caps:{
        color:colors.black
    },
    view1:{
        paddingHorizontal:10,
        marginTop:10
    },
    view2:{
        flexDirection:"row",
        alignItems:'center',
        borderBottomWidth:1,
        padding: 10,
        borderBottomColor:colors.grey5
    },
    text1:{
        color:colors.grey3,
        fontSize:18,
        fontWeight:"bold"
    }
});
