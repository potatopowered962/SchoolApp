import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StudentsList from './StudentsList';
import StudentsPage from './StudentsPage';


const screens = {
    StudentsList: {
        screen: StudentsList,
        navigationOptions: {
            title: 'Events which students signed up for.',
        }
    },

    StudentsPage: {
        screen: StudentsPage,
        navigationOptions: {
            title: 'List of students',
        }
    }
}

const StudentsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 50 }
    }
});

export default createAppContainer(StudentsStack);