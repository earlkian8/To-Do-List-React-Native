import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Item = ({
  todoData,
  setEditModalVisible,
  setEditIndex,
  setEditData,
  setDeleteModalVisible,
  setDeleteindex,
  setDeleteData,
}) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
});

export default Item;
