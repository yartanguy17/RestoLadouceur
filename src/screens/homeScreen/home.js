import React from "react";
import { View, Image,Text } from "react-native";
import {Globaltyles} from '../../AppStyles'
import Header from "../../components/Header/header";
import Category from "../../components/Categorys/category"
import Foods from "../../components/Foods/foods";

import styles from "./styles"
export default function Home(){
    const title = "Accueil";
    return(
        <View>
            {/* <Header title = {title}/> */}
            <View style={styles.content}>
                <Image style={Globaltyles.img} source={require("../../../assets/images/splash.png")} />
                <Text style={Globaltyles.text}>
                    Toutes les catègories
                </Text>
                <Category/>
                <Text style={Globaltyles.text}>
                    Nos menu
                </Text>
                <Foods/>
            </View>
        </View>
    )
}