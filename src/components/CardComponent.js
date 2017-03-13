// Import libraries for making a component
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

// Make a component
const Card = props => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

// ========================================================
// PropTypes check
// ========================================================
Card.propTypes = {
  children: React.PropTypes.node.isRequired,
  // children: React.PropTypes.element.isRequired, // for single child
};

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});

// ========================================================
// Exports
// ========================================================
// Make the component available to other parts of the app
export { Card };
