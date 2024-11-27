# #!/bin/bash
# # Obtain SSL certificate
# sudo certbot certonly --nginx -n --agree-tos --email tkuang5176@gmail.com -d tylerkuang.com -d www.tylerkuang.com

# # Create Nginx HTTPS configuration
# sudo tee /etc/nginx/conf.d/https.conf > /dev/null << EOL
# server {
#     listen 80;
#     server_name tylerkuang.com www.tylerkuang.com;
#     return 301 https://\$host\$request_uri;
# }

# server {
#     listen 443 ssl;
#     server_name tylerkuang.com www.tylerkuang.com;

#     ssl_certificate /etc/letsencrypt/live/tylerkuang.com/fullchain.pem;
#     ssl_certificate_key /etc/letsencrypt/live/tylerkuang.com/privkey.pem;

#     ssl_protocols TLSv1.2 TLSv1.3;
#     ssl_prefer_server_ciphers on;
#     ssl_ciphers HIGH:!aNULL:!MD5;

#     location / {
#         proxy_pass http://127.0.0.1:8080;
#         proxy_set_header Host \$host;
#         proxy_set_header X-Real-IP \$remote_addr;
#         proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto \$scheme;
#     }
# }
# EOL

# # Create cron job for certificate renewal
# sudo tee /etc/cron.d/certbot-renew > /dev/null << EOL
# 0 0 * * * root certbot renew --quiet && systemctl reload nginx
# EOL