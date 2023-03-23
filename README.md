Small project to connect to online audio stream and save it
- will save the recording at set times using cron jobs
- will set the name of the recording based on the time and other custom logic
- can email the recording as attachment

## MUST HAVE
// TODO: Add a worker to handle the http protocol
// TODO: Add UI for the user to add streams which will haved to be recorded
// TODO: Create a database to store the streams that need to be recorded
// TODO: add cron job to query the database for streams that need to be recorded every minute
// TODO: send email to user with the recording attached
// TODO: add a way to delete recordings
// TODO: add a way to delete streams from the database
// TODO: add a way to edit streams in the database
// TODO: update the readme file with the deployment instructions
// TODO: add audio player to stream the recordings

## GOOD TO HAVE
// TODO: add posibility to save recording to external drives (S3, Google Drive, etc)