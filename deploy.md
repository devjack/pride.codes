# Deployment notes and instructions

We use codeship to build and deploy updates to pride.codes

## SETUP
. golang.sh
go get -v github.com/gohugoio/hugo
git clone https://github.com/devjack/pride.codes-theme.git ./themes/pride-codes
rm -rf public/

#TEST
${GOPATH}/bin/hugo

#DEPLOY
npm install netlify-cli
node node_modules/netlify-cli/bin/cli.js update -s ${NETLIFY_SITE} -n ${NETLIFY_NAME} -t ${NETLIFY_TOKEN}  -d ${NETLIFY_DOMAIN}


#Environment variables:
NETLIFY_TOKEN = {AUTH TOKEN CODES HERE}
NETLIFY_SITE = {SITE ID}
NETLIFY_DOMAIN = www.pride.codes [Optional, other domains `-d pride.codes`]
NETLIFY_NAME = pride-codes
