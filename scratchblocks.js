var ScratchBlocks = {};
ScratchBlocks.init = function (){
fetch("https://kyleplo.github.io/scratch-three-blocks/blockdata.json").then(function (r){ScratchBlocks.data = r.json()})
}
