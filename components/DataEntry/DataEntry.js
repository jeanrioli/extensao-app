import React, {useEffect, useRef, useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, getData, pushData, updateData} from '../../globals';
import Input from '../Input';

const DataEntry = ({data, trainingId, setExercises, setOpen, nameInputRef}) => {
  const initialState = {
    name: '',
    sets: '',
    reps: '',
    weight: '',
  };

  const [allExercises, setAllExercises] = useState([]);
  const [exercise, setExercise] = useState(initialState);
  const setsInputRef = useRef(null);
  const repsInputRef = useRef(null);
  const weightInputRef = useRef(null);

  const handleNewExercise = () => {
    const newExercise = {
      id: allExercises.length + 1,
      ...exercise,
    };
    pushData(`@exercises${trainingId}`, newExercise, setExercises);
    setExercise(initialState);
    setOpen(false);
  };

  const handleDelete = isUpdating => {
    const indexToRemove = allExercises.findIndex(item => item.id === data.id);
    allExercises.splice(indexToRemove, 1);
    if (!isUpdating) {
      updateData(`@exercises${trainingId}`, allExercises, setExercises);
    }
  };

  const handleUpdate = () => {
    handleDelete(true);
    allExercises.push(exercise);
    allExercises.sort((a, b) => a.id - b.id);
    updateData(`@exercises${trainingId}`, allExercises, setExercises);
    setOpen(false);
  };

  useEffect(() => {
    getData(`@exercises${trainingId}`, setAllExercises);
    if (data) {
      setExercise(data);
    }
  }, [data, trainingId]);

  return (
    <View style={styles.container}>
      <Input
        inputRef={nameInputRef}
        label="Nome"
        returnKeyType={data ? 'done' : 'next'}
        value={exercise.name}
        setValue={change => setExercise({...exercise, name: change})}
        autofocus={Platform.OS === 'ios' && !data}
        onSubmitEditing={() => !data && setsInputRef.current.focus()}
      />
      <View style={styles.fieldset}>
        <View style={styles.inputGap}>
          <Input
            inputRef={setsInputRef}
            label="Séries"
            returnKeyType={Platform.OS === 'android' ? 'next' : 'done'}
            keyboardType="number-pad"
            value={exercise.sets}
            setValue={change => setExercise({...exercise, sets: change})}
            onSubmitEditing={() => !data && repsInputRef.current.focus()}
          />
        </View>
        <View style={styles.inputGap}>
          <Input
            inputRef={repsInputRef}
            label="Repetições"
            returnKeyType={Platform.OS === 'android' ? 'next' : 'done'}
            keyboardType="number-pad"
            value={exercise.reps}
            setValue={change => setExercise({...exercise, reps: change})}
            onSubmitEditing={() => !data && weightInputRef.current.focus()}
          />
        </View>
        <View style={styles.flexGrow}>
          <Input
            inputRef={weightInputRef}
            label="Carga"
            returnKeyType="done"
            keyboardType="numeric"
            value={exercise.weight}
            setValue={change => setExercise({...exercise, weight: change})}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={data ? handleUpdate : handleNewExercise}>
        <Text style={styles.buttonAddText}>
          {data ? 'ATUALIZAR' : 'ADICIONAR'}
        </Text>
      </TouchableOpacity>
      {data && (
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => handleDelete()}>
          <Text style={styles.buttonDeleteText}>EXCLUIR</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  inputGap: {
    flex: 1,
    marginRight: 16,
  },
  fieldset: {
    flexDirection: 'row',
  },
  flexGrow: {
    flex: 1,
  },
  label: {
    marginLeft: 16,
    color: colors.primary,
  },
  buttonAdd: {
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 12,
    marginTop: 24,
  },
  buttonAddText: {
    color: colors.primaryDark,
    fontWeight: '700',
  },
  buttonDelete: {
    backgroundColor: colors.errorRed,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 12,
    marginTop: 8,
  },
  buttonDeleteText: {
    color: colors.white,
    fontWeight: '700',
  },
});

export default DataEntry;
