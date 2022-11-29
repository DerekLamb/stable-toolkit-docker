#!/bin/bash

cd /app

apt update

apt install curl -y

curl -O https://dlcdn.apache.org/maven/maven-3/3.8.6/binaries/apache-maven-3.8.6-bin.tar.gz
curl -O https://download.java.net/java/GA/jdk19.0.1/afdd2e245b014143b62ccb916125e3ce/10/GPL/openjdk-19.0.1_linux-x64_bin.tar.gz

tar -xvf apache-maven-3.8.6-bin.tar.gz
tar -xvf openjdk-19.0.1_linux-x64_bin.tar.gz

export JAVA_HOME="/app/jdk-19.0.1"
export PATH=$JAVA_HOME/bin:$PATH
export PATH="/app/apache-maven-3.8.6/bin":$PATH

cd /app/stable-toolkit-back

mvn clean install
mvn clean package

cd /app/stable-toolkit-front

curl -fsSL https://deb.nodesource.com/setup_19.x | bash -
apt install nodejs -y
node -v 

# npm install -g node-gyp

npm i 
npm run export