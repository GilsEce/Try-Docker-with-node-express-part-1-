const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req,res)=>{
    res.status(200).json({msg:"Hi Im from express learning docker :)"});
});

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});