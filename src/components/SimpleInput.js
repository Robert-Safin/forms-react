import { useState, useEffect } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('input is valid'); //post data
    }
  }, [enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    const typedName = event.target.value
    setEnteredName(typedName)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouched(true)
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return;
    }

    setEnteredNameIsValid(true)
    console.log(enteredName);
  }

  const nameInputIsInvalid  = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler}/>
        {nameInputIsInvalid && <p className="error-text">Enter valid input</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
