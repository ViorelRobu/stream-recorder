exports.index  = async (req, res) => {
  res.render('index', { title: 'Stream Recorder', streams: [{id: 1, name: 'rvesv', date: '02-02-2023', description: 'Inregistrare RVESV test'}] })
}