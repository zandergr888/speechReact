import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './Dictaphone.css'; // Importing the CSS file

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span className="error">Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="dictaphone">
      <p className="microphone-status">Microphone: {listening ? 'on' : 'off'}</p>
      <button className="btn start" onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
      <button className="btn stop" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className="btn reset" onClick={resetTranscript}>Reset</button>
      <p className="transcript">{transcript}</p>
    </div>
  );
};

export default Dictaphone;
