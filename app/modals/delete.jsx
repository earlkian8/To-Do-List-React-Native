import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Delete = ({
  deleteModalVisible,
  setDeleteModalVisible,
  deleteIndex,
  setDeleteindex,
  deleteData,
  setDeleteData,
  todoData,
  setTodoData,
}) => {
  return (
    <Modal transparent visible={deleteModalVisible} animationType="slide">
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Delete Task?</Text>
          <Text>Are you sure you want to delete this task?</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity
              onPress={() => {
                setDeleteModalVisible(false);
                setDeleteindex(null);
                setDeleteData('');
              }}
              style={styles.modalButton}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.deleteButton]}
              onPress={() => {
                const updatedTodos = todoData.filter((_, i) => i !== deleteIndex);
                setTodoData(updatedTodos);
                setDeleteModalVisible(false);
                setDeleteindex(null);
                setDeleteData('');
              }}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
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
  deleteButton: {
    backgroundColor: "red",
  },
  deleteButtonText: {
    color: "white",
  },
});

export default Delete;
