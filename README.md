## Biswastro

Portfolio website using astro SSG.

### Guide to deploy to aws

1. Build the project `pnpm build`
2. Create bucket with names like: `biswashdhungana.com.np` and `www.biswashdhungana.com.np` allow for public access in this bucket i.e(disable block public access).
3. Bucket Policy like:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AddPerm",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::www.biswashdhungana.com.np/*"
    }
  ]
}
```

- Enable “Static website hosting”

4. Upload your build
   Upload everything inside dist/ to your bucket.

5. For the one with `www.`, `> properties > edit-static-hosting`

```
Hosting type
- Host a static website

Index document
index.html
```

6. For the one without www., `> properties > edit-static-hosting`

```
Hosting type
- Redirect requests for an object

Host Name:
wwww.biswashdhungana.com.np

Protocol - Optional
http
```

4. (Optional) CloudFront CDN
   > To make it fast globally and serve HTTPS:

- Create a CloudFront distribution
- Set the Origin to your S3 bucket’s website endpoint
- Enable Redirect HTTP → HTTPS
- Add a Custom Domain (Route53) and SSL Certificate (ACM) if needed

[Guide](https://www.youtube.com/watch?v=mls8tiiI3uc)
