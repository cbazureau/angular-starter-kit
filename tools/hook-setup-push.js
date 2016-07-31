var fs = require('fs');
fs.writeFile("./.git/hooks/pre-push", "#!/bin/sh \n \
\
PATH=$PATH:/usr/local/bin \n \
\
remote=\"$1\" \n \
url=\"$2\" \n \
\
HOME=`pwd`  \n \
ROOT_IHM='"+__dirname+"/../' \n \
\
 GULP_TEST='gulp test' \n \
\
 cd $ROOT_IHM \n \
\
  $GULP_TEST \n \
\
  RESULT=$? \n \
   if [ $RESULT -ne 0 ]; then \n \
        echo 'npm test failed' \n \
        exit 1 \n \
   fi \n \
\
cd $HOME \n \
exit 0", function(err) {
  if(err) {
    return console.log(err);
  }
  fs.chmodSync("./.git/hooks/pre-push","755")

  return console.log("Hook installed pre-push");

});
