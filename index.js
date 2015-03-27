var Client = require('ftp');

  var c = new Client();
  c.on('ready', function() {
    c.list("/freightlink/newbooking", function(err, list) {
      if (err) throw err;
      console.dir(list);

      /*
      c.get("/freightlink/newconfirmation/" + list[0].name, function(err, readable) {
        console.log ("FTP GET Error is " + err);
        readable.on("data", function(chunk) {
          console.log(chunk.toString());
          c.end();
        });
      });
      */
    });

    /*
    c.put ("./test.txt", "/freightlink/newbooking/test.txt", function(err) {
      if (err) {
        console.log ("Error is " + err);
      }
      else
      {
        console.log ("gravy");
      }
      c.end();
    });
    */

  });
  // connect to localhost:21 as anonymous
  c.connect({
    host: "83.136.168.29",
    user: "FreightLink",
    password: "ED115link"
  });
