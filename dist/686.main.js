"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[686],{643:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(77);const o=new CSSStyleSheet;o.replaceSync("/* 1100px */\r\n\r\n/* 1000px */\r\n\r\n/* 850px */\r\n\r\n/* 650px */\r\n\r\n.title-page {\r\n  display: flex;\r\n  column-gap: 1.5ch;\r\n\r\n  font-size: 1.6rem;\r\n  font-family: var(--font-barlow-condensed);\r\n\r\n  letter-spacing: 0.295rem; /* 4.72px */\r\n\r\n  user-select: text;\r\n}\r\n\r\n.title-page > .index {\r\n    color: #50525a;\r\n    font-weight: bold;\r\n  }\r\n");const i=o;function a(e,n){return t.ZP.div({class:"title-page"},t.ZP.div({class:"index"},e),t.ZP.div({class:"name"},n))}document.adoptedStyleSheets=[...document.adoptedStyleSheets,i]},686:(e,n,r)=>{r.r(n),r.d(n,{default:()=>l});var t=r(643),o=r(77),i=r(773);const a=new CSSStyleSheet;a.replaceSync("/* 1100px */\r\n\r\n/* 1000px */\r\n\r\n/* 850px */\r\n\r\n/* 650px */\r\n\r\n.technology-block {\r\n  display: grid;\r\n  grid-template-columns: 1fr minmax(18rem, 30rem);\r\n  grid-template-rows: 5rem auto;\r\n  align-content: center;\r\n  column-gap: 1rem;\r\n\r\n  padding-left: 2rem;\r\n\r\n  overflow: auto;\r\n}\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block {\r\n    grid-template-columns: auto;\r\n    grid-template-rows: repeat(3, min-content);\r\n    align-content: stretch;\r\n    row-gap: 4rem;\r\n\r\n    padding-left: 0;\r\n    padding-top: 3rem\r\n}\r\n  }\r\n\r\n@media not (max-width: 53.125em) {\r\n\r\n.technology-block > .title-page {\r\n      display: none\r\n  }\r\n    }\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block > .title-page {\r\n      grid-column: 1 / span 1;\r\n      grid-row: 1 / span 1;\r\n\r\n      padding-left: 2rem\r\n  }\r\n    }\r\n\r\n.technology-block > .infosection {\r\n    grid-column: 1 / span 1;\r\n    grid-row: 2 / span 1;\r\n\r\n    justify-self: center;\r\n\r\n    width: 38rem;\r\n  }\r\n\r\n@media (max-width: 62.5em) {\r\n\r\n.technology-block > .infosection {\r\n      width: 31rem\r\n  }\r\n    }\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block > .infosection {\r\n      grid-column: 1 / span 1;\r\n      grid-row: 3 / span 1;\r\n\r\n      width: auto\r\n  }\r\n    }\r\n\r\n.technology-block > .imagesection {\r\n    grid-column: 2 / span 1;\r\n    grid-row: 2 / span 1;\r\n\r\n    align-self: center;\r\n  }\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block > .imagesection {\r\n      grid-column: 1 / span 1;\r\n      grid-row: 2 / span 1\r\n  }\r\n    }\r\n\r\n.technology-block {\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.technology-block > .infosection {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1rem;\r\n\r\n    padding-bottom: 2rem;\r\n\r\n  }\r\n\r\n@media (max-width: 40.625em) {\r\n\r\n.technology-block > .infosection {\r\n      padding-inline: 1rem\r\n\r\n  }\r\n    }\r\n\r\n.technology-block > .infosection > .title-page {\r\n      transform: translateY(-4rem);\r\n    }\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block > .infosection > .title-page {\r\n        display: none\r\n    }\r\n      }\r\n\r\n.technology-block > .infosection > .selectinfo {\r\n      padding-top: 3rem;\r\n      \r\n      display: flex;\r\n      column-gap: 4rem;\r\n    }\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block > .infosection > .selectinfo {\r\n        padding-top: 0;\r\n        \r\n        flex-direction: column;\r\n        row-gap: 3rem\r\n    }\r\n      }\r\n\r\n.technology-block > .infosection > .selectinfo > .select {\r\n        display: flex;\r\n        flex-direction: column;\r\n        row-gap: 2rem;\r\n      }\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block > .infosection > .selectinfo > .select {\r\n          align-self: center;\r\n\r\n          flex-direction: row;\r\n          column-gap: 2rem\r\n      }\r\n        }\r\n\r\n.technology-block > .infosection > .selectinfo > .select > .option {\r\n          display: grid;\r\n          place-items: center;\r\n\r\n          border-radius: 50%;\r\n          width: max(65px, 2.3em);\r\n          aspect-ratio: 1 / 1;\r\n          border: solid 2px #4c4d56;\r\n\r\n          font-size: 2rem;\r\n          font-family: var(--font-bellefair);\r\n        }\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block > .infosection > .selectinfo > .select > .option {\r\n            width: max(50px, 2em)\r\n        }\r\n          }\r\n\r\n@media (hover: hover) {\r\n\r\n.technology-block > .infosection > .selectinfo > .select > .option:hover {\r\n            border-color: #fff\r\n    }\r\n      }\r\n\r\n.technology-block > .infosection > .selectinfo > .select > .option:is(:focus-visible, :active) {\r\n            border-color: #fff;\r\n    }\r\n\r\n.technology-block > .infosection > .selectinfo > .select > .option.-active {\r\n            border-color: #fff;\r\n            background-color: #fff;\r\n\r\n            color: #000;\r\n          }\r\n\r\n.technology-block > .infosection > .selectinfo > .info {\r\n        flex-shrink: 1;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n      }\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block > .infosection > .selectinfo > .info {\r\n          text-align: center\r\n      }\r\n        }\r\n\r\n.technology-block > .infosection > .selectinfo > .info > .pretitle {\r\n          color: var(--secondary-color);\r\n          font-family: var(--font-barlow-condensed);\r\n          letter-spacing: 0.16875rem;\r\n        }\r\n\r\n/* 2.7px */\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block > .infosection > .selectinfo > .info > .pretitle {\r\n            margin-bottom: 1rem\r\n        }\r\n          }\r\n\r\n@media (max-width: 40.625em) {\r\n\r\n.technology-block > .infosection > .selectinfo > .info > .pretitle {\r\n            margin-bottom: 0.3rem\r\n        }\r\n          }\r\n\r\n.technology-block > .infosection > .selectinfo > .info > .title {\r\n          margin-top: 0.5rem;\r\n          margin-bottom: 1rem;\r\n\r\n          font-size: 3.5rem;\r\n          font-family: var(--font-bellefair);\r\n          font-weight: normal;\r\n          text-transform: uppercase;\r\n        }\r\n\r\n@media (max-width: 62.5em) {\r\n\r\n.technology-block > .infosection > .selectinfo > .info > .title {\r\n            font-size: 2.5rem\r\n        }\r\n          }\r\n\r\n@media (max-width: 40.625em) {\r\n\r\n.technology-block > .infosection > .selectinfo > .info > .title {\r\n            font-size: 1.5rem\r\n        }\r\n          }\r\n\r\n.technology-block > .infosection > .selectinfo > .info > .description {\r\n          max-width: 47ch;\r\n\r\n          color: var(--secondary-color);\r\n          line-height: 2rem;\r\n        }\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block > .infosection > .selectinfo > .info > .description {\r\n            align-self: center\r\n        }\r\n          }\r\n\r\n.technology-block > .imagesection {\r\n    padding-bottom: 1rem;\r\n  }\r\n\r\n.technology-block > .imagesection > .image {\r\n      display: flex;\r\n    }\r\n\r\n.technology-block > .imagesection > .image > img {\r\n        flex-grow: 1;\r\n        flex-shrink: 1;\r\n\r\n        object-fit: contain;\r\n      }\r\n\r\n@media (max-width: 53.125em) {\r\n\r\n.technology-block > .imagesection > .image > img {\r\n          /* Set common height to images since one of them has different height */\r\n          height: 334px\r\n      }\r\n        }\r\n\r\n@media (max-width: 40.625em) {\r\n\r\n.technology-block > .imagesection > .image > img {\r\n          height: 170px;\r\n          object-fit: cover\r\n      }\r\n        }\r\n");const s=a;document.adoptedStyleSheets=[...document.adoptedStyleSheets,s];const{technology:c}=i;function l(){let e=c[0];const n=o.ZP.h1(),r=o.ZP.p(),{picture:i,image:a,sources:[s]}=function(e){const n=o.ZP.picture(),r=o.ZP.img(),t=["(max-width: 53.125em)"].map((e=>{const n=o.ZP.source();return n.media=e,n}));return(0,o.nE)(n,null,t,r),{picture:n,image:r,sources:t}}();function l(){n.textContent=e.name,r.textContent=e.description,a.src=e.images.portrait,s.srcset=e.images.landscape}l();const m=c.map(((n,r)=>{const t=o.ZP.button(null,r+1);return e.name===n.name&&t.classList.add("-active"),t.addEventListener("click",(r=>{e.name!==n.name&&(m.forEach((e=>e.classList.remove("-active"))),t.classList.add("-active"),e=n,l())})),t}));return o.ZP.main({class:"technology-block"},(0,t.Z)("03","SPACE LAUNCH 101"),o.ZP.div({class:"infosection"},(0,t.Z)("03","SPACE LAUNCH 101"),o.ZP.div({class:"selectinfo"},o.ZP.div({class:"select"},(m.forEach((e=>e.classList.add("option"))),m)),o.ZP.div({class:"info"},o.ZP.span({class:"pretitle"},"THE TERMINOLOGY ..."),(0,o.nE)(n,{class:"title"}),(0,o.nE)(r,{class:"description"})))),o.ZP.div({class:"imagesection"},(0,o.nE)(i,{class:"image"})))}},773:e=>{e.exports=JSON.parse('{"destinations":[{"name":"Moon","images":{"png":"/assets/images/destination/image-moon.png","webp":"/assets/images/destination/image-moon.webp"},"description":"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.","distance":"384,400 km","travel":"3 days"},{"name":"Mars","images":{"png":"/assets/images/destination/image-mars.png","webp":"/assets/images/destination/image-mars.webp"},"description":"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!","distance":"225 mil. km","travel":"9 months"},{"name":"Europa","images":{"png":"/assets/images/destination/image-europa.png","webp":"/assets/images/destination/image-europa.webp"},"description":"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.","distance":"628 mil. km","travel":"3 years"},{"name":"Titan","images":{"png":"/assets/images/destination/image-titan.png","webp":"/assets/images/destination/image-titan.webp"},"description":"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.","distance":"1.6 bil. km","travel":"7 years"}],"crew":[{"name":"Douglas Hurley","images":{"png":"/assets/images/crew/image-douglas-hurley.png","webp":"/assets/images/crew/image-douglas-hurley.webp"},"role":"Commander","bio":"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{"name":"Mark Shuttleworth","images":{"png":"/assets/images/crew/image-mark-shuttleworth.png","webp":"/assets/images/crew/image-mark-shuttleworth.webp"},"role":"Mission Specialist","bio":"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{"name":"Victor Glover","images":{"png":"/assets/images/crew/image-victor-glover.png","webp":"/assets/images/crew/image-victor-glover.webp"},"role":"Pilot","bio":"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{"name":"Anousheh Ansari","images":{"png":"/assets/images/crew/image-anousheh-ansari.png","webp":"/assets/images/crew/image-anousheh-ansari.webp"},"role":"Flight Engineer","bio":"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}],"technology":[{"name":"Launch vehicle","images":{"portrait":"/assets/images/technology/image-launch-vehicle-portrait.jpg","landscape":"/assets/images/technology/image-launch-vehicle-landscape.jpg"},"description":"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!"},{"name":"Spaceport","images":{"portrait":"/assets/images/technology/image-spaceport-portrait.jpg","landscape":"/assets/images/technology/image-spaceport-landscape.jpg"},"description":"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{"name":"Space capsule","images":{"portrait":"/assets/images/technology/image-space-capsule-portrait.jpg","landscape":"/assets/images/technology/image-space-capsule-landscape.jpg"},"description":"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}]}')}}]);
//# sourceMappingURL=686.main.js.map