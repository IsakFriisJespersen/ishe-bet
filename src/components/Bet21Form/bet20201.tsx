import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
enum GenderEnum {
  female = "female",
  male = "male",
  other = "other"
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}


export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data)
  };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input name="firstName" ref={register} className="form-control"/>
        <label>Gender Selection</label>
        <select name="gender" ref={register} className="form-control">
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    );
  }