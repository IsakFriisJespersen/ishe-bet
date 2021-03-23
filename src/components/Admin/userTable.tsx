import React from "react";


export default class UserTable extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
          users: [
            {
                'id': '134342314<fasdfasdf',
                'name': 'gigday',
                'email': 'isak@gmail.com',
                'hasPayed': true,
            },
            {
                'id': 'adkfdash437',
                'name': 'gigday',
                'email': 'isak@gmail.com',
                'hasPayed': false,
            }   
        ]
        };
      }
    render() {
        return (
            <div className="w-50 p-3">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">hasPayed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map( (user: any) => {
                                return (
                                    <tr>
                                        <th scope="row">{ user.id }</th>
                                        <td>{ user.name }</td>
                                        <td>{ user.email }</td>
                                        <td>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                                                <label className="custom-control-label" htmlFor="customSwitch1" />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
  } 