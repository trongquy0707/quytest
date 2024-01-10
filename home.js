import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default Home = () => {
    return(
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
          <Image 
            source={require('../images/back.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={styles.header_Text}>Menu</Text>
          <View style={{flexDirection: 'row'}}>
            <Image 
              source={require('../images/search.png')}
              style={{width: 30, height: 30}}
            />
            <Image 
              source={require('../images/information.jpg')}
              style={{width: 30, height: 30}}
            />
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.products}>
            <Image 
              source={require('../images/logo.png')}
              style={styles.products_logo}
            />
            <View style={styles.products_Details}>
              <View style={styles.products_menu}>
                <Text style={styles.products_menu_item}>Pizza</Text>
                <Text style={styles.products_menu_item}>Pasta</Text>
                <Text style={styles.products_menu_item}>Drinks</Text>
              </View>
              <Text style={styles.products_title}>Papa's Pizza</Text>
              <View style={styles.products_price}>
                <Image
                  source={require('../images/price.png')}
                  style={{width: '30%', height: 30}}
                />
                <Text>358</Text>
              </View>
              <View style={styles.click}>
                <TouchableOpacity style={styles.click_item_first}>
                  <Image 
                    source={require('../images/shop.png')}
                    style={{width: '30%', height: 'auto'}}
                  />
  
                  <Text>Open</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.click_item_second}>
                  <Image 
                    source={require('../images/oclock.png')}
                    style={{width: '30%', height: 'auto'}}
                  />
                  <Text style={{color: '#fff'}}>25 Mins</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.menu}>
            <TouchableOpacity><Text style={styles.menu_item}>Pizza</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.menu_item}>Pasta</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.menu_item}>Drinks</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.menu_item}>Burgers</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.menu_item}>Chicken</Text></TouchableOpacity>
          </View>
          <View style={styles.products_gird}>
            <View style={styles.products_row}>
              <View style={styles.products_item}>
                <Image 
                  source={require('../images/item1.jpg')}
                  style={{width: '100%', marginBottom: 10}}
                />
                <View style={styles.products_item_detail}>
                  <Text style={styles.products_item_title}>Kimci BBQ Chicken</Text>
                  <Text style={styles.products_item_price}>$ 110.99</Text>
                  <TouchableOpacity style={styles.btn_add}><Text style={{textAlign: 'center'}}>Add</Text></TouchableOpacity>
                </View>
              </View>
              <View style={styles.products_item}>
                <Image 
                    source={require('../images/item2.jpg')}
                    style={{width: '100%', marginBottom: 10}}
                />
                <View style={styles.products_item_detail}>
                  <Text style={styles.products_item_title}>Veggie Pizza</Text>
                  <Text style={styles.products_item_price}>$ 110.99</Text>
                  <TouchableOpacity style={styles.btn_add}><Text style={{textAlign: 'center'}}>Add</Text></TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.products_row}>
              <View style={styles.products_item}>
                <Image 
                  source={require('../images/item3.jpg')}
                  style={{width: '100%', marginBottom: 10}}
                />
                <View style={styles.products_item_detail}>
                  <Text style={styles.products_item_title}>Smoked Chicken Pizza</Text>
                  <Text style={styles.products_item_price}>$ 110.99</Text>
                  <TouchableOpacity style={styles.btn_add}><Text style={{textAlign: 'center'}}>Add</Text></TouchableOpacity>
                </View>
              </View>
              <View style={styles.products_item}>
                <Image 
                    source={require('../images/item4.jpg')}
                    style={{width: '100%', marginBottom: 10}}
                />
                <View style={styles.products_item_detail}>
                  <Text style={styles.products_item_title}>Michigan Pizza</Text>
                  <Text style={styles.products_item_price}>$ 110.99</Text>
                  <TouchableOpacity style={styles.btn_add}><Text style={{textAlign: 'center'}}>Add</Text></TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
        <View style={styles.tab_bottom}>
          <TouchableOpacity style={styles.tab_bottom_item}>
            <Image 
              source={require('../images/shop.png')}
              style={{width: '30%', height: 'auto'}}
            />
            <Text>Stores</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab_bottom_item}>
            <Image 
              source={require('../images/basket.png')}
              style={{width: '30%', height: 'auto'}}
            />
            <Text>Basket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab_bottom_item}>
            <Image 
              source={require('../images/order.png')}
              style={{width: '30%', height: 'auto'}}
            />
            <Text>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab_bottom_item}>
            <Image 
              source={require('../images/account.png')}
              style={{width: '30%', height: 'auto'}}
            />
            <Text>Accounts</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

