#!/bin/bash

tar --exclude='./node_modules' -zcvf  deploy/app.tar.gz .
ssh -i ~/.ssh/aws-priv.pem ubuntu@ec2-18-219-223-244.us-east-2.compute.amazonaws.com "pkill -9 node"
ssh -i ~/.ssh/aws-priv.pem ubuntu@ec2-18-219-223-244.us-east-2.compute.amazonaws.com "rm -rf /home/ubuntu/app/*"
scp -i ~/.ssh/aws-priv.pem deploy/app.tar.gz ubuntu@ec2-18-219-223-244.us-east-2.compute.amazonaws.com:/home/ubuntu/app
ssh -i ~/.ssh/aws-priv.pem ubuntu@ec2-18-219-223-244.us-east-2.compute.amazonaws.com "tar -zxvf /home/ubuntu/app/app.tar.gz -C /home/ubuntu/app"
ssh -i ~/.ssh/aws-priv.pem ubuntu@ec2-18-219-223-244.us-east-2.compute.amazonaws.com "rm -rf /home/ubuntu/app/*.tar.gz"
ssh -i ~/.ssh/aws-priv.pem ubuntu@ec2-18-219-223-244.us-east-2.compute.amazonaws.com 'cd /home/ubuntu/app && bash -i -c "npm install && npm run build && forever start index.js"'