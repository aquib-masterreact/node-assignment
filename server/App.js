let data = [
    {
        "id":1,
        "name": "Aquib"
        
    }

]

const express = require('express');
const app =  express();

app.listen(3000,()=>console.log('server running'));
app.get('/',(req,res)=>{
    res.json(data);
})

app.post('/acc',(req,res)=>{
    const incData = req.body;
    data.push(incData);
    response.json(data);

})