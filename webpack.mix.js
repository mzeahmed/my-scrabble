const mix = require('laravel-mix');

mix.setPublicPath('dist');

mix.js('src/app.js', 'js');
mix.sass('assets/app.scss', 'css');
