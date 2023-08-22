
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { DropDownProps } from '../../interface/DropDown/DropDownInterfaceTwo';

export const CustomDropDownComponent: React.FC<DropDownProps> = ({
  height,
  width,
  backgroundColor,
  borderRadius,
  Coordinators,
  selectedLabel,
  margin,
  textColor,
  iconColor,
  iconsize
  
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
          backgroundColor : backgroundColor?backgroundColor :"black",
          justifyContent : 'space-between',
          flexDirection : "row",
          alignItems :'center',
          padding: responsiveHeight(1),
          height: responsiveHeight(height?height:10),
          width: responsiveWidth(width?width:80),
          borderRadius: responsiveHeight(borderRadius?borderRadius : 1),
       

        }}
        activeOpacity={0.8}
        onPress={toggleOptions}>
        <Text style={{ color: textColor?textColor:'#E4E4E4' }}>{selectedItem || selectedLabel}</Text>
        <Icon
          style={{
            transform: [{ rotate: showOptions ? '180deg' : '0deg' }],
            color:iconColor?iconColor:'#808080',
          }}
          name="arrow-drop-down"
          size={iconsize?iconsize:27}
        />
      </TouchableOpacity>
      {showOptions && (
        <View style={{ position: 'absolute', top: '100%'}}>
          {Coordinators?.map((coordinator, i) => (
            <TouchableOpacity
              style={{
                backgroundColor :backgroundColor?backgroundColor: "black",
                justifyContent : 'space-between',
                flexDirection : "row",
                alignItems :'center',
                padding: responsiveHeight(1),
                height: responsiveHeight(height?height:10),
                width: responsiveWidth(width?width:80),
                borderRadius: responsiveHeight(borderRadius?borderRadius:1),
                margin : responsiveWidth(margin?margin:0.1)            
                
      
              }}
              key={i}
              onPress={() => onSelectItem(coordinator.name)}>
              <Text key={String(i)} style={{ color: textColor?textColor:'#E4E4E4' }}>
                {coordinator.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

