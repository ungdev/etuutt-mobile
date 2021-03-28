/*import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { palette, radius, spacing } from '../../../theme/theme';


const RootStack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 100,
    backgroundColor: palette.red,
  },
  openButton: {
    backgroundColor: palette.purple,
    color: palette.white,
    borderRadius: radius.medium,
    padding: spacing * 2,
  },
  textStyle: {
    color: palette.white,
  },
});

interface SettingsModalProps {
  onClose: () => void;
  isVisible: boolean;
}

export const SettingsModal: FunctionComponent<SettingsModalProps> = ({ onClose, isVisible }) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="MyModal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};*/
