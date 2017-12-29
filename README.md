# jeff-park.com
This portfolio is written using **Node.js**, **EJS**, **HTML**, **SASS**. 
The blog is written using [hexo.js](https://hexo.io/).

#   Creating a new blog post:

Create a new blog post with: 

```
hexo new "title of blog" 
```

Generate the static file with:

```
hexo generate
```

To deploy to remote sites:

```
hexo deploy
```

# Creating a new portfolio page: 

Edit the server.js

```
app.get('/path/to/page/URL', function(req, res) {
    res.render('pages/work/nameofEJSfile');
});
```

Create a corresponding EJS view file under /views/pages/work

sample.ejs
```
<!-- views/pages/sample.ejs -->

<!DOCTYPE html>
<html lang="en">
<title>Jeff Park - Sample Piece</title>
<head>
    <% include ../../partials/foliohead %>
</head>
<body class="portfolio-container">
    <div class="title-container">
    <h1>Sample Piece</h1>
    <% include ../../partials/navi %>
    </div>
    <% include ../../partials/uc %>
</body>
</html>
```

# Run a local version of the portfolio: 

```
npm install
nodemon server
npm run watch-css
```

# ssh into the console with 

```
ssh jpark@<IP>
```

Configure additional requests by editing location block at 
```
sudo nano /etc/nginx/sites-available/default
```
Then check syntax errors and then restart Nginx
```
sudo nginx -t
sudo systemctl restart nginx
```