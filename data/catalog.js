// Playback policy: R-rated and age-restricted movie entries are excluded from this channel rotation.
// Starz is a fresh 2020-2026 channel. These independent full-length releases
// were checked for playable YouTube embedding when the catalog was assembled.
window.HERMIT_CATALOG = [
  { id:"STZ-002", title:"Daddy's Divas", year:2022, collection:"Family Comedy", runtimeSeconds:12723, videoId:"3b9cORpA3cY", source:"Indie Rights", networkChannel:"Starz", cleared:true },
  { id:"STZ-004", title:"A Mother's Hope", year:2024, collection:"Original Drama", runtimeSeconds:7055, videoId:"8R7FmuaFNf0", source:"Indie Rights", networkChannel:"Starz", cleared:true },
  { id:"STZ-005", title:"Fated", year:2024, collection:"Romantic Drama", runtimeSeconds:5543, videoId:"BGRnVRpEjAA", source:"Indie Rights", networkChannel:"Starz", cleared:true },
  { id:"STZ-006", title:"Player", year:2024, collection:"Contemporary Drama", runtimeSeconds:5232, videoId:"QgFP4kkx9OQ", source:"Indie Rights", networkChannel:"Starz", cleared:true },
  { id:"STZ-008", title:"Amy's F It List", year:2023, collection:"Bucket-List Comedy", runtimeSeconds:4699, videoId:"bMXEcbmkr9w", source:"Indie Rights", networkChannel:"Starz", cleared:true },
  { id:"STZ-009", title:"Wrong Numbers", year:2024, collection:"Original Drama", runtimeSeconds:5385, videoId:"f2jpuJpXJM4", source:"Indie Rights", networkChannel:"Starz", cleared:true },
  { id:"STZ-013", title:"Sincerity", year:2025, collection:"Faith and Hope", runtimeSeconds:5156, videoId:"pG0w4nzq3nA", source:"Indie Rights", networkChannel:"Starz", cleared:true }
].map(movie => ({ ...movie, posterUrl:"" }));

window.INFINITY_CHANNEL = {
  id:"STARZ",
  era:"2020-2026",
  minimumYear:2020,
  maximumYear:2026,
  schedulePolicy:"Use this checked-in 2020-2026 catalog continuously; never replace it with an empty source-farm cache."
};

window.HERMIT_COMMERCIALS = [
  { id:"AD-001", title:"Starz intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Tonight on Starz", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"Starz station break", durationSeconds:60, videoId:"", cleared:true }
];

(function syncInfinityChannels(){
  if (document.querySelector('script[data-infinity-channels]')) return;
  const script = document.createElement('script');
  script.src = 'https://www-infinity4.github.io/TNT/channels.js?v=20260915-live1';
  script.dataset.infinityChannels = '1';
  document.head.appendChild(script);
})();
