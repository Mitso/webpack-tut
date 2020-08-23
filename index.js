import path from 'path';
import express from 'express';

const webapp = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, 'index.html');

webapp.use(express.static(DIST_DIR));

webapp.get('/',function(req,res){
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 3000
webapp.listen(PORT,function(){
  console.log(`Application is now running on the browser, port ${PORT}!`);
  // console.log('Express Modules',express);
  // console.log('Running Express function', webapp);
})
