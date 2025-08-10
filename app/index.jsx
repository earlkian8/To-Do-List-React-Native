import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState('');
  
  const [deleteIndex, setDeleteindex] = useState(null);
  const [deleteData, setDeleteData] = useState('');
  const [todoData, setTodoData] = useState([]);
  const [newData, setNewData] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Todo List</Text>

      {/* Input and Add Button */}
      <View style={styles.inputRow}>
        <TextInput placeholder="New task" style={styles.input} value={newData} onChangeText={setNewData}/>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={
            () => {
              if(newData.trim() === "") return;
              setTodoData([...todoData, newData]);
              setNewData('');
            }
          }
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Todo List */}
      <ScrollView style={{ marginTop: 20 }}>
        {todoData.map((todo, index) => (
          <View key={index} style={styles.todoItem}>
            <Text style={styles.todoText}>• {todo}</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                onPress={() => {
                  setEditModalVisible(true);
                  setEditIndex(index);
                  setEditData(todo);
                }}
                style={styles.actionButton}
              >
                <Text style={styles.actionText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setDeleteModalVisible(true);
                  setDeleteindex(index);
                  setDeleteData(todo);
                }}
                style={[styles.actionButton, { backgroundColor: "#f66" }]}
              >
                <Text style={styles.actionText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Edit Modal */}
      <Modal transparent visible={editModalVisible} animationType="slide">
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Edit Task</Text>
            <TextInput
              placeholder="Edit task"
              style={{
                width: '100%',
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 8,
                backgroundColor: '#fff',
                color: '#000',
              }}
              value={editData}
              onChangeText={setEditData}
            />


            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={() => setEditModalVisible(false)}
                style={styles.modalButton}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={
                  {
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 6,
                    backgroundColor: 'green',
                    
                  }
                }
                onPress={() => {
                  if(editData.trim() === "") return;

                  const updatedTodos = [...todoData];
                  updatedTodos[editIndex] = editData;
                  setTodoData(updatedTodos);
                  setEditModalVisible(false);
                  setEditIndex(null);
                  setEditData('');
                }}
              >
                <Text style={{
                  color: 'white',
                }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Delete Modal */}
      <Modal transparent visible={deleteModalVisible} animationType="slide">
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Delete Task?</Text>
            <Text>Are you sure you want to delete this task?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={() => setDeleteModalVisible(false)}
                style={styles.modalButton}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                paddingHorizontal: 12,
                paddingVertical: 8,
                backgroundColor: "red",
                borderRadius: 6,
              }} onPress={() => {
                const updatedTodos = todoData.filter((_, i) => i !== deleteIndex);
                setTodoData(updatedTodos);
                setDeleteModalVisible(false);
                setDeleteindex(null);
                setDeleteData('');
              }}
              >
                <Text style={{
                  color: 'white'
                }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
  },
  inputRow: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  todoItem: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  todoText: {
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#2196F3",
    borderRadius: 6,
  },
  actionText: {
    color: "#fff",
    fontSize: 14,
  },
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
});
