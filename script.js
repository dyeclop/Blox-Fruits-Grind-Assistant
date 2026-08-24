// Dataset 1: Standard Island-by-Island Linear Progression
const standardSpots = [
    {min: 1, max: 15, island: "Starter Island", enemy: "Bandits", xp: 250, boss: "None", boss_xp: 0, notes: "Follow the initial quest pipeline tutorial."},
    {min: 15, max: 20, island: "Jungle", enemy: "Monkeys", xp: 800, boss: "None", boss_xp: 0, notes: "Standard early level-up."},
    {min: 20, max: 30, island: "Jungle", enemy: "Gorillas", xp: 1200, boss: "Gorilla King", boss_xp: 9500, notes: "Clear the Gorilla King when he spawns."},
    {min: 30, max: 40, island: "Pirate Village", enemy: "Pirates", xp: 3500, boss: "None", boss_xp: 0, notes: "Simple physical mob grouping layout."},
    {min: 40, max: 50, island: "Pirate Village", enemy: "Brutes", xp: 4500, boss: "None", boss_xp: 0, notes: "Watch out for their block breaks."},
    {min: 50, max: 60, island: "Pirate Village", enemy: "Desert Bandits Prep", xp: 3500, boss: "The Bobby", boss_xp: 22000, notes: "Defeat Bobby for easy cash drops."},
    {min: 60, max: 75, island: "Desert", enemy: "Desert Bandits", xp: 13000, boss: "None", boss_xp: 0, notes: "Mobs are spread thin across the sand."},
    {min: 75, max: 90, island: "Desert", enemy: "Desert Officers", xp: 15000, boss: "None", boss_xp: 0, notes: "Move onward directly at level 90."},
    {min: 90, max: 100, island: "Frozen Village", enemy: "Snow Bandits", xp: 60000, boss: "None", boss_xp: 0, notes: "Gather and use AoE elemental bursts."},
    {min: 100, max: 120, island: "Frozen Village", enemy: "Snowmen", xp: 75000, boss: "Yeti", boss_xp: 220000, notes: "Yeti boss is highly vulnerable to elemental kiting."},
    {min: 120, max: 130, island: "Marine Fortress", enemy: "Marine Officers", xp: 180000, boss: "Vice Admiral", boss_xp: 415000, notes: "Standard progression tier step."},
    {min: 130, max: 150, island: "Marine Fortress", enemy: "Giant Chief Officers", xp: 250000, boss: "Vice Admiral", boss_xp: 415000, notes: "Grind down the giant variants."},
    {min: 150, max: 175, island: "Skylands (Lower)", enemy: "Sky Bandits", xp: 450000, boss: "None", boss_xp: 0, notes: "Be careful not to fall off the sky boundaries."},
    {min: 175, max: 190, island: "Skylands (Lower)", enemy: "Dark Masters", xp: 600000, boss: "None", boss_xp: 0, notes: "Standard progression route."},
    {min: 190, max: 210, island: "Prison", enemy: "Prisoners", xp: 900000, boss: "The Warden", boss_xp: 1600000, notes: "Simple layout loop execution."},
    {min: 210, max: 225, island: "Prison", enemy: "Dangerous Prisoners", xp: 1100000, boss: "Chief Warden", boss_xp: 2000000, notes: "Fight outside the spawn rooms."},
    {min: 225, max: 250, island: "Prison", enemy: "Dangerous Prisoners", xp: 1100000, boss: "Swan", boss_xp: 2400000, notes: "Swan hits hard, use ranged skills."},
    {min: 250, max: 300, island: "Prison (Boss Rotation Loop)", enemy: "Dangerous Prisoners", xp: 1100000, boss: "Warden+Chief+Swan Loop", boss_xp: 6000000, notes: "Clear standard linear route targets."},
    {min: 300, max: 330, island: "Magma Village", enemy: "Military Soldiers", xp: 1700000, boss: "Magma Admiral", boss_xp: 3000000, notes: "Use the wall-glitch for free safe damage."},
    {min: 330, max: 375, island: "Magma Village", enemy: "Military Spies", xp: 2200000, boss: "Magma Admiral", boss_xp: 3000000, notes: "Spies break Logia immunity early."},
    {min: 375, max: 400, island: "Underwater City", enemy: "Fishman Warriors", xp: 3200000, boss: "Fishman Lord", boss_xp: 4250000, notes: "Standard underwater map leveling step."},
    {min: 400, max: 450, island: "Underwater City", enemy: "Fishman Commandos", xp: 4000000, boss: "Fishman Lord", boss_xp: 4250000, notes: "Clear until you hit the sky milestone."},
    {min: 450, max: 475, island: "Upper Skylands (Entrance)", enemy: "God's Guards", xp: 4100000, boss: "None", boss_xp: 0, notes: "First sector of upper map tier."},
    {min: 475, max: 525, island: "Upper Skylands (Wyper Zone)", enemy: "Shanda", xp: 4700000, boss: "Wysper", boss_xp: 5700000, notes: "Standard middle checkpoint progression."},
    {min: 525, max: 575, island: "Upper Skylands (Tree Zone)", enemy: "Royal Squad", xp: 6500000, boss: "Thunder God", boss_xp: 8000000, notes: "Fight near the temple grounds."},
    {min: 575, max: 625, island: "Upper Skylands (Tree Zone)", enemy: "Royal Soldiers", xp: 7500000, boss: "Thunder God", boss_xp: 8000000, notes: "Prepare for the final sea swap step."},
    {min: 625, max: 675, island: "Fountain City", enemy: "Galley Pirates", xp: 9500000, boss: "Cyborg", boss_xp: 13000000, notes: "Standard linear layout leveling."},
    {min: 675, max: 700, island: "Fountain City", enemy: "Galley Captains", xp: 11000000, boss: "Cyborg", boss_xp: 13000000, notes: "Max out here to break into Second Sea!"}
];

// Dataset 2: Official WikiStrategy Meta (Island Skips Enabled)
const fastestSpots = [
    {min: 1, max: 15, island: "Starter Island", enemy: "Bandits", xp: 250, boss: "None", boss_xp: 0, notes: "Group them closely together to clear them all at once."},
    {min: 15, max: 55, island: "Jungle Meta", enemy: "Gorillas", xp: 1200, boss: "Gorilla King", boss_xp: 9500, notes: "WIKI META: Stay here all the way to 55 to completely bypass Pirate Village low-tier mobs."},
    {min: 55, max: 90, island: "Pirate Village Meta", enemy: "Brutes (Ignore)", xp: 4500, boss: "The Chef", boss_xp: 32000, notes: "WIKI META: Farm exclusively the Chef boss. Skip the Desert Island entirely—its NPC placement slows you down too much!"},
    {min: 90, max: 105, island: "Frozen Village", enemy: "Snow Bandits", xp: 60000, boss: "None", boss_xp: 0, notes: "Standard mob loops until Yeti is unlocked."},
    {min: 105, max: 130, island: "Frozen Village Meta", enemy: "Snowmen (Ignore)", xp: 75000, boss: "Yeti", boss_xp: 220000, notes: "WIKI META: Server-hop the Yeti boss. Completely ignore standard snowman targets."},
    {min: 130, max: 220, island: "Marine Fortress Meta", enemy: "Giant Chief Officers", xp: 250000, boss: "Vice Admiral", boss_xp: 415000, notes: "WIKI META: Server-hop Vice Admiral to level 220. Completely ignore Lower Skylands entirely!"},
    {min: 220, max: 350, island: "Prison Meta", enemy: "Dangerous Prisoners", xp: 1100000, boss: "Warden/Chief/Swan Loop", boss_xp: 6000000, notes: "WIKI META: Run the 3-boss loop via server hopping. Completely bypass the Colosseum Island!"},
    {min: 350, max: 425, island: "Magma Village Meta", enemy: "Military Spies", xp: 2200000, boss: "Magma Admiral", boss_xp: 3000000, notes: "Focus your grind heavily on the Magma Admiral boss."},
    {min: 425, max: 500, island: "Underwater City Meta", enemy: "Fishman Commandos", xp: 4000000, boss: "Fishman Lord", boss_xp: 4250000, notes: "WIKI META: Farm the Fishman Lord up to level 500. This is the fastest cash and level loop in the entire First Sea."},
    {min: 500, max: 625, island: "Upper Skylands Meta", enemy: "Shanda / Royal Squad", xp: 6500000, boss: "Wysper", boss_xp: 5700000, notes: "WIKI META: Farm Wysper to 625. Skip Thunder God completely—reaching his temple room wastes too much time."},
    {min: 625, max: 700, island: "Fountain City Meta", enemy: "Galley Pirates", xp: 9500000, boss: "Cyborg (Ignore)", boss_xp: 13000000, notes: "WIKI META: Ignore the Cyborg boss—his high health pool and skill cooldowns waste too much time. Stick strictly to standard Galley Pirates."}
];

// Tracking Selected Engine State
let currentMode = "standard";

const standardBtn = document.getElementById('standardModeBtn');
const fastestBtn = document.getElementById('fastestModeBtn');

// Toggle Button UI Color Swap Engine
standardBtn.addEventListener('click', () => {
    currentMode = "standard";
    standardBtn.style.background = "#ffbc00";
    standardBtn.style.color = "#111";
    fastestBtn.style.background = "#14151c";
    fastestBtn.style.color = "#aaa";
});

fastestBtn.addEventListener('click', () => {
    currentMode = "fastest";
    fastestBtn.style.background = "#ffbc00";
    fastestBtn.style.color = "#111";
    standardBtn.style.background = "#14151c";
    standardBtn.style.color = "#aaa";
});

// Master Run Calculation Code Pipeline
document.getElementById('calculateBtn').addEventListener('click', () => {
    const start = parseInt(document.getElementById('startLevel').value);
    const target = parseInt(document.getElementById('targetLevel').value);
    
    if (isNaN(start) || isNaN(target) || start >= target) {
        alert("Please enter a valid starting level and a higher target level.");
        return;
    }

    // Set active data layout selection engine criteria rules
    const activeSpots = (currentMode === "standard") ? standardSpots : fastestSpots;

    let totalXp = 0;
    for (let lvl = start; lvl < target; lvl++) {
        totalXp += Math.floor(2 * Math.pow(lvl, 2.3)) + 84;
    }

    document.getElementById('totalXpDisplay').innerText = totalXp.toLocaleString();
    const roadmapContainer = document.getElementById('roadmap');
    roadmapContainer.innerHTML = ""; 

    activeSpots.forEach(spot => {
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
                bossHtml = `<div class="method" style="color:#666"> Boss Hop: No optimal boss in this specific range</div>`;
            }

            const card = document.createElement('div');
            card.className = 'island-card';
            card.innerHTML = `<div class="island-title"> ${spot.island} (Lv. ${overlapStart} ➔ ${overlapTarget})</div> <div class="method">🔹 NPCs: <span>${npcRuns}</span> quests (${spot.enemy})</div> ${bossHtml} <div class="wiki-note" style="color: #ffbc00; font-size: 13px; margin-top: 5px; font-style: italic; background: #ffbc0011; padding: 5px; border-left: 2px solid #ffbc00;"> 💡 Strategy: ${spot.notes} </div> <div class="xp-sub" style="font-size: 12px; color: #777; margin-top: 8px;">Zone XP Required: ${zoneXp.toLocaleString()}</div>`;
            roadmapContainer.appendChild(card);
        }
    });
    document.getElementById('results').classList.remove('hidden');
});
