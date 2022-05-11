import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
export class ReduxForm extends Component {
    renderError(error, touched){
        if(touched && error){
            return(
                <div>
                    <div>
                        {error}
                    </div>
                </div>
            )
        }
    }
    renderInput = ({label,input, meta}) => {
        return(
            <div>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        )
    }
onSubmit = () =>{
    console.log('form was dfsdkfnkd')
}
    render(){
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name ='title' component={this.renderInput}  label ='title' />
                    <Field name ='description' component={this.renderInput} label='description' />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
const validate = formValues =>{
    const errors = {}
    if(!formValues.title){
        errors.title = " jsdhgjhn"
    }
    if(!formValues.description){
        errors.description = 'gfbhsdgfbhhhhdgfbj'
    }
    return errors;
}

export default reduxForm({
    form :'ourForm',
    validate :validate
})(FormInputs);
