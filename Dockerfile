# Use the official NGINX image as the base image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove default NGINX static files
RUN rm -rf ./*

# Enable 404 page
RUN sed -i 's|#error_page  404              /404.html;|error_page  404              /404.html;|' /etc/nginx/conf.d/default.conf


# Copy your static website files to the container
COPY src/ .

# Expose port 80 for web traffic
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
