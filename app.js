var app = angular.module("myApp", []);
app.get('/',function(req, res)
{
    res.sendfile('index.html');
    })
    app.get('/',function(req, res)
{
    res.sendfile('task.html');
    })
    app.listen(3000,()=>
    {
        console.log("server is working")
    })