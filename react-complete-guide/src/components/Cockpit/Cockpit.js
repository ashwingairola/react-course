import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
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

		setTimeout(() => {
			console.log('Saved data to cloud');
		}, 1000);

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
			<button className={btnClass.join(' ')} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default React.memo(cockpit);
