import AsyncStorage from '@react-native-async-storage/async-storage';

export const colors = {
  primary: '#A44200',
  primaryLight: '#D58936',
  primaryDark: '#69140e',
  primaryDarker: '#3C1518',
  secondary: '#F2F3AE',
  black: '#000',
  white: '#fff',
  grey: '#666',
  greyDark: '#333',
  greyDarker: '#222',
  greyDisabled: '#aaa',
  successGreen: '#00b56a',
  errorRed: '#983628',
};

export const getData = async (key, setState) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      setState(JSON.parse(value));
    }
  } catch {
    setState([]);
  }
};

export const returnData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch {
    return null;
  }
};

export const pushData = async (key, newItem, setState) => {
  try {
    const value = await AsyncStorage.getItem(key);
    let newValue = [newItem];
    if (value) {
      newValue = [...JSON.parse(value), newItem];
    }
    await AsyncStorage.setItem(key, JSON.stringify(newValue));
    if (setState) {
      getData(key, setState);
    }
  } catch (e) {
    console.error(e);
  }
};

export const updateData = async (key, newItem, setState) => {
  try {
    await AsyncStorage.setItem(
      key,
      typeof newItem === 'string' ? newItem : JSON.stringify(newItem),
    );
    if (setState) {
      getData(key, setState);
    }
  } catch (e) {
    console.error(e);
  }
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};
