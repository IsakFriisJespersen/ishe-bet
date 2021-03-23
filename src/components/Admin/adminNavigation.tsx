import React from 'react'

export default function AdminNavigation(props: any) {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
			  <form className="form-inline">
			    <button className="btn btn-outline-success" id="userAdmin" type="button" onClick={props.onSectionChange}>User Administration</button>
			    <button className="btn btn-outline-primary" id="matchRegistration" type="button" onClick={props.onSectionChange}>Register Match Result</button>
			  </form>
			</nav>
		</div>
	);
}