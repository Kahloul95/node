var moduleFile = require('./make-it-modular2');

moduleFile(process.argv[2], process.argv[3], function(err, data){
    data.forEach(function(file){
        console.log(file);
    });
});