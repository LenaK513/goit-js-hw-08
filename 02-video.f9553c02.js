const e=document.querySelector("#vimeo-player"),o=new Vimeo.Player(e);o.on("play",(function(e){console.log("played the video!",e)})),o.getVideoTitle().then((function(e){console.log("title:",e)}));
//# sourceMappingURL=02-video.f9553c02.js.map
