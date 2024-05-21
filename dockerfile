FROM node:latest 
COPY . .
RUN npm install 
EXPOSE 2121
CMD [ "node" , "index.js" ]