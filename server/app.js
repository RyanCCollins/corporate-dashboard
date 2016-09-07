/* eslint-disable */
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1338 : process.env.PORT;
const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');
const _ = require('lodash');

function getFile(filename, ext = '.json') {
  return path.join(__dirname + '/data/' + filename + ext);
}

function csvToJson(csv) {
  const content = csv.split('\n');
  const header = content[0].split(',');
  return _.tail(content).map((row) => {
    return _.zipObject(header, row.split(','));
  })
}

app.use(express.static(__dirname + '/public'));
app.use('/data', express.static(__dirname + '/data'));

app.get('/api/:type', (req, res) => {
  if(req.params.type === 'customers') {
    const filename = req.params.type + '.csv';
    const filePath = path.join(__dirname, '/data/' + filename)
    const file = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const jsonData = csvToJson(file);
    res.send(jsonData);
  } else {
    res.sendFile(getFile(req.params.type));
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    return console.warn(err);
  }
  return console.info(`==> 😎 Listening on port ${port}. Open http://0.0.0.0:${port}/ in your browser.`);
});
/* eslint-enable */
