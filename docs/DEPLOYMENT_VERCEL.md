# Vercel & Render Deployment Guide

This guide covers the standard deployment path: deploying the React frontend to Vercel and the Express backend to a platform like Render or Railway.

## Step 1: Push to GitHub

Ensure your entire monorepo is pushed to a GitHub repository.

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

## Step 2: Deploy Backend (Render)

We deploy the backend first so we have the API URL ready for the frontend.

1. Create an account on [Render.com](https://render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub account and select your `car-wash-app` repository.
4. Setup configuration:
   - **Name**: `car-wash-api`
   - **Root Directory**: `server` (CRITICAL: this tells Render to only look in the server folder)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start` (Ensure your `package.json` has `"start": "node index.js"`)
5. Scroll down to **Environment Variables** and add all variables from your `server/.env` file.
   - *Important*: Set `CLIENT_URL` to what your Vercel frontend URL *will* be (e.g., `https://my-car-wash.vercel.app`).
6. Click **Create Web Service**. Wait for the deployment to succeed. Note the deployment URL (e.g., `https://car-wash-api.onrender.com`).

## Step 3: Deploy Frontend (Vercel)

Vercel is optimized for frontend deployments.

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New Project**.
3. Import your `car-wash-app` GitHub repository.
4. **Project Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `client` (CRITICAL: Click edit and select the `client` folder)
   - The build command (`npm run build`) and output directory (`dist`) should auto-populate correctly for Vite.
5. **Environment Variables**:
   - `VITE_API_URL`: The URL you got from Render in Step 2 + `/api` (e.g., `https://car-wash-api.onrender.com/api`).
   - `VITE_RAZORPAY_KEY_ID`: Your Razorpay key.
6. Click **Deploy**.

*Note: The `vercel.json` file in the root of the project helps Vercel understand the routing and monorepo structure.*

## Step 4: Enable Analytics

1. In the Vercel Dashboard for your project, click the **Analytics** tab.
2. Click **Enable** for Web Analytics.
3. Click the **Speed Insights** tab and click **Enable**.
4. (Optional) If required, add the Vercel Analytics IDs to your environment variables.

## Step 5: Custom Domain Setup

1. In Vercel, go to your Project Settings > Domains.
2. Enter your custom domain (e.g., `www.mycarwash.com`).
3. Vercel will provide A and CNAME records.
4. Go to your domain registrar (GoDaddy, Namecheap, etc.) and add these DNS records.

## Post-Deploy Checklist

- [ ] Register a new user account on the live site.
- [ ] Attempt a booking to verify API connectivity.
- [ ] Complete a test payment (ensure Razorpay is still in Test Mode unless you've set up live keys).
- [ ] Check if the confirmation email arrives.
- [ ] Test the password reset flow.
- [ ] Ensure backend CORS `CLIENT_URL` exactly matches your frontend URL.
