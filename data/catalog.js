// Unique seed bucket 6/8 for Starz.
// Control Phi's movie source farm expands this channel toward 96 distinct,
// profile-matched full movies. The seed IDs are never shared with another
// movie-channel seed catalog.
(function(){
  "use strict";

  const rows = [
    ["The Dog Who Saved Christmas",5305,"W-nwHSugFHU","Family Central"],
    ["Maybe I'm Fine",5137,"dX4VsKS0MAM","Family Central"],
    ["Abner the Invisible Dog",5363,"-iVnZI_q0Y4","Family Central"],
    ["Jungle Shuffle",4892,"JRkhO0l_5hk","Family Central"],
    ["A Piece of Cake",4684,"XaaUyj8QlgA","Shout! Studios"],
    ["Tito and the Birds",4413,"DJGggt11Ou0","Shout! Studios"],
    ["A Christmas Karen",5877,"6nJ8n3MIiZY","FilmRise Movies"]
  ];

  window.HERMIT_CATALOG=rows.map(function(row,index){return{id:"STARZ-SEED-"+String(index+1).padStart(3,"0"),title:row[0],year:null,collection:"2020s Feature Seed",runtimeSeconds:row[1],videoId:row[2],source:row[3],networkChannel:"Starz",contentClass:"Seed Feature",rating:"Unrated",cleared:true,posterUrl:""};});
  window.INFINITY_CHANNEL={id:"STARZ",sourcePolicy:"Unique static seed bucket 6/8. Runtime catalog expansion comes from Starz's own Control Phi source profile.",schedulePolicy:"Seven-day no-repeat scheduler. Missing inventory stays empty until unique sources are harvested; it never wraps the seed list."};
  window.HERMIT_COMMERCIALS=[{id:"AD-001",title:"Starz intermission",durationSeconds:60,videoId:"",cleared:true}];
})();
