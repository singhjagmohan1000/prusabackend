let Parser = require('rss-parser');
let parser = new Parser();

module.exports = {
  getNews: (req, res, next) => {

          parser.parseURL('https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en',function(err,results){
            if(err)
            {console.log(err);
            res.status(404).send("Something Went Wrong! News will be back soon")
            }

               res.status(200).send(results);}
          );



  }
};

