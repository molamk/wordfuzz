import https from 'https';

export const get = (query: string) =>
  new Promise((resolve, reject) => {
    const req = https.get(
      {
        headers: { 'Content-Type': 'application/json' },
        host: 'api.datamuse.com',
        path: `/words?${query}`
      },
      res => {
        res.setEncoding('utf-8');
        if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
          return reject(new Error('statusCode=' + res.statusCode));
        }
        let rawBody = '';
        let body = {};
        res.on('data', (chunk: string) => (rawBody = chunk));
        res.on('end', () => {
          try {
            body = JSON.parse(rawBody);
          } catch (e) {
            reject(e);
          }
          resolve(body);
        });
      }
    );
    req.on('error', err => reject(err));
    req.end();
  });
