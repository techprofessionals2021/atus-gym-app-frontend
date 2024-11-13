import EStyleSheet from 'react-native-extended-stylesheet';

import { Dimensions } from 'react-native';

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
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        color: '#FFE8C8',
        lineHeight: 24,
        marginBottom: 10,
        textAlign: 'center',
      },
      heading2: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        color: '#000',
        lineHeight: 24,
        marginBottom: 10,
        textAlign: 'center',
      },
      subText: {
        width : 360,
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 16,
        fontFamily: 'Montserrat',
        color: '#FFE8C8',
        marginBottom: 10,
        textAlign: 'center',
      },
      subText2: {
        width : 360,
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 16,
        fontFamily: 'Montserrat',
        color: '#000',
        marginBottom: 20,
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
        width: '80%',
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
        color: '#FFFFFF', 
        textTransform: 'capitalize', 
        fontSize : 18,
        fontWeight : 700,
        padding : 10,

      },
      iconButton: {
        borderRadius: 30,
        width: 150,
        height: 80,
      },
});

