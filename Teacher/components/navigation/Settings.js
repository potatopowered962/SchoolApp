import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View 
} from 'react-native';
import ReactNativeSettingsPage, {
  NavigateRow,
  SectionRow,
  SwitchRow,
  CheckRow,
  SliderRow
} from "react-native-settings-page";


 
export default function Settings() {

    return (
    <View style={styles.container}>
      <ReactNativeSettingsPage>
        <SectionRow text="Settings">

        <NavigateRow
            text="Account"
            iconName="user-circle"
          />

          <SwitchRow
            text="Dark Mode"
            iconName="moon-o"
          />

          <SwitchRow
            text="Enable Reminders"
            iconName="bell"
          />

          <NavigateRow
            text="FAQ"
            iconName="question"
          />

        </SectionRow>
      </ReactNativeSettingsPage>

    </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
