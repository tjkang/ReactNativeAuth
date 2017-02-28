// Import libraries for making a component
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

// Make a component
const CardSection = props => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

// ========================================================
// PropTypes check
// ========================================================
CardSection.propTypes = {
  children: React.PropTypes.element.isRequired, // for single child
};

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});

// ========================================================
// Exports
// ========================================================
// Make the component available to other parts of the app
export { CardSection };
