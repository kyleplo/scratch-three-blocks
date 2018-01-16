var ScratchBlocks = {};
ScratchBlocks.init = function (){
fetch("https://kyleplo.github.io/scratch-three-blocks/blockdata.json").then(function (r){ScratchBlocks.data = r.json()})
};
ScratchBlocks.parse(text){
var alpha = "qwertyuiopasdfghjklzxcvbnm";
var lines = text.split(/[\n\r]{1,}/g);
var input = 0;
var inputType = null;
var c = 0;
var result = [];
for(var i = 0;i < lines.length;i++){
var chars = lines[i].split();
var word = "";
var thisLine = [];
for(var x = 0;x < chars.length;x++)
if(chars[x] === " " && input === 0){thisLine.push(word);word = ""}
else if(alpha.indexOf(chars[x].toLowerCase()) > -1){
words += chars[x].toLowerCase()}
else if(chars[x] === "(" || chars[x] === "[" || chars[x] === "<"){
input++;if(chars[x] === "<"){inputType = "bool"}else{inputType = "strnum"}
}
}
}
