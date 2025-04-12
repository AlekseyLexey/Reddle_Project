const express = require('express');
const app = express();
const indexRoute = require('./routes/indexRoutes')

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/api', indexRoute)








app.listen(3000, () => { console.log('Server started');
});