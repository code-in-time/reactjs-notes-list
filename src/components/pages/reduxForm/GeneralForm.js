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

/**
 * This is custom select row
 * @param {redux-form object} field
 */
const GeneralSelect = field => (
  <div className={`GeneralSelect row ${field.meta.active ? 'GeneralSelect-active' : ''}`}>
    <div className="col-md-2" >
      <label htmlFor={field.input.name}>{field.txtLabel}</label>
    </div>
    <div className="col-md-4">
      <select {...field.input} name={field.input.name}>
        <option value="">select</option>
        <option value="car">car</option>
        <option value="plane">plane</option>
        <option value="bus">bus</option>
      </select>
    </div>
    <div className="col-md-6">
      {field.meta.touched && field.meta.error && <span className="GeneralSelect_error">{field.meta.error}</span>}
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
          <Field
            component={GeneralSelect}
            txtLabel="Transport"
            name="Transport"
            type="select"
            validate={[vRequired]}
          />

          <div className="GeneralRadio row">
            <div className="col-md-2" >
              <label htmlFor="food">Food</label>
            </div>
            <div className="col-md-10">
              <label><Field name="food" component="input" type="radio" value="none" />none</label><br />
              <label><Field name="food" component="input" type="radio" value="burger" />Burger</label><br />
              <label><Field name="food" component="input" type="radio" value="pizza" />Pizza</label>
            </div>
          </div>
          {console.log('-----------------', props)}
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
  initialValues: {
    food: 'none',
  }
})(GeneralForm);

GeneralForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // valid: PropTypes.bool.isRequired,
  // name: PropTypes.string.isRequired,
  // submitting: PropTypes.bool.isRequired,
};
