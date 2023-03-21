const https = require('https');
const fs = require('fs');

https.get('https://s9.yesstreaming.net:7014/stream', (res) => {

  // create a buffer to store the data and on response data event store each chunk of data in the buffer
  const audioBuffer = [];
  res.on('data', (chunk) => {
    audioBuffer.push(chunk);
  });
  
  // close the connection after 5 seconds with end event
  setTimeout(() => {
    res.emit('end');
  }, 6000);
  
  res.on('end', () => {
    // save the buffer as a mp3 file
    const audio = Buffer.concat(audioBuffer);

    // write the buffer to a file
    // set the save directory to audio directory
    fs.WriteStream('./audio/stream.mp3').write(audio);
  });
});

