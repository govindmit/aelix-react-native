import React, { FC, ReactElement, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../config/colors';

interface Props {
  label: string;
  data: Array<{ className: string; value: string }>;
  onSelect: (item: { className: string; value: string }) => void;
}

const Dropdown: FC<Props> = ({ className, data, onSelect }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx: number, _fy: number, _w: number, h: number, _px: number, py: number) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }: any): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.className}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(!!selected && selected.className) || className}
      </Text>
      <Icon style={styles.icon} type="font-awesome" name="angle-down" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 20,
    zIndex: 1,
    width: '32%',
    
 },
  buttonText: {
    flex: 1,
     textAlign: 'right',
    marginRight: 10,
    marginTop: 5
   },
  icon: {
    marginRight: 30,
   },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#efefef',
    width: '35%',
    Top: 20,
    margin: 16,
    height: 200,
    // width: 130,
    // backgroundColor: '#EEEEEE',
    //borderRadius: 22,
    //paddingHorizontal: 8,
   },
  item: {
    alignItems: "center",
    paddingLeft: 40,
    paddingVertical: 6,
    //borderBottomWidth: 1,
  },
});

export default Dropdown;