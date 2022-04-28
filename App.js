import React from "react";
import ReactDOM from 'react-dom';
// TODO: import useFormik from formik library
import { Formik, Field, Form } from 'formik'; 

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik();
  const Basic = () => (
    <div>
      <h1>Find your perfect pair</h1>
      <Formik
        initialValues={{
          size: '',
          width: '',
          stlye: '',
          color: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >

  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
      
    </div>
    <h1>Find you Perfect pair of shoes!</h1>
    <div>
        <label htmlFor="size">Shoe Size</label>
        <Field id="size" name="size" placeholder="10" />
    </div>
    <div>
          <label htmlFor="width">Foot width?</label>
          </div>
          <div>
          <select htmlFor="width" id="width">
            <option value="xnarrow">Extra Narrow - B</option>
            <option value="narrow">Narrow - C</option>
            <option value="medium">Medium - D</option>
            <option value="wide">Wide - E</option>
            <option value="xwide">Extra Wide - EE</option>
            <option value="uwide">Ultra Wide - EEE</option>
          </select>
        </div>
    <div>
        <label htmlFor="style">Favorite Style</label>
        <Field id="style" name="style" placeholder="sneaker"/>
    </div>
    <div>
      <label htmlFor="color">Favorite Color</label>
      <Field id="color" name="color" placeholder="red">Favorite Color</Field>
    </div>
  );
}

export default App;
