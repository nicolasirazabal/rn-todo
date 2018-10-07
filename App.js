import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        };
    }
    render() {
        let notes = this.state.noteArray.map((val, key)=>{
            return <View key={key}>
                        <Text>{val.date}</Text>
                        <Text>{val.note}</Text>
                        <TouchableOpacity onPress={()=>this.deleteNote(key)}>
                            <Text>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
        });
        return (
            <View style={{flex: 1}}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>- NOTER -</Text>
                </View>
                <View style={{padding: 5}}>
                  <ScrollView>
                      {notes}
                  </ScrollView>
                </View>
                <View style={{flexDirection: 'row', backgroundColor: '#FAFAFA', padding: 5}}>
                    <TextInput
                        style={{width: '70%'}}
                        placeholder='>Nueva nota aquí'
                        onChangeText={(noteText)=> this.setState({noteText})}
                        value={this.state.noteText}>
                    </TextInput>
                    <View style={{width: '30%'}}>
                      <TouchableOpacity 
                        onPress={ this.addNote.bind(this) } 
                        style={{ width: 50, height: 50,
                              alignItems: 'center', justifyContent: 'center',
                              backgroundColor: '#E91E63', 
                              borderRadius: 35
                              }}>
                          <Text style={{color: '#fff',fontSize: 24}}>+</Text>
                      </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        );
    }
    addNote(){
        if(this.state.noteText){
            var d = new Date();
            this.state.noteArray.push({
                'date':d.getFullYear()+
                "/"+(d.getMonth()+1) +
                "/"+ d.getDate(),
                'note': this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray });
            this.setState({noteText:''});
        }
    }
    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray});
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    }
});