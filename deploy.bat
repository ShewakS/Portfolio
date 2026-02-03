@echo off
echo Deploying portfolio to Vercel...
git add .
git commit -m "Update portfolio for deployment"
vercel --prod
echo Deployment complete!
pause