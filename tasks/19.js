// 5 kyu


function domainName(url){
    const re = /^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/

    let newStr = re.exec(url)
    if(!newStr) {
        return url.split(".")[0]
    } 

    let splitStr  = newStr[1].split(".")
    if(splitStr.length == 1 || splitStr.length == 2) {
        return splitStr[0]
    } else if (splitStr.length == 3 && splitStr[0].length == 3 || splitStr.length == 4 && splitStr[0].length == 4){
        return splitStr[1]
    } else {
        return splitStr[0]
    }
}

domainName('https://www.cuq1wbax.co.uk/warez/');

