import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';


/**
 * This is custom input row
 * @param {redux-form object} field
 */
const GeneralInput = field => (
  <div className="GeneralInput row">
    <div className="col-md-2" >
      <label htmlFor={field.input.name}>{field.input.name}s</label>
    </div>
    <div className="col-md-4">
      <input {...field.input} type="text" name={field.input.name} />
    </div>
    <div className="col-md-6">
      <span>ERROR REQUIRED</span>
    </div>


    
    
  </div>
);


const GeneralForm = (props) => {
  const submit = (v, dispatch) => {
    console.log(v, props);

    // return dispatch(actionTest(v));
  };
  // const { handleSubmit } = props;
  return (
    <div className="GenearlForm h_max-w-700px container-fluid">
      <form onSubmit={props.handleSubmit(submit)}>
        {console.log(props)}
        <div>
          <Field
            component={GeneralInput}
            namex="Thisismyname"
            name="FirstName"
            type="text"
          />
          <button disabled={!props.valid} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'contact',
  //validate,
  // fields: ['firstName', 'lastName', 'email'],
})(GeneralForm);

GeneralForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  // name: PropTypes.string.isRequired,
  // submitting: PropTypes.bool.isRequired,
};
