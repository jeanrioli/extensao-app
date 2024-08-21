import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../globals';

const Input = ({
  value,
  setValue,
  placeholder,
  keyboardType,
  label,
  returnKeyType,
  autofocus,
  inputRef,
  onSubmitEditing,
}) => {
  const [fieldColor, setFieldColor] = useState(colors.black);

  const onInputFocus = () => {
    setFieldColor(colors.primaryLight);
  };

  const onInputBlur = () => {
    setFieldColor(colors.black);
  };

  const styles = StyleSheet.create({
    input: {
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 16,
      height: 40,
      borderWidth: 1,
      borderColor: fieldColor,
      borderRadius: 32,
      marginBottom: 8,
      backgroundColor: colors.greyDark,
      color: colors.white,
    },
    label: {
      marginLeft: 16,
      color: colors.primaryLight,
    },
  });

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={inputRef}
        keyboardType={keyboardType}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        autoFocus={autofocus}
      />
    </View>
  );
};

export default Input;
