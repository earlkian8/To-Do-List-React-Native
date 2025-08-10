import React from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Edit = ({
  editModalVisible,
  setEditModalVisible,
  editData,
  setEditData,
  editIndex,
  setEditIndex,
  todoData,
  setTodoData,
}) => {
  return (
    <Modal transparent visible={editModalVisible} animationType="slide">
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit Task</Text>
          <TextInput
            placeholder="Edit task"
            style={styles.input}
            value={editData}
            onChangeText={setEditData}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity
              onPress={() => {
                setEditModalVisible(false);
                setEditIndex(null);
                setEditData('');
              }}
              style={styles.modalButton}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.saveButton]}
              onPress={() => {
                if (editData.trim() === "") return;

                const updatedTodos = [...todoData];
                updatedTodos[editIndex] = editData;
                setTodoData(updatedTodos);
                setEditModalVisible(false);
                setEditIndex(null);
                setEditData('');
              }}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    width: "80%",
    borderRadius: 12,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    color: "#000",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
    gap: 10,
  },
  modalButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#eee",
    borderRadius: 6,
  },
  saveButton: {
    backgroundColor: "green",
  },
  saveButtonText: {
    color: "white",
  },
});

export default Edit;
