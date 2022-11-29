#!/bin/bash

export JAVA_HOME="/app/app/jdk-19.0.1"
export PATH=$JAVA_HOME/bin:$PATH
export PATH="/app/app/apache-maven-3.8.6/bin":$PATH

cd /app/app/stable-toolkit/stable-toolkit-back/target
java -jar stable-toolkit-back-2.0.3-luna.jar &

# cd /app/app/stable-toolkit-main/stable-toolkit-front/out
# npm install --global http-server && http-server -p 8801 &

