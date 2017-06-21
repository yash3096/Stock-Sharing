var request = require('request'); 
var express = require('express'); 
var router = express.Router(); 
 
var i=1; 
var market; 
var company; 
 
/* 
router.get('/', function(req, res, next) { 
     market = req.query.market; 
     company = req.query.company; 
*/ 
function getStock() { 
    if(i%2==0) 
    { 
        market="NASDAQ"; 
        company="GOOG"; 
    } 
    else 
    { 
 
        market="NASDAQ"; 
        company="AAPL"; 
    } 
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 
    request({ 
        method: 'GET', 
        url: 'http://finance.google.com/finance/info?client=ig&q=' + market + ':' + company, 
        //http://finance.google.com/finance/info?client=ig&q=NSE:HP 
        //https://www.google.com/finance/info?q=NYSE:FAX 
    }, function (error, response, body) { 
        //res.setHeader('Content-Type', 'application/json'); 
        // res.setHeader('Content-Type', 'application/json'); 
        if (!error && response.statusCode == 200) { 
            // console.log(body+"\n\n\n\n\n ") 
            // var object = JSON.parse(body.slice(3)); 
             console.log(body); 
             /*console.log("\n\n\n\n\n"); 
             */ //res.send(object); 
            var fs = require('fs'); 
            fs.writeFile("/mnt/rdisk/stockdetails.txt", body.slice(3), function (err) { 
                if (err) { 
                    return console.log(err); 
                } 
            }); 
        } 
        else console.log(error); 
    }); 
    i++; 
 
} 
//}); 
 
setInterval(getStock, 5000); 
 
        module.exports = router;