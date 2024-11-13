import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const  { width, height } = Dimensions.get('window')


export default function LogoScreen({navigation}) {
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('Splash'); // Navigate to Home screen after 2 seconds
        }, 2000);
    
        return () => clearTimeout(timer); // Cleanup timer on component unmount
      }, [navigation]);
    return (
        <View style={styles.container}>
          <Image
            source={require('../../../assets/Images/Logo-Screen.png')}
            style={styles.image}
          />
          
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
        width: width,
        height: height,
    },
});