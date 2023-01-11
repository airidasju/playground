// 6 kyu


function toCamelCase(str){
    let result=[]
    const strArray = str.split(/[-_]/)
    result.push(strArray[0])
    for(let i=1; i < strArray.length; i++) {
        result.push(strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1));
    }
    const strJoined = result.join("")
    return strJoined
}


toCamelCase("the_stealth_warrior")