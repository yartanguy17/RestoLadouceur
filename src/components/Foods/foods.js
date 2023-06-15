import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image, Button, Alert } from "react-native";
import { Globaltyles } from '../../AppStyles';
import styles from "./styles";
import { recipes } from "../../data/dataArrays";


export default function Foods(){

    const onPressRecipe = (item) => {
        // navigation.navigate("Recipe", { item });
      };
      const onPressButton = () => {
        Alert.alert('COMMANDER')
      }
    
      const renderRecipes = ({ item }) => (
        <TouchableHighlight underlayColor="#F04E26" onPress={() => onPressRecipe(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>2500 XOF</Text>
            <Button title="Commander" color={'#F04E26'} onPress = {() => onPressButton()}/>
          </View>
        </TouchableHighlight>
      );
    
      return (
          <View>
            <FlatList 
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={recipes} 
                renderItem={renderRecipes} 
                keyExtractor={(item) => `${item.recipeId}`} 
            />
          </View>
      );
}