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
        <label>Name</label>
        <input name="email" ref={register} className="form-control"/>
        <label>Email</label>
        <input name="email" ref={register} className="form-control"/>
        <label>Password</label>
        <input name="password" className="form-control" type="password"></input>
        <label>Password again</label>
        <input name="password" className="form-control" type="password"></input>
      </form>
    );
  }