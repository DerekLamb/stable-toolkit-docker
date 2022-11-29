#!/bin/bash

export JAVA_HOME="/app/jdk-19.0.1"
export PATH=$JAVA_HOME/bin:$PATH
export PATH="/app/apache-maven-3.8.6/bin":$PATH

cd /app/stable-toolkit-back/target
java -jar stable-toolkit-back-2.0.3-luna.jar &

cd /app/stable-toolkit-front/out
npm install --global http-server && http-server -p 8801 &

