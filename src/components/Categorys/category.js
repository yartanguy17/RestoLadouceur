import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Alert } from "react-native";
import styles from "./styles"
import { categories } from "../../data/dataArrays";
import { useNavigation } from '@react-navigation/native';

export default function category (){

  const navigation = useNavigation();
    const onPressCategory = (item) => {
      // Alert.alert('Item')
        const title = item.name;
        const category = item;
        navigation.navigate("Menu", { category, title });
      };

      const renderCategory = ({ item }) => (
        <TouchableHighlight underlayColor="#F04E26" onPress={() => onPressCategory(item)}>
          <View style={styles.categoriesItemContainer}>
            <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
            <Text style={styles.categoriesName}>{item.name}</Text>
          </View>
        </TouchableHighlight>
      );
    
      return (
        <View>
          <FlatList
            style={styles.flatList} 
            data={categories} 
            renderItem={renderCategory} 
            keyExtractor={(item) => `${item.id}`}
            horizontal 
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
}

