class Worker {
    constructor(worker, settings) {
        this.worker = worker;
        this.settings = settings;
    }

    async work() {
        this.worker(this.settings.url, this.settings.recordingLength, this.settings.recordingName);
    }
}

module.exports = Worker;