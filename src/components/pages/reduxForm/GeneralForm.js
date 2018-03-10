import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';


/**
 * This is custom input row
 * @param {redux-form object} field
 */
const GeneralInput = field => (
  <div className={`GeneralInput row ${field.meta.active ? 'GeneralInput-active' : ''}`}>
    <div className="col-md-2" >
      <label htmlFor={field.input.name}>{field.txtLabel}</label>
    </div>
    <div className="col-md-4">
      <input {...field.input} type="text" name={field.input.name} />
    </div>
    <div className="col-md-6">
      {field.meta.touched && field.meta.error && <span className="GeneralInput_error">{field.meta.error}</span>}
    </div>
  </div>
);

const GeneralForm = (props) => {
  const submit = (v, dispatch) => {
    console.log(v, props);

    // TODO: make a custom action that we save this form to a reducerLw
    // return dispatch(actionTest(v));
  };
  // const { handleSubmit } = props;
  return (
    <div className="GeneralForm h_max-w-700px container-fluid">
      <form onSubmit={props.handleSubmit(submit)}>
        {console.log(props)}
        <div>
          <Field
            component={GeneralInput}
            txtLabel="First Name"
            name="firstName"
            type="text"
          />
          <Field
            component={GeneralInput}
            txtLabel="Email"
            name="emailAddr"
            type="text"
          />
          {/* <button disabled={!props.valid} type="submit" className="btn btn-primary"> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

/**
 * R
 */
export default reduxForm({
  // a unique name for the form
  form: 'contact',
  validate: (values) => {
    const err = {};
    // Check for a valid firstName
    if (!values.firstName) {
      err.firstName = 'Required firstName';
    }

    // Check for a valid email
    if (!values.emailAddr) {
      err.emailAddr = 'Required email';
    } else if (new RegExp('.+@.+', 'i').test(values.emailAddr)) {
      err.emailAddr = 'Email is invalid';
    }

    console.log('emailAddr', new RegExp('.+@.+', 'i').test(values.emailAddr));
    return err;
  },
  // fields: ['firstName', 'lastName', 'email'],
})(GeneralForm);

GeneralForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // valid: PropTypes.bool.isRequired,
  // name: PropTypes.string.isRequired,
  // submitting: PropTypes.bool.isRequired,
};
