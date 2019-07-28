
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



// videos.forEach(sevenFunction)

// function sevenFunction(item, index, arr) {
//     let arrOfTags = videos[index].tags.split(", ");
//     for (let i = 0; i < arrOfTags.length; i++) {
//         if (arrOfTags[i] === "javascript") {
//             console.log(videos[index].title);
//         }
//     }

// }


for(let i=0; i<videos.length; i++){
 let str =videos[i].tags;
 let res =str.split(" , ");
 console.log(res); 
 for(j=0; j<res.length; j++){

    console.log(res[j].title); 
    //  if(res[j] === "javascript"){
    //     console.log(res[j].title); 
    //  }
 }
     
}

