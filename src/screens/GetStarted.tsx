import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

type GetStartedScreenProps = {
  navigation: any;
};

const GetStartedScreen: React.FC<GetStartedScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image
          source={require('../assets/images/god-rays.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/images/sparkles.png')}
          style={[styles.image, styles.imageOverlap]}
        />
      </View>

      <View style={styles.textContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Zero Cost</Text>
        <Text style={styles.title}>WhatsApp Messaging platform</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <View style={styles.bottomText}>
            <Text style={styles.signInText}>Already have an account?</Text>
            <Text style={styles.signInTextUnderlined}>Sign in instead</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#131415',
    justifyContent: 'center',
  },
  imagesContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  image: {
    resizeMode: 'contain',
  },
  imageOverlap: {
    position: 'absolute',
    top: 20,
    right: 0,
  },
  textContainer: {
    marginTop: 180,
  },
  logo: {
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'GT-Super-Text-Regular-Trial',
    marginBottom: 4,
  },
  button: {
    paddingHorizontal: 32,
    marginTop: 48,
    paddingVertical: 16,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    color: 'white',
    textAlign: 'center',
  },
  signInTextUnderlined: {
    color: '#D4FB54',
    textAlign: 'center',
  },
  bottomText: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GetStartedScreen;
