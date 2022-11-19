# AplicativoTienda
Aplicativo ciclo4 UdeA misión TIC

# BACKEND
Documents/AplicativoTienda/
npm init
npm run dev  
npm i express dotenv mongoose
npm i nodemon --save-dev
npm install node-fetch
<!-- Correr servidor bases de datos -->

# BREW
Documents/AplicativoTienda/
brew services run mongodb-community  
<!-- Install and update brew -->
xcode-select --install
mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip -C homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"
brew update --force --quiet
chmod -R go-w "$(brew --prefix)/share/zsh"
brew --version
 
 # MONGO
 Documents/AplicativoTienda/
<!-- Install and update mongodb  -->
brew tap mongodb/brew
brew update
brew install mongodb-community@6.0
brew services start mongodb-community@6.0
brew services stop mongodb-community@6.0

# FRONTED 
Documents/AplicativoTienda/front/
npx create-react-app .
npm config set legacy-peer-deps true
npm audit fix --force 
npx create-react-app@5.0.1 .    
npm i axios react-alert react-alert-template-basic react-bootstrap react-helmet react-redux redux redux-thunk redux-devtools-extension react-router-dom 
npm start
npm audit fix --force 
npx create-react-app my-app --use-npm
npm i web-vitals --save-dev
npm uninstall react-scripts 
npm install react-scripts
npm start
# copicra

# INTEGRANTES Y ROLES


# Scrum Master: Liliana Paola Rozo Martínez
# Desarrollador: Sebastián Velásquez 
# Desarrollador: Andres Felipe Devia
# Desarrollador: Cristian David Parroquiano Jimenez
# Desarrollador: Francisco Leon Gomez Neira


# DOCKER
https://hub.docker.com/_/node
docker pull node 
docker build .    
docker images  ---> Mirar el id copiar y pegar en el siguiente comando (f97380f78c4d)
docker run -it f97380f78c4d
docker build -t apptienda .  --> Poner nombre a la imagen 
docker run  -p 3000:3000 app serve -s build