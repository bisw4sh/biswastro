## Biswastro

Portfolio website using astro SSG.

### Guide to deploy to aws

1. Build the project `pnpm build`
2. Create an S3 bucket

- Go to AWS S3 Console
- Click Create bucket
- Name it (e.g. my-astro-site)
- Disable “Block all public access”
- Enable “Static website hosting”

3. Upload your build
   Upload everything inside dist/ to your bucket.

```sh
aws s3 sync ./dist s3://my-astro-site --delete
```

4. (Optional) CloudFront CDN
   > To make it fast globally and serve HTTPS:

- Create a CloudFront distribution
- Set the Origin to your S3 bucket’s website endpoint
- Enable Redirect HTTP → HTTPS
- Add a Custom Domain (Route53) and SSL Certificate (ACM) if needed
