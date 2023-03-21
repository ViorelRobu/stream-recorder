const https = require('https');
const fs = require('fs');

const httpsWorker = (url, recordingLength, recordingName) => {
  https.get(url, (res) => {
    // create a buffer to store the data and on response data event store each chunk of data in the buffer
    const audioBuffer = [];
    res.on('data', (chunk) => {
      audioBuffer.push(chunk);
    });

    // close the connection after the redording length has been achieved
    setTimeout(() => {
      res.emit('end');
    }, recordingLength);

    res.on('end', () => {
      // process the buffer and write the audio file
      const audio = Buffer.concat(audioBuffer);
      fs.WriteStream(`${__dirname}/../../audio/${recordingName}.mp3`).write(audio);
    });
  });
};

exports.httpsWorker = httpsWorker;