const Crawler = require('crawler');

const c = new Crawler({
    encode: null,
    // This will be called for each crawled page
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($('#').text());
        }
        done();
    }
});

const anime = c.queue('https://www.intoxianime.com/')
console.log(anime);