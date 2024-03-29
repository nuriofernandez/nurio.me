FROM php:apache

# Load site files
COPY ./src /var/www/html

# Update domain variable to use `localhost`
RUN sed -i 's;https:\/\/nurio.me;http:\/\/localhost;g' /var/www/html/index.php
RUN sed -i 's;https:\/\/nurio.me;http:\/\/localhost;g' /var/www/html/assets/js/dynamic-page.js

# Enable apache2 mod to allow url rewrites
RUN a2enmod rewrite