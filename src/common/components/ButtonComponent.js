// Import libraries for making a component
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

// Make a component
const Button = ({ onPress, children, buttonStyle }) => {
  const { defaultTextStyle, defaultButtonStyle } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[defaultButtonStyle, buttonStyle]}
    >
      <Text style={defaultTextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

// ========================================================
// PropTypes check
// ========================================================
Button.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  children: React.PropTypes.string.isRequired,
  buttonStyle: React.PropTypes.any,
};

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
  defaultTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  defaultButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
});

// ========================================================
// Exports
// ========================================================
// Make the component available to other parts of the app
export { Button };
