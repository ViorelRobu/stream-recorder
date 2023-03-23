const { httpsWorker, httpWorker } = require('./workers/workers.js');
const Worker = require('./workers/Worker.js');

const settings = {
    url: 'https://s9.yesstreaming.net:7014/stream',
    recordingLength: 6000,
    recordingName: 'rvesv'
}

const worker = new Worker(httpsWorker, settings);

(async function (){
  await worker.work();
})();

