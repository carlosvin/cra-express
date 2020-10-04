
const fs = require('fs')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000
const dir = process.env.BASE_PATH || '../build'
const filePath = `${dir}/config.js`;

function injectServer (server) {
    if (server) {
        console.log("Injecting server", server);
        fs.writeFileSync(filePath, `var SERVER = "${server}";`);    
    }
}

injectServer(process.env.SERVER);

app.use(express.static(dir))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})