FROM node:16
WORKDIR /app
COPY package.json ./
RUN npm install
EXPOSE 3000
COPY . .
CMD [ "npm", "start" ]

### CREAR LA IMAGEN LOCALMENTE
### docker build --tag diians2302/backend-mia .

### CORRER LA IMAGEN
### docker run -d --name=backend-mia -p 3000:3000 -e USUARIO='Diego Obin' -e PASSWORD='password' -e PORT='3000' diians2302/backend-mia

### SUBIR LA IMAGEN A DOCKER HUB
### docker push diians2302/backend-mia