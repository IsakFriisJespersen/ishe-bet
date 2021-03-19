import React, { useState, EventHandler } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import LoginForm from './loginform'
import Navbar from './navbar'
import Signup from './signup'


export default class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
          section: 'login'
        };
      }

    render() {
        const handleSectionChange = (e: any) => {
            this.setState({ section: e.target.id})
            console.log(e.target.id)
        }
        return (
          <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Login
            </button>
            
            <div className="modal fade" id="exampleModal" tabIndex={ -1 } role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Access</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <Navbar onSectionChange={handleSectionChange}/>
                    {this.state.section == 'login' ? <LoginForm/> : <Signup/>}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>

          </div>
      );
    }
  }