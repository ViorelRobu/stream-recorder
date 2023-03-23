Small project to connect to online audio stream and save it
- will save the recording at set times using cron jobs
- will set the name of the recording based on the time and other custom logic
- can email the recording as attachment

## MUST HAVE
- Add UI for the user to add streams which will haved to be recorded
- Create a database to store the streams that need to be recorded
- add cron job to query the database for streams that need to be recorded every minute
- send email to user with the recording attached
- add a way to delete recordings
- add a way to delete streams from the database
- add a way to edit streams in the database
- update the readme file with the deployment instructions
- add audio player to stream the recordings

## GOOD TO HAVE
- add posibility to save recording to external drives (S3, Google Drive, etc)
- test if a stream can be recorded by connecting to it and playing into the speakers/headphones