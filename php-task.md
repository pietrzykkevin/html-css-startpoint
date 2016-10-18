# PHP

# Learn

1. Follow the [PHP](https://www.codecademy.com/learn/php) course.

# Prepare environment
1. Install [XAMPP with PHP 7](https://www.apachefriends.org/download.html)
1. Launch it.
1. Copy your current project (repository) to the root of the Apache folder (Apache is a server implmentation that will serve your website).
1. Verify that your application is available at [http://localhost](http://localhost)
1. Install [PHPStorm](https://www.jetbrains.com/phpstorm/) for easier development.

# Task

1. Create your server that will provide similar features as [the Cat API](http://thecatapi.com/).
1. Find some cat photos to serve [😺](https://github.com/maxogden/cats).
1. Use [Slim framework](http://www.slimframework.com/) to build the API 
 1. create handler for the `api/images/get` URL 
 1. return XML output similar to what Cat API returns.
1. Your code should pick a random image from the directory where you have downloaded sample cat photos.
1. Enhance your frontend code so it now uses your server instead of the Cat API.

# Hints

1. If you have no idea how to structure your app, try:
    ```
     /cat-photos
     /js
     /css
     index.html
     api.php
    ```
   
1. In order to redirect requests to `/api/*` to the `api.php` file, create a `.htaccess` file in the root directory with:
   ```
   RewriteEngine On
   RewriteRule ^api/ api.php
   ```
   Slim framework will take care about the rest.

1. You should stop using `gulp` with this task as Apache will serve the files to the browser for you (unfortunately, hot reload will not work for now).
