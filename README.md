### 100x100

Install modules dependencies with:

    $ npm install

and run the app with:

    $ node app.js	

Point your browser to http://localhost:3001 and you should see a grid of 100x100 black squares.

From command line, doing a GET http://localhost:3001/10/20/ff0000 you will change the color 
of the square at position 10,20 to the color #ff0000. I know it should be a PUT.

    $ wget http://localhost:3001/10/20/ff0000

Then from command line you can use [Siege](http://www.joedog.org/siege-home/) to run a load test like this

    $ siege -c 200 -f Troll-face-urls.txt

### Example

There's an example running on [http://unterdenlinden.biz:3001](http://unterdenlinden.biz:3001)

You can create "personal" grids giving a name as parameter, for example, visit:

 [http://unterdenlinden.biz:3001/personal-grid-i-want-to-share](http://unterdenlinden.biz:3001/personal-grid-i-want-to-share)

and draw using this URL 

    GET http://unterdenlinden.biz:3001/personal-grid-i-want-to-share/:x/:y/:rbg         

The grid is not persistent, so share the link before start drawing :S. Next version I'll save grid status.

**Yes, is node running on port 3001. Be nice.**

