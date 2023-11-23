import React, { useState, useEffect } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Text, View, Pressable, Image, Platform, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CameraIcon from "react-native-vector-icons/MaterialIcons";
import NextIcon from "react-native-vector-icons/FontAwesome5";
import RetakeIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { ImagePickerComponentInterface } from "../../interface/imagePicker/ImagePickerComponentInterface";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { Colors } from "../../theme/ColorsConstant";

export const ImagePickerComponent: React.FC<
  ImagePickerComponentInterface & { onChangeImage: (text: string) => void }
> = ({
  width = 40,
  height = 40,
  borderRadius = 10,
  iconColor = Colors.iconColor,
  backgroundColor = Colors.backgroundColor,
  alertHeadingText = "",
  alertBodyText = "",
  iconSize = 30,
  onChangeImage = () => {},
  imageUrl = "",
}) => {
  const [image, setImage] = useState<string | null>(null); // Initialize as null
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [cameraType, setCameraType] = useState<Camera.Constants.Type>(
    Camera.Constants.Type.back
  );
  const [selectedOption, setSelectedOption] = useState("Gallery");

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const imagePickerStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (
        cameraStatus.status === "granted" &&
        imagePickerStatus.status === "granted"
      ) {
        setHasPermission(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (image !== null) {
      onChangeImage(image);
    }
  }, [image]);

  useEffect(() => {
    if (imageUrl) {
      setImage(imageUrl);
    }
  }, [imageUrl]);

  const clickPicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setImage(photo.uri);
      setShowCamera(false);
    }
  };

  const retakePicture = () => {
    setImage(null); // Set image to null to clear it
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
    setSelectedOption("Gallery");
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission denied");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const ChooseMethod = () => {
    Alert.alert(alertHeadingText, alertBodyText, [
      {
        text: "Camera",
        onPress: () => {
          setSelectedOption("Camera");
          setShowCamera(true);
        },
      },
      {
        text: "Gallery",
        onPress: () => {
          setSelectedOption("Gallery");
          pickImage();
        },
      },
    ]);
  };

  return (
    <>
      {selectedOption === "Gallery" ? (
        <Pressable onPress={ChooseMethod}>
          <View
            style={{
              width: responsiveWidth(width),
              height: responsiveWidth(height),
              backgroundColor: backgroundColor,
              borderRadius: responsiveWidth(borderRadius),
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            {image !== null ? (
              <Image
                source={{ uri: image }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: responsiveWidth(borderRadius),
                }}
              />
            ) : (
              <View style={{ alignSelf: "center" }}>
                <Icon
                  name="image"
                  size={responsiveWidth(iconSize)}
                  color={iconColor}
                />
              </View>
            )}
          </View>
        </Pressable>
      ) : (
        <View style={{ flex: 1 }}>
          {showCamera ? (
            <Camera
              style={{ flex: 1 }}
              type={cameraType}
              ref={(ref) => setCameraRef(ref)}
            />
          ) : (
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: image }}
                style={{ flex: 0.9 }}
                resizeMode="contain"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flex: 0.2,
                }}
              >
                <Pressable
                  onPress={retakePicture}
                  style={{ alignItems: "center" }}
                >
                  <RetakeIcon
                    name="camera-retake"
                    size={responsiveWidth(13)}
                    color={iconColor}
                  />
                </Pressable>
                <Pressable
                  onPress={submitImage}
                  style={{ alignItems: "center" }}
                >
                  <NextIcon
                    name="arrow-alt-circle-right"
                    size={responsiveWidth(12)}
                    color={iconColor}
                  />
                </Pressable>
              </View>
            </View>
          )}

          {showCamera && (
            <View
              style={{
                flex: 0.2,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Pressable onPress={toggleCameraType}>
                <CameraIcon
                  name="flip-camera-ios"
                  size={responsiveWidth(13)}
                  color={iconColor}
                  style={{ alignItems: "center" }}
                />
              </Pressable>
              <Pressable onPress={clickPicture}>
                <CameraIcon
                  name="camera"
                  size={responsiveWidth(13)}
                  color={iconColor}
                  style={{ alignItems: "center" }}
                />
              </Pressable>
            </View>
          )}
        </View>
      )}
    </>
  );
};
