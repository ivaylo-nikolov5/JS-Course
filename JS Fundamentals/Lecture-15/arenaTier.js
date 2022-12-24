function arenaTier(array) {
    let gladiatorPool = {};
    let line = array.shift();

    while (line !== "Ave Cesar") {
        line = line.split(" ");

        if (!line.includes("vs")) {
            let gladiator = line[0];
            let technique = line[2];
            let skill = Number(line[4]);

            gladiatorPool = addGladiator(gladiatorPool, gladiator, technique, skill);
        } else {
            let gladiator1 = line[0];
            let gladiator2 = line[2];
            gladiatorPool = duel(gladiatorPool, gladiator1, gladiator2);
        }

        line = array.shift();
    }

    gladiatorPool = Object.entries(gladiatorPool).sort(([keyA, valA], [keyB, valB]) => {
        let skillA = calcSkill(gladiatorPool, keyA, valA);
        let skillB = calcSkill(gladiatorPool, keyB, valB);

        let c = keyA.localeCompare(keyB);

        return skillB - skillA || c;
    })

    for (let [gladiator, skills] of gladiatorPool) {
        let totalSkill = calcSkill(gladiatorPool, gladiator, skills);
        console.log(`${gladiator}: ${totalSkill} skill`);

        skills = Object.entries(skills).sort((a, b) => {
            let c = b[1] - a[1];
            let d = a[0].localeCompare(b[0]);

            return c || d;
        })

        for (let [name, points] of skills) {
            console.log(`- ${name} <!> ${points}`);
        }

    }


    function addGladiator(pool, name, technique, skill) {
        if (!pool.hasOwnProperty(name)) {
            pool[name] = {};
            pool[name][technique] = skill;
            return pool

        } else if (!pool[name].hasOwnProperty(technique)) {
            pool[name][technique] = skill;
            return pool
        }

        if (pool[name][technique] < skill) {
            pool[name][technique] = skill;
        }

        return pool
    }

    function duel(pool, gladiator1, gladiator2) {
        if (!pool.hasOwnProperty(gladiator1) || !pool.hasOwnProperty(gladiator2)) {
            return pool;
        }

        let firstTechniques = {};
        let secondTechniques = {};

        for (let firstTechnique of Object.entries(pool[gladiator1])) {
            for (let secondTechnique of Object.entries(pool[gladiator2])) {
                if (firstTechnique[0] === secondTechnique[0]) {
                    firstTechniques[firstTechnique[0]] = firstTechnique[1];
                    secondTechniques[secondTechnique[0]] = secondTechnique[1];
                }
            }
        }

        if (Object.keys(firstTechniques).length === 0) {
            return pool;
        }

        let firstPoints = 0;
        let secondPoints = 0;

        for (let technique of Object.entries(firstTechniques)) {
            firstPoints += firstTechniques[technique[0]];
            secondPoints += secondTechniques[technique[0]];
        }

        let loser = firstPoints > secondPoints? gladiator2: gladiator1;

        delete pool[loser];
        return pool;
    }

    function calcSkill(pool, gladiator, skills) {
        let skillPoints = 0;
        for (let skill of Object.entries(skills)) {
            skillPoints += skill[1];
        }

        return skillPoints;
    }
}

arenaTier([
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]
)

