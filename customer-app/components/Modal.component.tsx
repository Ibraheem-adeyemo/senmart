import React, { Component } from 'react'
import {View, Text, Modal, StyleSheet } from 'react-native';

export class ModalComponent extends Component<any> {
    state = {

    }
    render() {
        const visible = this.props.display? style.show : style.hide;

        return (
            <View style={visible}>
               <Modal style={style.modalStyle}>
                  <View>
                    <Text>{this.props.modalTitle}</Text>
                  </View>
                  <View>
                     {this.props.children} 
                  </View>     
                </Modal> 
            </View>
        )
    }
}

const style = StyleSheet.create({
    hide: {
        display: 'none'
    },
    show: {
        display: 'flex'
    },
    modalStyle: {
        width: '90%',
        backgroundColor: 'white'
    }
})

export default ModalComponent
