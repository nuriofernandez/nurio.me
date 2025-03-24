function calculateExperience() {
    const now = new Date();
    const pastDate = new Date('2013/06/06'); // First published project

    // Calculate the total difference in milliseconds
    let diffMs = now - pastDate;

    // Convert milliseconds to days
    let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    // Calculate years
    const years = Math.floor(diffDays / 365);
    diffDays %= 365;

    // Calculate months
    const months = Math.floor(diffDays / 30);
    diffDays %= 30;

    // The remaining days
    const days = diffDays;

    // Calculate hours
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    diffMs %= 1000 * 60 * 60; // Get remaining milliseconds after hours

    // Calculate minutes
    const minutes = Math.floor(diffMs / (1000 * 60));
    diffMs %= 1000 * 60; // Get remaining milliseconds after minutes

    // Calculate seconds
    const seconds = Math.floor(diffMs / 1000);

    return { years, months, days, hours, minutes, seconds };
}


setInterval(() => {
    const experience = calculateExperience();
    const text = `<b>${experience.years}</b> years, <b>${experience.months}</b> months, <b>${experience.days}</b> days, <b>${experience.minutes}</b> minutes and <b>${experience.seconds}</b> seconds`;
    document.getElementById("experience").innerHTML = text;
}, 300)

