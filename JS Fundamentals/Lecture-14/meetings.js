function meetings(array) {
    let meetingPlans = {};

    while (array.length > 0) {
        let [day, name] = array.shift().split(" ");
        if (meetingPlans[day] !== undefined) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        meetingPlans[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    for (let plan in meetingPlans) {
        console.log(`${plan} -> ${meetingPlans[plan]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)