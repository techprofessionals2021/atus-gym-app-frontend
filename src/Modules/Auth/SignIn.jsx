import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ImageBackground, Image, Linking, TouchableOpacity } from 'react-native';
import styles from './AuthStyle'; // Adjust the path as needed
import globalButton from './SplashScreen/SplashStyle'
import RightArrow from '../../assets/Images/right-arrow.png'
import EmailIcon from '../../assets/Images/email-icon.png'
import password from '../../assets/Images/password-icon.png'
import Back from '../../assets/Images/back-button.png'
import eyeOn from '../../assets/Images/eye-on.png'
import eyeOff from '../../assets/Images/eye-off.png'
import linkedin from '../../assets/Images/linkedin.png'
import facebook from '../../assets/Images/facebook.png'
import instagram from '../../assets/Images/instagram.png'
import FaceId from '../../assets/Images/faceId.png'
import fingerPrint from '../../assets/Images/fingerPrint.png'
import { Button, Icon, IconButton } from 'react-native-paper';
import colors from '../../Constant/Color';
import { useForm, Controller } from 'react-hook-form';



export default function SignIn({ navigation }) {
    const [showPassword, setShowPassword] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const { control, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });


    const formValues = watch();

    const onSubmit = (data) => {
        console.log('Form Data:', { ...data, role: selectedRole });
        setFormData('')
    };

    const handlePress = (url) => {
        Linking.openURL(url).catch((err) => {
            console.error("Failed to open URL: ", err);
        });
    };

    const handleFaceIDPress = () => {
        console.log('Face ID Button Pressed');
        // Add your Face ID functionality here
    };
    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <ImageBackground
                    source={require('../../assets/Images/signup.png')}
                    style={styles.headerImage}
                >
                    <Image source={require('../../assets/Images/logo.png')} style={styles.logo} />
                    <Text style={styles.headerText}>Sign In Al-Tadreeb ul Shakhsi</Text>
                    <Text style={styles.subText}>Let’s personalize your fitness</Text>
                </ImageBackground>
            </View>


            <View style={styles.formContainer}>

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


                <View style={styles.btnbottom}>
                    <View style={globalButton.button}>
                        <Button
                            icon={RightArrow}
                            mode="text"
                            onPress={handleSubmit(onSubmit)}
                            contentStyle={{ flexDirection: 'row-reverse' }}
                            labelStyle={globalButton.buttonText}
                        >
                            Sign In
                        </Button>
                    </View>
                </View>

                <View style={styles.BioMetriccontainer}>
                    <TouchableOpacity style={styles.BioMetricbutton} onPress={handleFaceIDPress}>
                        <Image source={FaceId} style={styles.BioMetricIcon} />
                        <Text style={styles.BioMetrictext}>Face ID</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.BioMetricbutton} >
                        <Image source={fingerPrint} style={styles.BioMetricIcon} />
                        <Text style={styles.BioMetrictext}>Fingerprint</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.SocailMediacontainer}>
                    {/* Instagram Button */}
                    <View style={styles.iconbutton}>
                        <IconButton
                            icon={instagram} // Use the 'react-native-paper' icon name or your custom icon
                            size={50}
                            color="#000"
                            onPress={() => handlePress('https://www.instagram.com')}
                        />
                    </View>

                    {/* Facebook Button */}
                    <View style={styles.iconbutton}>
                        <IconButton
                            icon={facebook} // Use the 'react-native-paper' icon name or your custom icon
                            size={50}
                            color="#000"
                            onPress={() => handlePress('https://www.facebook.com')}
                        />
                    </View>

                    {/* LinkedIn Button */}
                    <View style={styles.iconbutton}>
                        <IconButton
                            icon={linkedin} // Use the 'react-native-paper' icon name or your custom icon
                            size={50}
                            color="#000"
                            onPress={() => handlePress('https://www.linkedin.com')}
                        />
                    </View>
                </View>

                <View style={styles.footerLinks}>
                    <View style={styles.footerLinksrow}>
                        <Text style={styles.link}>Don’t have an account? </Text>
                        <TouchableOpacity >
                            <Text style={styles.linkbtn}>Sign Up.</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity >
                        <Text style={styles.linkbtn}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
