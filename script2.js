document.getElementById('csvFile').addEventListener('change', handleFileUpload);

// Seperator 
const zeroTemplate = `
{
  "noMerge": false,
  "text": "$0",
  "type": "header",
  "useName": true,
  "width": 0.3
},`;

// 1 Target 1 Mark
const oneTemplate = `
    {
    "default": $3,
    "key": "target-$1",
    "name": "$2",
    "type": "toggle",
    "useDesc": false,
    "width": 0.8
  },
  {
    "default": $d1,
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
  },`;

// 1 Target 2 Marks
const twoTemplate = `
    {
    "default": $3,
    "key": "target-$1",
    "name": "$2",
    "type": "toggle",
    "useDesc": false,
    "width": 0.8
  },
  {
    "default": $d1,
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
    "default": $d2,
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

// 1 Target 3 Marks  
const threeTemplate = `    
  {
      "default": $3,
      "key": "target-$1",
      "name": "$2",
      "type": "toggle",
      "useDesc": false,
      "width": 0.8
    },
    {
      "default": $d1,
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
      "default": $d2,
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
      "default": $d3,
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
    },`;

// 1 Target 4 Marks
const fourTemplate = `    
{
    "default": $3,
    "key": "target-$1",
    "name": "$2",
    "type": "toggle",
    "useDesc": false,
    "width": 0.8
  },
  {
    "default": $d1,
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
    "default": $d2,
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
    "default": $d3,
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
    "default": $d4,
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

// Custom Options Header
const constantToAdd = `
{
  "noMerge": false,
  "text": "",
  "type": "header",
  "useName": false,
  "width": 2
},
{
  "default": true,
  "key": "optModifier",
  "name": "Enable Mouseover Modifier",
  "type": "toggle",
  "useDesc": false,
  "width": 1
},
{
  "default": 2,
  "key": "ddModifer",
  "name": "",
  "type": "select",
  "useDesc": false,
  "values": [
    "LALT",
    "LCTRL",
    "LSHIFT"
  ],
  "width": 0.5
},
{
  "default": false,
  "desc": "Marks gets unlocked once combat is dropped, the mob with the mark dies.",
  "key": "optLockAfterUse",
  "name": "Lock marks after use",
  "type": "toggle",
  "useDesc": true,
  "width": 1
},
{
  "noMerge": false,
  "text": "",
  "type": "header",
  "useName": false,
  "width": 2
},
{
  "collapse": true,
  "groupType": "simple",
  "hideReorder": true,
  "key": "optFramework",
  "limitType": "none",
  "name": "DQs Marking Framework",
  "nameSource": 0,
  "noMerge": false,
  "size": 10,
  "subOptions": [
`;

// Custom Options Footer
const endbracket = `
],
"type": "group",
"useCollapse": true,
"width": 2
}
`;


function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    console.log("File upload successful. Click the 'Upload and Process' button to proceed.");
  }
}

function validateRow(row, type) {
  console.log("Validating entry:", row, "with designated type:", type);  // Validate the given entry with its designated type

  switch (type) {
    case "zero":
      if (!!row[0]) {  // Access 'zone' using the index
        console.log("Validation successful for type 'zero'.");
        return true;
      }
      console.error("Validation failed for type 'zero'. Ensure required field(s) are filled correctly.");
      return false;

    case "one":
    case "two":
    case "three":
    case "four":
      if (row[2] && row[1]) {  // Access 'npcid' and 'npcname' using their respective indices
        console.log(`Validation successful for type '${type}'.`);
        return true;
      }
      console.error(`Validation failed for type '${type}'. Detected missing or incorrect fields: npcid = ${row[2]}, npcname = ${row[1]}`);
      return false;

    default:
      console.error(`Encountered unknown type: ${type}. Skipping entry validation.`);
      return false;
  }
}

// This function replaces placeholders in a provided template based on values in the data row and the maximum number of "d" fields.
function replaceDefaultAndDs(template, row, maxD) {
  // Replace 'npcid' and 'npcname' placeholders in the template.
  let result = template
    .replace(/\$1/g, row.npcid.trim())
    .replace(/\$2/g, row.npcname.trim())
    // Verify value in 'default' field and replace the placeholder with 'true' if not set to 'false'.
    .replace(/\$3/g, row.default === "false" ? "false" : "true");

  // Iterate over all "d" fields up to the specified maximum count (maxD).
  for (let i = 1; i <= maxD; i++) {
    // Retrieve value from the respective "d" field. Use "9" as a default if not set.
    const value = row[`d${i}`] || "9";
    // Replace placeholder in the template with the value from the "d" field.
    result = result.replace(new RegExp(`\\$d${i}`, 'g'), value.trim());
  }

  return result;
}

function processCSV(data) {
  let output = "";

  // Begin from index 1 to skip the header row.
  for (let i = 1; i < data.length; i++) {
    const row = data[i];

    // Validate row based on its type.
    if (!validateRow(row, row[3])) {
      console.warn(`Detected missing required fields for type '${row.type}'. Full entry content: ${JSON.stringify(row)}`);
      continue;
    }

    let result;

    switch (row.type) {
      case "zero":
        // For type 'zero', only the 'zone' field is replaced.
        result = zeroTemplate.replace(/\$0/g, row.zone.trim());
        break;
      // For types 'one' through 'four', placeholders are replaced and the respective number of "d" fields are considered.
      case "one":
        result = replaceDefaultAndDs(oneTemplate, row, 1);
        break;
      case "two":
        result = replaceDefaultAndDs(twoTemplate, row, 2);
        break;
      case "three":
        result = replaceDefaultAndDs(threeTemplate, row, 3);
        break;
      case "four":
        result = replaceDefaultAndDs(fourTemplate, row, 4);
        break;
    }

    // Append result to the output if it's valid.
    if (result) {
      output += result + '\n';
    }
  }

  return output;
}

function processFile() {
  const fileInput = document.getElementById('csvFile');
  const file = fileInput.files[0];

  if (file) {
    Papa.parse(file, {
      complete: function (results) {
        const processedData = processCSV(results.data);
        displayResults(processedData);
        updateCustomTextWithProcessedData(processedData);
      }
    });
  } else {
    alert('Please select a valid file to proceed.');
  }
}

function parseCSV(data) {
  const rows = data.split('\n');
  const result = [];

  rows.forEach(row => {
    const columns = row.split(';');
    if (columns.length !== 10) {
      // Skipping the row due to an incorrect number of columns.
      console.warn(`Skipping row due to incorrect number of columns: ${row}`);
      return;
    }
    result.push({
      zone: columns[0],
      npcname: columns[1],
      npcid: columns[2],
      type: columns[3],
      default: columns[4],
      d1: columns[5],
      d2: columns[6],
      d3: columns[7],
      d4: columns[8],
      comment: columns[9],
    });
  });

  return result;
}

function displayResults(data) {
  const textarea = document.getElementById('resultOutput');
  textarea.value = data;
}

function updateCustomTextWithProcessedData(processedData) {
  let customInputElem = document.getElementById('customInput');
  const customText = customInputElem.value;

  const dataWithNoLastComma = processedData.trim().endsWith("},")
    ? processedData.trim().slice(0, -1)
    : processedData.trim();

  const newData = constantToAdd + dataWithNoLastComma + endbracket;

  const updatedText = customText.replace(/"authorOptions": \[.*?\],/g, `"authorOptions": [${newData}],`).replace(/\|TInterface\\TargetingFrame\\UI/g, "|TInterface\\\\TargetingFrame\\\\UI");
  console.log(updatedText);
  if (updatedText === customText) {
    alert('The "authorOptions" placeholder could not be found or is in the wrong format. Please check the table data.');
    return;
  }

  document.getElementById('output').textContent = updatedText;
}