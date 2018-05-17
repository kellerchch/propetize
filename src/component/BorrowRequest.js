import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { borrow } from '../reducers/stuff';
import { connect } from 'react-redux'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class BorrowRequest extends Component {
    constructor() {
    super()
    this.state = {
        startDate: null,
        endDate: null,
        focusedInput: null
    }

    }


    renderField(field){
        const { meta: {touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}> 
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {/* the first part of the ternary statement gets evaluated. If it returns truthy then the second section is the result. If it is falsy then the part after the : is evaluated. .touched means the person has entered and tabbed away.  */}
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    
    onSubmit(values) {
         var MatchedStuffObject = {}
         for (var i = 0; i < this.props.stuff.data.length; i++) {
             console.log(this.props.match.params.id, this.props.stuff.data[i])
            if (this.props.match.params.id == this.props.stuff.data[i].id) {
                console.log('matching')
                MatchedStuffObject = this.props.stuff.data[i]
         }
        }
         console.log("ItemID", MatchedStuffObject)

        this.props.borrow(this.props.match.params.id, this.props.user, values, MatchedStuffObject, () => {
          this.props.history.push('/Search')

        });
    }
    
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <h2>Exchange Request</h2>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                    {/* <Field
                        label="Start Date"
                        name="date_start"
                        component={this.renderField}
                    /> */}
                    

<DateRangePicker
  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  startDateId="date_start" // PropTypes.string.isRequired,
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  endDateId="date_end" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/>

                    {/* <Field
                        label="End Date"
                        name="date_end"
                        component={this.renderField}
                    /> */}
                    <Field
                        label="Tell us how you will use this item"
                        name="borrow_request"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/Search" className="btn btn-danger">Cancel</Link>

                </form>
            </div>
        );
    }
}
function validate(values) {
    const errors = {}

    //validate the inputs from 'values'


    if (!values.date_start) {
        errors.date_start = "Enter a reservation start date";
    }
    if (!values.date_end) {
        errors.date_end = "Enter a reservation end date";
    }
    if (!values.borrow_request) {
        errors.borrow_request = "Please explain how you will use this item.";
    }
    //if errors is empty, the form is fine to submit.
    return errors;
}

function mapStateToProps(state) {
    const { user, stuff } = state;
    return { user, stuff }

  }

export default reduxForm({
    validate,
    form: 'BorrowRequestForm'
}) (
    connect(mapStateToProps, { borrow })(BorrowRequest)
);