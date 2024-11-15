import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import colors from '../../../Constant/Color';
import fontSize from '../../../Constant/font';


const { width, height } = Dimensions.get('window');

export default EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottomContainer: {
        position: 'absolute',
        bottom: 0, // Adjust the distance from the bottom as needed
        width: '100%',
        alignItems: 'center',
        paddingHorizontal : 10,
      },
      heading: {
        fontSize: fontSize.h3,
        // fontWeight: 'bold',
        fontFamily: 'Montserrat-Bold',
        color: colors.accent,
        lineHeight: 24,
        marginBottom: 10,
        textAlign: 'center',
      },
      heading2: {
        // width : 360,
        fontSize: fontSize.h3,
        fontFamily: 'Montserrat-Bold',
        color: colors.primary,
        lineHeight: 24,
        marginBottom: 10,
        textAlign: 'center',
        paddingHorizontal : 10,
      },
      subText: {
        width : 360,
        fontSize: fontSize.text4,
        lineHeight: 16,
        fontFamily: 'Montserrat-Regular',
        color: colors.accent,
        marginBottom: 10,
        textAlign: 'center',
      },
      subText2: {
        width : 360,
        fontSize: fontSize.text4,
        lineHeight: 16,
        fontFamily: 'Montserrat-Regular',
        color: colors.primary,
        marginBottom: 20,
        paddingHorizontal : 10,
        textAlign: 'center',
      },
      buttonContainer: {
        textAlign:'center',
      },
      buttonContainer2: {
        flexDirection: 'row',
        // width: '50%',
        justifyContent: 'space-around', // Ensure buttons are spaced evenly
        alignItems: 'center',
        alignSelf: 'center',
      },
      button: {
        width: '100%',
        height: '56px',
        backgroundColor: '#111214', 
        borderRadius: 18, 
        textTransform: 'capitalize', 
        bottom: 5,
        gap : 10,
        flexDirection: 'row',
        justifyContent: 'center'

      },
      buttonText: {
        color: colors.primary_white, 
        fontFamily: 'Montserrat-Bold',
        textTransform: 'capitalize', 
        fontSize : fontSize.h5,
        padding : 10,

      },
      iconButton: {
        borderRadius: 30,
        width: 150,
        height: 80,
      },
});

