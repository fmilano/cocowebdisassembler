/**
 * @fileOverview  The model class Section with attribute definitions and storage management methods
 * @author Federico Milano
 * @copyright Copyright 2020 Federico Milano 
 * @license This code is licensed under The Apache License 2.0.
 */
/**
 * Constructor function for the class Section 
 * @constructor
 * @param {{type: string, offset: number, length: number, name:string}} slots - Object creation slots.
 */
function Section( slots) {
    this.type = slots.type;
    this.offset = slots.offset;
    this.length = slots.length;
    this.name = slots.name;
  };

/***********************************************
***  Class-level ("static") properties  ********
************************************************/
Section.instances = {};  // initially an empty associative array

/*********************************************************
***  Class-level ("static") storage management methods ***
**********************************************************/
// Convert row to object
Section.convertRow2Obj = function (sectionRow) {
  var section = new Section(sectionRow);
  return section;
};
// Load the section table from Local Storage
Section.loadAll = function () {
  var key="", keys=[], sectionTableString="", sectionTable={}, i=0;  
  try {
    if (localStorage.getItem("sectionTable")) {
      sectionTableString = localStorage.getItem("sectionTable");
    }
  } catch (e) {
    alert("Error when reading from Local Storage\n" + e);
  }
  if (sectionTableString) {
    sectionTable = JSON.parse(sectionTableString);
    keys = Object.keys(sectionTable);
    console.log( keys.length +" sections loaded.");
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      Section.instances[key] = Section.convertRow2Obj(sectionTable[key]);
    }
  }
};
//  Save all section objects to Local Storage
Section.saveAll = function () {
  var sectionTableString="", error=false,
      nmrOfSections = Object.keys(Section.instances).length;  
  try {
    sectionTableString = JSON.stringify(Section.instances);
    localStorage.setItem("sectionTable", sectionTableString);
  } catch (e) {
    alert("Error when writing to Local Storage\n" + e);
    error = true;
  }
  if (!error) console.log(nmrOfSections + " sections saved.");
};
//  Create a new section row
Section.add = function (slots) {
  var section = new Section(slots);
  Section.instances[slots.offset] = section;
  console.log("Section " + slots.offset + " created!");
};
//  Update an existing section row
Section.update = function (slots) {
  var section = Section.instances[slots.offset];
  if (section.type !== slots.type) { section.type = slots.type;}
  if (section.name !== slots.name) { section.name = slots.name;}
  console.log("Section " + slots.offset + " modified!");
};
//  Delete a section row from persistent storage
Section.destroy = function (offset) {
  if (Section.instances[offset]) {
    console.log("Section " + offset + " deleted");
    delete Section.instances[offset];
  } else {
    console.log("There is no section with OFFSET " + offset + " in the database!");
  }
};
/*******************************************
*** Auxiliary methods for testing **********
********************************************/
//  Create and save test data
Section.createTestData = function () {
  Section.instances[0x0F00] = new Section({offset:0x0F00, type:"data", name:"data1", length:2000});
  Section.instances[0x1000] = new Section({offset:0x1000, type:"code", name:"code1", length:2000});
  Section.instances[0x4A00] = new Section({offset:0x4A00, type:"code", name:"code1", length:2000});
  Section.saveAll();
};
//  Clear data
Section.clearData = function () {
  if (confirm("Do you really want to delete all section data?")) {
    Section.instances = {};
    localStorage.setItem("sections", "{}");
  }
};
