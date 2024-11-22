import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import colors from '../../Constant/Color';
import fontSize from '../../Constant/font';



const { width, height } = Dimensions.get('window');

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_white,
      },
      headerImage: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerContainer: {
        height: 260,
        marginBottom : 5,
      },
      logo: {
        width: 80,
        height: 80,
        marginBottom: 30,
      },
      headerText: {
        fontSize: fontSize.h4,
        fontFamily: 'Montserrat-Bold',
        color: colors.primary,
        textAlign: 'center',
        marginBottom: 5,

      },
      subText: {
        fontSize: fontSize.text2,
        color: colors.dark_grey,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
      },
      backbtn :{
        width : '90%',
        borderRadius : 18,
        marginBottom : 10,
      },
      Back:{
        backgroundColor : colors.secondary_dark_grey,
        borderRadius : 50,
        height : 48,
        width : 48,
      },
      label: {
        fontSize: fontSize.text1,
        color: colors.primary,
        marginBottom: 10,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
      },

      switchContainer :{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingBottom : 30
      },

      switchBackground: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
        width: 250,
        height: 50,
        fontFamily: 'Montserrat-Medium',
        borderRadius: 19,
        backgroundColor: colors.primary_white,
        borderWidth: 1,
        borderColor: colors.primary,
        overflow: 'hidden',
      },
      slider: {
        position: 'absolute',
        width: 125, 
        height: '100%',
        backgroundColor: colors.primary,
        borderRadius: 19,
      },
      switchButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      activeButton: {
        backgroundColor: 'transparent',
      },
      switchText: {
        fontSize: fontSize.text1,
        color: colors.primary,
        fontFamily: 'Montserrat-Medium',
      },
      activeText: {
        color: colors.primary_white,
      },

      // Input/dropdown/picker style Start //

      formContainer: {
        paddingHorizontal: 20,
        // paddingTop: 20,
      },
      label2: {
        fontSize: fontSize.text2,
        color: colors.primary,
        marginBottom: 1,
        paddingHorizontal: 10,
        fontFamily: 'Montserrat-Bold',
      },
      inputContainer : {
        marginBottom: 20,
      },
      inputIneer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-around',
        borderRadius: 19,
        backgroundColor : colors.accentVariant,
        color : colors.dark_grey,
        padding: 16,
        paddingHorizontal: 20,
        height: 50,
      },
      input: {
        flex: 1,
        height: 50,
        fontFamily: 'Montserrat-Medium',
        fontSize : fontSize.text1,
        color : colors.dark_grey,
      },
      Iconinput : {
        flex: 1,
        height: 50,
        fontFamily: 'Montserrat-Medium',
        fontSize : fontSize.text1,
        color : colors.dark_grey,
        paddingLeft : 10,      
      },

      phone : {
        // marginBottom: 20,
      },
      phoneContainer: {
        fontFamily: 'Montserrat-Medium',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'center',
        borderRadius: 19,
        backgroundColor : colors.accentVariant,
        color : colors.dark_grey,
      },
      phoneInputText: {
        fontSize: fontSize.text2,
        color: colors.dark_grey,
        fontFamily: 'Montserrat-Medium',
        padding:0

      },
      phonetextInput : {
        backgroundColor : colors.accentVariant,
        fontSize: fontSize.text2,
        color: colors.dark_grey,
        fontFamily: 'Montserrat-Medium',
        padding:0


      },
      flagButton: {
        width: 50,
        justifyContent: 'center',
      },
      codeText: {
        fontSize: fontSize.text2,
        fontFamily: 'Montserrat-Medium',
      },

      error : {
        padding : 10,
        paddingHorizontal: 20,
        color : colors.danger,
        fontFamily: 'Montserrat-Medium',

      },
      // Input/dropdown/picker style Start //


      footerLinks: {
        alignItems: 'center',
        marginVertical: 10,
      },
      footerLinksrow:{
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 10, // Space between the two lines
      },

      link: {
        fontSize: fontSize.text2,
        color: '#6D6D6D', // Grey text color
        fontFamily: 'Montserrat-Medium',

      },
      linkbtn : {
        fontSize: fontSize.text2,
        color: '#0096D1', // Blue color for links
        textDecorationLine: 'underline', // Adds underline to the text
        fontFamily: 'Montserrat-Medium',

      },

      btnbottom : {
        marginBottom : 20,
        marginTop : 20
      },

      // Bio metric Button Start ///
      BioMetriccontainer : {
        flexDirection: 'row', // Align buttons horizontally
        justifyContent: 'center',
        alignItems: 'center',
      },
      BioMetricbutton : {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Background color for the button
        borderRadius: 10,
        paddingHorizontal: 20,

      },

      BioMetrictext : {
        fontSize: fontSize.text2,
        fontFamily: 'Montserrat-Regular',
        color: '#000', // Text color
        textAlign: 'center',
      },

      BioMetricIcon : {
        width: 30, // Adjust size of the Face ID icon
        height: 30,
        marginBottom: 10, // Space between the icon and text
      },


      // Social Icons start ///

      SocailMediacontainer : {
        flexDirection: 'row', // Align buttons horizontally
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },

      iconbutton : {
        width: 60, // Adjust width
        height: 60, // Adjust height
        borderColor: '#CCC', // Border color
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF', // Button background color
      }
});

