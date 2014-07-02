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


