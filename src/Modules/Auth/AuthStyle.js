import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import colors from '../../Constant/Color';



const { width, height } = Dimensions.get('window');

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      headerImage: {
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerContainer: {
        alignItems: 'center',
      },
      logo: {
        width: 80,
        height: 80,
        marginBottom: 10,
      },
      headerText: {
        fontSize: 20,
        // fontWeight: 'bold',
        fontFamily: 'Montserrat-Bold', // Use exact font name
        color: '#111214',
        textAlign: 'center',
      },
      subText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
      },
      formContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
      },
      label: {
        fontSize: 16,
        color: '#111214',
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      roleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
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
      input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
      },
      pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 15,
        height: 50,
        justifyContent: 'center',
      },
      picker: {
        width: '100%',
      },
      signupButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
      },
      signupButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      footerLinks: {
        marginTop: 15,
        alignItems: 'center',
      },
      link: {
        color: '#007bff',
        textDecorationLine: 'underline',
      },
});

