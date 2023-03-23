const https = require('https');
const http = require('http');
const fs = require('fs');

const httpsWorker = (url, recordingLength, recordingName) => {
  https.get(url, (res) => {
    // create a buffer to store the data and on response data event store each chunk of data in the buffer
    const audioBuffer = [];
    res.on('data', (chunk) => {
      audioBuffer.push(chunk);
    });

    // close the connection after the recording length has been achieved
    setTimeout(() => {
      res.emit('end');
    }, recordingLength);

    res.on('end', () => {
      // process the buffer and write the audio file
      const audio = Buffer.concat(audioBuffer);
      fs.WriteStream(`${__dirname}/../../public/audio/${recordingName}.mp3`).write(audio);
    });
  });
};

const httpWorker = (url, recordingLength, recordingName) => {
  http.get(url, (res) => {
    // create a buffer to store the data and on response data event store each chunk of data in the buffer
    const audioBuffer = [];
    res.on('data', (chunk) => {
      audioBuffer.push(chunk);
    });

    // close the connection after the recording length has been achieved
    setTimeout(() => {
      res.emit('end');
    }, recordingLength);

    res.on('end', () => {
      // process the buffer and write the audio file
      const audio = Buffer.concat(audioBuffer);
      fs.WriteStream(`${__dirname}/../../public/audio/${recordingName}.mp3`).write(
        audio,
      );
    });
  });
};

module.exports = {
  httpsWorker,
  httpWorker,
};