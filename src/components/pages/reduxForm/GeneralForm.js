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

// Validation rules.
// https://redux-form.com/6.6.2/examples/fieldlevelvalidation/
const vRequired = value => (value ? undefined : 'This is required');
const vEmail = value => (new RegExp('.+@.+', 'i').test(value) ? undefined : 'Email is not valid');


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
            validate={[vRequired]}
          />
          <Field
            component={GeneralInput}
            txtLabel="Email"
            name="emailAddr"
            type="text"
            validate={[vRequired, vEmail]}
          />
          <Field
            component={GeneralInput}
            txtLabel="Address"
            name="Address"
            type="text"
            validate={[vRequired]}
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
})(GeneralForm);

GeneralForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // valid: PropTypes.bool.isRequired,
  // name: PropTypes.string.isRequired,
  // submitting: PropTypes.bool.isRequired,
};
