import { StyleSheet } from 'react-native';
import colors from '../../lib/colors';

export default StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  usernameInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 30
  },
  passwordInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 30
  },
  loginButton: {
    fontSize: 20,
  },
  createAccountLink: {
    fontSize: 20,
    color: colors.darkGray,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
  },
  headingCentral: {
      marginTop: 60,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 32
   },
  userInput: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 40,
   },

   createButton: {
     paddingLeft: 20,
     paddingRight: 20,
     marginTop: 20,
     backgroundColor: colors.primaryBlue,
     color: colors.white,
    },

    uploadImageContainer: {

      alignSelf:'center',
      marginTop: 20,
      marginBottom: 20,
    },

    mainView: {
      flex: 1,
      flexDirection: 'column',
      // justifyContent: 'space-between',
    },

    uploadedImage: {
      width: 100,
      height: 100,
      marginTop: 20,
      alignSelf: 'center',
    },

   inputTitle: {
     fontSize: 16,
     color: '#3e3f3c',
     marginTop: 20,
     // marginBottom: 20,
     marginLeft: 40,
     // marginRight: 40,
    },

  buttonBox: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

   goButton: {
     paddingLeft: 20,
     paddingRight: 20,
     flex: 1,
   },
});
