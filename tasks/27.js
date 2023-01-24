const letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9";
const morse =
	".-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,-----,.----,..---,...--,....-,.....,-....,--...,---..,----.,-.--.";


    decodeMorse = function(morseCode){
        let answer = []
        let wsRegex = /^\s+|\s+$/g; 
        const morseArr = morseCode.replace(wsRegex, "").split(" ");
        const letterArr = letters.split(",");
        const baseMorse = morse.split(',')
        for(let i=0; i < morseCode.length; i++) {
            for(let z=0; z<baseMorse.length; z++) {
                if(morseArr[i] == "" && morseArr[i+1] == ""){
                    i++
                    answer.push(" ")
                }
                if(morseArr[i] == baseMorse[z]) {
                    answer.push(letterArr[z].toUpperCase())
                }
            }
        }
        return answer.join("")
    }


decodeMorse("      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ")