import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import RadioForm from 'react-native-simple-radio-button';

export default Detail = () => {
    const size = [
        {label: "Large 13.5                  $ 19.99", value: 0},
        {label: "Small 9.5                    $ 10.99", value: 1},
        {label: "Medium 11,5             $ 15.99", value: 2},
    ]
    const dish = [
        {label: "Extra Cheese               $ 1.00", value: 0},
        {label: "Chicken                        $ 1.00", value: 1},
    ]
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('../images/backgroundcolor.jpg')}
                    style={{width: '100%', height: 300}}
                />
            </View>
            <View style={styles.products_detail}>
                <Text style={styles.products_detail_title}>Italian Supreme</Text>
                <Text style={{fontSize: 15}}>Pizza Sauce, Tomato, Green Pepper, Black Olives, Beef pepperoni, Parsley, Sun Dried Tomato, Mozzarella Cheese</Text>
            </View>
            <View style={styles.size}>
                <Text style={styles.size_title}>Select Size</Text>
                <View style={styles.size_radio}>
                    <RadioForm 
                        radio_props={size} 
                        selectedButtonColor="green"
                        buttonColor='#ececec'
                    />
                </View>
            </View>
            <View style={styles.dish}>
                <Text style={styles.dish_title}>Choose Add Ons</Text>
                <View style={styles.dish_radio}>
                    <RadioForm 
                        radio_props={dish} 
                        selectedButtonColor="green"
                        buttonColor='#ececec'
                    />
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={{flexDirection: 'row', alignItems: 'center', display: 'flex', gap: 20}}>
                    <TouchableOpacity><Text style={styles.additions}>-</Text></TouchableOpacity>
                    <Text>1</Text>
                    <TouchableOpacity><Text style={styles.additions}>+</Text></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.add}><Text>Add ($ 20.99)</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    header: {
        marginBottom: 20,
    },

    products_detail: {
        padding: 10,
        marginBottom: 20,
    },

    products_detail_title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    size: {
        marginHorizontal: 5,
    },

    size_title: {
        marginBottom: 20,
        backgroundColor: '#dadada',
        paddingVertical: 10,
    },

    dish: {
        marginTop: 20,
        marginHorizontal: 5,
    },

    dish_title: {
        marginBottom: 20,
        backgroundColor: '#dadada',
        paddingVertical: 10,
    },

    bottom: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 5,
    },

    additions: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#696969',
        color: '#FFFFFF',
        fontSize: 20,
        borderRadius: 5,
    },

    add: {
        paddingHorizontal: 40,
        paddingVertical: 8,
        backgroundColor: '#00d300',
        borderRadius: 5,
    }
  });