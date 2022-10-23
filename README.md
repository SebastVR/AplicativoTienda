# AplicativoTienda
Aplicativo ciclo4 UdeA misión TIC

# BACKEND

npm init
npm run dev  
npm i express dotenv mongoose
npm i nodemon --save-dev
npm install node-fetch
<!-- Correr servidor bases de datos -->

# BREW
brew services run mongodb-community  

<!-- Install and update brew -->
xcode-select --install
mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip -C homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"
brew update --force --quiet
chmod -R go-w "$(brew --prefix)/share/zsh"
brew --version
 
 # MONGO
<!-- Install and update mongodb  -->
brew tap mongodb/brew
brew update
brew install mongodb-community@6.0
brew services start mongodb-community@6.0
brew services stop mongodb-community@6.0


# FRONTED
npx create-react-app .
npm config