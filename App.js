import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ManageExpense from './screens/ManageExpense';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { GlobalStyles } from './constants/styles';
import TabBarIcon from './components/TabBarIcon';
import BackButtonIcon from "./components/BackButtonIcon";
import AddEdit from "./screens/AddEdit";
import ExpenseContextProvider from "./store/expenseContext";


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <>

      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
          headerTintColor: "#fff",
          tabBarStyle: { backgroundColor: GlobalStyles.colors.primary800 },
          tabBarActiveTintColor: GlobalStyles.colors.accent600,
        }}
      >
        <BottomTab.Screen
          name="All Expenses"
          component={AllExpenses}
          options={{
            title: "All Expenses",
            tabBarLabel: "All Expenses",
            tabBarLabelPosition: "beside-icon",
            tabBarIcon: ({ color, size }) => {
              return <TabBarIcon name="calendar" color={color} size={size} />;
            },
          }}
        />
        <BottomTab.Screen
          name="Recent Expenses"
          component={RecentExpenses}
          options={{
            title: "Recent Expenses",
            tabBarLabelPosition: "beside-icon",
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => {
              return <TabBarIcon name="hourglass" color={color} size={size} />;
            },
          }}
        />

      </BottomTab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <>
    <ExpenseContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: "#000000" },
          }}
        >
          <Stack.Screen
            name="Expenses"
            component={BottomTabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation: "modal",
              headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
              headerBackButtonDisplayMode: "minimal",
              headerShadowVisible: false,
              headerLeft: ({ headerTintColor }) => {
                return <BackButtonIcon tintColor={headerTintColor} />;
              },
            }}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={AddEdit}
            options={{
              contentStyle: { backgroundColor: "#fff" },
              presentation: "modal",
              headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
              headerBackButtonDisplayMode: "minimal",
              headerShadowVisible: false,
              headerLeft: ({ headerTintColor })  => {
                return <BackButtonIcon tintColor={headerTintColor} />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
