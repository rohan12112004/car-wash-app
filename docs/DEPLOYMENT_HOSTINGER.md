# Hostinger Deployment Guide

As your business scales, you may want to move away from PaaS providers (like Vercel/Render) to a more cost-effective VPS solution like Hostinger.

## When to Switch?
- When Render's free tier sleeps and causes cold starts.
- When you need a predictable, flat monthly server cost.
- When you require direct access to server file systems or background cron jobs.

## Deployment Paths

### Option A: Shared Hosting + External Backend
Hostinger's standard shared hosting only supports PHP/static files. You can host the built React `/dist` folder on Hostinger shared hosting, but you **still need a Node.js host** (like Render/Railway) for the backend.

### Option B: Hostinger VPS (Recommended for full MERN)
If you purchased a Hostinger VPS, you have a blank Linux machine (usually Ubuntu). You will host both frontend and backend here.

---

## VPS Full MERN Deployment Steps

### 1. Initial VPS Setup
SSH into your Hostinger VPS:
```bash
ssh root@your_vps_ip
```

Update packages and install dependencies:
```bash
apt update && apt upgrade -y
apt install nodejs npm nginx git -y
npm install -g pm2
```

### 2. MongoDB Setup
You can either continue using MongoDB Atlas (recommended) or install MongoDB locally on the VPS. If using Atlas, ensure your VPS IP address is added to the Atlas Network Access whitelist.

### 3. Clone and Setup Project
```bash
cd /var/www
git clone <your-repo-url> car-wash-app
cd car-wash-app
```

### 4. Build Frontend
```bash
cd client
npm install
# Create .env with production API URL (e.g. VITE_API_URL=https://api.yourdomain.com/api)
npm run build
```
The static files will be in `/var/www/car-wash-app/client/dist`.

### 5. Setup Backend with PM2
```bash
cd ../server
npm install
# Create production .env here
```
Start the server using PM2 to keep it running in the background:
```bash
pm2 start index.js --name "carwash-api"
pm2 save
pm2 startup
```

### 6. Nginx Configuration
Nginx will serve the React static files and act as a reverse proxy for the Node backend.

Create a new configuration file:
```bash
nano /etc/nginx/sites-available/carwash
```

Paste the following configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Serve Frontend
    location / {
        root /var/www/car-wash-app/client/dist;
        index index.html;
        try_files $uri $uri/ /index.html; # crucial for React Router
    }

    # Proxy Backend API requests
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site and restart Nginx:
```bash
ln -s /etc/nginx/sites-available/carwash /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

### 7. SSL Certificate Setup
Secure your site with a free Let's Encrypt certificate using Certbot:
```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### 8. Vercel-Specific Code Removal
If moving completely away from Vercel, search the frontend codebase for comments marked `VERCEL-ONLY`. 
- Remove `@vercel/analytics` and `@vercel/speed-insights` imports and components from `main.jsx` or `App.jsx`.
- You no longer need `vercel.json`.

### 9. DNS Pointing
In Hostinger's DNS Zone Editor, create `A` records pointing your domain (and `www`) to your VPS IP address.
