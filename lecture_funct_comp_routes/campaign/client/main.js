import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Candidates} from './../imports/api/candidates.js'; 
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar.js'; 
import AddCandidates from './../imports/ui/AddCandidates.js';
import Overview from '../imports/ui/Instruction/Overview.js';
import Candidate from './../imports/ui/Candidate.js';  

const renderCandidates = (candidateObject) => {
  let candidateInfo = candidateObject.map((candidate) => {
    return <Candidate key={candidate._id} candidate_prop={candidate} />;
  });
  return candidateInfo;
};




Meteor.startup(() => {
  Tracker.autorun(() => { 

    let candidates = Candidates.find().fetch();
    let title = 'The big Campaign';
    footer_content = 'my footer';
    let jsx = (
      <>
        <Overview />

        <hr></hr>
        <TitleBar title_prop={title}/>

        <AddCandidates/>
        {renderCandidates(candidates)}
        
      </>
    );
    ReactDom.render(jsx, document.getElementById('content'));
  });

});