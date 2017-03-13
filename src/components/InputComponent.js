// Import libraries for making a component
import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';

// Make a component
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

// ========================================================
// Default Props
// ========================================================
Input.defaultProps = {
  secureTextEntry: false,
};

// ========================================================
// PropTypes check
// ========================================================
Input.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChangeText: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  secureTextEntry: React.PropTypes.bool,
};

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

// ========================================================
// Exports
// ========================================================
// Make the component available to other parts of the app
export { Input };
