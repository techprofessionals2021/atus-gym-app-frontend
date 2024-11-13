import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, Button } from 'react-native';
import { IconButton } from 'react-native-paper';
import RightArrow from '../../../assets/Images/right-arrow.png'
import leftArrow from '../../../assets/Images/left-arrow.png'
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './SplashStyle';

// import logo from '../../../assets/Images/Logo-Screen.png'


export default function SplashScreen2({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Images/splash-screen-2.jpeg')}
        style = {styles.image}
        >
        <View style={styles.bottomContainer}>
          <Text style={styles.heading2}>Train Smarter, Live Stronger</Text>
          <Text style={styles.subText2}>
                Lorem ipsum dolor sit amet consectetur. Curabitur dolor 
                donec scelerisque tortor consequat. Odio lobortis morbi at nunc 
                ultricies cras. Viverra tellus elementum tortor id magna nisi.
          </Text>
          <View style={styles.buttonContainer2}>
                <IconButton
                    icon={() => <Image source={leftArrow} />}
                    iconColor='#fff'
                    size={50}
                    style={styles.iconButton}                    
                    // iconColor={MD3Colors.error50}
                    mode='contained'
                    containerColor='#000000'
                    onPress={() => navigation.navigate('Splash')}
                />
                <IconButton
                    icon={() => <Image source={RightArrow} />}
                    iconColor='#fff'
                    size={50}
                    style={styles.iconButton}                    
                    // iconColor={MD3Colors.error50}
                    mode='contained'
                    containerColor='#000000'
                    onPress={() => navigation.navigate('Splash3')}
                />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
EStyleSheet.build();
