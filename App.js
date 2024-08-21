import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Menu from './components/Menu';
import ExercisesList from './components/ExercisesList';
import Frequency from './components/Frequency';
import {colors} from './globals';

const App = () => {
  const [active, setActive] = useState('A');

  const backgroundStyle = {
    backgroundColor: colors.greyDarker,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <View style={styles.container}>
        {['A', 'B'].includes(active) && <ExercisesList active={active} />}
        {active === 'C' && <Frequency />}
      </View>
      <Menu active={active} setActive={setActive} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
    marginTop: Platform.OS === 'android' ? 16 : 8,
  },
});

export default App;
