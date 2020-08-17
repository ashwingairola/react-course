import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
	const toggleBtnRef = useRef(null);
	/*
        Don't access refs before any render cycles have completed.
        Use it inside useEffect.
    */
	// toggleBtnRef.current.click();

	/*
        Pass a list of dependencies as the 2nd argument. The component
        will update only if those dependencies change.
    */
	// useEffect(() => {
	// 	console.log('[Cockpit.js] useEffect');

	// 	setTimeout(() => {
	// 		console.log('Saved data to cloud');
	// 	}, 1000);
	// }, [props.persons]);

	/*
        Pass an empty list to make useEffect invoke only once - 
        when the component is mounted.
    */
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');

		// setTimeout(() => {
		// 	console.log('Saved data to cloud');
		// }, 1000);

		toggleBtnRef.current.click();

		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect');
		};
	}, []);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');

		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect');
		};
	});

	const authContext = useContext(AuthContext);
	console.log(authContext.authenticated);

	let assignedClasses = [];
	let btnClass = [];

	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red);
	}

	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold);
	}

	if (props.showPersons) {
		btnClass.push(classes.Red);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button
				className={btnClass.join(' ')}
				onClick={props.clicked}
				ref={toggleBtnRef}
			>
				Toggle Persons
			</button>
			<button onClick={authContext.login}>Log In</button>
		</div>
	);
};

export default React.memo(cockpit);
