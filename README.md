### 100x100

Run the app with:

    $ node app.js	

Open your browser in http://localhost:3001, you should see a grid 100x100.

From command line, doing a GET http://localhost:3001/10/20/ff0000 you will change the color 
of the square at 10,20 to #ff0000. I know it should be a PUT.

    $ wget http://localhost:3001/10/20/ff0000

Then from command line you can use [Siege](http://www.joedog.org/siege-home/) to run a load test like this

    $ siege -c 200 -f Troll-face-urls.txt


