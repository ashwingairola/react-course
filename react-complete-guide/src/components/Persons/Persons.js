import React from 'react';

import Person from './Person/Person';

const persons = (props) =>
	props.persons.map((person, i) => (
		<Person
			name={person.name}
			age={person.age}
			key={i}
			click={() => props.clicked(i)}
			changed={(event) => props.changed(event, person.id)}
		/>
	));

export default persons;
