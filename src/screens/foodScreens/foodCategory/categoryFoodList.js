import React , { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image,Button } from "react-native";
import styles from "./styles"
import { Globaltyles } from '../../../AppStyles';
import { getRecipes } from "../../../data/MockDataAPI";

export default function CategoryFoodList(props){

  const { navigation, route } = props;

  const item = route?.params?.category;
  const recipesArray = getRecipes(item.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, []);

  const onPressFood = (item) => {
    navigation.navigate("SingleFood", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="#F04E26" onPress={() => onPressFood(item)}>
      <View style={Globaltyles.container}>
        <Image style={Globaltyles.photo} source={{ uri: item.photo_url }} />
        <Text style={Globaltyles.title}>{item.title}</Text>
        <Text style={Globaltyles.buttonOrder}>2500 XOF</Text>
        <Button style={Globaltyles.category} title="Commander" color={'#F04E26'} onPress = {() => onPressButton()}/>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.content}>
      <Image style={styles.banner} source={require("../../../../assets/images/splash.png")} />
      <FlatList 
        vertical 
        showsVerticalScrollIndicator={false}
        numColumns={2} 
        data={recipesArray} 
        renderItem={renderRecipes} 
        keyExtractor={(item) => `${item.recipeId}`} 
      />
    </View>
  );

}