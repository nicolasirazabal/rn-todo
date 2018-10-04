import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
export default class Note extends Component {
    render() {
        return (
            <View key={this.props.keyval}>
                <Text>{this.props.val.date}</Text>
                <Text>{this.props.val.note}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod}>
                    <Text>Eliminar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}