import { React, forwardRef } from 'react';

import chessGif from '../../assets/gifs/chess.gif';
import whiskerGif from '../../assets/gifs/whisker-watch.gif';
import redGif from '../../assets/gifs/red-horizon.gif';
import carrotGif from '../../assets/gifs/crusty-carrots.gif';
import overlookGif from '../../assets/gifs/overlook-hotel.gif';
import cookingGif from '../../assets/gifs/whats-cookin.gif';
import rockGif from '../../assets/gifs/rps.gif';
import './Project.css';

const Project = forwardRef(({ id, title, description, collaborators, projectNotes, repo, liveSite, handleClickToClose }, ref) => {
  const gifs = {
    1: chessGif,
    2: whiskerGif,
    3: redGif,
    4: carrotGif,
    5: overlookGif,
    6: cookingGif,
    7: rockGif
  };

  const notes = Array.isArray(projectNotes) ? projectNotes.map((note, index) => (
    <div key={index}>
      <p>{note}</p>
    </div>
  )) : null;

  return (
    <section id={id} className='project-section' ref={ref}> 
      <header className='project-header'>
        <h2>{title}</h2>
        <button onClick={handleClickToClose} className='close-button'>Close</button>
      </header>
      <p>{description}</p>
      <img src={gifs[id]} alt={`${title} preview`} />
      {collaborators && collaborators.length > 0 ? (
        <>
          <h3>Co-Collaborators:</h3>
          <div className='team-of'>Team of - {collaborators.length + 1}</div>
          <div>{collaborators.join(', ')}</div>
        </>
      ) : (
        <h3>Solo project</h3>
      )}
      <h4>Project Notes:</h4>
      <div>{notes}</div>
      <div className='project-link-wrapper'>
        <a href={repo} className='project-link' target="_blank" rel="noopener noreferrer">Code Repo</a>
        {liveSite && <a href={liveSite} className='project-link' target="_blank" rel="noopener noreferrer">Live Site</a>}
      </div>
    </section>
  );
});

export default Project; 
