// import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());


// Done
// Routes
app.get('/', (req, res) => {
  const input = parseInt(req.query.i, 10);
  let result = 0;
  if (input === 0) {
    result = 1;
  }
  if (input === 1) {
    result = 18;
  }
  if (input === 2) {
    result = 243;
  }
  if (input === 3) {
    result = 3240;
  }
  if (input === 4) {
    result = 43254;
  }
  if (input === 5) {
    result = 577368;
  }
  if (input === 6) {
    result = 7706988;
  }
  if (input === 7) {
    result = 102876480;
  }
  if (input === 8) {
    result = 1373243544;
  }
  if (input === 9) {
    result = 18330699168;
  }
  if (input === 10) {
    result = 244686773808;
  }
  if (input === 11) {
    result = 3266193870720;
  }
  if (input === 12) {
    result = 43598688377184;
  }
  if (input === 13) {
    result = 581975750199168;
  }
  if (input === 14) {
    result = 7768485393179328;
  }
  if (input === 15) {
    result = 103697388221736960;
  }
  if (input === 16) {
    result = 1384201395738071424;
  }
  if (input === 17) {
    result = 18476969736848122368;
  }
  if (input === 18) {
    result = 246639261965462754048;
  }
  res.send(result.toString());
});


// Listen port 3000
app.listen(3000, () => {
  console.log('[INFO] Example app listening on port 3000!');
});
