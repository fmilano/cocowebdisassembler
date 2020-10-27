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
  var section = new Section( sectionRow);
  return section;
};
// Load the section table from Local Storage
Section.loadAll = function () {
  var key="", keys=[], sectionsString="", sections={}, i=0;  
  try {
    if (localStorage.getItem("sections")) {
      sectionsString = localStorage.getItem("sections");
    }
  } catch (e) {
    alert("Error when reading from Local Storage\n" + e);
  }
  if (sectionsString) {
    sections = JSON.parse( sectionsString);
    keys = Object.keys( sections);
    console.log( keys.length +" sections loaded.");
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      Section.instances[key] = Section.convertRow2Obj( sections[key]);
    }
  }
};
//  Save all section objects to Local Storage
Section.saveAll = function () {
  var sectionsString="", error=false,
      nmrOfSections = Object.keys( Section.instances).length;  
  try {
    sectionsString = JSON.stringify( Section.instances);
    localStorage.setItem("sections", sectionsString);
  } catch (e) {
    alert("Error when writing to Local Storage\n" + e);
    error = true;
  }
  if (!error) console.log( nmrOfSections + " sections saved.");
};
//  Create a new section row
Section.add = function (slots) {
  var section = new Section( slots);
  Section.instances[slots.isbn] = section;
  console.log("Section " + slots.isbn + " created!");
};
//  Update an existing section row
Section.update = function (slots) {
  var section = Section.instances[slots.isbn];
  var year = parseInt( slots.year);
  if (section.title !== slots.title) { section.title = slots.title;}
  if (section.year !== slots.year) { section.year = year;}
  console.log("Section " + slots.isbn + " modified!");
};
//  Delete a section row from persistent storage
Section.destroy = function (isbn) {
  if (Section.instances[isbn]) {
    console.log("Section " + isbn + " deleted");
    delete Section.instances[isbn];
  } else {
    console.log("There is no section with ISBN " + isbn + " in the database!");
  }
};
/*******************************************
*** Auxiliary methods for testing **********
********************************************/
//  Create and save test data
Section.createTestData = function () {
  Section.instances["006251587X"] = new Section({isbn:"006251587X", title:"Weaving the Web", year:2000});
  Section.instances["0465026567"] = new Section({isbn:"0465026567", title:"Gödel, Escher, Bach", year:1999});
  Section.instances["0465030793"] = new Section({isbn:"0465030793", title:"I Am A Strange Loop", year:2008});
  Section.saveAll();
};
//  Clear data
Section.clearData = function () {
  if (confirm("Do you really want to delete all section data?")) {
    Section.instances = {};
    localStorage.setItem("sections", "{}");
  }
};
