
git Lecture/Challenge: React Forms Solution

GOALS

    Understand how to create forms using useState hook



    FORMS
        W3C React Forms: https://www.w3schools.com/REACT/react_forms.asp

        Simplifying React Forms with Hooks
        https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

        W3C React Hooks: https://www.w3schools.com/react/react_hooks.asp
        W3C React useState Hook: https://www.w3schools.com/react/react_usestate.asp

        W3C HTML Forms: https://www.w3schools.com/html/html_forms.asp


Stop runaway node or mongo on windows

taskkill /f /im mongod.exe
taskkill /f /im node.exe



Form.js

import React, { useState } from 'react'; 
import {Candidates} from './../api/candidates.js';

export default AddCandidates = () => {
  {/* The following is used to hold and set the new candidate's name */}
  const [candidateName_state, setCandidateName] = useState('');

  {/* the following is going to handle the submission of the form */}
  const processFormDataFunction = (event) => {  
    event.preventDefault(); {/* don't let the page refresh */}
  
    if(candidateName_state){  {/* verify that this is not an empty string */}
      Candidates.insert({     
          name: candidateName_state,
          votes: 0,
      });
      setCandidateName('');   {/* clear the form of the name that was entered */}
    };
  };
    return (
      <>
        <form onSubmit={processFormDataFunction}>
          <label>
            <input  type='text' 
                    value={candidateName_state}
                    placeholder='Candidate Name'
                    // annonymous arrow function that passes event to the expression
                    // basically, update the state for every letter entered
                    onChange={event => setCandidateName(event.target.value)} />
          </label>
          <button>Add Candidate</button>
        </form>
        <hr />
      </>
    )
};

client/main.js

import Form from './../imports/ui/Form.js';

{/* <AddCandidates/> */}
<Form />



Candidate.js

| Important Campaign Topic: {props.candidate_prop.topic}
| Party: {props.candidate_prop.party}



Form.js

import React, { useState } from 'react'; 
import {Candidates} from '../api/candidates.js';

export default Form = () => {

  const [candidateName_state, setCandidateName] = useState('');
const [party_state, setParty] = useState('');
const [topic_state, setTopic] = useState('');


  const processFormDataFunction = (event) => {  
    event.preventDefault(); 
console.log(party_state);
console.log(topic_state);
    if(candidateName_state){  
      Candidates.insert({     
          name: candidateName_state,
          votes: 0,
topic: topic_state,
party: party_state,
      });
      setCandidateName('');  
    };
  };
    return (
      <>
        <form onSubmit={processFormDataFunction}>
            <input  type='text' 
                    value={candidateName_state}
                    placeholder='Candidate Name'
                    onChange={event => setCandidateName(event.target.value)} />
<br></br>            
<select onChange={event => setTopic(event.target.value)}>
  <option value="">Important Topic</option>
  <option value="Education">Education</option>
  <option value="Economy">Economy</option>
  <option value="Environment">Environment</option>
</select>

<br></br>   
<label><input type="radio" name="party" value="Democrat" 
        onChange={event => setParty(event.target.value)}/>Democrat</label>
<label><input type="radio" name="party" value="Republican" 
        onChange={event => setParty(event.target.value)}/>Republican</label>
<label><input type="radio" name="party" value="Green" 
        onChange={event => setParty(event.target.value)}/>Green</label>
<br></br>

          <button>Add Candidate</button>
        </form>
        <hr />
      </>
    )
};



