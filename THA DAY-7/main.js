// var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

// console.log(Object.keys(student));

// console.log(student);
// delete student.rollno;

// console.log(student);

// console.log((objectLength = Object.keys(student).length));

// var library = [
//   { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
//   { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];
// for (var i = 0; i < library.length; i++) {
//   var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
//   if (library[i].readingStatus) {
//     console.log("Already read " + book);
//   } else {
//     console.log("You still need to read " + book);
//   }
// }

// function cylinder(r, h) {
//   this.r = r;
//   this.h = h;
//   let v = Math.PI * (this.r * this.r) * this.h;
//   return v;
// }

// let vol = cylinder(121, 1214);
// console.log("Volume of cylinder is ", vol.toFixed(4));

const library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];
  
  // console.log(library[0].keys());
  
  for (let i = 0; library.length; i++) {
    if (library[i].libraryID > library[i + 1].libraryID) {
      return 1;
    }
    if (library[library.length - 1]) {
      if (library[library.length - 1].libraryID > library[0].libraryID) {
        return 1;
      }
    }
  }
  console.log(library);