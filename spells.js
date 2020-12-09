let chronomancerSpells = [
    {
        name: "Crumble",
        target: 10,
        range: "LoS",
        description: "This spell can only target inanimate structures such as buildings and walls. The spellcaster rapidly speeds up the passing of time in a small area of the structure, causing it to collapse. This can create a doorway-sized hole through any wall, which should be indicated on the table somehow. The spell can also be used to collapse a section of floor beneath a figure standing on a level above the ground. In this case, the figure about to be affected must pass a Move Roll (TN22) or fall to the next level down and taking damage appropriately. If this spell is cast on a wall created by the Wall spell, the wall is completely destroyed. If it is cast on terrain holding a Wizard Eye, the Wizard Eye is cancelled."
    },
    {
        name: "Decay",
        target: 12,
        range: "LoS",
        description: "The spellcaster selects and attacks a target’s weapon, causing it to decay and fall apart, rendering it useless for the rest of the game. This spell has no effect on magic weapons (even those only temporarily enchanted). This spell has no effect on creatures (unless they are specifically identified as being equipped with a weapon from the General Arms and Armour List)."
    },
    {
        name: "Fast Act",
        target: 8,
        range: "LoS",
        description: "This spell may only be cast on a member of the spellcaster’s warband or an uncontrolled creature. This figure will activate at the end of the current phase instead of in its normal phase. For example, if an apprentice casts this spell on an uncontrolled creature, the creature will activate at the end of that player’s Apprentice phase instead of the Creature phase. Spellcasters may not cast this spell on themselves, nor on a figure that has already activated in the current turn."
    },
    {
        name: "Fleet Feet",
        target: 10,
        range: "LoS",
        description: "The target receives +2 Move for the rest of the game. Multiple castings of Fleet Feet on the same target have no effect."
    },
    {
        name: "Petrify",
        target: 10,
        range: "LoS",
        description: "The target figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, it receives no actions in its next activation. Furthermore, the figure suffers -3 Fight (to a minimum of +0) and may not have Leap cast upon it until after it makes its next move action. Large creatures receive +8 to their Will Roll to resist this spell."
    },
    {
        name: "Slow",
        target: 10,
        range: "LoS",
        description: "The target is reduced to a maximum of one action per activation (which can be any action, it does not have to be movement). It may make an Will Roll verses the Casting Roll at the end of each of its activations. If successful the spell is cancelled."
    },
    {
        name: "Time Store",
        target: 14,
        range: "Self Only",
        description: "The spellcaster captures a fragment of their own present to save for future use. To cast this spell, the spellcaster must be able to take two actions during their activation. They must spend the first action casting Time Store. If successful, the second action is lost. This spellcaster is now considered to have a stored ‘extra action’ that they may use in a future turn. This action can only be used during the spellcaster’s activation and can give the spellcaster three actions in one activation."
    },
    {
        name: "Time Walk",
        target: 14,
        range: "Self Only",
        description: "Wizard only. The wizard will activate again in the Apprentice phase and the Soldier phase. This is in addition to the figures that can normally activate in those phases. The wizard may not activate any additional soldiers or be part of a group activation in these phases. The wizard may perform one action in each of these two phases and may take any action – they are not limited to movement. If the wizard moved at all in a previous activation during the turn, any additional move actions are at half rate. If a wizard casts this spell in consecutive turns, they immediately suffer 8 points of damage."
    }
];
let elementalistSpells = [
    {
        name: "Call Storm",
        target: 12,
        range: "Area Effect",
        description: "All bow and crossbow attacks are made with -1 Shoot for the rest of the game. This spell may be cast multiple times (and by multiple spellcasters), with each additional casting increasing the penalty by a further -1, up to a maximum of -5."
    },
    {
        name: "Desctructive Sphere",
        target: 12,
        range: "Area Effect",
        description: "Every figure within 3” of the spellcaster (but not counting the spellcaster) suffers a +5 elemental magic attack."
    },
    {
        name: "Elemental Ball",
        target: 12,
        range: "LoS",
        description: "The spellcaster selects an enemy figure within 16” and line of sight and hurls a ball of destructive elemental energy at it. The target and every figure within 1” and line of sight of the target immediately suffers a +5 elemental magic shooting attack. Roll this shooting attack separately for each figure. Treat the target figure as the origin of the attack for the purposes of determining cover or intervening terrain for all other figures suffering the attack. This spell may not target an enemy figure that is even partially obscured by another figure."
    },
    {
        name: "Elemental Bolt",
        target: 12,
        range: "LoS",
        description: 'The spellcaster makes a +7 elemental magic shooting attack against a target figure within 16" and line of sight.'
    },
    {
        name: "Elemental Hammer",
        target: 10,
        range: "LoS",
        description: "This spell is cast upon a weapon. The next time the figure wieldingthis weapon wins a round of combat and does at least 1 point of damage, this weapon inflicts an additional 5 points of elemental magic damage. If cast on a normal weapon, which is then used against a creature that is Immune to Normal Weapons, this weapon will only deal the 5 points of elemental magic damage. If cast on a bow or crossbow the spell only applies to the next attack."
    },
    {
        name: "Elemental Shield",
        target: 10,
        range: "Self Only",
        description: "The spellcaster forms a floating shield that absorbs the next 3 points of damage the spellcaster would normally suffer in combat or from a shooting attack. Once 3 points have been absorbed the spell is cancelled. A spellcaster may only have one Elemental Shield active at any time."
    },
    {
        name: "Scatter Shot",
        target: 12,
        range: "Area Effect",
        description: "The spellcaster makes a +0 elemental magic shooting attackagainst every enemy figure (either from an opposing warband or uncontrolled creature) within 12” and line of sight. This may include enemy figures in combat, although the normal rules for shooting into combat are followed in this case."
    },
    {
        name: "Wall",
        target: 10,
        range: "LoS",
        description: "This spell creates a 6”-long, 3”-high wall, part of which must be within 10” and line of sight of the spellcaster. This wall can be climbed as normal. At the end of each turn, after the turn in which the spell was cast, roll a die, on a 1–4 the wall vanishes."
    }
];
let enchanterSpells = [
    {
        name: "Animate Construct",
        target: 10,
        range: "Out of Game (B)",
        description: "It is assumed that the spellcaster has built a construct prior to using this spell to animate it. If the spell is successfully cast, the construct immediately becomes a permanent member of the warband, taking the place of a soldier. A spellcaster must declare the size of construct they are attempting to animate (small, medium, or large – page 183 before rolling to cast the spell. The larger the construct, the harder it is to animate, so the following modifiers are applied to the Casting Roll: Small -0, Medium -3, Large -6. There is no limit to the number of constructs in a warband other than the normal limits for soldiers. Large constructs count as specialist soldiers, the others as standard soldiers."
    },
    {
        name: "Control Construct",
        target: 12,
        range: "LoS",
        description: "The target construct must make an immediate Will Roll with a Target Number equal to the Casting Roll. If the roll fails, the construct becomes a temporary member of the spellcaster’s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one construct at a time."
    },
    {
        name: "Embed Enchantment",
        target: 14,
        range: "Out of Game (A)",
        description: "This spell causes any one Enchant Armour or Enchant Weapon spell that is still active at the end of a game to become permanent, and the weapon or armour in question to become a magic weapon or armour. The newly created magic weapon or armour takes up an item slot as normal."
    },
    {
        name: "Enchant Armor",
        target: 8,
        range: "LoS",
        description: "This spell may only be cast on a figure wearing armour. The armour worn by the target now counts as magic armour and grants +1 Armour for the rest of the game. Multiple castings of this spell on the same target have no effect."
    },
    {
        name: "Enchant Weapon",
        target: 8,
        range: "LoS",
        description: "This spell targets a weapon of the spellcaster’s choosing. If cast on a melee weapon, this weapon counts as a magic weapon with +1 Fight. Bows and crossbows count as magic weapons with +1 Shoot, but the attacks made with them do not count as magic attacks. This spell may be cast on a single arrow or crossbow bolt, in which case that ammunition gives +1 Shoot and its attack counts as magic, but for the next shooting attack only. This spell may only be cast once on each weapon. When using both a magic missile weapon and magic ammunition, the shooter may choose to apply the bonus of one or the other, but not both."
    },
    {
        name: "Grenade",
        target: 10,
        range: "LoS",
        description: "The spellcaster takes an object, commonly a simple rock, imbues it with magic energy and throws it at their target, whereupon it explodes into hundreds of fragments. The spellcaster picks a target point within 14”. Every figure, including allies, within 1.5” of that point immediately suffers a +3 magic shooting attack. Use the target point as the origin of the attack for working out line of sight and cover."
    },
    {
        name: "Strength",
        target: 10,
        range: "LoS",
        description: "The target receives +2 Fight. Multiple Strength spells on the same target have no effect."
    },
    {
        name: "Telekinesis",
        target: 10,
        range: "LoS",
        description: "The spellcaster may move any treasure token within 16” by up to 6” in any direction, so long as it remains in line of sight the entire time. If the treasure moves out of line of sight, it immediately falls straight to the ground. This spell has no effect on a treasure token that has any special requirements for how and when it can be picked up, nor on one being carried by a figure. This spell may not target the central treasure, until after that treasure has been picked up for the first time."
    }
];
let illusionistSpells = [
    {
        name: "Beauty",
        target: 10,
        range: "Self Only",
        description: "This spell causes anyone who looks on the spellcaster to see a paragon of beauty. Any member of an opposing warband must make a Will Roll with a Target Number equal to the Casting Roll if they wish to do any of the following: move into combat with the spellcaster, make a shooting attack that could potentially hit the spellcaster (including shooting attacks generated by spells), or cast any spell that targets the spellcaster. Spellcasters may empower this Will Roll in the same way they would to resist a spell. A figure may only attempt such a Will Roll once per turn. This spell has no effect on creatures (anything found in Chapter Six: Bestiary, page 176) or war hounds."
    },
    {
        name: "Blink",
        target: 12,
        range: "LoS",
        description: "This spell may target any figure within 12”. Move that figure 4” in a random direction. A figure may make a Will Roll with a Target Number equal to the Casting Roll in order to resist this spell. If successful, the figure does not move. Uncontrolled creatures will always attempt this Will Roll."
    },
    {
        name: "Fool's Gold",
        target: 10,
        range: "LoS",
        description: "This spell may only be cast on a figure carrying a treasure token. That figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, the spellcaster may take the treasure token from the figure and move it up to 4” in any direction, provided the final spot is within line of sight of the spellcaster."
    },
    {
        name: "Glow",
        target: 10,
        range: "LoS",
        description: "A brightly glowing light surrounds the target figure. For the rest of the game, all shooting attacks against this figure from any source are at +3. Multiple castings of Glow on the same target have no effect."
    },
    {
        name: "Illusionary Soldier",
        target: 12,
        range: "Out of Game (B) or Touch",
        description: "An illusionary soldier becomes a temporary member of the warband for the next battle (if cast Out of Game) or until the end of the game (if cast during a battle). This soldier can be of any type found on the Soldier Tables (pages 30 and 31) except an apothecary. This soldier cannot pick up treasure, nor can it deal damage, but will otherwise count as a regular soldier for all other the purposes – it may engage in combat, albeit dealing no damage if it wins (it would still have the option to push back its opponent, however), lend support to other figures in combat, etc. If the illusionary soldier ever suffers damage of any type, it is removed. A warband may only have one illusionary soldier at any given time. The player must reveal which member of their warband is the illusionary soldier."
    },
    {
        name: "Invisibility",
        target: 12,
        range: "Touch",
        description: "The target figure becomes invisible. No figure may move into combat with the invisible figure, nor target it with any attack or spell (although it may still be affected by area effects, such as the blast radius of a Grenade spell). If the invisible figure moves into combat, casts a spell, or picks up a treasure token, the Invisibility spell is cancelled. This spell may be cast on a figure already carrying treasure, rendering both invisible. In this case, if the figure drops the treasure, the spell is cancelled."
    },
    {
        name: "Teleport",
        target: 10,
        range: "Self Only",
        description: "The spellcaster immediately moves to any location within line of sight, but may take no other actions this turn after casting this spell. This spell may not be used to enter combat or to move off the table."
    },
    {
        name: "Transpose",
        target: 12,
        range: "LoS",
        description: "This spell switches the position of two figures on the table. The two figures being transposed must both be within line of sight of the spellcaster and within 12” of one another. The spellcaster may cast Transpose to switch themselves with another figure. Members of opposing warbands are eligible targets for being transposed but may make a Will Roll with a Target Number equal to the Casting Roll to attempt to resist the spell. If successful, the spell is cancelled and no figures are moved. Friendly figures and uncontrolled creatures will not make such Will Rolls."
    },
];
let necromancerSpells = [
    {
        name: "Animate Skull",
        target: 8,
        range: "LoS",
        description: "The spellcaster fills a skull with magic malice and throws it at an opponent. Place one animated skull (page 190) within 6” of the spellcaster. It can be placed directly into combat. This skull is an uncontrolled creature. The spellcaster may not cast this spell again until this creature is removed from the table, but may spend an action to cancel the spell, in which case the animated skull is immediately removed from the table."
    },
    {
        name: "Bone Dart",
        target: 10,
        range: "LoS",
        description: "This spell fires a small, sharp shard of bone. The spellcaster makes a +5 shooting attack against any figure within line of sight and 12”. This does not count as a magic attack."
    },
    {
        name: "Bones of the Earth",
        target: 10,
        range: "LoS",
        description: "A skeletal hand reaches out of the ground and grabs the target’s ankle. The figure may not take any move actions until it escapes. Any form of magic movement, except the Leap spell, allows a figure to escape the hand; otherwise, the only way to escape is to fight the hand, which has Fight +0, Health 1. If the hand takes one point of damage, it vanishes, and the target is free. Other figures in base contact may attack the hand or give a support bonus. If the hand wins the fight, it does damage as normal. This spell may only be cast against a target that is standing on the ground. Large creatures are unaffected by this spell. The maximum range for this spell is 18”."
    },
    {
        name: "Control Undead",
        target: 12,
        range: "LoS",
        description: "The target undead creature must make an immediate Will Roll with a Target Number equal to the Casting Roll. If the roll fails, the undead creature becomes a temporary member of the spellcaster’s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one undead creature at a time."
    },
    {
        name: "Raise Zombie",
        target: 10,
        range: "Out of Game (B) or Touch",
        description: "The spellcaster adds one zombie (page 193) to their warband as a temporary member. If the spell is cast before the game, the zombie can be deployed normally. If it is cast during a game, the zombie appears in base contact with the spellcaster. A warband may only have one raised zombie at any one time. If the zombie is killed or exits the table, Raise Zombie can be cast again to create another."
    },
    {
        name: "Spell Eater",
        target: 12,
        range: "LoS",
        description: "Casting this spell causes the spellcaster to immediately take 1 point of damage. When this spell is cast, it cancels the effects of a single casting of any one spell currently in play. This spell cannot unsummon a creature, but it can cancel the control of a creature."
    },
    {
        name: "Steal Health",
        target: 10,
        range: "LoS",
        description: "The target must make an immediate Will Roll with a Target Number equal to the Casting Roll. If failed, the target immediately loses 3 Health and the spellcaster regains 3 Health. The spellcaster gains 3 Health, even if the target had less Health than that remaining. This may not take the spellcaster above their starting Health. This spell has no effect on undead or constructs. A spellcaster may target a member of their own warband – if they do, however, the target immediately (and permanently) leaves the warband and is treated as an uncontrolled creature for the rest of the game."
    },
    {
        name: "Strike Dead",
        target: 18,
        range: "LoS",
        description: "This spell targets a figure within 8”. The target must make a Will Roll with a Target Number equal to the Casting Roll or be immediately reduced to 0 Health. All figures may empower their Will Roll to resist this spell, even non-spellcasters. The spellcaster immediately loses 1 Health upon attempting this spell (even if it is cast successfully), in addition to any loss incurred by failure or empowerment. This spell has no effect on undead or constructs."
    },
];
let sigilistSpells = [

];
let soothsayerSpells = [

];
let summonerSpells = [

];
let thaumaturgeSpells = [

];
let witchSpells = [

];

function schoolReturner() {
    let school = document.getElementById("wizardSchool").value;
}

// Get the modal
var modal = document.getElementById("myModal");
var modalContent = document.getElementById("myModalContent");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
    modal.classList.remove("hide");
    console.log("Buenas");
}*/
let spellSchool;
let spellNumber;

function modalFiller(school, number) {
    spellSchool = school;
    spellNumber = number;
    modalContent.innerHTML = school[number].name + "<br>school / " + school[number].target + " / " + school[number].range + "<br>" + school[number].description;
    modal.classList.add("flexing");
}

function spellLvUp() {
    if(skillPoints > 0) {
        spellSchool[spellNumber].target--;
        modalFiller(spellSchool, spellNumber);
        skillPoints--;
    }
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.classList.remove("flexing");
    console.log("Funca");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("flexing");
  }
}

/*let storageTest;

function localStorageStoreTest() {
    localStorage.setItem("item", 17);
}
localStorageStoreTest();

function localStorageSum() {
    localStorage.setItem("item", localStorage.getItem("item") + 1);
    console.log(localStorageRetrieveTest());
}

function localStorageRetrieveTest() {
    return localStorage.getItem("item");
}
localStorageRetrieveTest();

document.getElementById("localStorageTestDiv").innerHTML = localStorageRetrieveTest();*/