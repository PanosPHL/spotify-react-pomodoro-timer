import React from 'react';
import AudioContext from '../contexts/AudioContext';

const AudioUpload = () => {
    return (
        <AudioContext.Consumer>
            {({ file, updateAudio }) => {
                window.addEventListener('drop', event => {
                    event.preventDefault();
                });

                window.addEventListener('dragover', event => {
                    event.preventDefault();
                });

                const handleFileChange = (event) => {
                    const file = document.querySelector('#audio-file').files[0];
                    updateAudio(file);
                    document.querySelector('label').innerText = `Chosen file: ${file.name}`;
                }

                const handleDragEnter = (event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    const dropZone = document.querySelector('#audio-upload');
                    dropZone.setAttribute('class', 'dragHover');
                    const label = document.querySelector('label');
                    label.classList.add('no-events');

                    dropZone.addEventListener('dragleave', event => {
                        event.stopPropagation();
                        event.preventDefault();
                        dropZone.classList.remove('dragHover');
                        label.classList.remove('no-events');
                    });
                }

                const handleDrop = (event) => {
                    event.stopPropagation();
                    event.preventDefault();

                    document.querySelector('#audio-upload').classList.remove('dragHover');
                    document.querySelector('label').classList.remove('no-events');

                    const file = event.dataTransfer.files[0];
                    updateAudio(file);
                    document.querySelector('label').innerText = `Chosen file: ${file.name}`;
                }

                return (
                    <section id="audio-upload" onDragEnter={handleDragEnter} onDrop={handleDrop}>
                        <h3 id="upload-header" className="no-events">Choose or drag and drop an audio file to play when the timer expires</h3>
                        <input type="file" id="audio-file" accept="audio/*" className="hidden no-events" onChange={handleFileChange} />
                        <label htmlFor="audio-file">Choose a file</label>
                    </section>
                )
            }}
        </AudioContext.Consumer>
    )
}

export default AudioUpload;