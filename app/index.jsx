import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Item from "./components/item";
import Delete from "./modals/delete";
import Edit from "./modals/edit";

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
      
      {editModalVisible && (
        <Edit
          editModalVisible={editModalVisible}
          setEditModalVisible={setEditModalVisible}
          editData={editData}
          setEditData={setEditData}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          todoData={todoData}
          setTodoData={setTodoData}
        />
      )}


      {deleteModalVisible && (
        <Delete
          deleteModalVisible={deleteModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
          deleteIndex={deleteIndex}
          setDeleteindex={setDeleteindex}
          deleteData={deleteData}
          setDeleteData={setDeleteData}
          todoData={todoData}
          setTodoData={setTodoData}
        />
      )}

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
      <Item
        todoData={todoData}
        setEditModalVisible={setEditModalVisible}
        setEditIndex={setEditIndex}
        setEditData={setEditData}
        setDeleteModalVisible={setDeleteModalVisible}
        setDeleteindex={setDeleteindex}
        setDeleteData={setDeleteData}
      />
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
