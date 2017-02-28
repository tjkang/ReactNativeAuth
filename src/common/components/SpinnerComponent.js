// Import libraries for making a component
import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';

// Make a component
const Spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size} />
  </View>
);

// ========================================================
// Default Props
// ========================================================
Spinner.defaultProps = {
  size: 'small',
};

// ========================================================
// PropTypes check
// ========================================================
Spinner.propTypes = {
  size: React.PropTypes.string,
};

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ========================================================
// Exports
// ========================================================
// Make the component available to other parts of the app
export { Spinner };
