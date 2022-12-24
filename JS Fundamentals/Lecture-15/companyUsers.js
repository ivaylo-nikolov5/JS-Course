function companyUsers(array) {
    let companies = new Map();

    while (array.length > 0) {
        let [company, id] = array.shift().split(" -> ");

        if (companies.has(company)) {
            let newIds = companies.get(company);
            if (!newIds.includes(id)) {
                newIds.push(id);
            }


            companies.set(company, newIds);
        } else {
            companies.set(company, [id]);
        }
    }

    companies = Array.from(companies.entries()).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })

    for (let [company, ids] of companies) {
        console.log(`${company}`);
        for (let id of ids) {
            console.log(`-- ${id}`);
        }
    }
}

companyUsers([
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
    ]
)