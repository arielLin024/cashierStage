FROM cypress/base:10
RUN npm install cypress
WORKDIR /app
COPY . /app 
RUN $(npm bin)/cypress verify
CMD $(npm bin)/cypress run