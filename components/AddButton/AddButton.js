import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../globals';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: colors.primary,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    bottom: 72,
    right: 4,
    shadowColor: colors.black,
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.5,
    elevation: 8,
    paddingBottom: 4,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.secondary,
  },
});

export default AddButton;
