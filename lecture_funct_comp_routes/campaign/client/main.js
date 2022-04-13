import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar.js'; 
import NavButtons from '../imports/ui/Instruction/NavButtons.js';
import AddCandidates from './../imports/ui/AddCandidates.js';
import {Candidates} from './../imports/api/candidates.js'; 
import RenderCandidates from './../imports/ui/RenderCandidates.js';  

Meteor.startup(() => {
  Tracker.autorun(() => { 

    let title = 'The big Campaign';
    let jsx = (
      <>
        <NavButtons/>

        <TitleBar titleBar_prop={title}/>
        <AddCandidates/>
        <RenderCandidates candidate_prop = {Candidates.find().fetch()}/>
      </>
    );
    ReactDom.render(jsx, document.getElementById('content'));
  });

});