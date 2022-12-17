function hasSurvived(attackers, defenders){
    let initialAttackerPower = 0
    for (let i = 0; i < attackers.length; i ++) {
        initialAttackerPower += attackers[i];
    }
    console.log(initialAttackerPower)

    let initialDefenderPower = 0
    for (let i = 0; i < defenders.length; i++) {
        initialDefenderPower += defenders[i];
    }
    console.log(initialDefenderPower)

    let popped;

    let attackerPower = initialAttackerPower;
    let defenderPower = initialDefenderPower
    if(attackers.length == defenders.length) {
        for(let i = 0; i <= attackers.length; i++) {
            // if(attackers[i] == undefined) {
            //     attackers[i] = 0
            // }

            // if(defenders[i] == undefined) {
            //     defenders[i] = 0
            // }

            if(attackers[i] > defenders[i]) {
            attackerPower -= defenders[i]
            attackers[i] -= defenders[i]
            popped = defenders[i]
            console.log(attackers, defenders)
            } else if (defenders[i] > attackers[i]) {
            defenderPower -= attackers[i]
            defenders[i] -= attackers[i]
            popped = attackers[i]
            console.log(attackers, defenders)
           } else {
            attackerPower -= defenders[i]
            defenderPower -= attackers[i]
            popped = defenders[i]
            popped = attackers[i]
            console.log(attackers, defenders)
           }
        } 
    }

        if(attackers.length < defenders.length){
            return true;
        } else if (attackers.length > defenders.length) {
            return false;
        } else {
            if(initialAttackerPower < initialDefenderPower) {
                return true
            } else {
                return false
            }
        }
        
  }


  hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])