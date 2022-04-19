var http = require('http')
var url = require('url')
var request = require('request')

var server = http.createServer();
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


server.on('request', (req, res) => {
  var requestCode = url.parse(req.url, true).query['request_code'];
  if (!requestCode) {
    return res.end(JSON.stringify({'error': 'request_code is required'}));
  }

  /**
   * curl 'https://verify.meituan.com/v2/ext_api/page_data' \
   *   --data-raw 'requestCode=a0f2b120497e492c9f9e95c3255e5fbf&feVersion=1.5.0&source=3&layer=2' \
   *   --compressed
   */
  request.post({
    url: 'https://verify.meituan.com/v2/ext_api/page_data',
    form: {
      requestCode: requestCode,
      feVersion: '1.5.0',
      source: 3,
      layer: 2
    },
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    },

  }, (err, res1, body) => {
    if (err) {
      return res.end(JSON.stringify({'error': err}));
    }
    // console.debug(body);
    try {
      body = JSON.parse(body);
      if (body.error) {
        return res.end(JSON.stringify({'error': body.error.message}));
      }

      var slide = require('./src/slider.3faebefc38')
      let result = slide.slide(body.data);
      // console.debug({
      //   headers: result.headers,
      // });

      request.post({
        url: 'https://verify.meituan.com/v2/ext_api/merchantlogin/verify',
        form: result.body,
        headers: result.headers,
        // proxy: 'http://127.0.0.1:8888'

      }, (err2, res2, body2) => {
        console.debug(err2 ? err2 : body2);

        if (err2) {
          return res.end(JSON.stringify({'error': err2}));
        }

        return res.end(body2);
      })
    } catch (e) {
      return res.end(JSON.stringify({'error': e.message}));

      // return server.close(() => {
      //   process.exit();
      // });
    }
  })
})

server.listen('9090', '0.0.0.0', () => {
  console.debug('listening: 0.0.0.0:9090');
});
