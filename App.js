
import React, { useCallback, useRef, useState } from 'react'
import { StyleSheet, View, Alert, Text, ScrollView, TouchableOpacity, Image, Dimensions, Animated } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { AddIcon, audio, cancel, message, Qr, sendd, video } from './assets/Index'


const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;import BottomSheet from 'react-native-simple-bottom-sheet';

const PendingView = () => (
    <View
    >
        <Text>Waiting</Text>
    </View>
);


const data = [
    { name: "Nuri", message: 'Have a nive day🤣🥳🥳😊 hdbdh', profile: '' },
    { name: "Raman", message: 'Have a nive day🤣🥳🥳😊 hdbdh ' },
    { name: "Nuri", message: 'Have a nive day🤣🥳🥳😊 hdbdh' },
    { name: "Nuriam", message: 'tHave a nive day🤣🥳🥳😊 hdbdh' },

    { name: "Ndscsi", message: 'Have a nive day🤣🥳🥳😊 hdbdh' },
    { name: "wwwdd", message: 'tHave a nive day🤣🥳🥳😊 hdbdh' },
];
const takePicture = async function (camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
};

const App = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const panelRef = useRef(null);
    const snapPoints = ["25%"]
    return (
        <View style={styles.container}>
            <RNCamera
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
            >
                {({ camera, status, recordAudioPermissionStatus }) => {
                    if (status !== 'READY') return <PendingView />;
                    return (
                        <View>

                            <View style={{
                               height:61,
                               justifyContent:'space-between',
                               position:'relative',
                               
                                opacity: 0.7,
                                backgroundColor: '#2a2233',
                                flexDirection: 'row',
                                width: deviceWidth+20,bottom:290
                            }}>
                                <TouchableOpacity style={styles.capture}>
                                    <Image
                                        source={cancel}
                                        resizeMode="cover"
                                        style={{left:10, height: 24, width: 24, position: 'absolute', tintColor: 'black' }}>
                                    </Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.capture}>
                                    <Image
                                        source={Qr}
                                        resizeMode="cover"
                                        style={{ height: 40, width: 50, }}>
                                    </Image>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity

                                style={{ height: 43, width: 155, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                            >
                                <View
                                    style={{
                                        backgroundColor: "red",
                                        borderRadius: 10,
                                        marginTop: 10,
                                        height: 30, width: 80, alignItems: 'center', right: 140,bottom:290
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 2 }}
                                    >
                                        43 live
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ width: 80, marginLeft: 330, marginBottom: 150}}>
                                <TouchableOpacity style={{ margin: 10 }} onPress={toggleModal}>
                                    <Image
                                        source={message}
                                        resizeMode="cover"
                                        style={{ height: 25, width: 35 }}>
                                    </Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ margin: 10 }}>
                                    <Image
                                        source={sendd}
                                        resizeMode="cover"
                                        style={{ height: 35, width: 35 }}>
                                    </Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ margin: 10 }}>
                                    <Image
                                        source={video}
                                        resizeMode="cover"
                                        style={{ height: 35, width: 30 }}>
                                    </Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ margin: 10 }}>
                                    <Image
                                        source={audio}
                                        resizeMode="cover"
                                        style={{ height: 30, width: 30 }}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginBottom: 50, flexDirection: 'row', width: 450, height: 50, backgroundColor: '#271836' }}>
                                <TouchableOpacity style={{
                                    borderRadius: 5,
                                    padding: 25,
                                    alignSelf: 'center',
                                }}>
                                    <Image
                                        source={message}
                                        resizeMode="cover"
                                        style={{ height: 33, width: 32, tintColor: 'white' }}>
                                    </Image>
                                </TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', marginTop: 15, marginRight: 50 }}>31 Comments</Text>
                                <View
                                    style={[styles.overlay, {
                                        backgroundColor: "#ed51bc",
                                        borderRadius: 10,
                                        marginTop: 10,
                                        height: 30, width: 150, alignItems: 'center', left: 230
                                    }]

                                    }
                                >
                                    <Text
                                        style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 2 }}
                                    >
                                        End Livestream
                                    </Text>
                                </View>
                            </View>

                            <BottomSheet ref={ref => panelRef.current = ref}
                            >

                                {(onScrollEndDrag) => (
                                    <ScrollView onScrollEndDrag={onScrollEndDrag}>
                                        {data.map((item, key) => (
                                            <View key={key} style={{ flexDirection: 'row', marginTop: 20 }}>
                                                <View style={{ backgroundColor: '#917fa3', borderRadius: 40 / 2, height: 40, width: 40, left: 10 }}>
                                                    <TouchableOpacity style={{}}>
                                                        <Image
                                                            style={{
                                                                height: 30,
                                                                width: 30,
                                                                borderRadius: 40 / 2
                                                            }}

                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ marginLeft: 10 }}>
                                                    <Text style={{ color: 'black', marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}> {item.name} </Text>
                                                    <Text style={{ color: 'black', marginLeft: 10, fontSize: 18 }}> {item.message} </Text>

                                                </View>
                                            </View>
                                        )
                                        )}
                                    </ScrollView>
                                )}
                            </BottomSheet>
                            {/* <View style={[styles.overlay, { height: 360, marginTop: 20 }]} >
                                {data.map((item, key) => (
                                    <View key={key} style={{ flexDirection: 'row', marginTop: 20 }}>
                                        <View style={{ backgroundColor: 'white', borderRadius: 40 / 2, height: 50, width: 50, left: 10 }}>
                                            <TouchableOpacity style={{}}>
                                                <Image
                                                    style={{
                                                        height: 40,
                                                        width: 40,
                                                        borderRadius: 40 / 2
                                                    }}

                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={{ color: 'white', marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}> {item.name} </Text>
                                            <Text style={{ color: 'white', marginLeft: 10, fontSize: 18 }}> {item.message} </Text>

                                        </View>
                                    </View>
                                )
                                )}
                            </View> */}



                        </View>
                    );
                }}
            </RNCamera>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
justifyContent:'flex-end',
      
        width:deviceWidth,height:deviceHeight-30
    },
    capture: {

opacity:1,
        borderRadius: 5,
        padding: 15,
margin:30,
        alignSelf: 'center',
        
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 1,

        width: 500
    }
});
export default App