# jeff-park.com
Code for my website

Here are instructions

This portfolio is written using Node.js, EJS. 
The blog is written using hexo.js

To create a new blog post:

To create a new portfolio page: 

add the following to server.js

and then create a new file under /views/pages/work

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

To run a local version of the portfolio: 

```
npm install
node server
```

