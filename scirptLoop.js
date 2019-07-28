
// answers
/*1.Print each video in this format:
Title: Photoshop tutorial
Length: 70 minutes
Category: Education
Views: 4,700
Uploaded On: 22-July-2019
Rating: 
*/

videos.forEach(function (info) {

    console.log("Title: " + " " + info.title);
    console.log("Length: " + " " + info.lengthInMinutes);
    console.log("Category :" + " " + info.category)
    console.log("Views : " + " " + info.viewCount)
    console.log(" Upload on :" + " " + info.uploadDate)
    console.log("Ratings" + " " + info.rating)
    console.log("");
});




//2.Print titles of all short ( less than 3 minutes ) videos.

videos.forEach(function (short) {
    if (short.lengthInMinutes < 3) {
        console.log(" titles of all short Videos: " + " " + short.title);
    }
});

//3.Print titles of all long ( greater than 20 minutes ) videos.
videos.forEach(function (long) {
    if (long.lengthInMinutes > 20) {
        console.log(" titles of all long Videos: " + " " + long.title);
    }
});



//4.Print titles of all medium length videos.
videos.forEach(function (medium) {
    if (medium.lengthInMinutes < 20 && medium.lengthInMinutes > 3) {
        console.log(" titles of all medium Videos: " + " " + medium.title);
    }
});

//5.Print title of the longest video
videos.forEach(function (titllel) {
    if (titllel.lengthInMinutes < 20 && titllel.lengthInMinutes > 3) {
        console.log(" titles of all medium Videos: " + " " + titllel.title);
    }
});

//6.Print titles of all "Educational" videos

videos.forEach(function (categ) {
    console.log("Title of Educational Videos: " + " " + categ.title);
});


//7.Print titles of all videos with tag "Javascript"


videos.forEach((maintag, index) => {
    let str = maintag.tags;
    let res = str.split(", ");
    res.forEach((tag, index) => {
        if (tag === "javascript") {
            console.log(" titles of all videos with tag " + maintag.title);
        }
    });

});

//8.Print titles of all videos with HD feature

videos.forEach((mainntag, index) => {

    made = mainntag.features;

    made.forEach((feit, index) => {
        if (feit === "HD") {
            console.log(" titles of all videos with HD feature " + mainntag.title);
        }
    });
});

//9.Print titles of all videos uploaded today
let today = new Date();
let dd = today.getDate();

let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '-' + dd + '-' + yyyy;
console.log(today);
videos.forEach(find => {
   uDate= find.uploadDate;
   uDate.forEach(upload => {
       if(upload == today){
        console.log(" titles of all videos uploaded today " + find.title);
       }
   });
});

//10.Print titles of all videos uploaded this week
//11.Print titles of all videos uploaded this month
//12.Print titles of all videos uploaded this year
//13.Sort the array in ascending order of number of views and print the titles
//14.Sort the array in ascending order of rating and print the titles
