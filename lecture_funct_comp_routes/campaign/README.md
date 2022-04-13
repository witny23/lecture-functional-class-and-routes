
git Lecture: functional component AddCandidates form conversion

GOALS

    Understand the differencee between functional components and class components

    functional vs class component comparison: 
        https://www.twilio.com/blog/react-choose-functional-components 
    when to use functional or component:
        https://dev.to/phanimurari/where-to-use-class-component-and-functional-component-1ed5

    In class components, the render method will be called whenever the state of the components changes.

    On the other hand, the Functional components render the UI based on the props.

    Hooks
        - Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
        - Hooks allow us to "hook" into React features such as state and lifecycle methods.
        - Hooks will not work in React class components.
        - W3C React Hooks: https://www.w3schools.com/react/react_hooks.asp
        - W3C React useState Hook: https://www.w3schools.com/react/react_usestate.asp

    W3C React State: https://www.w3schools.com/react/react_state.asp

    When first learning - class Components should be preferred whenever we have a requirement with the state of the component.

    More advanced - functional components can implement Hooks to use the state and other React features even without writing the Class Component

    FORMS (AddCandidates.js)
        Simplifying React Forms with Hooks
        https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/



Stop runaway node or mongo on windows

taskkill /f /im mongod.exe
taskkill /f /im node.exe





SOLUTION


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