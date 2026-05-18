import Image from "next/image";

const riders = [
  {
    name: "Neil",
    nick: "Squadron Leader",
    from: "Blackburn, England",
    img: "/images/riders/neil.jpg",
    imgPos: "object-top",
    bikes: ["KTM 990", "KTM 890", "KTM 790", "Honda CRF300L", "Yamaha Ténéré", "Husqvarna", "Rieju"],
    bio: "The man who navigates every Cat D tour. Neil has more miles under his wheels than anyone in the community — solo rides across Europe, TET across the Yorkshire Dales and Scotland, and he's been to the majority of European countries on two wheels. His garage over the years reads like a motorcycle dealership — KTMs, Hondas, Husqvarnas, Yamahas, the lot. The 790 carried him through the most legendary Cat D moments. The 300L? The lads reckon it has about two horsepower.",
    bio2: "A fast rider when he wants to be, but when leading the group he keeps a steady, friendly pace that brings everyone along. He hardly ever comes off — but when he does, every phone comes out before anyone thinks about helping. Well known at local bike meets and respected across the biking community. Rides smart, cares about wildlife, protects the trails. Favourite places: the Italian Alps and the Picos in Spain.",
    storyTitle: "The weiner incident",
    story: "The group arrived late at the hotel after a long day. Neil said he was heading to the restaurant. Everyone showered and came out to find him in the car park with his one-burner stove and a pack of sausages — making hot dogs for everyone. Eric from Wigan walked out: \"Eh up cock, where's the restaurant?\" There was Neil, cutting the ends off the sausages as he does, serving weiners with red sauce. The crew had to leg it back before they missed check-in. Classic Squadron Leader.",
    footer: "Closed passes, punctures, running out of fuel — Cat D has had it all. But Neil always gets the group to the destination. The Squadron Leader never fails.",
    youtube: "https://youtube.com/@neilcollinson6540?si=j_JlOO3zq5y2sjmZ",
  },
  {
    name: "Liam",
    nick: "Long Shanks",
    from: "Ashton-under-Lyne, England",
    img: "/images/riders/liam.jpg",
    imgPos: "object-[30%_35%]",
    bikes: ["KTM 890", "KTM 350 EXC", "Ténéré 700", "KTM 1290S"],
    bio: "Brother to Lewis \"Short Shanks\" — one got the legs, one didn't. Liam is the rider liaison, problem solver, and chief eccentric of Cat D Tours. He sorts the hotels, the bookings, and speaks with riders to understand what kind of group they are. On the road he's a different animal — cracks the jokes, makes the lads laugh, sometimes goes a little too far, sending people the wrong direction into ditches and all sorts.",
    bio2: "Let's say maintenance isn't his strongest suit. His bike is always breaking down — usually because he's bought cheap Chinese inner tubes. But when something actually needs solving — a real problem, a logistical nightmare — that's Liam's department. He's the problem solver. Done Italy, Spain, Andorra, Monaco, and loves the English TET. Loves long days and good weather. Hates the rain, but rides through plenty of it.",
    storyTitle: "The cliff incident",
    story: "Liam said \"I'll catch up lads\" and went flying down a lane. Next thing — he's gone off the side into bushes halfway down a mountainside. The group gathered with ratchet straps and physical strength. Neil pulling from above. Bill suggesting they just ride it down the hill — the hill being steep cliffs across a mountain pass. A 200-odd kilo bike with gravity against you. They had one shot at getting it back up. They got it. Classic Liam.",
    footer: "Long Shanks — long legs, big problems, bigger laughs. The problem solver who causes half the problems.",
  },
  {
    name: "Lewis",
    nick: "Short Shanks",
    from: "Ashton-under-Lyne, England",
    img: "/images/riders/lewis.jpg",
    imgPos: "object-top",
    bikes: ["KTM 890", "KTM 790", "KTM 350 EXC"],
    bio: "One of the younger riders in Cat D at 31, but don't let that fool you — Lewis is a top rider. Brother to Liam \"Long Shanks\", it clearly runs in the family. He lives for the off-road tours, the get-up-and-go lifestyle of a different place each day and new digs each night. He's completed the Spain tour, the Andorra tour, the Italy tour, and several trips across the UK. He's also ridden to Ypres in Belgium to visit the Flanders Fields memorials — Cat D Tours isn't just about the riding.",
    bio2: "Lewis loves the commotion. He's the first one to check you're alright when you come off, and the first one laughing once he knows you're fine. Loves a giggle, loves the banter, and brings energy to every tour. Short Shanks they call him — little legs on a big bike, but he makes it work.",
    storyTitle: "The bee incident",
    story: "Riding along a route somewhere in Europe, Lewis got stung by a bee. Not ideal at speed in full kit. His eye swelled up so badly he basically rode for the next three days with one eye shut. The lads got a cracking photo. By the time the group reached Spain, they got him to a hospital and he was sorted out. Did he stop riding? Not a chance. One-eyed Lewis just cracked on.",
    footer: "Young, fast, fearless, and always up for the next tour. Short Shanks brings the energy every single time.",
  },
  {
    name: "Ricky",
    nick: "3 from 3",
    from: "England",
    img: "/images/riders/ricky.jpg",
    imgPos: "object-top",
    bikes: ["KTM 390", "Honda CRF300L", "KTM 250"],
    bio: "The youngest rider in Cat D at just 21, Ricky burst onto the scene with a KTM 250 and hasn't looked back. Moved to the Honda CRF300L — nice and low, enough power but just not quite enough — so he went and bought a KTM 390. A bit taller, but plenty of power, and he makes it work. Three bikes, three Cat D write-offs. A perfect record.",
    bio2: "Ricky is living for it. He's done the Italy trip, UK TET trails, and just got back from the Isle of Man — where he spent plenty of time on the floor, let's just say that. But every single time, he gets up and keeps going. He's a regular at the ABR Festival at Ragley Hall, runs his own TikTok page with riding footage, and loves long riding days with his GoPro rolling. Although we won't mention the SD card corruption issues.",
    storyTitle: "The Americans at the Channel",
    story: "Waiting to cross the Channel, Ricky met two American lads who couldn't believe how the bikes were transported. \"You put your bikes on the train... across the sea... on the ground?\" The accent, the disbelief, the whole conversation — Ricky found it absolutely hilarious and kept talking to them. One of those moments you had to be there for, but the lads still bring it up.",
    footer: "His real name is also Adam, but we won't go into that. Top lad. Just 3 Cat D tours to his name — doing well out of 3 bikes. The future of Cat D Tours.",
    youtube: "https://youtube.com/@rickyontwowheels?si=w4NoBzzTA_K015Rn",
    tiktok: "https://www.tiktok.com/@rickyontwowheels",
  },
  {
    name: "Kai",
    nick: "Max",
    from: "Cheshire, England",
    img: "/images/riders/kai.png",
    imgPos: "object-top",
    bikes: ["Yamaha Ténéré World Raid", "Yamaha MX", "Yamaha Enduro"],
    bio: "A championship-winning motocross rider turned adventure biker, Kai brings serious pedigree to Cat D Tours. He's competed at Sweet Lamb, completed the Hellas Rally across Greece, and regularly takes on technical trails in Wales and the Lake District on big bikes. A triathlon athlete as well — though the lads reckon he's put on a bit of timber lately. Former bouncer, built like a unit, hence the nickname \"Max\" — straight out of Phoenix Nights.",
    bio2: "A relatively new addition to the crew but already central to the group. Family man, good laugh, and runs his own YouTube channel — Cheshire Adventure — documenting his rides. He handles sweeping fast tracks like nobody else and isn't afraid of the rough stuff either. The kind of rider who makes everything look easy and then cracks a joke about it afterwards.",
    storyTitle: "The helmet bag tent",
    story: "At the ABR Festival, Kai rocked up with what can only be described as the world's smallest tent. The lads took one look and decided he was sleeping in his helmet bag. It became a running joke for the entire weekend. Then there was the \"marathon\" in Greece — supposed to be a long gruelling race day. Kai finished in a couple of hours and was back home in time for breakfast. The group still hasn't let that one go.",
    footer: "Motocross champion, Hellas Rally finisher, helmet bag camper. Max brings speed, strength, and plenty of laughs to every Cat D tour.",
    youtube: "https://youtube.com/channel/UCYBrPzQsrSAaBuoYM7ecvqA",
    youtubeLabel: "Cheshire Adventure",
    facebook: "https://www.facebook.com/groups/568029250655917/",
  },
  {
    name: "Dave",
    nick: "The Mechanic",
    from: "North West, England",
    img: "/images/riders/dave.jpg",
    imgPos: "object-top",
    bikes: ["KTM 890", "KTM 790", "Honda CRF300L", "Rieju 250 XC"],
    bio: "Neil's brother and a man with vast mechanical knowledge. Dave is an incredible mechanic by trade — he sees a vehicle and knows it inside out. Worked on everything from rally cars to adventure bikes. Used to be a rally driver alongside Neil back in the day. He's lived up in Scotland and is currently based in the North West. A lovely man with a love for distance riding, good photographs, and exploring different parts of the world. The lads always laugh about Dave's hands — for a little guy, he's got the most incredible Hulk-sized hands you've ever seen. Built for wrenching.",
    bio2: "Dave has completed plenty of tours across Europe with Cat D. He loves the distance, likes a nice hotel, and has a garage full of bikes to prove he's serious. The CRF300L, the Rieju 250 XC, the 890, the 790 — he's got the lot. A proper all-rounder who brings experience, knowledge, and good company to every tour.",
    storyTitle: "Hotel F1 and the intercom",
    story: "The crew stopped at a Hotel F1 in the middle of France for a quick overnight. No toilets in the rooms. A cube. People coming and going day and night. Dave took one look and said \"I'm not staying in this s***hole — I'm staying in the van.\" And he did. Then there's the intercom — the lads are always having a laugh about Dave's hearing. One time they rang him on the Cardo: \"Dave, can you hear me? Can you hear me?\" Dave's reply: \"NO!\" Well if you're saying no, you can clearly hear us.",
    footer: "Mechanic, rally driver, distance rider. Dave brings knowledge, experience, and the best one-word answers in the crew.",
  },
  {
    name: "Mark",
    nick: "The Warrior",
    from: "Cheshire, England",
    img: "/images/riders/mark.jpg",
    imgPos: "object-center",
    bikes: ["Honda CRF300L", "Honda Africa Twin", "BMW 1200 GS", "KTM 890", "KTM 350"],
    bio: "A mechanic by trade who specialises in fixing all types of plant machinery, Mark has been riding for a very long time and has completed numerous tours with Cat D. The lads consider him \"a little bit mad\" — and that's mostly down to the number of bikes he owns. The CRF300L, the Africa Twin, the BMW 1200 GS, the 890, the 350 — the man has a fleet. Any conversation with Mark starts and ends with bikes. There is no other topic.",
    bio2: "They call him The Warrior for good reason. Mark has sustained all sorts over the years — back problems, hip issues — but he has never stopped riding. He always pulls through and gets back on the bike. That said, let's just say he's not short of a moment or two. Forgetting his licence in Malaga was just the tip of the iceberg — if something can go wrong on a tour, it'll happen to Mark first. The lads love him for it. He's at every group event, does significant road book work for the tours, and brings an infectious enthusiasm that lifts the whole crew. He runs his own channel with great content — well worth a follow. A top quality member of Cat D Tours.",
    storyTitle: "The Malaga rescue bike",
    story: "On a Cat D tour to Malaga, Mark arrived and realised he'd forgotten his driving licence. Couldn't hire his intended bike. Liam had to step in and sort it — but there was a price. As payment for the rescue, Mark had to forfeit the fancy BMW hire bike he'd eventually secured and instead ride what can only be described as a Top Gear rescue bike — an old, knackered Triumph with the worst trials tyres imaginable. Mark rode it anyway. The Warrior doesn't complain.",
    footer: "Mechanic, warrior, bike hoarder. Mark brings resilience, enthusiasm, and more motorcycles than anyone can count to every Cat D tour.",
    youtube: "https://www.youtube.com/@ishymoto3179",
  },
  {
    name: "Bill",
    nick: "The Human AirTag",
    from: "England",
    img: "/images/riders/bill.jpg",
    imgPos: "object-top",
    bikes: ["Yamaha Ténéré 700", "Honda CRF300L", "Sur-Ron 250"],
    bio: "The oldest rider in the group and a complete veteran of the sport. Bill is a skilled mechanic by trade, has run his own business, and his racing history stretches beyond bikes into rally driving. He's ridden all over the world, often clocking up serious miles alongside Neil. A global rider with decades of experience under his belt — there isn't much Bill hasn't seen or ridden through.",
    bio2: "When the rain starts, Bill comes alive. Potentially the best wet-weather rider in the group — pulling off insane manoeuvres and disappearing so fast nobody can catch him. Despite being the senior member, he's an absolute trooper on the trails, though the lads note he might take a little longer at the petrol stations. Off the bike, Bill is the crew's chef — always rustling something up at the digs for the whole team. An amazing guy and a top lad to be around.",
    storyTitle: "Where's Bill?",
    story: "A recurring theme on every single Cat D tour: \"Where's Bill?\" Nobody knows how he does it, but Bill gets lost on almost every trip. He'll be there one minute, gone the next. The group has genuinely discussed hiding an Apple AirTag on him just so they can track his whereabouts. It hasn't happened yet — but it's only a matter of time. Until then, the lads just keep asking the same question.",
    footer: "Veteran rider, rain specialist, master chef, and the man most likely to go missing on any given tour. Bill is the respected elder of Cat D Tours.",
  },
  {
    name: "Matt",
    nick: "The Skipper",
    from: "England",
    img: "/images/riders/matt.jpg",
    imgPos: "object-top",
    bikes: ["BMW 1250 GS", "Honda CRF300L", "AJP PR7 Gold Edition"],
    bio: "A newer addition to the Cat D crew, but Matt fits like he's been there from day one. A career in the police force has made him organised, methodical, and unflappable — exactly the sort of bloke you want on a long tour. He's a really competent rider who takes on any trail put in front of him, and the recent purchase of the AJP PR7 Gold Edition means he'll be taking things to another level.",
    bio2: "Matt's done plenty of tours already — Spain, the Isle of Man, the ABR Festival — and he's a great addition to the group. Good laugh, good company, always reliable. Just don't put him on a boat. Matt absolutely hates ferries — he gets travel sick on a canal barge, never mind a Channel crossing. And while the rest of the crew are wiping mud off their faces with a sleeve, Matt's in the shower for forty-five minutes with a full toiletry bag. Moisturiser, exfoliator, the works. The man's skin regime is more advanced than most riders' bike maintenance schedules.",
    storyTitle: "The key incident",
    story: "On a Cat D tour to the Isle of Man, Neil had transported Matt's bike over for him. One problem — Neil forgot the key. No spare. No backup plan. What followed was pure Cat D engineering: a hammer, a screwdriver, and a lot of optimism. They basically had to vandal the bike to get it started, then drilled out the petrol cap just so they could refuel it. The bike ran. Matt rode. The Isle of Man was conquered. Just don't ask about the ignition barrel.",
    footer: "Organised, reliable, and the best-moisturised man in adventure biking. Matt brings order to the chaos of Cat D Tours — and a toiletry bag bigger than most riders' panniers.",
  },
];

export default function RidersPage() {
  return (
    <div className="px-5 py-10 md:px-10 md:py-14 max-w-5xl mx-auto">
      <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-2">The crew</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Our riders</h1>
      <p className="text-sm text-catd-muted mb-10 max-w-lg">
        The lads behind Cat D Tours. More profiles being added — every rider in the crew gets their page.
      </p>

      <div className="space-y-6">
        {riders.map((r, i) => (
          <article key={i} id={r.name.toLowerCase()} className="bg-catd-card rounded-xl overflow-hidden border border-catd-border scroll-mt-24">
            {/* Image + header on mobile: stacked. On desktop: side by side */}
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
              <div className="relative h-72 md:h-auto md:min-h-[400px]">
                <Image src={r.img} alt={r.name} fill className={`object-cover ${r.imgPos}`} sizes="(max-width: 768px) 100vw, 260px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                {/* Mobile: name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:hidden">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-xl font-bold">{r.name}</h2>
                    <span className="text-[10px] px-2.5 py-1 rounded-sm bg-catd-orange/15 text-catd-orange font-semibold">{r.nick}</span>
                  </div>
                  <p className="text-xs text-[#999]">{r.from}</p>
                </div>
              </div>

              <div className="p-5 md:p-7">
                {/* Desktop: name */}
                <div className="hidden md:flex items-center gap-3 mb-1 flex-wrap">
                  <h2 className="text-xl font-bold">{r.name}</h2>
                  <span className="text-[10px] px-3 py-1 rounded-sm bg-catd-orange/15 text-catd-orange font-semibold">{r.nick}</span>
                </div>
                <p className="hidden md:block text-xs text-catd-subtle mb-3">{r.from}</p>

                {/* Bikes */}
                <div className="flex gap-1.5 flex-wrap mb-5">
                  {r.bikes.map((b) => (
                    <span key={b} className="text-[9px] px-2 py-1 rounded-sm bg-[#151515] text-[#777]">{b}</span>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-[13px] text-[#888] leading-7 mb-2">{r.bio}</p>
                <p className="text-[13px] text-[#888] leading-7 mb-5">{r.bio2}</p>

                {/* Story */}
                <div className="border-l-[3px] border-catd-orange pl-4 mb-5">
                  <p className="text-[10px] text-catd-orange tracking-wider uppercase mb-2">{r.storyTitle}</p>
                  <p className="text-xs text-[#666] leading-6 italic">{r.story}</p>
                </div>

                {/* Footer */}
                <div className="bg-[#0a0a0a] rounded-md border border-[#141414] px-4 py-3">
                  <p className="text-xs text-catd-subtle leading-relaxed">{r.footer}</p>
                </div>

                {(r.youtube || r.facebook || r.tiktok) && (
                  <div className="flex gap-4 flex-wrap mt-4">
                    {r.youtube && (
                      <a href={r.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-[#888] hover:text-catd-orange transition-colors">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        {r.youtubeLabel || "YouTube"}
                      </a>
                    )}
                    {r.facebook && (
                      <a href={r.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-[#888] hover:text-catd-orange transition-colors">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        Facebook Group
                      </a>
                    )}
                    {r.tiktok && (
                      <a href={r.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-[#888] hover:text-catd-orange transition-colors">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z"/></svg>
                        TikTok
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 p-6 bg-catd-card border border-catd-border rounded-xl text-center">
        <p className="text-sm text-[#888] mb-1">More rider profiles coming soon</p>
        <p className="text-xs text-catd-subtle">Every rider in the crew gets their page. Watch this space.</p>
      </div>
    </div>
  );
}
