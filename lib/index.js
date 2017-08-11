var fs = require('fs');
var readline = require('readline');
var path = require('path');

global.appRoot = path.resolve(__dirname);

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Let's find out what domain we need and what the name of the component is
rl.question('What domain should we use? ', function (domain) {
    rl.question('What is the name of the component? ', function (component) {
    
    // Reading component template
    fs.readFile(appRoot + '/templates/component.js', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      // Set up our templates with proper naming and imports
      // Component template:
      var result = data.replace(/test/g, component);
      var storeResult = result.replace(/testStore/g, component + 'Store');
      var domainResult = storeResult.replace(/domain/g, domain);
      var finalresult = domainResult.replace(/testActions/g, component + 'Actions');
      
      // Writing component file
      fs.writeFile('components/' + domain + '/' + component + '.jsx', finalresult, function(err) {
        if(err) {
          return console.log(err);
        }
        console.log('Created component file in ' + domain);
      });

      // Reading store template
      fs.readFile(appRoot + '/templates/store.js', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

        // Set up our templates with proper naming and imports
        // Store template: 
        var actions = data.replace(/testActions/g, component + 'Actions');
        var store = actions.replace(/store/g, component + 'Store');
        var finalresult = store.replace(/domain/g, domain);

        // Writing store file
        fs.writeFile('flux/stores/' + domain + '/' + component + 'Store.jsx', finalresult, function(err) {
          if(err) {
            return console.log(err);
          }
          console.log('Created store file in ' + domain);
        });
      });

      // Reading actions template
      fs.readFile(appRoot + '/templates/actions.js', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

        // Set up our templates with proper naming and imports
        // Actions template: 
        var actions = data.replace(/actions/g, component + 'Actions');

        // Writing store file
        fs.writeFile('flux/actions/' + domain + '/' + component + 'Actions.jsx', actions, function(err) {
          if(err) {
            return console.log(err);
          }
          console.log('Created store file in ' + domain);
        });
      });
      rl.close();
      process.stdin.destroy();
    });
  });
});


