import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import colors from '../../Constant/Color';
import fontSize from '../../Constant/font';
import DownArrow from '../../assets/Images/down-arrow.png'


export default function CustomDropdown({ label, options, selectedValue, onValueChange }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSelect = (value) => {
    onValueChange(value); // Update the parent state
    setModalVisible(false); // Close modal
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.pickerContainer} onPress={() => setModalVisible(true)}>
        <Text style={styles.selectedText}>{selectedValue || `Select ${label}`}</Text>
        <IconButton icon={DownArrow} size={20} color={colors.primary} />
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text style={styles.modalItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View> 
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: fontSize.text2,
    color: colors.primary,
    marginBottom: 1,
    paddingHorizontal: 10,
    fontFamily: 'Montserrat-Bold',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 18,
    paddingHorizontal: 20,
    marginBottom: 20,
    height: 50,
    backgroundColor: colors.accentVariant,
  },
  selectedText: {
    color: colors.primary,
    fontSize : fontSize.text1,
    fontFamily: 'Montserrat-Regular',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: colors.primary_white,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  modalItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  modalItemText: {
    fontSize: 16,
    color: colors.primary,
    fontFamily: 'Montserrat-Regular',
  },
});
