const path = require('path');
const fs = require('fs');
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;
//2.1
fs.readFile(path.join(__dirname, './index.html'),function(err,dataStr){
    if(err){}else{
        console.log("读取文件成功");
        resolveCSS(dataStr);
    }
})

function resolveCSS(htmlStr){
    //按照正则将样式提取出来
    const r1 = regStyle.exec(htmlStr)
    const newCss = r1[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'./file/clock.css'),newCss,function(err){
        if(err){
            console.error(err);
            console.error("写入样式失败");
        }
    })
    console.log(newCss)
}