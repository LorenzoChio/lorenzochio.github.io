let soldiers = [
    {
        name:"",
        move:"",
        fight:"",
        shoot:"",
        armor:"",
        will:"",
        health:"",
        cost:"",
        notes:"",
        type:""
    },
    {
        name:"Thug",
        move:"6",
        fight:"+2",
        shoot:"+0",
        armor:"10",
        will:"-1",
        health:"10",
        cost:"Free",
        notes:"Hand Weapon",
        type:"Standard"
    },
    {
        name:"Thief",
        move:"7",
        fight:"+1",
        shoot:"+0",
        armor:"10",
        will:"+0",
        health:"10",
        cost:"Free",
        notes:"Dagger",
        type:"Standard"
    },
    {
        name:"War Hound",
        move:"8",
        fight:"+1",
        shoot:"+0",
        armor:"10",
        will:"-2",
        health:"8",
        cost:"10gc",
        notes:"Animal, Cannot carry treasure or items",
        type:"Standard"
    },
    {
        name:"Infantryman",
        move:"6",
        fight:"+3",
        shoot:"+0",
        armor:"11",
        will:"+0",
        health:"10",
        cost:"50gc",
        notes:"Two-Handed Weapon, Light Armor",
        type:"Standard"
    },
    {
        name:"Man-at-Arms",
        move:"6",
        fight:"+3",
        shoot:"+0",
        armor:"12",
        will:"+1",
        health:"12",
        cost:"75gc",
        notes:"Hand Weapon, Shield, Light Armor",
        type:"Standard"
    },
    {
        name:"Apothecary",
        move:"6",
        fight:"+1",
        shoot:"+0",
        armor:"10",
        will:"+3",
        health:"12",
        cost:"75",
        notes:"Staff, Healing potion",
        type:"Standard"
    },
    {
        name:"Archer",
        move:"6",
        fight:"+1",
        shoot:"+2",
        armor:"11",
        will:"+0",
        health:"10",
        cost:"75gc",
        notes:"Bow, Quiver, Dagger, Light Armor",
        type:"Specialist"
    },
    {
        name:"Crossbowman",
        move:"6",
        fight:"+1",
        shoot:"+2",
        armor:"11",
        will:"+0",
        health:"10",
        cost:"75gc",
        notes:"Crossbow, Quiver, Dagger, Light Armor",
        type:"Specialist"
    },
    {
        name:"Treasure Hunter",
        move:"7",
        fight:"+3",
        shoot:"+0",
        armor:"11",
        will:"+2",
        health:"12",
        cost:"100gc",
        notes:"Hand Weapon, Dagger, Light Armor",
        type:"Specialist"
    },
    {
        name:"Tracker",
        move:"7",
        fight:"+1",
        shoot:"+2",
        armor:"11",
        will:"+1",
        health:"12",
        cost:"100",
        notes:"Staff, Bow, Quiver, Light Armor",
        type:"Specialist"
    },
    {
        name:"Knight",
        move:"5",
        fight:"+4",
        shoot:"´0",
        armor:"13",
        will:"+1",
        health:"12",
        cost:"125gc",
        notes:"Hand Weapon, Dagger, Shield, Heavy Armor",
        type:"Specialist"
    },
    {
        name:"Templar",
        move:"5",
        fight:"+4",
        shoot:"+0",
        armor:"12",
        will:"+1",
        health:"12",
        cost:"125gc",
        notes:"Two-Handed Weapon, Heavy Armor",
        type:"Specialist"
    },
    {
        name:"Ranger",
        move:"7",
        fight:"+2",
        shoot:"+2",
        armor:"11",
        will:"+2",
        health:"12",
        cost:"125gc",
        notes:"Bow, Quiver, Hand Weapon, Light Armor",
        type:"Specialist"
    },
    {
        name:"Barbarian",
        move:"6",
        fight:"+4",
        shoot:"+0",
        armor:"10",
        will:"+3",
        health:"14",
        cost:"125gc",
        notes:"Two-Handed Weapon, Dagger",
        type:"Specialist"
    },
    {
        name:"Marksman",
        move:"5",
        fight:"+2",
        shoot:"+2",
        armor:"12",
        will:"+1",
        health:"12",
        cost:"125gc",
        notes:"Crossbow, Quiver, Hand Weapon, Heavy Armor",
        type:"Specialist"
    },
    {
        name:"Bard",
        move:"6",
        fight:"+2",
        shoot:"+0",
        armor:"11",
        will:"+4",
        health:"12",
        cost:"100gc",
        notes:"Hand Weapon, Leather Armor, (p35)",
        type:"Standard"
    },
    {
        name:"Crow Master",
        move:"6",
        fight:"+0",
        shoot:"+0",
        armor:"11",
        will:"+2",
        health:"10",
        cost:"100gc",
        notes:"Hand Weapon, Leather Armor, Blood Crow, Cannot carry items, (p36)",
        type:"Standard"
    },
    {
        name:"Javelineer",
        move:"6",
        fight:"+0",
        shoot:"+0",
        armor:"11",
        will:"+2",
        health:"10",
        cost:"25gc",
        notes:"Javelins, (p36)",
        type:"Standard"
    },
    {
        name:"Pack Mule",
        move:"6",
        fight:"+0",
        shoot:"+0",
        armor:"10",
        will:"+0",
        health:"10",
        cost:"20gc",
        notes:"Dagger, 3 item slots, (p37)",
        type:"Standard"
    },
    {
        name:"Trap Expert",
        move:"6",
        fight:"+2",
        shoot:"+0",
        armor:"11",
        will:"+1",
        health:"12",
        cost:"50gc",
        notes:"2 Daggers, Leather Armor, (p34)",
        type:"Standard"
    },
    {
        name:"Tunnel Fighter",
        move:"6",
        fight:"+3",
        shoot:"+0",
        armor:"11",
        will:"+1",
        health:"12",
        cost:"80gc",
        notes:"2 Hand Weapons, Leather Armor, (p35)",
        type:"Standard"
    },
    {
        name:"Assassin",
        move:"6",
        fight:"+2",
        shoot:"+0",
        armor:"10",
        will:"+3",
        health:"12",
        cost:"80gc",
        notes:"Hand Weapon, Poison, Bonus When Supported, Never a Supporting Figure, (p30)",
        type:"Standard"
    },
    {
        name:"Demon Hunter",
        move:"6",
        fight:"+2",
        shoot:"+2",
        armor:"11",
        will:"+2",
        health:"12",
        cost:"Variable",
        notes:"Two-Handed Weapon, Crossbow, Leather Armor, Damage Bonus vs Demons, (p31)",
        type:"Specialist"
    },
    {
        name:"Demonic Servant",
        move:"6",
        fight:"+1",
        shoot:"+0",
        armor:"10",
        will:"+4",
        health:"10",
        cost:"-",
        notes:"Demon, Minor Demonic Attribute, Summoning Assistance, (p32)",
        type:"Standard"
    },
    {
        name:"Monk",
        move:"6",
        fight:"+4",
        shoot:"+0",
        armor:"10",
        will:"+4",
        health:"12",
        cost:"100gc",
        notes:"Bladed Staff, (p34)",
        type:"Specialist"
    },
    {
        name:"Mystic Warrior",
        move:"6",
        fight:"+4",
        shoot:"+0",
        armor:"10",
        will:"+4",
        health:"12",
        cost:"100gc",
        notes:"Unarmed, Magic Attacks, No Unarmed penalties, (p35)",
        type:"Specialist"
    },
    {
        name:"Captain",
        move:"6",
        fight:"+2",
        shoot:"+1",
        armor:"10",
        will:"+3",
        health:"12",
        cost:"100gc",
        notes:"Stat Increase, Additional Equipment, 5 Item Slots, Group Activation, Tricks of the Trade, Experience and Levels, Survivor, Share of the Treasure, (p18)",
        type:"Specialist"
    },
]

let arrSoldiers = []
for(let j=0; j<soldiers.length; j++) {
    arrSoldiers.push(Object.values(soldiers[j]));
};

let mySoldierTable = document.getElementById("soldiersTable");

function updateSoldier(row, name) {
    for(let i=1; i<9;i++) {
        mySoldierTable.rows[row].cells[i].innerHTML = arrSoldiers[name.value][i];
    }
    switch(row) {
        case 1:
            localStorage.setItem("unitOne", name.value);
            console.log("Guardadin");
            break;
        case 2:
            localStorage.setItem("unitTwo", name.value);
            break;
        case 3:
            localStorage.setItem("unitThree", name.value);
            break;
        case 4:
            localStorage.setItem("unitFour", name.value);
            break;
        case 5:
            localStorage.setItem("unitFive", name.value);
            break;
        case 6:
            localStorage.setItem("unitSix", name.value);
            break;
        case 7:
            localStorage.setItem("unitSeven", name.value);
            break;
        case 8:
            localStorage.setItem("unitEight", name.value);
            break;
    }
}
/*function updateWarband() {
}
updateWarband();*/

let arrWizard = [6, "+2", "+0", 10, "+4", 14];

if(localStorage.getItem("wizardStats")){
    arrWizard = localStorage.getItem("wizardStats").split(",");
}

let nameWizard;
let nameApprentice;
let schoolWizard;
let levelWizard;
let skillPoints = 0;
let weaponWizard;

function warbandSave() {
    nameWizard = document.getElementById("wizardName").value;
    localStorage.setItem("wizardName", nameWizard);
    localStorage.setItem("wizardStats", arrWizard);
    schoolWizard = document.getElementById("wizardSchool").value;
    localStorage.setItem("wizardSchool", schoolWizard);
    levelWizard = document.getElementById("wizardLevel").value;
    localStorage.setItem("wizardLevel", levelWizard);
    weaponWizard = document.getElementById("wizardWeapon").value;
    localStorage.setItem("wizardWeapon", weaponWizard);
    nameApprentice = document.getElementById("apprenticeName").value;
    localStorage.setItem("apprenticeName", nameApprentice);
    console.log(nameApprentice);
}

function wizardDelete() {
    localStorage.setItem("wizardStats", [6, "+2", "+0", 10, "+4", 14]);
    localStorage.setItem("wizardName", "");
    localStorage.setItem("apprenticeName", "");
    arrWizard = [6, "+2", "+0", 10, "+4", 14];
    localStorage.setItem("wizardSchool", "")
    localStorage.setItem("wizardLevel", 0);
    localStorage.setItem("wizardWeapon", "")
    levelWizard = 0;
    skillPoints = 0;
    updateWizard();
    statFiller();
}

let myWizardTable = document.getElementById("wizardTable");
let myApprenticeTable = document.getElementById("apprenticeTable");

function updateWizard() {
    document.getElementById("wizardName").value = localStorage.getItem("wizardName");
    document.getElementById("apprenticeName").value = localStorage.getItem("apprenticeName");
    document.getElementById("wizardSchool").value = localStorage.getItem("wizardSchool");
    schoolWizard = localStorage.getItem("wizardSchool;")
    document.getElementById("wizardLevel").value = localStorage.getItem("wizardLevel");
    levelWizard = localStorage.getItem("wizardLevel");
    document.getElementById("wizardWeapon").value = localStorage.getItem("wizardWeapon");
    weaponWizard = localStorage.getItem("wizardWeapon");

}
updateWizard();
statFiller();

function statFiller() {
    for(let i=0; i<6; i++){
        myWizardTable.cells[i].innerHTML = arrWizard[i];
        myApprenticeTable.cells[i].innerHTML = arrWizard[i];
    }
}


function submitLv() {
    if(document.getElementById("wizardLevel").value > levelWizard) {
        console.log("funca");
        skillPoints = document.getElementById("wizardLevel").value - levelWizard;
        levelWizard = document.getElementById("wizardLevel").value;
    }
}

function lvlUp(reference) {
    if(skillPoints > 0) {
        let stat = parseInt(document.getElementById(reference).innerHTML);
        skillPoints--;
        if(reference.includes("Health")) {
            let newStat = stat + 2;
            document.getElementById(reference).innerHTML = newStat;
        } else {
            let newStat = stat + 1;
            document.getElementById(reference).innerHTML = "+" + newStat;
        }
        for(let i=0; i<6; i++) {
            arrWizard[i] = myWizardTable.cells[i].innerHTML;
        }
        statFiller();
        console.log(arrWizard);
    }
}
