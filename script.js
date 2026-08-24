const spots = [
    {min: 1, max: 15, island: "Starter Island", enemy: "Bandits", xp: 250, boss: "None", boss_xp: 0},
    {min: 15, max: 30, island: "Jungle", enemy: "Monkeys", xp: 800, boss: "Gorilla King", boss_xp: 9500},
    {min: 30, max: 60, island: "Pirate Village", enemy: "Pirates", xp: 3500, boss: "chef", boss_xp: 22000},
    {min: 60, max: 90, island: "Desert", enemy: "Desert Bandits", xp: 13000, boss: "None", boss_xp: 0},
    {min: 90, max: 120, island: "Frozen Village", enemy: "Snow Bandits", xp: 60000, boss: "Yeti", boss_xp: 220000},
    {min: 120, max: 150, island: "Marine Fortress", enemy: "Chief Officers", xp: 250000, boss: "Vice Admiral", boss_xp: 415000},
    {min: 150, max: 190, island: "Skylands (Lower)", enemy: "Sky Bandits", xp: 450000, boss: "None", boss_xp: 0},
    {min: 190, max: 300, island: "Prison", enemy: "Prisoners", xp: 900000, boss: "Warden/Chief/Swan", boss_xp: 1600000},
    {min: 300, max: 375, island: "Magma Village", enemy: "Military Soldiers", xp: 1700000, boss: "Magma Admiral", boss_xp: 3000000},
    {min: 375, max: 450, island: "Underwater City", enemy: "Fishman Warriors", xp: 3200000, boss: "Fishman Lord", boss_xp: 4250000},
    {min: 450, max: 475, island: "Upper Skylands 1st", enemy: "God's Guards", xp: 4100000, boss: "Wysper", boss_xp: 5700000},
    {min: 525, max: 625, island: "Upper Skylands 2nd", enemy: "Royal Squad", xp: 6500000, boss: "Thunder God", boss_xp: 8000000},
    {min: 625, max: 700, island: "Fountain City", enemy: "Galley Pirates", xp: 9500000, boss: "Cyborg", boss_xp: 13000000}
];

document.getElementById('calculateBtn').addEventListener('click', () => {
    const start = parseInt(document.getElementById('startLevel').value);
    const target = parseInt(document.getElementById('targetLevel').value);
    
    if (isNaN(start) || isNaN(target) || start >= target) {
        alert("Please enter a valid starting and higher target level.");
        return;
    }

    // Calculate Grand Total EXP
    let totalXp = 0;
    for (let lvl = start; lvl < target; lvl++) {
        totalXp += Math.floor(2 * Math.pow(lvl, 2.3)) + 84;
    }

    document.getElementById('totalXpDisplay').innerText = totalXp.toLocaleString();
    const roadmapContainer = document.getElementById('roadmap');
    roadmapContainer.innerHTML = ""; // Clear old results

    // Generate Cards
    spots.forEach(spot => {
        if (Math.max(start, spot.min) < Math.min(target, spot.max)) {
            let overlapStart = Math.max(start, spot.min);
            let overlapTarget = Math.min(target, spot.max);
            
            let zoneXp = 0;
            for (let lvl = overlapStart; lvl < overlapTarget; lvl++) {
                zoneXp += Math.floor(2 * Math.pow(lvl, 2.3)) + 84;
            }

            let npcRuns = Math.ceil(zoneXp / spot.xp);
            let bossHtml = "";

            if (spot.boss !== "None") {
                let bossRuns = Math.ceil(zoneXp / spot.boss_xp);
                bossHtml = `<div class="method"> Boss Hop: <span>${bossRuns}</span> kills (${spot.boss})</div>`;
            } else {
                bossHtml = `<div class="method" style="color:#666"> Boss Hop: No nearby boss</div>`;
            }

            const card = document.createElement('div');
            card.className = 'island-card';
            card.innerHTML = `
                <div class="island-title"> ${spot.island} (Lv. ${overlapStart} ➔ ${overlapTarget})</div>
                <div class="method">🔹 NPCs: <span>${npcRuns}</span> quests (${spot.enemy})</div>
                ${bossHtml}
                <div class="xp-sub">Zone XP Required: ${zoneXp.toLocaleString()}</div>
            `;
            roadmapContainer.appendChild(card);
        }
    });

    document.getElementById('results').classList.remove('hidden');
});