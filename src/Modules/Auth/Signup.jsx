import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, Image, ScrollView, Modal, FlatList, Animated } from 'react-native';
import styles from './AuthStyle'; // Adjust the path as needed
import globalButton from './SplashScreen/SplashStyle'
import RightArrow from '../../assets/Images/right-arrow.png'
import EmailIcon from '../../assets/Images/email-icon.png'
import password from '../../assets/Images/password-icon.png'
import DownArrow from '../../assets/Images/down-arrow.png'
import Back from '../../assets/Images/back-button.png'
import eyeOn from '../../assets/Images/eye-on.png'
import eyeOff from '../../assets/Images/eye-off.png'

import { Button, Icon, IconButton } from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
import colors from '../../Constant/Color';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomDropdown from '../../Components/CustomDropDown/CustomDropDown';
import { useForm, Controller } from 'react-hook-form';





export default function Signup({ navigation }) {
  const [selectedRole, setSelectedRole] = useState('Trainer');
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
  const [date, setDate] = useState(new Date()); // State for selected date
  const [showPicker, setShowPicker] = useState(false); // State to toggle date picker
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      dateOfBirth: '',
      fitnessGoals: '',
      experienceLevel: '',
    },
  });

  // Switch Button function start //
  const [translateX] = useState(new Animated.Value(0));
  const handleSwitch = (role) => {
    const toValue = role === 'Trainer' ? 0 : 1;
    setSelectedRole(role);

    Animated.timing(translateX, {
      toValue: toValue * 125, // Adjust based on button width
      duration: 300,
      useNativeDriver: true, // Explicitly set this to avoid warnings
    }).start();
  };
  // Switch Button function end //



  const genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
  ];

  const fitnessGoalsOptions = [
    { label: 'Weight Loss', value: 'Weight Loss' },
    { label: 'Muscle Gain', value: 'Muscle Gain' },
    { label: 'Endurance', value: 'Endurance' },
    { label: 'Flexibility', value: 'Flexibility' },
  ];

  const experienceLevelOptions = [
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Advanced', value: 'Advanced' },
  ];


  // const handleInputChange = (field, value) => {
  //   setFormData({ ...formData, [field]: value });
  // };

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      const formattedDate = `${selectedDate
        .getDate()
        .toString()
        .padStart(2, '0')}/${(selectedDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${selectedDate.getFullYear()}`;
      setValue('dateOfBirth', formattedDate);
    }
  };

  // const clientrole = selectedRole
  const formValues = watch();

  const onSubmit = (data) => {
    console.log('Form Data:', { ...data, role: selectedRole });
    setFormData('')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <ImageBackground
            source={require('../../assets/Images/signup.png')}
            style={styles.headerImage}
          >
            <View style={styles.backbtn}>

              <IconButton
                icon={Back}
                // size={30}
                iconColor='#fff'
                style={styles.Back}
                onPress={() => navigation.navigate('Splash3')}
              />

            </View>
            <Image source={require('../../assets/Images/logo.png')} style={styles.logo} />
            <Text style={styles.headerText}>Sign up Al-Tadreeb ul Shakhsi</Text>
            <Text style={styles.subText}>Quickly make your account in 1 minute</Text>
          </ImageBackground>
        </View>


        <Text style={styles.label}>Sign up as</Text>
        <View style={styles.switchContainer}>
          <View style={styles.switchBackground}>
            <Animated.View
              style={[
                styles.slider,
                {
                  transform: [{ translateX }],
                },
              ]}
            />
            <TouchableOpacity
              style={[styles.switchButton, selectedRole === 'Trainer' && styles.activeButton]}
              onPress={() => handleSwitch('Trainer')}
            >
              <Text
                style={[
                  styles.switchText,
                  selectedRole === 'Trainer' && styles.activeText,
                ]}
              >
                Trainer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.switchButton, selectedRole === 'Trainee' && styles.activeButton]}
              onPress={() => handleSwitch('Trainee')}
            >
              <Text
                style={[
                  styles.switchText,
                  selectedRole === 'Trainee' && styles.activeText,
                ]}
              >
                Trainee
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.formContainer}>

          <Controller
            control={control}
            name="fullName"
            rules={{ required: 'Full Name is required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View style={styles.inputContainer}>
                <Text style={styles.label2}>Full Name</Text>
                <View style={styles.inputIneer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Name..."
                    placeholderTextColor={colors.secondary}
                    value={value}
                    onChangeText={onChange}
                  />
                </View>
                {error && <Text style={styles.error}>{error.message}</Text>}
              </View>
            )}
          />

          <Controller
            control={control}
            name="phoneNumber"
            rules={{
              required: 'Phone Number is required',
              minLength: { value: 11, message: 'Password must be at least 6 characters' }
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View style={styles.inputContainer}>
                <Text style={styles.label2}>Phone Number</Text>
                <View style={styles.phone}>
                  <View style={styles.phoneContainer}>
                    <PhoneInput
                      defaultValue={value}
                      defaultCode="SA"
                      layout="first"
                      onChangeText={onChange}
                      onChangeFormattedText={(text) => setFormattedPhoneNumber(text)}
                      containerStyle={styles.phoneContainer}
                      textContainerStyle={styles.phonetextInput}
                      textInputStyle={styles.phoneInputText}
                      flagButtonStyle={styles.flagButton}
                      codeTextStyle={styles.codeText}
                    />

                  </View>
                  {error && <Text style={styles.error}>{error.message}</Text>}
                </View>
              </View>
            )}
          />

          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (

              <View style={styles.inputContainer}>
                <Text style={styles.label2}>Email Address</Text>
                <View style={styles.inputIneer}>
                  <Icon
                    source={EmailIcon}
                    color='#000'
                    size={20}
                  />
                  <TextInput
                    style={styles.Iconinput}
                    placeholder="Email Address"
                    placeholderTextColor={colors.secondary}
                    value={value}
                    onChangeText={onChange}
                  />
                </View>
                {error && <Text style={styles.error}>{error.message}</Text>}
              </View>
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View style={styles.inputContainer}>
                <Text style={styles.label2}>Password</Text>
                <View style={styles.inputIneer}>
                  <Icon
                    source={password}
                    color='#000'
                    size={20}
                  />
                  <TextInput
                    style={styles.Iconinput}
                    placeholder="Password"
                    placeholderTextColor={colors.secondary}
                    secureTextEntry={!showPassword}
                    value={value}
                    onChangeText={onChange}
                  />
                  <IconButton
                    icon={showPassword ? eyeOn : eyeOff}
                    size={20}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                </View>
                {error && <Text style={styles.error}>{error.message}</Text>}
              </View>
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: 'Confirm Password is required',
              validate: (value) =>
                value === formValues.password || 'Passwords do not match',
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View style={styles.inputContainer}>
                <Text style={styles.label2}>Confirm Password</Text>
                <View style={styles.inputIneer}>
                  <Icon
                    source={password}
                    color='#000'
                    size={20}
                  />
                  <TextInput
                    style={styles.Iconinput}
                    placeholder="Confirm Password"
                    placeholderTextColor={colors.secondary}
                    secureTextEntry={!showConfirmPassword}
                    value={value}
                    onChangeText={onChange}
                  />
                  <IconButton
                    icon={showConfirmPassword ? eyeOn : eyeOff}
                    size={20}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </View>
                {error && <Text style={styles.error}>{error.message}</Text>}
              </View>
            )}
          />

          {/* Gender Dropdown */}
          <Controller
            control={control}
            name="gender"
            rules={{ required: 'gender is required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <CustomDropdown
                  label="Gender"
                  options={genderOptions}
                  selectedValue={value}
                  onValueChange={(selectedValue) => onChange(selectedValue)}
                />
                {error && <Text style={styles.error}>{error.message}</Text>}
              </>
            )}
          />

          <Controller
            control={control}
            name="dateOfBirth"
            render={({ field: { value } }) => (
              <>
                <View style={styles.inputContainer}>
                <Text style={styles.label2}>Date of Birth</Text>
                <View style={styles.inputIneer}>
                  <TextInput
                    style={styles.input}
                    value={value}
                    placeholder="DD/MM/YYYY"
                    placeholderTextColor={colors.secondary}
                    onFocus={() => setShowPicker(true)}
                  />
                  <IconButton
                    icon={DownArrow}
                    size={20}
                    onPress={() => setShowPicker(true)}
                  />
                  {showPicker && (
                    <DateTimePicker
                      value={new Date()}
                      mode="date"
                      display="default"
                      onChange={handleDateChange}
                    />
                  )}
                </View>
                </View>
              </>
            )}
          />
          {selectedRole === 'Trainee' && (
            <>
              {/* Fitness Goals Dropdown */}
              <Controller
                control={control}
                name="fitnessGoals"
                render={({ field: { onChange, value } }) => (
                  <CustomDropdown
                    label="Fitness Goals"
                    options={fitnessGoalsOptions}
                    selectedValue={value}
                    onValueChange={onChange}
                  />
                )}
              />

              {/* Experience Level Dropdown */}
              <Controller
                control={control}
                name="experienceLevel"
                render={({ field: { onChange, value } }) => (
                  <CustomDropdown
                    label="Experience Level"
                    options={experienceLevelOptions}
                    selectedValue={value}
                    onValueChange={onChange}
                  />
                )}
              />
            </>
          )}

          <View style={styles.btnbottom}>
            <View style={globalButton.button}>
              <Button
                icon={RightArrow}
                mode="text"
                onPress={handleSubmit(onSubmit)}
                contentStyle={{ flexDirection: 'row-reverse' }}
                labelStyle={globalButton.buttonText}
              >
                Sign up
              </Button>
            </View>

              <View style={styles.footerLinks}>
                    <View style={styles.footerLinksrow}>
                        <Text style={styles.link}>Don’t have an account? </Text>
                        <TouchableOpacity >
                            <Text style={styles.linkbtn}>Sign In.</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity >
                        <Text style={styles.linkbtn}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
