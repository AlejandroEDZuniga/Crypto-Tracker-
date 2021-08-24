import React, { Component } from 'react'
import { TextInput, Platform, View, StyleSheet } from 'react-native'

class CoinsSearch extends Component {

    state = {
        query:""
    }

    handleText = (query)=>{

        this.setState({ query })

        if(this.props.onChange){
            this.props.onChange
        }

    }
    render(){
        return(
            <View>
                <TextInput
                onChangeText = {this.handleText} 
                />

                
            </View>
        )
    }
}

export default CoinsSearch