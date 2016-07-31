var fs = require('fs')
fs.writeFile('./.git/hooks/pre-commit', '#!/bin/sh \n \
\
PATH=$PATH:/usr/local/bin \n \
\
remote="$1" \n \
url="$2" \n \
\
HOME=`pwd`  \n \
ROOT_IHM=\'' + __dirname + '/../\' \n \
cd $ROOT_IHM \n \
for file in $(git diff --cached --name-only | grep -E \'\.(js|jsx)$\') \n \
do \n \
  git show ":$file" | ./node_modules/.bin/eslint --stdin --stdin-filename "$file"  \n \
  if [ $? -ne 0 ]; then \n \
    echo "ESLint failed on \'$file\'." \n \
    exit 1  \n \
  fi \n \
done \n \
cd $HOME \n \
exit 0', function (err) {
  if (err) {
    return console.log(err)
  }
  fs.chmodSync('./.git/hooks/pre-commit', '755')

  return console.log('Hook installed pre-commit')
})
