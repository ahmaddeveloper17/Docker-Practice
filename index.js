const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(2121,()=>{
    console.log("Hello World!");
    app
    
})