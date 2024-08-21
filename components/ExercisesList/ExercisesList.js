import React, {useEffect, useState} from 'react';
import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import {getData} from '../../globals';
import AddButton from '../AddButton';
import Card from '../Card';
import ExerciseModal from '../ExerciseModal';

const ExercisesList = ({active}) => {
  const [exercises, setExercises] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setExercises([]);
    getData(`@exercises${active}`, setExercises);
  }, [active]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.viewMargin} keyboardShouldPersistTaps="handled">
        {exercises.map((exercise, index) => (
          <View
            key={exercise.id}
            style={index === exercises.length - 1 && styles.lastCard}>
            <Card
              exerciseData={exercise}
              trainingId={active}
              setExercises={setExercises}
            />
          </View>
        ))}
      </ScrollView>
      <ExerciseModal
        open={openModal}
        setOpen={setOpenModal}
        trainingId={active}
        setExercises={setExercises}
      />
      <AddButton onPress={() => setOpenModal(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  viewMargin: {
    marginBottom: Platform.OS === 'android' ? 64 : 48,
  },
  lastCard: {
    marginBottom: 64,
  },
});

export default ExercisesList;
