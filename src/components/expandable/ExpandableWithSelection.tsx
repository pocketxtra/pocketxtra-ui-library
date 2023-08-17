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

export const ExpandableWithSelection: React.FC<expandableWithSelectionInterface> = ({
    Icon = 'checkmark-circle',
    IconInfo = "information-circle-outline",
    expanablePara = "Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stac",
    userRole = "Organiser",
    successColor = "#24B491",
    width= 350,
    height= 50,
    borderRadius = 8,
    borderWidth = 1,
    backgroundColour = '#000',
    fontSize= 2
    
}) => {
    const [expanded, setExpanded] = React.useState(false);

    const [penColor, setPenColor] = React.useState('#fff');
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
                            size={35}
                            color={penColor}
                            style={{ alignItems: 'center', justifyContent: 'center', marginTop: responsiveWidth(-2) }}


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
                    borderColor: '#000',
                    borderRadius: borderRadius,
                    borderWidth: borderWidth,
                    width: width,
                    height: height,
                    alignSelf: 'center',
                    backgroundColor: backgroundColour,
                    paddingBottom: 0

                }}
                titleStyle={{ color: 'white', fontSize: responsiveFontSize(fontSize) ,  marginBottom: responsiveWidth(2)}}

            >
                {expanded && (
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 8,
                            alignSelf: 'center',
                            width: 350,
                            height: 'auto',
                            paddingBottom: 25,
                            backgroundColor: "#000000",
                            
                        }}

                    ><Image source={{ uri: 'https://picsum.photos/700' }} style={{height: responsiveWidth(10), width: responsiveWidth(10),  alignSelf: 'center', marginBottom: 20, marginTop: 20 }} />
                        <Text style={{ color: "#fff",  alignItems: 'flex-end', fontSize: responsiveFontSize(2.6), marginBottom: responsiveWidth(3) }}>
                            {userRole}
                        </Text>
                        <Text style={{ color: "#fff",  marginRight: responsiveWidth(10), }}>
                            {expanablePara}
                        </Text>
                        <Pressable
                            onPress={handlePressButton}
                            style={{ backgroundColor: "#24B491", width: 65, height: 34, borderRadius: 12, alignSelf: 'flex-end', marginRight: responsiveWidth(10), marginTop: responsiveWidth(5), alignItems: "center", justifyContent: "center" }}>
                            <Text
                                style={{ color: "#fff", textAlign: "center" }}>
                                {buttonText}
                            </Text>
                        </Pressable>
                    </View>

                )}
            </List.Accordion>

        </List.Section>
    )
}