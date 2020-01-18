import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignUpList from './SignUpList';
import SignUpPage from './SignUpPage';


const screens = {
    SignUpList: {
        screen: SignUpList,
        navigationOptions: {
            title: 'Click to sign up!',
        }
    },

    SignUpPage: {
        screen: SignUpPage,
        navigationOptions: {
            title: 'Sign Up Page',
        }
    }
}

const SignUpStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 50 }
    }
});

export default createAppContainer(SignUpStack);