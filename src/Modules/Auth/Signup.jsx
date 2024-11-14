import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './AuthStyle'; // Adjust the path as needed

export default function Signup() {
    const [selectedRole, setSelectedRole] = useState('Trainer');
    const [gender, setGender] = useState('Male');
    return (
        <View style={styles.container}>
          <ImageBackground 
            source={require('../../assets/Images/sign-up.png')} // replace with your image path
            style={styles.headerImage}
          >
            <View style={styles.headerContainer}>
              <Image source={require('../../assets/Images/logo.png')} style={styles.logo} /> {/* replace with your logo path */}
              <Text style={styles.headerText}>Sign up Al-Tadreeb ul Shakhsi</Text>
              <Text style={styles.subText}>Quickly make your account in 1 minute</Text>
            </View>
          </ImageBackground>
                <Text style={styles.label}>Sign up as</Text>
                <View style={styles.roleContainer}>
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
                </View>
          <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
        
                <TextInput
                style={styles.input}
                placeholder="Enter your Name..."
                />
                <TextInput
                style={styles.input}
                placeholder="Phone Number"
                />
                <TextInput
                style={styles.input}
                placeholder="Email Address"
                />
                <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                />
                <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                />
        
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
                </View>
        
                <TextInput
                style={styles.input}
                placeholder="Date of Birth (DD/MM/YYYY)"
                />
        
                <TouchableOpacity style={styles.signupButton}>
                <Text style={styles.signupButtonText}>Sign up</Text>
                </TouchableOpacity>
                
                <View style={styles.footerLinks}>
                <Text>Don't have an account? <Text style={styles.link}>Sign In</Text></Text>
                <Text style={styles.link}>Forgot Password?</Text>
                </View>
          </ScrollView>

        </View>
      );
}
