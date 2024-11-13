import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import RightArrow from '../../../assets/Images/right-arrow.png'
import leftArrow from '../../../assets/Images/left-arrow.png'
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './SplashStyle';

// import logo from '../../../assets/Images/Logo-Screen.png'


export default function SplashScreen3({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Images/splash-screen-3.jpeg')}
        style = {styles.image}
        >
        <View style={styles.bottomContainer}>
          <Text style={styles.heading2}>Transform Your Strength,</Text>
          <Text style={styles.heading2}>Elevate Your Life.</Text>

          <Text style={styles.subText2}>
                Lorem ipsum dolor sit amet consectetur. Curabitur dolor 
                donec scelerisque tortor consequat. Odio lobortis morbi at nunc 
                ultricies cras. Viverra tellus elementum tortor id magna nisi.
          </Text>
          <View style={styles.button}>
            <Button
             icon={RightArrow}
              mode="text"
              onPress={() => navigation.navigate('Splash')}
              contentStyle={{ flexDirection: 'row-reverse' }}
              labelStyle={styles.buttonText}
            >
              Get Started
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
EStyleSheet.build();
