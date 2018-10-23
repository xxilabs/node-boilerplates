FROM node:alpine

#Create app directory
WORKDIR /usr/src/app

#Copy package.json & package.lock.json
COPY package*.json ./

#Install
RUN npm install --only=production

#Copy remainder of app source files
COPY . .

#Expose ports
EXPOSE 8080

# Add dumb-init to handle SIGTERM and other PID 1 items
ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/bin/dumb-init
RUN chmod +x /usr/bin/dumb-init

# Runs "/usr/bin/dumb-init -- /my/script --with --args"
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

# Start Service
cmd [ "node", "boot.js" ]
