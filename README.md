#PUBMATE apis

CORS OSX:

open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

URL apis

http://35.178.207.61:8080/ \*\*\*\*

URL apis (UPDATED)
http://18.135.64.215/

DOMAIN
http://dev.pubmate.io/

TO run:
npm i react-router

---

Docker:

git clone https://github.com/pubmate/genesis

docker-compose up --build

localhost:4050

---

docker-compose -f docker_compose_dev.yml build --force-rm --no-cache web

---

SH

./build-dev.sh
./run-dev.sh

-To run on localhost:4050

- Always build after pull

---

AWS

url and localhost:
http://ec2-18-133-183-86.eu-west-2.compute.amazonaws.com:4050/pubmate/api/0.1/user/all

ssh command:
ssh -i “qa-staging.pem” ec2-user@ec2-18-133-183-86.eu-west-2.compute.amazonaws.com

---

GET: http://localhost:4050/pubmate/api/0.1/pub/all
POST: http://localhost:4050/pubmate/api/0.1/pub
PUT: http://localhost:4050/pubmate/api/0.1/pub
DELETE: http://localhost:4050/pubmate/api/0.1/pub/6

---

JSON payload
