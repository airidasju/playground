// 5 kyu


function domainName(url){
    const re = /^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/

    let newStr = re.exec(url)
    if(!newStr) {
        return url.split(".")[0]
    } 

    let splitStr  = newStr[1].split(".")
    if(splitStr.length == 1) {
        return splitStr[0]
    } else if (splitStr.length == 2){
        return splitStr[0]
    } else if (splitStr.length == 3 && splitStr[0].length == 3){
        return splitStr[1]
    } else {
        return splitStr[0]
    }

}

domainName('http://google.co.jp');
domainName('https://www.hwbv1x2nlmpluh50ctl92zv7rmjj.io/archive/');
domainName('https://youtube.com');
domainName('ejgoh-mhkwku2stluzr.jp/');
