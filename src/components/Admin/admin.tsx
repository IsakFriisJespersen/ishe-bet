import React from 'react';
import UserTable from './userTable'
import AdminNavigation from './adminNavigation'
import RegisterMatchResult from '../RegisterMatchResult/registerMatchResult'

export default class Admin extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      section: 'userAdmin'
    };
  }
  render() {
    const handleSectionChange = (e: any) => {
      this.setState({ section: e.target.id})
      console.log(e.target.id)
    }
    return (
      <div className="w-75 p-3">
        <div className="border border-dark">
          <h3>Admin page</h3>
          <AdminNavigation  onSectionChange={handleSectionChange}/>
          {
            this.state.section === 'userAdmin' ? <UserTable/>
              : <RegisterMatchResult/>  
          }
        </div>
      </div>
    );
  }
}