let videos = [
  {
    title: "Photoshop tutorial",
    lengthInMinutes: 70,
    category: "Education",
    uploadDate: new Date("07-22-2019"),
    tags: "design, digital, photoshop, creativity",
    features: ["Live", "360°", "HDR"],
    viewCount: 4700,
    rating: 4.3
  },
  {
    title: "Episode # 01 - The Best Comedy Show",
    lengthInMinutes: 19,
    category: "Entertainment",
    uploadDate: new Date("07-03-2019"),
    tags: "comedy, funny",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 145615,
    rating: 3.9
  },
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 6,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript , loops , web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  // my own
  //1
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 6,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  //2
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 4,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: " loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  //3
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 3,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  //4
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 5,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: " loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  //5
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 2,
    category: "Education",
    uploadDate: new Date("28-07-2019"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  //6
  {
    title: "How to use FOy Tech Karo",
    lengthInMinutes: 5,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  //7
  {
    title: "How to use op - tutorial by Tech Karo",
    lengthInMinutes: 25,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  //8
  {
    title: "How to use FOR EACH loop - tutorialaro",
    lengthInMinutes: 7,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  //9
  {
    title: "HowEACH loop - tutorial by Tech Karo",
    lengthInMinutes: 2,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  //10
  {
    title: "How to use FOR EACH loTech Karo",
    lengthInMinutes: 23,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
];

// answers
/*1.Print each video in this format:
Title: Photoshop tutorial
Length: 70 minutes
Category: Education
Views: 4,700
Uploaded On: 22-July-2019
Rating: 
*/

/*for ( i = 0; i < videos.length; i++)
{
console.log("Title: " + " " +  videos[i].title);
console.log("Length: " +" " + videos[i].lengthInMinutes );
console.log("Category :" + " " + videos[i].category)
console.log("Views : " +" " + videos[i].viewCount )
console.log(" Upload on :" + " " +videos[i].uploadDate )
console.log("Ratings" + " " +videos[i].rating )
console.log("");
}
*/


//2.Print titles of all short ( less than 3 minutes ) videos.
/*
for ( i = 0; i < videos.length; i++){
    if(videos[i].lengthInMinutes < 3){
        console.log(" titles of all short Videos: " + " " +  videos[i].title);  
    }
}
*/

//3.Print titles of all long ( greater than 20 minutes ) videos.
/*()
for ( i = 0; i < videos.length; i++){
    if(videos[i].lengthInMinutes > 20){
        console.log(" titles of all long Videos: " + " " +  videos[i].title);  
    }
}
*/
//4.Print titles of all medium length videos.
/*
for ( i = 0; i < videos.length; i++){
    if(videos[i].lengthInMinutes < 20 && videos[i].lengthInMinutes >3 ){
        console.log(" titles of all medium Videos: " + " " +  videos[i].title);  
    }
}
*/


//5.Print title of the longest video
//side
/*
for ( i = 0; i < videos.length; i++){
    if(videos[i].lengthInMinutes < 20 && videos[i].lengthInMinutes >3 ){
        console.log(" titles of all medium Videos: " + " " +  videos[i].title);  
    }
  }
*/
   
 
//6.Print titles of all "Educational" videos

/*for( i = 0; i < videos.length; i++){
    if(videos[i].category === "Education" ){
        console.log("Title of Educational Videos: " + " " +  videos[i].title);  
    }
}*/
   
      //With foreach loop
      /*videos.forEach(function (categ) {
        console.log("Title of Educational Videos: " + " " + categ.title);
      });*/


//7.Print titles of all videos with tag "Javascript"
/*for( i = 0; i < videos.length; i++){
    if(videos[i].tags === ){
        console.log("Title of tags Videos: " + " " +  videos[i].title);
    }
}*/


//8.Print titles of all videos with HD feature
//9.Print titles of all videos uploaded today
//10.Print titles of all videos uploaded this week
//11.Print titles of all videos uploaded this month
//12.Print titles of all videos uploaded this year
//13.Sort the array in ascending order of number of views and print the titles
//14.Sort the array in ascending order of rating and print the titles
