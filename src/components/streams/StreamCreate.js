import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamCreate extends React.Component {
    renderInput({ input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }; 

    onSubmit(formValue){
        console.log(formValue);
    };

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Enter Title"
                />
                <Field
                    name="discription"
                    component={this.renderInput}
                    label="Enter Discription"
                />
                <button className="ui button promary">Submit</button>
            </form>
        );
    };
};

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);