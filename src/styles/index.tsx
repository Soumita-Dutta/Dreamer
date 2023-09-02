import {StyleSheet} from 'react-native';
import Dimension from '../utils/Dimension';

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Dimension(20),
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: Dimension(10),
    paddingHorizontal: Dimension(20),
    borderRadius: Dimension(8),
    marginBottom: Dimension(15),
  },
  buttonText: {
    color: 'white',
    fontSize: Dimension(18),
    fontWeight: 'bold',
  },
  title: {
    fontSize: Dimension(20),
    fontWeight: 'bold',
    marginBottom: Dimension(30),
  },
});

export const HomeStyles = StyleSheet.create({
  logo: {
    width: Dimension(150),
    height: Dimension(150),
    marginBottom: Dimension(20),
    borderRadius: Dimension(75),
  },
});

export const AboutStyles = StyleSheet.create({
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profession: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 30,
  },
  skillsContainer: {
    marginBottom: 20,
  },
  skillsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skillItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: 20,
    margin: 5,
  },
});
