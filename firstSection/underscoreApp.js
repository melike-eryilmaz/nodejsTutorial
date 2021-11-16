var _ = require('underscore');

var numbers = [1,23,12,45,89,99];

console.log(_.min(numbers));


/**
 * Npm commands 
 * npm init --yes   -->package.json
 * npm install packagename    -->dependencies
 * npm i packagename   --save-dev  -->devDependencies
 * npm i packagename --global   -->global install
 * npm list -g -->global packages
 * npm list -g --depth 0 -->only package names global installed
 * "packagename":"^4.5.1"   ; major.minor.patch --> base version.newfeature.sovederror
 * npm uninstall packagename -->uninstall package
 * npm start
 * npm run start-dev
 * 
 * nodemon app
 */