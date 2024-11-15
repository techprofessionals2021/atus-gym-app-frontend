import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import colors from '../../Constant/Color';
import fontSize from '../../Constant/font';



const { width, height } = Dimensions.get('window');

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      headerImage: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerContainer: {
        height: 280,
        // justifyContent: 'center',
        // alignItems: 'center',
      },
      logo: {
        width: 80,
        height: 80,
        marginBottom: 30,
      },
      headerText: {
        fontSize: fontSize.h3,
        fontFamily: 'Montserrat-Bold',
        color: '#111214',
        textAlign: 'center',
        marginBottom: 5,

      },
      subText: {
        fontSize: fontSize.text1,
        color: '#666',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
      },
      formContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
      },
      backbtn :{
        // flex : 1,
        // flexDirection : 'row',
        // textAlign : 'left',
        // justifyContent: 'start',
        // alignItems: 'center',
        paddingHorizontal : 20,
        width : '100%',
        borderRadius : 18,
        marginBottom : 20
      },
      Back:{
        backgroundColor : colors.secondary_dark_grey,
        borderRadius : 50,
        height : 48,
        width : 48,
      },
      label: {
        fontSize: fontSize.text2,
        color: colors.primary,
        marginBottom: 10,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
      },
      label2: {
        fontSize: fontSize.text2,
        color: colors.primary,
        marginBottom: 1,
        paddingHorizontal: 10,
        fontFamily: 'Montserrat-Bold',
      },
      roleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
      },
      roleButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginHorizontal: 5,
      },
      activeRoleButton: {
        backgroundColor: '#000',
      },
      roleText: {
        color: '#fff',
      },
      // input: {
      //   // height: 56,
      //   borderRadius: 19,
      //   backgroundColor : colors.accentVariant,
      //   padding: 16,
      //   marginBottom: 20,
      // },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 19,
        backgroundColor : colors.accentVariant,
        padding: 16,
        marginBottom: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
        height: 50,
      },
      input: {
        flex: 1,
        color : colors.primary,
      },
      pickerContainer: {
        backgroundColor : colors.accentVariant,
        borderRadius: 18,
        marginBottom: 20,
        // height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,

      },
      picker: {
        width: '100%',
      },

      footerLinks: {
        marginTop: 15,
        alignItems: 'center',
      },
      link: {
        color: '#007bff',
        textDecorationLine: 'underline',
      },
      switchContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        overflow: 'hidden',
      },
      switchButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#FFF',
      },
      activeButton: {
        backgroundColor: '#000',
      },
      switchText: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
      },
});

