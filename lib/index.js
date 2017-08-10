var fs = require('fs');
var readline = require('readline');
var path = require('path');

global.appRoot = path.resolve(__dirname);

/**
* Generates our component, store and action
*/

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What domain should we use? ', function (domain) {
    // process.stdout.write('Well hello ' + answer);
    // Console.log creates a formatted output from process.stdout.write().
    rl.question('What is the name of the component? ', function (component) {
    fs.readFile(appRoot + '/templates/component.js', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/test/g, component);
      fs.writeFile('components/' + domain + '/' + component + '.jsx', result, function(err) {
        if(err) {
          return console.log(err);
        }
        console.log('Created component file in ' + domain);
      });
    });

      fs.writeFile('flux/stores/' + domain + '/' + component + 'Store.jsx', 'Hey there!', function(err) {
        if(err) {
          return console.log(err);
        }
        console.log('Created store file in ' + domain);
      });

      fs.writeFile('flux/actions/' + domain + '/' + component + 'Action.jsx', 'Hey there!', function(err) {
        if(err) {
          return console.log(err);
        }
        console.log('Created action file in ' + domain);
      });

      rl.close();
      process.stdin.destroy();
    });
});


