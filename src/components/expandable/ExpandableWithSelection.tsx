import { View, Text, TextInput, Pressable, Image } from 'react-native'
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pen from 'react-native-vector-icons/Ionicons';
import { List } from 'react-native-paper';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { expandableWithSelectionInterface } from '../../interface/expandable/expandableWithSelectionInterface';
// import imagePath from '../../../assets/favicon.png'; 

export const ExpandableWithSelection: React.FC<expandableWithSelectionInterface> = ({
    Icon = 'checkmark-circle',
    IconInfo = "information-circle-outline",
    expanablePara = "Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stac",
    userRole = "Organiser",
    successColor = "#24B491",
    width= 90,
    height= 20,
    borderRadius = 5,
    borderWidth = 1,
    backgroundColour = '#000',
    fontSize= 2,
    IconSize = 12,
    IconColor = "#ccc",
    exTextSize = 2,
    textColor = "#ccc",
    borderColor = "#fff",
    exTextColor = "#fff",
    imageSource = { uri: 'https://picsum.photos/700' },
     fontFamily = 'Nunito'
    
}) => {
    const [expanded, setExpanded] = React.useState(false);

    const [penColor, setPenColor] = React.useState(IconColor);
    const [buttonText, setButtonText] = React.useState('Select');

    const handlePressButton = () => {
        setExpanded(!expanded);
        setPenColor(successColor);
        setButtonText('Selected');
    };

    const handlePress = () => setExpanded(!expanded);


    return (
        <List.Section >
            <List.Accordion
                title={userRole}
                right={props => (
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        
                         <Pen
                            {...props}
                            name={Icon}
                            size={responsiveWidth(IconSize)}
                            color={penColor}
                            style={{ alignItems: 'center', justifyContent: 'center', marginTop: responsiveWidth(-3) }}


                        />
                       
                        
                        <Pen
                            {...props}
                            name={IconInfo}
                            size={25}
                            color="#fff"
                            style={{  marginLeft: responsiveWidth(3) }}
                        />
                    </View>


                )}
                left={() => null}
                expanded={expanded}
                onPress={handlePress}

                style={{
                    borderColor: borderColor,
                    borderRadius: responsiveWidth(borderRadius),
                    borderWidth: responsiveWidth(borderWidth),
                    width: responsiveWidth(width),
                    height: responsiveWidth(height),
                    alignSelf: 'center',
                    backgroundColor: backgroundColour,
                    paddingBottom: 0

                }}
                titleStyle={{ color: textColor , fontSize: responsiveFontSize(fontSize) ,  marginBottom: responsiveWidth(2), fontFamily: fontFamily}}

            >
                {expanded && (
                    <View
                        style={{
                            borderWidth: responsiveWidth(borderWidth),
                            borderColor: borderColor,
                            borderRadius: responsiveWidth(borderRadius),
                            alignSelf: 'center',
                            width:  responsiveWidth(width),
                            height: 'auto',
                            paddingBottom: 25,
                            backgroundColor: backgroundColour,
                            
                        }}

                    > 
                    <Image
                      source={{ uri: imageSource.uri }}
                      style={{
                        height: responsiveWidth(40),
                        width: responsiveWidth(40),
                        alignSelf: 'center',
                        marginBottom: responsiveWidth(10),
                        marginTop: responsiveWidth(10),
                        marginRight: responsiveWidth(10),
                      }}
                    />
                  
                        <Text style={{ color: exTextColor,  alignItems: 'flex-end', fontSize: responsiveFontSize(exTextSize), marginBottom: responsiveWidth(3), fontFamily: fontFamily }}>
                            {userRole}
                        </Text>
                        <Text style={{ color: exTextColor,  marginRight: responsiveWidth(10), fontFamily: fontFamily }}>
                            {expanablePara}
                        </Text>
                        <Pressable
                            onPress={handlePressButton}
                            style={{ backgroundColor: "#24B491", width: 65, height: 34, borderRadius: 12, alignSelf: 'flex-end', marginRight: responsiveWidth(10), marginTop: responsiveWidth(5), alignItems: "center", justifyContent: "center" }}>
                            <Text
                                style={{ color: "#fff", textAlign: "center", fontFamily: fontFamily }}>
                                {buttonText}
                            </Text>
                        </Pressable>
                    </View>

                )}
            </List.Accordion>

        </List.Section>
    )
}