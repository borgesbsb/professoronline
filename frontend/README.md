Install nodejs on virtualenv

$ curl http://nodejs.org/dist/node-latest.tar.gz | tar xvz
$ cd node-v*
$ ./configure --prefix=$VIRTUAL_ENV
$ make install
$ npm install -g {package}