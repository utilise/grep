var to = require('to')

module.exports = function grep(o, k, regex){
  var original = o[k] 
  o[k] = function(){ 
    var d = to.arr(arguments).join(' ')
    return d.match(regex) && original.apply(this, arguments) 
  }
  return original
}