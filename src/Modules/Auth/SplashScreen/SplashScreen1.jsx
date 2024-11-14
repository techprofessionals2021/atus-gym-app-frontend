import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, Button } from 'react-native';
import { IconButton } from 'react-native-paper';
import RightArrow from '../../../assets/Images/right-arrow-dark.png'
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './SplashStyle';



export default function SplashScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Images/splash-screen-1.jpeg')}
        style = {styles.image}
        >
        <View style={styles.bottomContainer}>
          <Text style={styles.heading}>Track Progress, Reach Goals</Text>
          <Text style={styles.subText}>Lorem ipsum dolor sit amet consectetur. Curabitur dolor 
                donec scelerisque tortor consequat. Odio lobortis morbi at nunc 
                ultricies cras. Viverra tellus elementum tortor id magna nisi.
          </Text>
          <View style={styles.buttonContainer}>
                <IconButton
                    icon={() => <Image source={RightArrow} style={styles.icon} />}
                    size={50}
                    style={styles.iconButton}                    
                    // iconColor={MD3Colors.error50}
                    mode='contained'
                    containerColor='#FFE8C8'
                    onPress={() => navigation.navigate('Splash2')}
                />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
EStyleSheet.build();
