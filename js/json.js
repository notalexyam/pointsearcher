/*/ Javascript edition 
$.getJSON("https://spreadsheets.google.com/feeds/list/1g_uZ3Yzsx_jeavSOs9Mo4Y5Vqg2tWLT_48H31oQJK4o/od6/public/values?alt=json" , function(data) {
  
  console.log(data.feed.entry.length); 

  for (var person in data.feed.entry) {
    var name = data.feed.entry[person].title.$t;
    var total_points = data.feed.entry[person].gsx$total.$t; 
    console.log(name);
    console.log(total_points);
    //Names
    var para = document.createElement("h2");
    var node = document.createTextNode(name);
    para.appendChild(node);
    var element = document.getElementById("kcpoints");
    element.appendChild(para);
    // Points
    var subheading = document.createElement("h3");
    var node = document.createTextNode('Total Points ' + total_points);
    subheading.appendChild(node);
    var element = document.getElementById("kcpoints");
    element.appendChild(subheading);
  }
}) */


// Jquery Edition
$.getJSON("https://spreadsheets.google.com/feeds/list/1g_uZ3Yzsx_jeavSOs9Mo4Y5Vqg2tWLT_48H31oQJK4o/od6/public/values?alt=json", function(data) {

  var entry = data.feed.entry;
  console.log(entry)
  $(entry).each(function(){
    console.log(this)
    // Names
    $('.kcpoints').append('<h2> Total points' + this.gsx$name.$t + '<h2>');
    // Points
    $('.kcpoints').append('<h3> Total points' + this.gsx$total.$t + '<h3>');
  })
})



//var spreadsheetID="1g_uZ3Yzsx_jeavSOs9Mo4Y5Vqg2tWLT_48H31oQJK4o";
//var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";



 
// Via Json or Google sheets api v4
//"content":{"type":"text","$t":"event1: 2, event2: 1, event3: 6, total: 9"}
//https://spreadsheets.google.com/feeds/list/1g_uZ3Yzsx_jeavSOs9Mo4Y5Vqg2tWLT_48H31oQJK4o/od6/public/values?alt=json
/*
function loop2(){
  for (var person in data.feed.entry){
    console.log(data.feed.entry[person]);
  }
}
loop2();
*/

 /* function loop() {
  for (var person in data.feed.entry){
  
  var name = data.feed.entry[i].title.$t;
  var total_points = data.feed.entry[i].content.$t.total; 
  var paragraph = document.createElement("p");
  var node = document.createTextNode(JSON.stringify(name));
  paragraph.appendChild(node);
  
  var element = document.getElementById("kcpoints");
  element.appendChild(paragraph);
  
  } 
}

loop(); */

//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>