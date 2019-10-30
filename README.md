This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Create Simple App with npx create-react-app app-name

Change the code in index.js file 


```javascript
ReactDOM.render(<App />, document.getElementById('root'));

 replace with 
 
ReactDOM.hydrate(<App />, document.getElementById('root'));


```


#### `Install Expree with below command `


```javascript
npm install express
```

#### `Install babel,babel-react and ignore-style with below command `


```javascript
npm install @babel/register @babel/preset-env @babel/preset-react ignore-styles

```


#### `Create a new folder called server, then go into it and create a file named server.js `


```javascript
import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'

const PORT = 8080
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    )
  })
}
router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})

```

#### `Let’s create an entry point in server/index.js:`

```javascript

require('ignore-styles')

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')

```

## `Make Build and run with node :`


```javascript 

npm run build
node server/index.js


```
