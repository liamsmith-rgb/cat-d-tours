import Image from "next/image";

const riders = [
  {
    name: "Neil Collinson",
    nick: "Squadron Leader",
    from: "Blackburn, England",
    img: "/images/riders/neil.jpg",
    bikes: ["KTM 990", "KTM 890", "KTM 790", "Honda CRF300L", "Yamaha Ténéré", "Husqvarna", "Rieju"],
    bio: "The man who navigates every Cat D tour. Neil has more miles under his wheels than anyone in the community — solo rides across Europe, TET across the Yorkshire Dales and Scotland, and he's been to the majority of European countries on two wheels. His garage over the years reads like a motorcycle dealership — KTMs, Hondas, Husqvarnas, Yamahas, the lot. The 790 carried him through the most legendary Cat D moments. The 300L? The lads reckon it has about two horsepower.",
    bio2: "A fast rider when he wants to be, but when leading the group he keeps a steady, friendly pace that brings everyone along. He hardly ever comes off — but when he does, every phone comes out before anyone thinks about helping. Well known at local bike meets and respected across the biking community. Rides smart, cares about wildlife, protects the trails. Favourite places: the Italian Alps and the Picos in Spain.",
    storyTitle: "The weiner incident",
    story: "The group arrived late at the hotel after a long day. Neil said he was heading to the restaurant. Everyone showered and came out to find him in the car park with his one-burner stove and a pack of sausages — making hot dogs for everyone. Eric from Wigan walked out: \"Eh up cock, where's the restaurant?\" There was Neil, cutting the ends off the sausages as he does, serving weiners with red sauce. The crew had to leg it back before they missed check-in. Classic Squadron Leader.",
    footer: "Closed passes, punctures, running out of fuel — Cat D has had it all. But Neil always gets the group to the destination. The Squadron Leader never fails.",
  },
  {
    name: "Liam",
    nick: "Long Shanks",
    from: "Ashton-under-Lyne, England",
    img: "/images/riders/liam.jpg",
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
    bikes: ["KTM 390", "Honda CRF300L", "KTM 250"],
    bio: "The youngest rider in Cat D at just 21, Ricky burst onto the scene with a KTM 250 and hasn't looked back. Moved to the Honda CRF300L — nice and low, enough power but just not quite enough — so he went and bought a KTM 390. A bit taller, but plenty of power, and he makes it work. Three bikes, three Cat D write-offs. A perfect record.",
    bio2: "Ricky is living for it. He's done the Italy trip, UK TET trails, and just got back from the Isle of Man — where he spent plenty of time on the floor, let's just say that. But every single time, he gets up and keeps going. He's a regular at the ABR Festival at Ragley Hall, runs his own TikTok page with riding footage, and loves long riding days with his GoPro rolling. Although we won't mention the SD card corruption issues.",
    storyTitle: "The Americans at the Channel",
    story: "Waiting to cross the Channel, Ricky met two American lads who couldn't believe how the bikes were transported. \"You put your bikes on the train... across the sea... on the ground?\" The accent, the disbelief, the whole conversation — Ricky found it absolutely hilarious and kept talking to them. One of those moments you had to be there for, but the lads still bring it up.",
    footer: "His real name is also Adam, but we won't go into that. Top lad. Just 3 Cat D tours to his name — doing well out of 3 bikes. The future of Cat D Tours.",
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
          <article key={i} className="bg-catd-card rounded-xl overflow-hidden border border-catd-border">
            {/* Image + header on mobile: stacked. On desktop: side by side */}
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
              <div className="relative h-72 md:h-auto md:min-h-[400px]">
                <Image src={r.img} alt={r.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 260px" />
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
