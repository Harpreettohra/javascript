var msg = 'Hello World';
console.log(msg);
app.get('/', function(req, res){
  res.redirect('/todo');
});