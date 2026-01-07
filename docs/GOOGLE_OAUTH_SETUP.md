# Google OAuth Setup Guide for Carislemedia Playbook

This guide walks you through setting up Google OAuth authentication for the Carislemedia Playbook application.

## Overview

The app uses NextAuth.js with Google OAuth to authenticate users. Only users with `@hireable.ph` or `@carislemedia.com` email addresses can access the application.

---

## Part 1: Create Google OAuth Credentials

### Step 1: Access Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account (preferably a company admin account)

### Step 2: Create or Select a Project

1. Click the project dropdown at the top of the page (next to "Google Cloud")
2. Click "New Project" in the popup window
3. Enter project details:
   - Project name: `Carislemedia Playbook` (or any name you prefer)
   - Organization: Select your organization if applicable
   - Location: Select your organization folder if applicable
4. Click "Create"
5. Wait for the project to be created, then select it from the project dropdown

### Step 3: Configure OAuth Consent Screen

1. In the left sidebar, navigate to: **APIs & Services** → **OAuth consent screen**
2. Select User Type:
   - Choose "Internal" if only your organization's Google Workspace users will access the app
   - Choose "External" if users outside your organization need access
3. Click "Create"

4. Fill in the OAuth consent screen details:
   - **App name**: `Carislemedia Playbook`
   - **User support email**: Select your email from the dropdown
   - **App logo**: (Optional) Upload your company logo
   - **App domain**: 
     - Application home page: `https://carislemedia-playbook.vercel.app`
   - **Authorized domains**: Add `vercel.app`
   - **Developer contact information**: Enter your email address
5. Click "Save and Continue"

5. Scopes (permissions):
   - Click "Add or Remove Scopes"
   - Select these scopes:
     - `openid`
     - `email`
     - `profile`
   - Click "Update"
   - Click "Save and Continue"

6. Test users (only for External user type):
   - Add email addresses of users who can test during development
   - Click "Save and Continue"

7. Review the summary and click "Back to Dashboard"

### Step 4: Create OAuth Client ID

1. In the left sidebar, navigate to: **APIs & Services** → **Credentials**
2. Click "Create Credentials" at the top
3. Select "OAuth client ID"

4. Configure the OAuth client:
   - **Application type**: Select "Web application"
   - **Name**: `Carislemedia Playbook Web Client`
   
5. Add Authorized JavaScript origins:
   - Click "Add URI" and enter: `https://carislemedia-playbook.vercel.app`
   - Click "Add URI" and enter: `http://localhost:3000` (for local development)

6. Add Authorized redirect URIs:
   - Click "Add URI" and enter: `https://carislemedia-playbook.vercel.app/api/auth/callback/google`
   - Click "Add URI" and enter: `http://localhost:3000/api/auth/callback/google` (for local development)

7. Click "Create"

8. **IMPORTANT**: A popup will show your credentials:
   - **Client ID**: Copy this value (looks like: `123456789-abcdefg.apps.googleusercontent.com`)
   - **Client Secret**: Copy this value (looks like: `GOCSPX-xxxxxxxxxxxxx`)
   - Click "Download JSON" to save a backup
   - Click "OK"

> ⚠️ **Keep these credentials secure!** Never commit them to Git or share them publicly.

---

## Part 2: Configure Vercel Environment Variables

### Step 1: Access Vercel Project Settings

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Sign in to your Vercel account
3. Find and click on the `carislemedia-playbook` project

### Step 2: Navigate to Environment Variables

1. Click on "Settings" tab at the top
2. Click on "Environment Variables" in the left sidebar

### Step 3: Add Required Environment Variables

Add each of the following variables. For each one:
- Enter the variable name in "Key"
- Enter the value in "Value"
- Select which environments to apply (Production, Preview, Development)
- Click "Save"

#### Variable 1: GOOGLE_CLIENT_ID
```
Key: GOOGLE_CLIENT_ID
Value: [Paste your Client ID from Google Cloud Console]
Environments: ✅ Production, ✅ Preview, ✅ Development
```

#### Variable 2: GOOGLE_CLIENT_SECRET
```
Key: GOOGLE_CLIENT_SECRET
Value: [Paste your Client Secret from Google Cloud Console]
Environments: ✅ Production, ✅ Preview, ✅ Development
```

#### Variable 3: NEXTAUTH_URL
```
Key: NEXTAUTH_URL
Value: https://carislemedia-playbook.vercel.app
Environments: ✅ Production
```

For Preview deployments, you may need to set this dynamically or use:
```
Key: NEXTAUTH_URL
Value: https://carislemedia-playbook.vercel.app
Environments: ✅ Preview
```

#### Variable 4: NEXTAUTH_SECRET
```
Key: NEXTAUTH_SECRET
Value: [Generate a secure random string - see below]
Environments: ✅ Production, ✅ Preview, ✅ Development
```

**To generate NEXTAUTH_SECRET:**
- Option 1: Run this command in your terminal:
  ```bash
  openssl rand -base64 32
  ```
- Option 2: Use an online generator like [generate-secret.vercel.app/32](https://generate-secret.vercel.app/32)
- Option 3: Use any secure random string generator (minimum 32 characters)

### Step 4: Verify All Variables Are Set

Your Environment Variables page should show:
| Key | Value | Environments |
|-----|-------|--------------|
| GOOGLE_CLIENT_ID | ••••••••••••• | Production, Preview, Development |
| GOOGLE_CLIENT_SECRET | ••••••••••••• | Production, Preview, Development |
| NEXTAUTH_URL | https://carislemedia-playbook.vercel.app | Production |
| NEXTAUTH_SECRET | ••••••••••••• | Production, Preview, Development |

### Step 5: Redeploy the Application

After adding environment variables, you must redeploy:

1. Go to the "Deployments" tab
2. Find the latest deployment
3. Click the three dots (⋮) menu on the right
4. Select "Redeploy"
5. In the popup, make sure "Use existing Build Cache" is **unchecked**
6. Click "Redeploy"

Wait for the deployment to complete (usually 1-2 minutes).

---

## Part 3: Test the Authentication

### Step 1: Access the Application

1. Open your browser and go to: `https://carislemedia-playbook.vercel.app`
2. You should see the login page

### Step 2: Sign In with Google

1. Click the "Sign in with Google" button
2. Select your Google account (must be `@hireable.ph` or `@carislemedia.com`)
3. Grant the requested permissions
4. You should be redirected to the home page

### Step 3: Verify Access Control

- ✅ Users with `@hireable.ph` emails should be able to sign in
- ✅ Users with `@carislemedia.com` emails should be able to sign in
- ❌ Users with other email domains should see an "Access Denied" error

---

## Troubleshooting

### Error: "redirect_uri_mismatch"
**Cause**: The redirect URI in Google Cloud Console doesn't match the app URL.
**Fix**: 
1. Go to Google Cloud Console → APIs & Services → Credentials
2. Edit your OAuth client
3. Verify the redirect URI is exactly: `https://carislemedia-playbook.vercel.app/api/auth/callback/google`

### Error: "Access Denied" for valid domain users
**Cause**: The email domain check might be failing.
**Fix**: Verify the user's email domain is exactly `hireable.ph` or `carislemedia.com` (case-insensitive).

### Error: "Configuration error" or blank page
**Cause**: Environment variables not set correctly.
**Fix**:
1. Check all 4 environment variables are set in Vercel
2. Ensure there are no extra spaces in the values
3. Redeploy the application

### Error: "OAuth consent screen not configured"
**Cause**: OAuth consent screen setup incomplete.
**Fix**: Complete all steps in Part 1, Step 3 above.

### Sign-in works locally but not on Vercel
**Cause**: Environment variables only set for local development.
**Fix**: Ensure variables are set for "Production" environment in Vercel.

---

## Local Development Setup

For developers working locally:

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` with your values:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-development-secret-here
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser

---

## Security Notes

- Never commit `.env.local` to Git (it's already in `.gitignore`)
- Rotate the `NEXTAUTH_SECRET` periodically
- Review OAuth consent screen settings regularly
- Monitor Google Cloud Console for unusual activity
- Only grant necessary OAuth scopes

---

## Quick Reference

| Item | Value |
|------|-------|
| Production URL | https://carislemedia-playbook.vercel.app |
| Callback URL | https://carislemedia-playbook.vercel.app/api/auth/callback/google |
| Allowed Domains | @hireable.ph, @carislemedia.com |
| Google Cloud Console | https://console.cloud.google.com/apis/credentials |
| Vercel Dashboard | https://vercel.com/dashboard |

---

*Last updated: January 2026*
