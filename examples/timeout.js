/*!
 * libnmap
 * Copyright(c) 2013-2018 Jason Gerfen <jason.gerfen@gmail.com>
 * License: MIT
 */

'use strict'

const opts = {
  timeout: 900, // 900s = 10m and increases the reliability of scan results
  range: ['scanme.nmap.org', '192.168.0.0/26']
};


nmap.scan(opts, function(err, report) {
  if (err) throw new Error(err);

  for (let item in report) {
    console.log(report[item]);
  }
});