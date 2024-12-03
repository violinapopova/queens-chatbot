import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const ChatItem = ({role, text, onSpeak}) => {
    console.log('text', text)
    return (
        <View style={[ 
            styles.container,
            role === 'user' ? styles.userChatItem : styles.modelChatItem
            ]}>
                <Text style={styles.text}>{text}</Text>
            {role === 'model' && (
                <TouchableOpacity onPress={onSpeak} style={styles.speakerIcon}>
                    <Ionicons name='volume-high' size={24} color='#fff'/>
                </TouchableOpacity>
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        marginBottom: 10,
        maxWidth: '70%',
        borderRadius: 20,
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
    },
    userChatItem: {
        alignSelf: 'flex-end',
        backgroundColor: '#000',
    },
    modelChatItem: {
        alignSelf: 'flex-start',
        backgroundColor: 'purple',
    },
    text: {
        flex: 1,
        fontSize: 20,
        color: '#fff'
    },
    speakerIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
    }
});

export default ChatItem;