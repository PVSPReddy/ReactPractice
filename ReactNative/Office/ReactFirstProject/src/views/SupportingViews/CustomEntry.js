import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';


export default class CustomEntry extends Component
{
    constructor(props)
    {
        super(props);
        var params = this.props.InputText;
        var customStyle = this.props.CustomStyle;
        if(customStyle !== null && customStyle != undefined)
        {
            this.state = {
                textValue : customStyle.TextTextValue,
                textInputTextValue : customStyle.TextInputTextValue,
                textInputPlaceHolderValue : customStyle.TextInputPlaceholderValue,
                textInputTextColor : customStyle.TextInputTextColor,
                textInputPlaceHolderColor : customStyle.TextInputPlaceHolderColor,
                textTextColor : customStyle.TextTextColor,
                textIsVisible : customStyle.TextIsVisible,
                viewBackGroundColor : customStyle.ViewBackGroundColor
            }
        }
        else
        {
            this.state = {
                textValue : "Enter Some Text",
                textInputTextValue : this.props.InputText,
                //textInputTextValue : (params != "undefined" || params != "" || params != "UnDefined" || params !== "Undefined") ? params :  "Enter Some Text",
                textInputPlaceHolderValue : "Enter Some Text"
            };
        }
    }

    render()
    {
        return(
            <View style={[{backgroundColor:this.state.viewBackGroundColor}]} >
                <Text style={[{textDecorationColor:this.state.textTextColor}]} >{this.state.textValue}</Text>
                {/* <TextInput style={[{textDecorationColor:this.state.textInputTextColor}]} placeholder={this.state.textInputPlaceHolderValue} onChangeText={(text) => this.TextChanged(text)} value={this.state.textInputTextValue} /> */}
                {/* <TextInput style={[{textDecorationColor:this.state.textInputTextColor}]} placeholder={this.state.textInputPlaceHolderValue} onChangeText={(text) => this.props.onCreateNew()} value={this.state.textInputTextValue} /> */}
                <TextInput style={[{textDecorationColor:this.state.textInputTextColor}]} placeholder={this.state.textInputPlaceHolderValue} onChangeText={(text) => this.props.onCreateNewTwo("finalValue", text)} value={this.state.textInputTextValue} />
            </View>
        );
    }

    TextChanged(textChangedValue)
    {
        this.setState({textInputTextValue:textChangedValue});
    }
}
const styles = StyleSheet.create({
    textContainerStyle : {
        flex:1,
        flexDirection:"column",
        backgroundColor:"#00FF00"
    },
    textStyle : {
        
    },
    textInputStyle : {
        
    }
});