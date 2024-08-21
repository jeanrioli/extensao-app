import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../globals';

const Menu = ({active, setActive}) => {
  const screens = [
    {
      id: 'A',
      name: 'A',
    },
    {
      id: 'B',
      name: 'B',
    },
    {
      id: 'C',
      name: 'FREQ',
    },
  ];

  const changeActive = id => {
    setActive(id);
  };

  const setActiveStyle = id => ({
    color: active === id ? colors.secondary : colors.primaryDark,
  });

  return (
    <View style={styles.menu}>
      {screens.map(screen => (
        <TouchableOpacity
          key={screen.id}
          style={styles.touchable}
          onPress={() => changeActive(screen.id)}>
          <Text style={[styles.touchableText, setActiveStyle(screen.id)]}>
            {screen.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    height: Platform.OS === 'ios' ? 80 : 64,
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  touchable: {
    width: '33%',
    height: Platform.OS === 'ios' ? 80 : 64,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Menu;
