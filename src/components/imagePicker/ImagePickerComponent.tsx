import React, { useState, useEffect } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { Text, View, Pressable, Image, Platform, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import CameraIcon from 'react-native-vector-icons/MaterialIcons';
import NextIcon from 'react-native-vector-icons/FontAwesome5';
import RetakeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ImagePickerComponentInterface } from '../../interface/imagePicker/ImagePickerComponentInterface';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import {Colors} from "../../theme/ColorsConstant"

export const ImagePickerComponent: React.FC<ImagePickerComponentInterface & { onChangeImage: (text: string) => void }> = ({
    width = 40,
    height = 40,
    borderRadius = 10,
    iconColor = Colors.iconColor,
    backgroundColor=Colors.backgroundColor,
    alertHeadingText="",
    alertBodyText="",
    iconSize=30,
    onChangeImage = () => { },
}) => {

    const [image, setImage] = useState<string>('');
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [cameraRef, setCameraRef] = useState<Camera | null>(null);
    const [showCamera, setShowCamera] = useState<boolean>(false);
    const [cameraType, setCameraType] = useState<Camera.Constants.Type>(Camera.Constants.Type.back);
    const [selectedOption, setSelectedOption] = useState("Gallary")

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            const imagePickerStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (cameraStatus.status === 'granted' && imagePickerStatus.status === 'granted') {
                setHasPermission(true);
            }
        })();
    }, []);

    useEffect(() => {
        if (image !== '') {
            onChangeImage(image);
        }
    }, [image])

    const clickPicture = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            setImage(photo.uri);
            setShowCamera(false);
        }
    };

    const retakePicture = () => {
        setImage('');
        setShowCamera(true);
    };

    const toggleCameraType = () => {
        setCameraType(
            cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const submitImage = () => {
        setSelectedOption("Gallary")
    };


    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission denied')
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        delete result.cancelled;
        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const ChooseMethod = () => {
        Alert.alert(
            alertHeadingText,
            alertBodyText,
            [
                {
                    text: 'Camera',
                    onPress: () => {
                        setSelectedOption("Camera");
                        setShowCamera(true)
                    }
                },
                {
                    text: 'Gallary',
                    onPress: () => {
                        setSelectedOption("Gallary");
                        pickImage();
                    }
                }
            ]
        );
    }
    return (
        <>
            {
                selectedOption === "Gallary" ?
                    <Pressable onPress={ChooseMethod}>
                        <View
                            style={{
                                width: responsiveWidth(width),
                                height: responsiveWidth(height),
                                backgroundColor: backgroundColor,
                                borderRadius: responsiveWidth(borderRadius),
                                alignSelf: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {image ?
                                <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: responsiveWidth(borderRadius) }} />
                                :
                                <View style={{ alignSelf: 'center' }}>
                                    <Icon name="image" size={responsiveWidth(iconSize)} color={iconColor} />
                                </View>
                            }
                        </View>
                    </Pressable>
                    :
                    <View style={{ flex: 1 }}>
                        {showCamera ? (
                            <Camera
                                style={{ flex: 1 }}
                                type={cameraType}
                                ref={(ref) => setCameraRef(ref)}
                            />
                        ) : (
                            <View style={{ flex: 1 }}>
                                <Image source={{ uri: image }} style={{ flex: 0.8 }} resizeMode="contain" />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 0.2 }}>
                                    <Pressable onPress={retakePicture} style={{ alignItems: 'center', paddingBottom: responsiveWidth(5) }}>
                                        <RetakeIcon name="camera-retake" size={responsiveWidth(15)} color={iconColor} />
                                    </Pressable>
                                    <Pressable onPress={submitImage} style={{ alignItems: 'center', paddingBottom: responsiveWidth(5) }}>
                                        <NextIcon name="arrow-alt-circle-right" size={responsiveWidth(13)} color={iconColor} />
                                    </Pressable>
                                </View>
                            </View>
                        )}

                        {showCamera && (
                            <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Pressable onPress={toggleCameraType}>
                                    <CameraIcon name="flip-camera-ios" size={responsiveWidth(15)} color={iconColor} />
                                </Pressable>
                                <Pressable onPress={clickPicture}>
                                    <CameraIcon name="camera" size={responsiveWidth(15)} color={iconColor} />
                                </Pressable>
                            </View>
                        )}
                    </View>

            }

        </>
    );
};