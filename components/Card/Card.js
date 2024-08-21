import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../globals';
import ExerciseModal from '../ExerciseModal';

const Card = ({exerciseData, trainingId, setExercises}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.textName}>{exerciseData.name}</Text>
        <View style={styles.infoRow}>
          <View style={styles.info}>
            <Text style={styles.infoText}>🔢 {exerciseData.sets}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>🔁 {exerciseData.reps}</Text>
          </View>
          {exerciseData.weight && (
            <View style={styles.info}>
              <Text style={styles.infoText}>🏋️ {exerciseData.weight}</Text>
            </View>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => setModalOpen(true)}>
        <Text>✏️</Text>
      </TouchableOpacity>
      <ExerciseModal
        open={modalOpen}
        setOpen={setModalOpen}
        data={exerciseData}
        trainingId={trainingId}
        setExercises={setExercises}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyDark,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.black,
    padding: 8,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    elevation: 8,
    marginHorizontal: 4,
  },
  editButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.greyDarker,
    borderWidth: 1,
    borderColor: colors.greyDarker,
    shadowColor: colors.black,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    elevation: 3,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
    marginBottom: 4,
  },
  infoContainer: {
    flex: 1,
    marginRight: 80,
    height: '100%',
    justifyContent: 'space-between',
  },
  infoRow: {
    flexDirection: 'row',
  },
  info: {
    height: 32,
    width: '30%',
    borderRadius: 16,
    backgroundColor: colors.greyDarker,
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginRight: 12,
  },
  infoText: {
    color: colors.white,
  },
});

export default Card;
