import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './AuthStyle'; // Adjust the path as needed
import globalButton from './SplashScreen/SplashStyle'
import RightArrow from '../../assets/Images/right-arrow.png'
import EmailIcon from '../../assets/Images/email-icon.png'
import password from '../../assets/Images/password-icon.png'
import DownArrow from '../../assets/Images/down-arrow.png'
import Back from '../../assets/Images/back-button.png'




import { Button, Icon, IconButton } from 'react-native-paper';


export default function Signup() {
    const [selectedRole, setSelectedRole] = useState('Trainer');
    const [gender, setGender] = useState('Male');
    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}>

          <View style={styles.headerContainer}>
            <ImageBackground 
              source={require('../../assets/Images/signup.png')} // replace with your image path
              style={styles.headerImage}
            >
              <View style={styles.backbtn}>

                      <IconButton
                          icon={Back}
                          // size={30}
                          iconColor='#fff'
                          style = {styles.Back}
                          onPress={() => console.log('Pressed')}
                        />

              </View>
                    <Image source={require('../../assets/Images/logo.png')} style={styles.logo} /> {/* replace with your logo path */}
                <Text style={styles.headerText}>Sign up Al-Tadreeb ul Shakhsi</Text>
                <Text style={styles.subText}>Quickly make your account in 1 minute</Text>
            </ImageBackground>
            </View>
                <Text style={styles.label}>Sign up as</Text>
                {/* <View style={styles.roleContainer}>
                    <TouchableOpacity
                        style={[styles.roleButton, selectedRole === 'Trainer' && styles.activeRoleButton]}
                        onPress={() => setSelectedRole('Trainer')}
                    >
                        <Text style={styles.roleText}>Trainer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.roleButton, selectedRole === 'Trainee' && styles.activeRoleButton]}
                        onPress={() => setSelectedRole('Trainee')}
                    >
                        <Text style={styles.roleText}>Trainee</Text>
                    </TouchableOpacity>
                </View> */}
                      <View style={styles.switchContainer}>
                      <TouchableOpacity
                        style={[styles.switchButton, selectedRole === 'Trainer' && styles.activeButton]}
                        onPress={() => setSelectedRole('Trainer')}
                      >
                        <Text style={[styles.switchText, selectedRole === 'Trainer' && styles.activeText]}>Trainer</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.switchButton, selectedRole === 'Trainee' && styles.activeButton]}
                        onPress={() => setSelectedRole('Trainee')}
                      >
                        <Text style={[styles.switchText, selectedRole === 'Trainee' && styles.activeText]}>Trainee</Text>
                      </TouchableOpacity>
                    </View>
          <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
                      
                <Text style={styles.label2}>Full Name</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Name..."                  
                  />
                </View>

                <Text style={styles.label2}>Phone Number</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  />
                </View>

                <Text style={styles.label2}>Email Address</Text>
                <View style={styles.inputContainer}>
                  <Icon
                    source={EmailIcon}
                    color='#000'
                    size={20}
                  />
                  <TextInput
                  style={styles.input}
                  placeholder="Email Address"
                  />
                </View>


                <Text style={styles.label2}>Password</Text>
                <View style={styles.inputContainer}>
                  <Icon
                    source={password}
                    color='#000'
                    size={20}
                  />
                  <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  />

                </View>


                <Text style={styles.label2}>Confirm Password</Text>
                <View style={styles.inputContainer}>
                  <Icon
                    source={password}
                    color='#000'
                    size={20}
                  />
                  <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  secureTextEntry
                  />
                </View>
        
                <Text style={styles.label2}>Gender</Text>

                <View style={styles.pickerContainer}>
                  <Picker
                      selectedValue={gender}
                      style={styles.picker}
                      onValueChange={(itemValue) => setGender(itemValue)}
                  >
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                      <Picker.Item label="Other" value="Other" />
                  </Picker>
                  <IconButton
                      icon={DownArrow}
                      size={20}
                      onPress={() => console.log('Pressed')}
                    />
                </View>


                <Text style={styles.label2}>Date of Birth</Text>
                <View style={styles.inputContainer}>
                  {/* <Icon
                      source={RightArrow}
                      color='#000'
                      size={20}
                    /> */}
                  <TextInput
                  style={styles.input}
                  placeholder="Date of Birth (DD/MM/YYYY)"
                  />
                                      <IconButton
                      icon={DownArrow}
                      size={20}
                      onPress={() => console.log('Pressed')}
                    />
                </View>
        
                  <View style={globalButton.button}>
                      <Button
                        icon={RightArrow}
                        mode="text"
                        onPress={() => navigation.navigate('Signup')}
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        labelStyle={globalButton.buttonText}
                      >
                        Sign up
                      </Button>
                  </View>
                
                <View style={styles.footerLinks}>
                  <Text>Don't have an account? <Text style={styles.link}>Sign In</Text></Text>
                  <Text style={styles.link}>Forgot Password?</Text>
                </View>
          </ScrollView>

        </View>
      );
}
