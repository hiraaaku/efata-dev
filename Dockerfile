FROM nginx:alpine

# Ganti default Nginx listen port dari 80 ke 3010
RUN sed -i 's/80;/3010;/' /etc/nginx/conf.d/default.conf

# Salin hasil build landing page ke direktori HTML Nginx
COPY dist /usr/share/nginx/html

# Ekspose port 3010
EXPOSE 3010

CMD ["nginx", "-g", "daemon off;"]
