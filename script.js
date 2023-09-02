document.getElementById('csvFile').addEventListener('change', handleFileUpload);

const separatorTemplate = `
{
  "noMerge": false,
  "text": "$0",
  "type": "header",
  "useName": true,
  "width": 0.3
},`;

const trashTemplate = `    
    {
        "default": true,
        "key": "target-$1",
        "name": "$2",
        "type": "toggle",
        "useDesc": false,
        "width": 0.8
      },
      {
        "default": 9,
        "key": "p1-$1",
        "name": "",
        "type": "select",
        "useDesc": false,
        "values": [
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_1:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_2:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_3:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_4:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_5:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_6:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_7:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_8:16|t",
          "None"
        ],
        "width": 0.3
      },
      {
        "default": 9,
        "key": "p2-$1",
        "name": "",
        "type": "select",
        "useDesc": false,
        "values": [
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_1:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_2:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_3:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_4:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_5:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_6:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_7:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_8:16|t",
          "None"
        ],
        "width": 0.3
      },
      {
        "default": 9,
        "key": "p3-$1",
        "name": "",
        "type": "select",
        "useDesc": false,
        "values": [
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_1:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_2:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_3:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_4:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_5:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_6:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_7:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_8:16|t",
          "None"
        ],
        "width": 0.3
      },
      {
        "default": 9,
        "key": "p4-$1",
        "name": "",
        "type": "select",
        "useDesc": false,
        "values": [
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_1:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_2:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_3:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_4:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_5:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_6:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_7:16|t",
          "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_8:16|t",
          "None"
        ],
        "width": 0.3
      },`;

const bossTemplate = `
    {
    "default": true,
    "key": "target-$1",
    "name": "$2",
    "type": "toggle",
    "useDesc": false,
    "width": 0.8
  },
  {
    "default": 9,
    "key": "p1-$1",
    "name": "",
    "type": "select",
    "useDesc": false,
    "values": [
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_1:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_2:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_3:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_4:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_5:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_6:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_7:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_8:16|t",
      "None"
    ],
    "width": 0.3
  },
  {
    "default": 9,
    "key": "p2-$1",
    "name": "",
    "type": "select",
    "useDesc": false,
    "values": [
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_1:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_2:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_3:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_4:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_5:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_6:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_7:16|t",
      "|TInterface\\TargetingFrame\\UI-RaidTargetingIcon_8:16|t",
      "None"
    ],
    "width": 0.3
  },`;



function handleFileUpload(event) {
    const file = event.target.files[0];
    Papa.parse(file, {
        complete: function(results) {
            processCSV(results.data);
        }
    });
}


function processCSV(data) {
    let output = "";

    data.forEach(row => {
        let result;
        switch (row.type) {
            case "separator":
                if (!row.zone) {
                    console.warn("Zone field is empty for type 'separator'. Skipping...");
                    return;
                }
                result = separatorTemplate.replace(/\$0/g, row.zone.trim());
                output += result + '\n';
                break;
            case "trash":
                if (!row.npcid || !row.monster) {
                    console.warn(`npcid or monster field is empty for type '${row.type}'. Skipping...`);
                    return;
                }
                result = trashTemplate.replace(/\$1/g, row.npcid.trim()).replace(/\$2/g, row.monster.trim());
                output += result + '\n';
                break;
            case "boss":
                if (!row.npcid || !row.monster) {
                    console.warn(`npcid or monster field is empty for type '${row.type}'. Skipping...`);
                    return;
                }
                result = bossTemplate.replace(/\$1/g, row.npcid.trim()).replace(/\$2/g, row.monster.trim());
                output += result + '\n';
                break;
        }
    });

    document.getElementById('output').textContent = output;
}

function processFile() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const csv = event.target.result;
            const data = parseCSV(csv); 
            processCSV(data); 
            const processedData = processCSV(data); 
            displayResults(processedData);
        }
        reader.readAsText(file, "UTF-8"); 
    } else {
        alert('Please select a file first.');
    }
    
}

function parseCSV(data) {
    const rows = data.split('\n');
    const result = [];

    rows.forEach(row => {
        const columns = row.split(';');
        result.push({
            zone: columns[0],
            monster: columns[1],
            npcid: columns[2],
            type: columns[3],
            comment: columns[4]
        });
    });

    return result;
}

function displayResults(data) {
    const textarea = document.getElementById('resultOutput');
    textarea.value = data;
}