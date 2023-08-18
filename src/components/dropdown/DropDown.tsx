
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { DropDownProps } from '../../interface/DropDown/DropDownInterfaceTwo';

 export const DropDown: React.FC<DropDownProps> = ({
    height = 7,
    width = 65,
    backgroundColor = 'black',
    padding = 1,
    borderRadius = 1,
    marginTop = 0.1,
    justifyContent = 'space-between',
    alignItems = 'center',
    flexDirection = 'row',
    Coordinators,
    selectedLabel = 'Visibility',
  }) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [showOptions, setShowOptions] = useState<boolean>(false);
  
    const toggleOptions = () => {
      setShowOptions(!showOptions);
    };
  
    const onSelectItem = (item: string) => {
      setSelectedItem(item);
      setShowOptions(false);
    };
  
    return (
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor : backgroundColor,
            justifyContent : justifyContent,
            flexDirection : flexDirection,
            alignItems : alignItems,
            padding: responsiveHeight(padding),
            height: responsiveHeight(height),
            width: responsiveWidth(width),
            borderRadius: responsiveHeight(borderRadius),
          }}
          activeOpacity={0.8}
          onPress={toggleOptions}>
          <Text style={{ color: '#E4E4E4' }}>{selectedItem || selectedLabel}</Text>
          <Icon
            style={{
              transform: [{ rotate: showOptions ? '180deg' : '0deg' }],
              color: '#808080',
            }}
            name="arrow-drop-down"
            size={27}
          />
        </TouchableOpacity>
        {showOptions && (
          <View style={{ position: 'absolute', top: '100%', left: 0, width: '100%', alignItems: 'center' }}>
            {Coordinators.map((coordinator : any, i : any) => (
              <TouchableOpacity
                style={{
                  backgroundColor :backgroundColor,
                  justifyContent,
                  flexDirection,
                  alignItems,
                  padding: responsiveHeight(padding),
                  height: responsiveHeight(height),
                  width: responsiveWidth(width),
                  borderRadius: responsiveHeight(borderRadius),
                  marginTop: responsiveHeight(marginTop),
                }}
                key={i}
                onPress={() => onSelectItem(coordinator.name)}>
                <Text key={String(i)} style={{ color: '#E4E4E4' }}>
                  {coordinator.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };
  

  