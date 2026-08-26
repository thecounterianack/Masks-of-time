/* =====================================================================
GAMING FILES 003 - MASKS OF TIME / EMPTY SHELL
QUESTION BANK - v3
The Counterfeit Ian Ackley Project - WCIA 90.7 FM
=====================================================================

THIS IS THE FILE YOU REPLACE.

Drop this file in the same folder as index.html, overwriting the old
questions.js. Nothing in index.html changes. index.html already loads
this file with:

    <script src="questions.js"></script>

BANK SIZE
500 questions. A full run draws 15, so repeats are rare.

HOW TO ADD QUESTIONS
Copy any block below and change the text. Keep the commas.

{ q:"The question text?",
a:["Option one","Option two","Option three","Option four"],
c:1,
cat:"GAMING",
tier:"legend",
note:"Shown after the player answers. Optional." },

FIELDS
q     the question
a     four options, always four
c     index of the correct one - 0 is first, 3 is last
cat   GAMING | MUSIC | TV | FILM | POP | CIA | ANCIENT | MONEY
      | SOCIETIES | ALIENS | MIND
tier  documented | disputed | legend
note  optional line shown after answering

TIER MEANING
documented  declassified, court record, or well sourced fact
disputed    contested, alleged, or unresolved
legend      folklore, creepypasta, hoax, or myth
A legend can still have factual CONTENTS. The question
asks what the story SAYS, not whether the story is true.

WHY TIERS MATTER
Keeping these separated means the game can tell the difference
between a declassified programme and a creepypasta. That
difference is more interesting than flattening everything.

FIXED IN v3
Three question blocks in v2 had a typo - a\":[ instead of a:[ -
which was a syntax error. Any browser hitting it would fail to
parse the whole file and the game would load with no questions.
Those blocks are corrected here.

The deck draws at random. More questions means less repeat.
Nothing in index.html changes when you add to this file.
===================================================================== */

var QUESTIONS=[

/* ================================== GAMING ================================== */

{ q:"The Polybius legend places the cabinet in which US city?",
a:["Seattle","Portland","Eugene","Spokane"], c:1,
cat:"GAMING", tier:"legend",
note:"Portland, Oregon, 1981. No cabinet has ever been produced." },

{ q:"In the Polybius story, who is said to collect data from the machine?",
a:["Men in black suits","Arcade owners","Local police","A rival company"], c:0,
cat:"GAMING", tier:"legend",
note:"The men-in-black detail is what welded the story to MKUltra rumour." },

{ q:"What year does the Polybius legend claim the cabinet appeared?",
a:["1978","1981","1984","1987"], c:1,
cat:"GAMING", tier:"legend" },

{ q:"Which symptom is NOT part of the standard Polybius legend?",
a:["Seizures","Memory loss","Hair loss","Night terrors"], c:2,
cat:"GAMING", tier:"legend" },

{ q:"The company name printed on the Polybius cabinet in the famous screenshot is what?",
a:["Sinneslochen","Atari","Midway","Konami"], c:0,
cat:"GAMING", tier:"legend",
note:"A pseudo-German coinage. No such company existed." },

{ q:"Lavender Town Syndrome is attached to which Pokemon releases?",
a:["Gold and Silver","Red and Green","Ruby and Sapphire","Yellow only"], c:1,
cat:"GAMING", tier:"legend",
note:"The Japanese Red and Green release, 1996." },

{ q:"What was allegedly harmful about the original Lavender Town music?",
a:["Reversed speech","Flashing images","High frequency tones","Hidden text"], c:2,
cat:"GAMING", tier:"legend" },

{ q:"In Pokemon, what is Lavender Town actually home to?",
a:["A gym","A tower of graves","A safari","A casino"], c:1,
cat:"GAMING", tier:"documented",
note:"Pokemon Tower, a burial site. The town has no gym." },

{ q:"Which real 1997 broadcast caused documented seizures in Japanese children?",
a:["A Pokemon episode","A Digimon episode","A game advert","A news bulletin"], c:0,
cat:"GAMING", tier:"documented",
note:"Electric Soldier Porygon. Roughly 700 children were hospitalised." },

{ q:"BEN Drowned centres on a haunted copy of which game?",
a:["Ocarina of Time","Majora's Mask","Link's Awakening","A Link to the Past"], c:1,
cat:"GAMING", tier:"legend",
note:"An N64 Majora's Mask cartridge bought at a yard sale." },

{ q:"In BEN Drowned, what does the old man at the yard sale say?",
a:["Don't play it at night","You shouldn't have done that","It's already saved","Return it tomorrow"], c:1,
cat:"GAMING", tier:"legend" },

{ q:"In BEN Drowned, what name is already on the existing save file?",
a:["LINK","BEN","MASK","ZELDA"], c:1,
cat:"GAMING", tier:"legend" },

{ q:"BEN Drowned was originally posted on which site?",
a:["Reddit","4chan","YouTube and a forum thread","A Nintendo board"], c:2,
cat:"GAMING", tier:"documented",
note:"Alex Hall, writing as Jadusable, in 2010." },

{ q:"Which Majora's Mask ability produces a hollow copy of Link?",
a:["Song of Time","Elegy of Emptiness","Song of Healing","Oath to Order"], c:1,
cat:"GAMING", tier:"documented",
note:"A real in-game mechanic. The statue holds switches down." },

{ q:"How many in-game days does Majora's Mask give you before the moon falls?",
a:["Two","Three","Four","Seven"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Complete the Majora's Mask game over line: 'You've met with a terrible...'",
a:["ending","fate, haven't you?","error","silence"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"What is the name of the land in Majora's Mask?",
a:["Hyrule","Termina","Holodrum","Labrynna"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"In Majora's Mask, what does the Song of Healing do to a spirit?",
a:["Revives it","Turns it into a mask","Banishes it","Restores its memory"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Which recurring Majora's Mask character sells masks and knows too much?",
a:["Tingle","The Happy Mask Salesman","Kafei","Skull Kid"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"How many transformation masks does Link obtain in Majora's Mask?",
a:["Two","Three","Four","Five"], c:2,
cat:"GAMING", tier:"documented",
note:"Deku, Goron, Zora and the Fierce Deity." },

{ q:"Majora's Mask was built on the engine of which earlier title?",
a:["Star Fox 64","Ocarina of Time","Banjo-Kazooie","Wave Race 64"], c:1,
cat:"GAMING", tier:"documented",
note:"Reused assets are why it shipped in about a year." },

{ q:"Which Majora's Mask side quest reunites two separated lovers?",
a:["The Rosa Sisters","Kafei and Anju","Romani and Cremia","The Bombers"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Herobrine is a rumoured figure in which game?",
a:["Terraria","Minecraft","Roblox","Garry's Mod"], c:1,
cat:"GAMING", tier:"legend",
note:"Mojang has joked about 'removing Herobrine' in patch notes repeatedly." },

{ q:"What is Herobrine usually described as resembling?",
a:["A creeper","Steve with blank white eyes","A villager","A shadow with no model"], c:1,
cat:"GAMING", tier:"legend" },

{ q:"The Killswitch legend describes a game that does what after one playthrough?",
a:["Emails the developer","Permanently deletes itself","Locks the drive","Changes genre"], c:1,
cat:"GAMING", tier:"legend" },

{ q:"Petscop presents itself as footage of an unreleased game for which console?",
a:["NES","PlayStation","Dreamcast","Saturn"], c:1,
cat:"GAMING", tier:"legend",
note:"A PS1-style game. It was a scripted YouTube series." },

{ q:"The Madden Curse claims what happens to players on the cover?",
a:["They retire early","They suffer injury or decline","They change teams","They lose endorsements"], c:1,
cat:"GAMING", tier:"disputed" },

{ q:"The GTA San Andreas Bigfoot rumour centred on which area?",
a:["Mount Chiliad","Back O' Beyond","Las Venturas","Angel Pine"], c:1,
cat:"GAMING", tier:"legend",
note:"Rockstar denied it, then winked at it in later games." },

{ q:"Which arcade game is tied to reports of players dying after high-score runs?",
a:["Defender","Berzerk","Tempest","Robotron"], c:1,
cat:"GAMING", tier:"disputed",
note:"Two deaths in the early 1980s. Both players had heart conditions." },

{ q:"Saddam Hussein was rumoured to have bulk-bought which console for military use?",
a:["Dreamcast","PlayStation 2","Xbox","N64"], c:1,
cat:"GAMING", tier:"legend",
note:"The story circulated widely in 2000. No evidence supported it." },

{ q:"The Squall Is Dead theory belongs to which Final Fantasy?",
a:["VI","VII","VIII","IX"], c:2,
cat:"GAMING", tier:"legend",
note:"The theory holds Squall dies at the end of Disc 1." },

{ q:"Sad Satan first reached the public through what route?",
a:["A leaked ROM","A YouTube channel","A magazine disc","An arcade port"], c:1,
cat:"GAMING", tier:"disputed" },

{ q:"Ocarina of Time's Triforce is composed of which three attributes?",
a:["Power, Wisdom, Courage","Light, Dark, Time","Earth, Wind, Fire","Body, Mind, Soul"], c:0,
cat:"GAMING", tier:"documented" },

{ q:"Which Ocarina of Time dungeon is most cited for disturbing content?",
a:["Forest Temple","Shadow Temple","Water Temple","Fire Temple"], c:1,
cat:"GAMING", tier:"documented",
note:"Its map text reads: 'the bloody history of the Royal Family'." },

{ q:"Which Ocarina of Time enemy is frequently called its most frightening?",
a:["Dead Hand","Redead","Wallmaster","Stalfos"], c:0,
cat:"GAMING", tier:"documented" },

{ q:"The Sheikah symbol prominently features what?",
a:["A crown","An eye with a tear","A sword","A flame"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Which Ocarina of Time track was altered in later releases over religious content?",
a:["Fire Temple chant","Song of Storms","Zelda's Lullaby","Saria's Song"], c:0,
cat:"GAMING", tier:"documented",
note:"The chant sampled an Islamic prayer and was replaced." },

{ q:"The Ocarina of Time 'Ganon's laugh' rumour concerns audio hidden where?",
a:["The title screen","Reversed sound files","The credits","A save file"], c:1,
cat:"GAMING", tier:"legend" },

{ q:"Which game popularised the phrase 'The cake is a lie'?",
a:["Half-Life 2","Portal","Bioshock","System Shock 2"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"In Bioshock, the phrase 'Would you kindly' functions as what?",
a:["A greeting","A hypnotic trigger phrase","A password","A joke"], c:1,
cat:"GAMING", tier:"documented",
note:"A conditioning trigger, and a comment on player obedience." },

{ q:"Bioshock's underwater city is called what?",
a:["Columbia","Rapture","Atlantis","Hephaestus"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Which game's ending was widely read as the player being manipulated the whole time?",
a:["Spec Ops: The Line","Doom","Halo 3","Gears of War"], c:0,
cat:"GAMING", tier:"documented" },

{ q:"Silent Hill 2's monsters are generally interpreted as what?",
a:["Aliens","Projections of the protagonist's guilt","A virus","Robots"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Which Silent Hill creature became the series' unofficial mascot?",
a:["Nurse","Pyramid Head","Lying Figure","Valtiel"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Eternal Darkness featured which unusual mechanic?",
a:["Permadeath","Fake system errors as sanity effects","Voice control","Real-time weather"], c:1,
cat:"GAMING", tier:"documented",
note:"It pretended to delete your save file." },

{ q:"Metal Gear Solid's Psycho Mantis famously did what?",
a:["Read your memory card","Muted the music","Locked the disc","Changed difficulty"], c:0,
cat:"GAMING", tier:"documented",
note:"He named other games you had saved on the card." },

{ q:"The 'Suicide Mouse' legend concerns a lost reel of what?",
a:["A Disney cartoon","A newsreel","A game demo","A pilot episode"], c:0,
cat:"GAMING", tier:"legend" },

{ q:"Which console generation introduced the compact disc as a mainstream game format?",
a:["Second","Third","Fourth","Fifth"], c:3,
cat:"GAMING", tier:"documented",
note:"The PlayStation and Saturn era." },

{ q:"Nintendo's Virtual Boy was notorious for what?",
a:["Overheating","Eye strain and headaches","No sound","No controller"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"The Sega Dreamcast launched in North America on which memorable date?",
a:["9/9/99","1/1/00","6/6/96","8/8/98"], c:0,
cat:"GAMING", tier:"documented" },

{ q:"Which handheld outsold every rival despite weaker hardware?",
a:["Game Boy","Lynx","Game Gear","TurboExpress"], c:0,
cat:"GAMING", tier:"documented",
note:"Battery life and price beat colour screens." },

{ q:"Gacha rigging allegations claim publishers do what?",
a:["Fake reviews","Alter drop odds per player","Delay updates","Inflate download counts"], c:1,
cat:"GAMING", tier:"disputed" },

{ q:"The Game Boy Color launched in which year?",
a:["1996","1998","2000","2001"], c:1,
cat:"GAMING", tier:"documented",
note:"1998, sixteen years after the original Game Boy's design work began." },

{ q:"How many colours can the Game Boy Color display on screen at once?",
a:["4","10","56","256"], c:2,
cat:"GAMING", tier:"documented",
note:"Up to 56 simultaneously from a 32,768 colour palette." },

{ q:"The original Game Boy screen displayed how many shades?",
a:["Two","Four","Eight","Sixteen"], c:1,
cat:"GAMING", tier:"documented",
note:"Four shades of olive green." },

{ q:"What is the Game Boy's native screen resolution?",
a:["128 x 128","160 x 144","256 x 224","320 x 240"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"How many sound channels does the Game Boy have?",
a:["Two","Three","Four","Eight"], c:2,
cat:"GAMING", tier:"documented",
note:"Two pulse, one wave, one noise." },

{ q:"E.T. for the Atari 2600 is famous for what aftermath?",
a:["A sequel","Cartridges buried in a landfill","A lawsuit","A recall notice"], c:1,
cat:"GAMING", tier:"documented",
note:"Buried in Alamogordo, New Mexico, 1983. Excavated in 2014." },

{ q:"The 1983 video game crash is often blamed on what?",
a:["Piracy","Market flooding with poor titles","Import bans","Chip shortages"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Which game console was rumoured to be usable as a missile guidance system?",
a:["Game Boy","PlayStation 2","Sega Saturn","Atari Jaguar"], c:1,
cat:"GAMING", tier:"legend" },

{ q:"The 'Mario is a villain' reading argues he is what?",
a:["A time traveller","An invader and coloniser","A clone","A dream"], c:1,
cat:"GAMING", tier:"legend" },

{ q:"In Fallout lore, Vault-Tec is theorised to have wanted what?",
a:["Profit only","The apocalypse as an experiment","A moon base","A cure"], c:1,
cat:"GAMING", tier:"disputed",
note:"Supported by in-game terminal logs across several titles." },

{ q:"What does ROM stand for?",
a:["Read Only Memory","Random Output Module","Rapid Optical Media","Recorded Object Model"], c:0,
cat:"GAMING", tier:"documented" },

{ q:"A 'kill screen' in classic arcade games is caused by what?",
a:["A cursed cabinet","An integer overflow","Player death","A hidden level"], c:1,
cat:"GAMING", tier:"documented",
note:"Famously Pac-Man level 256, where the byte wraps." },

{ q:"At which Pac-Man level does the notorious kill screen occur?",
a:["128","199","256","999"], c:2,
cat:"GAMING", tier:"documented" },

{ q:"The Mew Under the Truck rumour belonged to which games?",
a:["Red and Blue","Gold and Silver","Emerald","Diamond and Pearl"], c:0,
cat:"GAMING", tier:"legend",
note:"There was no truck event. Mew was distributed at real-world events." },

{ q:"Which Pokemon glitch could genuinely corrupt a save file?",
a:["MissingNo.","Mew glitch","Old man trick","Safari zone glitch"], c:0,
cat:"GAMING", tier:"documented",
note:"MissingNo. could scramble the Hall of Fame data." },

{ q:"The 'Tails Doll curse' attaches to which game?",
a:["Sonic Adventure","Sonic R","Sonic 3","Sonic CD"], c:1,
cat:"GAMING", tier:"legend" },

{ q:"Sonic CD contains a hidden screen widely called what?",
a:["The Void","The Majin screen","Chaos Room","Zone Zero"], c:1,
cat:"GAMING", tier:"documented",
note:"A creepy hidden image found in the Japanese sound test." },

{ q:"Which 1980s game was seized in a US obscenity dispute?",
a:["Custer's Revenge","Pitfall","Q*bert","Joust"], c:0,
cat:"GAMING", tier:"documented" },

{ q:"Loot boxes have been legally classed as gambling in which country?",
a:["Belgium","Japan","Canada","Brazil"], c:0,
cat:"GAMING", tier:"documented",
note:"Belgium's Gaming Commission ruled against them in 2018." },

{ q:"Which studio's crunch culture triggered the 'EA Spouse' letter?",
a:["Electronic Arts","Ubisoft","Rockstar","Valve"], c:0,
cat:"GAMING", tier:"documented",
note:"Published anonymously in 2004, it changed industry labour talk." },

{ q:"Dark patterns in games are designed to do what?",
a:["Improve accessibility","Steer players toward spending","Reduce load times","Balance difficulty"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Which game's servers being shut down effectively deletes the game?",
a:["Single-player offline titles","Always-online titles","Cartridge games","Emulated games"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"The Konami Code's first two inputs are what?",
a:["Up, Up","Left, Right","B, A","Start, Select"], c:0,
cat:"GAMING", tier:"documented" },

{ q:"Which company's arcade board is behind Street Fighter II's classic era?",
a:["Neo Geo","CPS-1","Naomi","System 16"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Speedrunning 'glitchless' categories exist because of what?",
a:["Sponsorship","Sequence-breaking exploits","Console lag","Emulator bugs"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Arbitrary Code Execution in a console game means what?",
a:["Cheating with hardware","Running new code through in-game inputs","Overclocking","Save scumming"], c:1,
cat:"GAMING", tier:"documented",
note:"Demonstrated live in Super Mario World runs." },

{ q:"The 'Nintendo Seal of Quality' was created mainly to do what?",
a:["Reward art","Control third-party output after the 1983 crash","Rate violence","Certify hardware"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Which handheld game is credited with popularising 'endless runner' design?",
a:["Temple Run","Snake","Doodle Jump","Canabalt"], c:3,
cat:"GAMING", tier:"disputed" },

{ q:"Which game engine's leaked source code caused a major 2003 incident?",
a:["Unreal","Half-Life 2's Source","Quake III","CryEngine"], c:1,
cat:"GAMING", tier:"documented",
note:"The leak delayed the game and led to a prosecution." },

{ q:"A 'ROM hack' modifies what?",
a:["The console firmware","The game's data file","The controller","The save battery"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Which arcade legend claims a cabinet gave players nosebleeds?",
a:["Polybius","Berzerk","Tempest","Missile Command"], c:0,
cat:"GAMING", tier:"legend" },

{ q:"Missile Command's designer described the game as causing him what?",
a:["Fame","Nightmares about nuclear war","A lawsuit","A patent"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Which console's 'Blast Processing' was pure marketing?",
a:["Sega Genesis","SNES","3DO","Jaguar"], c:0,
cat:"GAMING", tier:"documented" },

{ q:"The Atari Jaguar was advertised as which bit count?",
a:["16-bit","32-bit","64-bit","128-bit"], c:2,
cat:"GAMING", tier:"documented",
note:"The '64-bit' claim was widely disputed by engineers." },

{ q:"Which 1990s game was blamed in US Senate hearings on game violence?",
a:["Mortal Kombat","Tetris","Myst","SimCity"], c:0,
cat:"GAMING", tier:"documented",
note:"The 1993 hearings led to the creation of the ESRB." },

{ q:"The ESRB was created in which year?",
a:["1990","1994","1998","2002"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"Which game's hidden 'Hot Coffee' content triggered a re-rating?",
a:["GTA San Andreas","Manhunt","Saints Row","True Crime"], c:0,
cat:"GAMING", tier:"documented",
note:"Rated AO in 2005 before an edited re-release." },

{ q:"Which handheld link cable feature drove Pokemon's design?",
a:["Infrared","Serial trading","Wi-Fi","Bluetooth"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"In game preservation, 'abandonware' describes what?",
a:["Unfinished games","Software no longer sold or supported","Free demos","Open source games"], c:1,
cat:"GAMING", tier:"documented" },

{ q:"The Video Game History Foundation argues most classic games are what?",
a:["Widely available","Commercially unavailable","Free","Emulated legally"], c:1,
cat:"GAMING", tier:"documented",
note:"Studies have put unavailability near 87 percent of pre-2010 titles." },


/* ================================== MUSIC =================================== */

{ q:"The Paul is Dead legend claims the replacement happened in which year?",
a:["1963","1966","1969","1970"], c:1,
cat:"MUSIC", tier:"legend",
note:"1966, supposedly after a car crash. McCartney is alive." },

{ q:"Which Beatles album cover is most cited by that legend?",
a:["Revolver","Abbey Road","Rubber Soul","Let It Be"], c:1,
cat:"MUSIC", tier:"legend",
note:"The barefoot crossing, read as a funeral procession." },

{ q:"In Paul is Dead lore, the replacement is usually named what?",
a:["Billy Shears","Johnny Rivers","Frank Sutcliffe","Sam Wells"], c:0,
cat:"MUSIC", tier:"legend",
note:"Taken from the Sgt. Pepper lyric." },

{ q:"Backmasking means what?",
a:["Layering vocals","Content audible when played backwards","Removing a track","Speeding up tape"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"Which band faced a 1990 trial over alleged subliminal messages?",
a:["Black Sabbath","Judas Priest","Iron Maiden","Metallica"], c:1,
cat:"MUSIC", tier:"documented",
note:"The case was dismissed. No proof of effect was found." },

{ q:"Payola refers to what practice?",
a:["Bootlegging records","Paying for radio airplay","Ticket scalping","Faking chart sales"], c:1,
cat:"MUSIC", tier:"documented",
note:"Illegal in the US when undisclosed. Prosecuted since 1959." },

{ q:"A 360 deal gives a label a cut of what?",
a:["Recordings only","Touring only","Nearly all artist revenue","Publishing only"], c:2,
cat:"MUSIC", tier:"documented" },

{ q:"The Satanic Panic of the 1980s targeted which music genres most?",
a:["Jazz and blues","Metal and rock","Country","Disco"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"The 27 Club refers to what?",
a:["A record label","Musicians who died at 27","A studio","A chart position"], c:1,
cat:"MUSIC", tier:"disputed",
note:"Studies have found no statistical spike at 27." },

{ q:"Which artist's death spawned the most durable 'he faked it' folklore?",
a:["Jim Morrison","Buddy Holly","Sam Cooke","Otis Redding"], c:0,
cat:"MUSIC", tier:"legend" },

{ q:"A hologram performance of Tupac appeared at which festival?",
a:["Glastonbury","Coachella","Lollapalooza","Reading"], c:1,
cat:"MUSIC", tier:"documented",
note:"Coachella, 2012. A projection, not a hologram." },

{ q:"Which US programme secretly funded cultural output during the Cold War?",
a:["Operation Paperclip","The Congress for Cultural Freedom","Project Blue Book","Operation Chaos"], c:1,
cat:"MUSIC", tier:"documented",
note:"CIA funding was confirmed in the 1960s and 70s." },

{ q:"Pirate radio historically operated from where to dodge licensing?",
a:["Mountain tops","Ships offshore","Underground bunkers","Embassies"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"An 8-track cartridge holds how many programs?",
a:["Two","Three","Four","Eight"], c:2,
cat:"MUSIC", tier:"documented",
note:"Four stereo programs on an endless loop. The name counts tracks." },

{ q:"What is the 8-track's most notorious flaw?",
a:["Tape stretch","Track changes mid-song","No stereo","Short runtime"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"Print-through on magnetic tape means what?",
a:["Tape snapping","Audio bleeding between wound layers","Ink transfer","Head misalignment"], c:1,
cat:"MUSIC", tier:"documented",
note:"Sound from one layer imprints faintly onto the layer against it." },

{ q:"Can an 8-track cartridge be rewound in a standard player?",
a:["Yes, freely","Only to program start","No, it is a continuous loop","Only when paused"], c:2,
cat:"MUSIC", tier:"documented" },

{ q:"What physically causes the 8-track's program change?",
a:["A timer","Foil sensing tape","A magnet","Manual switching"], c:1,
cat:"MUSIC", tier:"documented",
note:"A strip of conductive foil closes a contact and shifts the head." },

{ q:"The 8-track format was developed under which industrialist's backing?",
a:["Howard Hughes","Bill Lear","Henry Ford II","David Sarnoff"], c:1,
cat:"MUSIC", tier:"documented",
note:"Lear of Learjet, which is why the format took hold in cars." },

{ q:"The 'Loudness War' refers to what?",
a:["Concert volume limits","Rising mastering levels at the cost of dynamics","Speaker patents","Radio power output"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"Which format did the 8-track lose out to commercially?",
a:["Vinyl","The compact cassette","Reel to reel","Minidisc"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"A numbers station transmission is usually preceded by what?",
a:["Silence","A repeating interval signal or melody","A voice announcement","Static bursts"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"Muzak was originally designed to do what?",
a:["Sell records","Alter worker productivity","Test speakers","Mask machinery"], c:1,
cat:"MUSIC", tier:"documented",
note:"Marketed with 'stimulus progression' to shape workplace mood." },

{ q:"The Mozart Effect claimed listening to Mozart did what?",
a:["Cured insomnia","Temporarily raised spatial reasoning","Lowered blood pressure","Improved memory permanently"], c:1,
cat:"MUSIC", tier:"disputed",
note:"The original 1993 finding was small and much overstated." },

{ q:"Which frequency do 'A=432Hz' advocates claim is the natural tuning?",
a:["415Hz","432Hz","440Hz","444Hz"], c:1,
cat:"MUSIC", tier:"legend",
note:"440Hz is the modern standard. Claims about 432 lack evidence." },

{ q:"The 'brown note' is claimed to do what?",
a:["Shatter glass","Cause loss of bowel control","Induce sleep","Stop hearts"], c:1,
cat:"MUSIC", tier:"legend",
note:"Tested and not reproduced." },

{ q:"Infrasound is sound below roughly what frequency?",
a:["20Hz","200Hz","2kHz","20kHz"], c:0,
cat:"MUSIC", tier:"documented",
note:"Sometimes linked to unease and reported hauntings." },

{ q:"Which composer's 'Gloomy Sunday' earned the nickname the Hungarian suicide song?",
a:["Rezso Seress","Bela Bartok","Franz Liszt","Zoltan Kodaly"], c:0,
cat:"MUSIC", tier:"legend" },

{ q:"Which 1970s technique let engineers hide messages in a record's run-out groove?",
a:["Locked grooves and etchings","Overdubbing","Compression","Flanging"], c:0,
cat:"MUSIC", tier:"documented" },

{ q:"The BBC Radiophonic Workshop is best known for work on which series?",
a:["Doctor Who","Blue Peter","Panorama","Top of the Pops"], c:0,
cat:"MUSIC", tier:"documented" },

{ q:"Musique concrete is built from what?",
a:["Synth patches","Recorded real-world sound","MIDI files","Live orchestra"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"Which artist's estate famously fought sampling in court, reshaping hip hop?",
a:["Gilbert O'Sullivan","James Brown","Kraftwerk","The Turtles"], c:0,
cat:"MUSIC", tier:"documented",
note:"Grand Upright v. Warner, 1991, ended free sampling." },

{ q:"The Amen break originates from a record by which group?",
a:["The Winstons","The Meters","Funkadelic","The Isley Brothers"], c:0,
cat:"MUSIC", tier:"documented",
note:"Amen, Brother, 1969. Sampled thousands of times." },

{ q:"Which chart practice inflated sales through bulk buying?",
a:["Chart hyping","Payola","Bootlegging","Sub-licensing"], c:0,
cat:"MUSIC", tier:"documented" },

{ q:"The 'Wall of Sound' production style is associated with whom?",
a:["Phil Spector","George Martin","Quincy Jones","Brian Eno"], c:0,
cat:"MUSIC", tier:"documented" },

{ q:"Which technology let radio stations fake a live DJ across time zones?",
a:["Voice tracking","Simulcasting","Ducking","Compression"], c:0,
cat:"MUSIC", tier:"documented" },

{ q:"A radio station's 'clock hour' is used to control what?",
a:["Ad and song placement","Transmitter power","Studio temperature","Licence renewal"], c:0,
cat:"MUSIC", tier:"documented" },

{ q:"What does the call sign prefix W generally indicate in US broadcasting?",
a:["A station east of the Mississippi","A public station","A shortwave licence","A translator"], c:0,
cat:"MUSIC", tier:"documented" },

{ q:"Which US law deregulated radio ownership in 1996?",
a:["The Telecommunications Act","The Fairness Doctrine","The Radio Act","The Communications Decency Act"], c:0,
cat:"MUSIC", tier:"documented",
note:"It triggered mass consolidation of station ownership." },

{ q:"The Fairness Doctrine required broadcasters to do what?",
a:["Balance controversial issues","Play local music","Fund public radio","Air weather alerts"], c:0,
cat:"MUSIC", tier:"documented",
note:"Abolished by the FCC in 1987." },

{ q:"Which band's 1969 album was rumoured to contain a hidden death announcement?",
a:["The Beatles' Abbey Road","Led Zeppelin II","The Doors' Soft Parade","Pink Floyd's Ummagumma"], c:0,
cat:"MUSIC", tier:"legend" },

{ q:"Stairway to Heaven backmasking claims allege what?",
a:["Chart rigging","Satanic phrases","Hidden ads","A second melody"], c:1,
cat:"MUSIC", tier:"legend" },

{ q:"Which Pink Floyd album is central to the Wizard of Oz sync legend?",
a:["Animals","The Dark Side of the Moon","Meddle","The Wall"], c:1,
cat:"MUSIC", tier:"legend",
note:"The band has repeatedly denied any intent." },

{ q:"Which artist recorded an album inside a Nevada nuclear test tunnel?",
a:["Nobody, this is folklore","Nine Inch Nails","Sunn O)))","Boards of Canada"], c:0,
cat:"MUSIC", tier:"legend" },

{ q:"Which 1980s device allowed home taping and triggered industry panic?",
a:["The cassette recorder","The CD player","The Walkman","The turntable"], c:0,
cat:"MUSIC", tier:"documented",
note:"'Home taping is killing music' was an industry campaign slogan." },

{ q:"The Recording Industry Association of America is best known publicly for what?",
a:["Certifying sales awards","Setting tuning standards","Licensing venues","Running charts"], c:0,
cat:"MUSIC", tier:"documented" },

{ q:"Which streaming metric replaced album sales in US charts?",
a:["Stream equivalent albums","Airplay points","Retail index","Radio spins"], c:0,
cat:"MUSIC", tier:"documented" },

{ q:"'Fake artists' on streaming platforms allegedly serve what purpose?",
a:["Filling playlists at lower royalty cost","Testing servers","Training AI","Regional licensing"], c:0,
cat:"MUSIC", tier:"disputed" },

{ q:"Which instrument was denounced as 'the devil's instrument' in early jazz panic?",
a:["Saxophone","Cello","Harp","Flute"], c:0,
cat:"MUSIC", tier:"documented" },

{ q:"The 'lost' Beach Boys album that fuelled decades of rumour is called what?",
a:["Smile","Surf's Up","Holland","Wild Honey"], c:0,
cat:"MUSIC", tier:"documented",
note:"Shelved in 1967, finally released in reworked form in 2004." },

{ q:"Which Bob Dylan legend claims a 1966 event changed everything?",
a:["A motorcycle crash","A plane crash","A recording ban","A lost tape"], c:0,
cat:"MUSIC", tier:"documented",
note:"The crash was real. The theories about it are not." },

{ q:"Which band claimed their studio was haunted, popularising a rock ghost story?",
a:["Led Zeppelin","The Rolling Stones","The Kinks","Cream"], c:0,
cat:"MUSIC", tier:"legend" },

{ q:"A 'ghost note' in music notation means what?",
a:["A silent rest","A note played with little attack","A wrong note","A hidden chord"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"What does 'lo-fi' primarily describe?",
a:["Low frequency","Deliberately imperfect fidelity","A tempo","A key signature"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"Tape hiss is caused by what?",
a:["Head wear","Random magnetic particle noise","Power hum","Speed drift"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"Wow and flutter describe what tape problem?",
a:["Volume drop","Speed instability","Frequency loss","Print-through"], c:1,
cat:"MUSIC", tier:"documented" },

{ q:"Azimuth misalignment on a tape head causes what?",
a:["High frequency loss","Bass boost","Faster playback","Track swapping"], c:0,
cat:"MUSIC", tier:"documented" },

{ q:"Dolby noise reduction works by doing what?",
a:["Boosting then cutting high frequencies","Removing vocals","Compressing bass","Filtering hum"], c:0,
cat:"MUSIC", tier:"documented" },


/* ==================================== TV ==================================== */

{ q:"Operation Mockingbird alleged CIA influence over what?",
a:["Foreign elections","Domestic news media","Union leadership","University funding"], c:1,
cat:"TV", tier:"documented",
note:"The Church Committee confirmed press relationships in 1976." },

{ q:"Which committee investigated US intelligence abuses in 1975 and 1976?",
a:["Warren Commission","Church Committee","Kefauver Committee","Rockefeller Panel"], c:1,
cat:"TV", tier:"documented" },

{ q:"The X-Files myth arc combined government secrecy with what?",
a:["Time travel","Extraterrestrial contact","Cloning only","Financial fraud"], c:1,
cat:"TV", tier:"documented" },

{ q:"Which X-Files phrase became a shorthand for institutional distrust?",
a:["Trust no one","Follow the money","Stay tuned","Deny everything"], c:0,
cat:"TV", tier:"documented" },

{ q:"Predictive programming claims media does what?",
a:["Reflects the past","Conditions audiences for future events","Hides sponsors","Alters ratings"], c:1,
cat:"TV", tier:"disputed" },

{ q:"Roughly how many companies control the bulk of US mass media?",
a:["Around fifty","Around twenty","Around six","Around thirty"], c:2,
cat:"TV", tier:"documented",
note:"Consolidation from roughly fifty in 1983 to a handful today." },

{ q:"Laugh tracks were introduced primarily to do what?",
a:["Mask production noise","Cue audience response","Fill airtime","Reduce costs"], c:1,
cat:"TV", tier:"documented" },

{ q:"The laugh track machine invented by Charley Douglass was called what?",
a:["The Laff Box","The Chuckler","The Audience","The Reactor"], c:0,
cat:"TV", tier:"documented",
note:"A locked wooden box he guarded for decades." },

{ q:"Which cartoon series is best known for smuggling civics to children?",
a:["Schoolhouse Rock","Scooby-Doo","The Flintstones","Top Cat"], c:0,
cat:"TV", tier:"documented" },

{ q:"Banned episode lore usually means an episode pulled for what reason?",
a:["Low ratings","Content deemed unsuitable after airing","Actor disputes","Budget"], c:1,
cat:"TV", tier:"documented" },

{ q:"Reality television is often criticised as an uncontrolled experiment in what?",
a:["Set design","Group psychology under surveillance","Music licensing","Union labour"], c:1,
cat:"TV", tier:"disputed" },

{ q:"Which agency has an entertainment liaison office that reviews scripts?",
a:["The CIA","The Federal Reserve","The IRS","The Postal Service"], c:0,
cat:"TV", tier:"documented",
note:"So does the Pentagon. Cooperation is traded for script input." },

{ q:"The 1938 War of the Worlds broadcast is famous for allegedly causing what?",
a:["A lawsuit","Mass panic","A blackout","A network ban"], c:1,
cat:"TV", tier:"disputed",
note:"Later research found the panic was largely a press invention." },

{ q:"Who directed and narrated the 1938 War of the Worlds broadcast?",
a:["Orson Welles","Cecil B. DeMille","Edward R. Murrow","Rod Serling"], c:0,
cat:"TV", tier:"documented" },

{ q:"Subliminal advertising was popularised as a scare by which 1957 book?",
a:["The Organization Man","The Hidden Persuaders","The Lonely Crowd","Silent Spring"], c:1,
cat:"TV", tier:"documented" },

{ q:"The 'Eat Popcorn' subliminal cinema experiment turned out to be what?",
a:["Replicated widely","Fabricated by its author","Government funded","A student project"], c:1,
cat:"TV", tier:"documented",
note:"James Vicary later admitted the data was made up." },

{ q:"Nielsen ratings historically measured audiences using what?",
a:["Phone surveys","Metered sample households","Ticket sales","Mail-in cards"], c:1,
cat:"TV", tier:"documented" },

{ q:"Which sitcom device makes an audience response impossible to verify?",
a:["Cold open","Sweetening the laugh track","Freeze frame","Bottle episode"], c:1,
cat:"TV", tier:"documented",
note:"Sweetening means adding recorded laughter to a live audience." },

{ q:"Max Headroom is remembered partly for which real 1987 event?",
a:["A signal intrusion in Chicago","A cancelled pilot","A lawsuit","A live blackout"], c:0,
cat:"TV", tier:"documented",
note:"An unidentified pirate hijacked two Chicago stations. Never solved." },

{ q:"The Southern Television broadcast interruption of 1977 claimed to be what?",
a:["A weather alert","A message from an alien authority","A test signal","A political statement"], c:1,
cat:"TV", tier:"documented",
note:"A hoax overriding an ITV news bulletin in the UK." },

{ q:"Which 1992 BBC mockumentary caused mass complaints for seeming real?",
a:["Ghostwatch","Nationwide","Panorama","Crimewatch"], c:0,
cat:"TV", tier:"documented" },

{ q:"Which US programme popularised the phrase 'jump the shark'?",
a:["Happy Days","Cheers","Taxi","MASH"], c:0,
cat:"TV", tier:"documented" },

{ q:"Which Twilight Zone episode is most cited about mass hysteria?",
a:["The Monsters Are Due on Maple Street","Time Enough at Last","Eye of the Beholder","The Hitch-Hiker"], c:0,
cat:"TV", tier:"documented" },

{ q:"What was the Emergency Broadcast System's original purpose?",
a:["Presidential wartime address","Weather alerts","Amber alerts","Traffic reports"], c:0,
cat:"TV", tier:"documented" },

{ q:"Which children's show was studied for its effect on early literacy?",
a:["Sesame Street","Bozo the Clown","Howdy Doody","Romper Room"], c:0,
cat:"TV", tier:"documented" },

{ q:"Local news 'if it bleeds it leads' describes what?",
a:["Ad pricing","Crime-heavy story selection","Weather formats","Union rules"], c:1,
cat:"TV", tier:"documented" },

{ q:"Sinclair Broadcast Group drew criticism in 2018 for what?",
a:["Identical scripted segments across stations","Cancelling news","Selling stations","Blocking ads"], c:0,
cat:"TV", tier:"documented" },

{ q:"Which format made 24-hour cable news possible in 1980?",
a:["CNN's launch","Satellite radio","Cable franchising","VHS"], c:0,
cat:"TV", tier:"documented" },

{ q:"A 'chyron' on screen refers to what?",
a:["Lower-third text","A camera","A studio light","A mic feed"], c:0,
cat:"TV", tier:"documented" },

{ q:"Which TV genre is built on 'frankenbiting'?",
a:["Reality television","Documentary film","Live sport","Soap opera"], c:0,
cat:"TV", tier:"documented",
note:"Editing unrelated audio into new sentences." },

{ q:"The 'Bloop' of TV lore, a station's sign-off test pattern, featured which head?",
a:["The Indian-head test pattern","A clock face","A globe","A colour bar"], c:0,
cat:"TV", tier:"documented" },

{ q:"Which decade did US networks stop signing off overnight?",
a:["1950s","1970s","1980s","2000s"], c:2,
cat:"TV", tier:"documented" },

{ q:"Cathode ray tube burn-in is caused by what?",
a:["Static images over long periods","Power surges","Magnetism","Heat only"], c:0,
cat:"TV", tier:"documented" },

{ q:"Analogue TV static was partly caused by what cosmic source?",
a:["Cosmic microwave background","Solar wind","Jupiter","Pulsars"], c:0,
cat:"TV", tier:"documented",
note:"A small fraction of that snow was genuinely the early universe." },

{ q:"Which show's finale spawned lasting 'they were dead all along' misreadings?",
a:["Lost","The Sopranos","Newhart","St. Elsewhere"], c:0,
cat:"TV", tier:"disputed" },

{ q:"Which US sitcom ending revealed the whole series as a snow globe fantasy?",
a:["St. Elsewhere","Roseanne","Dallas","Home Improvement"], c:0,
cat:"TV", tier:"documented" },

{ q:"Which soap opera plot device retroactively erased a season?",
a:["It was all a dream","A time jump","Recasting","A crossover"], c:0,
cat:"TV", tier:"documented",
note:"Dallas, 1986." },

{ q:"Which 1970s show introduced the studio warning 'the following is a dramatisation'?",
a:["In Search Of...","Kojak","Columbo","Mannix"], c:0,
cat:"TV", tier:"disputed" },

{ q:"In Search Of... was narrated by which actor?",
a:["Leonard Nimoy","William Shatner","Rod Serling","Vincent Price"], c:0,
cat:"TV", tier:"documented" },


/* =================================== FILM =================================== */

{ q:"In They Live, what reveals the hidden messages?",
a:["A radio","Sunglasses","A mirror","A camera"], c:1,
cat:"FILM", tier:"documented",
note:"Carpenter described it as a critique of Reagan-era consumerism." },

{ q:"The Truman Show describes a life staged for what purpose?",
a:["Military testing","Television broadcast","Medical research","Religious ritual"], c:1,
cat:"FILM", tier:"documented" },

{ q:"The 'Truman Show delusion' is a term used in which field?",
a:["Psychiatry","Law","Film studies","Marketing"], c:0,
cat:"FILM", tier:"documented",
note:"Coined by clinicians describing patients who believe they are filmed." },

{ q:"Which film gave rise to the phrase 'glitch in the Matrix'?",
a:["Dark City","The Matrix","eXistenZ","Total Recall"], c:1,
cat:"FILM", tier:"documented" },

{ q:"Eyes Wide Shut centres on what kind of gathering?",
a:["A political summit","A masked ritual party","A film premiere","A funeral"], c:1,
cat:"FILM", tier:"documented" },

{ q:"Which Kubrick film anchors most faked-moon-landing folklore?",
a:["2001: A Space Odyssey","The Shining","Barry Lyndon","Paths of Glory"], c:1,
cat:"FILM", tier:"legend",
note:"Room 237 collects these readings. Kubrick faked nothing." },

{ q:"Room 237 is a documentary about what?",
a:["Fan theories of The Shining","Set design","Film restoration","Stanley Kubrick's life"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Capricorn One depicts a faked mission to where?",
a:["The Moon","Mars","Venus","A space station"], c:1,
cat:"FILM", tier:"documented" },

{ q:"The Parallax View concerns what?",
a:["A media monopoly","A corporation recruiting assassins","A bank fraud","An alien landing"], c:1,
cat:"FILM", tier:"documented" },

{ q:"The Manchurian Candidate popularised which idea?",
a:["Remote viewing","Brainwashed sleeper assassins","Body doubles","Time loops"], c:1,
cat:"FILM", tier:"documented",
note:"Released 1962, while MKUltra was active and unknown." },

{ q:"Videodrome concerns a signal that does what?",
a:["Erases memory","Physically alters the viewer","Predicts deaths","Controls machines"], c:1,
cat:"FILM", tier:"documented" },

{ q:"Which found-footage horror was widely mistaken for real events?",
a:["Paranormal Activity","The Blair Witch Project","REC","Cloverfield"], c:1,
cat:"FILM", tier:"documented" },

{ q:"The Conversation follows a man who does what for a living?",
a:["Forges documents","Records private conversations","Runs numbers","Writes propaganda"], c:1,
cat:"FILM", tier:"documented" },

{ q:"Three Days of the Condor centres on a rogue faction inside what?",
a:["The FBI","The CIA","The Army","A bank"], c:1,
cat:"FILM", tier:"documented" },

{ q:"Network is best remembered for which line?",
a:["Follow the money","I'm mad as hell and I'm not going to take this anymore","The truth is out there","Trust no one"], c:1,
cat:"FILM", tier:"documented" },

{ q:"In Dark City, the inhabitants' memories are altered by whom?",
a:["A government","The Strangers","An AI","A cult"], c:1,
cat:"FILM", tier:"documented" },

{ q:"Which 1970s film dramatised a real Watergate investigation?",
a:["The Candidate","All the President's Men","Chinatown","Serpico"], c:1,
cat:"FILM", tier:"documented" },

{ q:"Which phrase from All the President's Men entered political language?",
a:["Follow the money","Deep state","Smoking gun","Plumbers"], c:0,
cat:"FILM", tier:"documented",
note:"Invented for the film, not spoken by the real source." },

{ q:"Ringu and its US remake centre on a cursed what?",
a:["Book","Videotape","Phone line","Photograph"], c:1,
cat:"FILM", tier:"documented" },

{ q:"Cronenberg's Scanners features characters with what ability?",
a:["Invisibility","Telepathy and telekinesis","Time travel","Shapeshifting"], c:1,
cat:"FILM", tier:"documented" },

{ q:"The Stepford Wives satirises what?",
a:["Suburban conformity","Union politics","Space travel","Advertising"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Invasion of the Body Snatchers is most often read as a metaphor for what?",
a:["Conformity and paranoia","Space travel","Disease","Genetics"], c:0,
cat:"FILM", tier:"disputed",
note:"Read as both anti-communist and anti-McCarthyist, depending on the critic." },

{ q:"Which 1998 film features a man who believes reality is scripted for him?",
a:["The Truman Show","Pi","Dark City","Existenz"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Pi centres on a mathematician searching for what?",
a:["A number governing everything","A lost proof","A prime","A code in music"], c:0,
cat:"FILM", tier:"documented" },

{ q:"The Game (1997) leaves the protagonist unsure about what?",
a:["Which events were staged","His identity","His memory","His location"], c:0,
cat:"FILM", tier:"documented" },

{ q:"JFK (1991) prompted which legislative response?",
a:["The JFK Records Act","The Church Committee","The Warren Commission","FOIA"], c:0,
cat:"FILM", tier:"documented",
note:"Congress passed the 1992 records act after public pressure." },

{ q:"Which documentary popularised the phrase 'military-industrial complex' on screen?",
a:["Why We Fight","Fog of War","Restrepo","Bowling for Columbine"], c:0,
cat:"FILM", tier:"documented",
note:"The phrase itself comes from Eisenhower's 1961 farewell address." },

{ q:"Enemy of the State dramatised surveillance by which agency?",
a:["The NSA","The DEA","The FBI","Interpol"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Which film's alien invasion is revealed as a corporate plot?",
a:["They Live","Signs","Arrival","District 9"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Brazil satirises what kind of system?",
a:["Bureaucratic authoritarianism","Space colonisation","Corporate finance","Media monopoly"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Which 1962 film depicts a nuclear accident with no villain?",
a:["Fail Safe","Dr. Strangelove","On the Beach","Seven Days in May"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Seven Days in May concerns what plot?",
a:["A military coup in the US","A stolen election","A bank collapse","A false flag"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Which director's film was pulled after copycat crime claims in the UK?",
a:["Kubrick's A Clockwork Orange","Scorsese's Taxi Driver","Craven's Last House","Peckinpah's Straw Dogs"], c:0,
cat:"FILM", tier:"documented",
note:"Kubrick himself withdrew it from UK release." },

{ q:"The Devil's Advocate hinges on the reveal that the firm is what?",
a:["Literally satanic","A front company","A cult","A simulation"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Which film franchise popularised 'the simulation is failing' imagery?",
a:["The Matrix","Terminator","Alien","Blade Runner"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Blade Runner's central uncertainty concerns what?",
a:["Who is human","Who owns the city","Who wrote the files","Who survived"], c:0,
cat:"FILM", tier:"documented" },

{ q:"The Voight-Kampff test in Blade Runner measures what?",
a:["Empathic response","Memory recall","Reaction speed","Pupil colour"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Which 1970s film ends with the discovery that the food is people?",
a:["Soylent Green","Logan's Run","Rollerball","THX 1138"], c:0,
cat:"FILM", tier:"documented" },

{ q:"THX 1138 depicts a society controlled by what?",
a:["Mandatory sedation","Television","Religion","Currency"], c:0,
cat:"FILM", tier:"documented" },

{ q:"Which film opens with the line 'This is not a story about me'?",
a:["None of these, it is a common misquote","Fight Club","Memento","Se7en"], c:0,
cat:"FILM", tier:"legend" },

{ q:"Fight Club's twist reveals the narrator and Tyler are what?",
a:["The same person","Brothers","Rivals","Clones"], c:0,
cat:"FILM", tier:"documented" },


/* =================================== POP ==================================== */

{ q:"The Mandela Effect describes what?",
a:["Deja vu","Widely shared false memory","Screen burn","Audio pareidolia"], c:1,
cat:"POP", tier:"disputed",
note:"Named for false memories of Mandela dying in prison." },

{ q:"Which children's book family is a standard Mandela Effect example?",
a:["The Berenstain Bears","Paddington","Curious George","Babar"], c:0,
cat:"POP", tier:"disputed",
note:"Many remember Berenstein. It has always been Berenstain." },

{ q:"Which line is a famous misquote from Star Wars?",
a:["Luke, I am your father","May the Force be with you","I have a bad feeling","Do or do not"], c:0,
cat:"POP", tier:"documented",
note:"The actual line is 'No, I am your father'." },

{ q:"Simulation theory argues reality may be what?",
a:["A dream","A computed system","A hologram of the past","A shared hallucination"], c:1,
cat:"POP", tier:"disputed" },

{ q:"Which philosopher formalised the simulation argument in 2003?",
a:["Nick Bostrom","David Chalmers","Daniel Dennett","John Searle"], c:0,
cat:"POP", tier:"documented" },

{ q:"Slender Man originated where?",
a:["A 1970s newspaper","An internet forum contest","A folk ballad","A TV pilot"], c:1,
cat:"POP", tier:"documented",
note:"Created by Eric Knudsen for a 2009 Something Awful thread." },

{ q:"Creepypasta refers to what?",
a:["Corrupted files","Horror stories spread online","Fake patches","Leaked builds"], c:1,
cat:"POP", tier:"documented" },

{ q:"An ARG is best described as what?",
a:["A console genre","A game played across real-world media","A rendering method","A save format"], c:1,
cat:"POP", tier:"documented" },

{ q:"Numbers stations broadcast what?",
a:["Weather data","Strings of spoken numbers","Test tones","Music only"], c:1,
cat:"POP", tier:"documented",
note:"Widely believed to carry one-way intelligence traffic." },

{ q:"The Wow! signal was detected in which year?",
a:["1965","1977","1984","1991"], c:1,
cat:"POP", tier:"documented",
note:"72 seconds, never repeated, still unexplained." },

{ q:"Ley lines are claimed to be what?",
a:["Trade routes","Alignments of sites carrying energy","Ancient borders","Migration paths"], c:1,
cat:"POP", tier:"legend" },

{ q:"Pareidolia is the tendency to do what?",
a:["Forget faces","See patterns in noise","Mishear lyrics","Confuse dates"], c:1,
cat:"POP", tier:"documented",
note:"Why the Face on Mars looks like a face." },

{ q:"The Streisand Effect describes what?",
a:["Fame decay","Suppression increasing attention","Viral spread","Media blackout"], c:1,
cat:"POP", tier:"documented" },

{ q:"An 'infohazard' is information that supposedly does what?",
a:["Costs money","Harms the person who learns it","Spreads slowly","Cannot be copied"], c:1,
cat:"POP", tier:"legend" },

{ q:"The 'dead internet theory' claims most online activity is what?",
a:["Encrypted","Automated or generated","Government run","Regionally blocked"], c:1,
cat:"POP", tier:"disputed" },

{ q:"Which 1999 event drove widespread stockpiling over a computing flaw?",
a:["Dot-com crash","Y2K","ILOVEYOU virus","Melissa worm"], c:1,
cat:"POP", tier:"documented" },

{ q:"An urban legend spread by chain email is an early example of what?",
a:["Phishing","Viral misinformation","Malware","Spam filtering"], c:1,
cat:"POP", tier:"documented" },

{ q:"The Backrooms originated from what?",
a:["A film","An imageboard post with one photo","A novel","A game mod"], c:1,
cat:"POP", tier:"documented" },

{ q:"Cicada 3301 was what?",
a:["A malware family","An unsolved recruitment puzzle series","A leaked database","A radio station"], c:1,
cat:"POP", tier:"documented",
note:"Began 2012. Its authors have never been identified." },

{ q:"Which internet phenomenon involves an entity that cannot be described?",
a:["SCP Foundation entries","Rickrolling","Doxxing","Astroturfing"], c:0,
cat:"POP", tier:"documented" },

{ q:"The SCP Foundation is best described as what?",
a:["A collaborative fiction wiki","A real agency","A game studio","A think tank"], c:0,
cat:"POP", tier:"documented" },

{ q:"Astroturfing means what?",
a:["Faking grassroots support","Blocking ads","Hiding sponsors","Selling data"], c:0,
cat:"POP", tier:"documented" },

{ q:"A 'sock puppet' account is used to do what?",
a:["Simulate independent voices","Test servers","Store files","Track ads"], c:0,
cat:"POP", tier:"documented" },

{ q:"Which term describes coordinated online harassment disguised as debate?",
a:["Brigading","Seeding","Pinging","Mirroring"], c:0,
cat:"POP", tier:"documented" },

{ q:"The 'Blue Whale challenge' panic was largely what?",
a:["Verified deaths","Amplified moral panic","A game","A hoax app"], c:1,
cat:"POP", tier:"disputed" },

{ q:"The 'Momo challenge' was confirmed by researchers as what?",
a:["A real threat","A hoax spread by warnings","A malware campaign","A TV stunt"], c:1,
cat:"POP", tier:"documented" },

{ q:"Which Japanese sculpture became the Momo image?",
a:["Mother Bird","The Scream","Kuchisake","Hachishakusama"], c:0,
cat:"POP", tier:"documented",
note:"An artwork by Keisuke Aiso, unrelated to any challenge." },

{ q:"Kuchisake-onna is a legend about what?",
a:["A slit-mouthed woman","A well","A tunnel","A doll"], c:0,
cat:"POP", tier:"legend" },

{ q:"Hanako-san is said to appear where?",
a:["School toilets","Attics","Bridges","Elevators"], c:0,
cat:"POP", tier:"legend" },

{ q:"The Elevator Game legend originates from which country?",
a:["South Korea","Japan","China","Thailand"], c:0,
cat:"POP", tier:"legend" },

{ q:"Which unsolved 2013 hotel case became a viral mystery?",
a:["Elisa Lam","Amelia Earhart","Dyatlov Pass","Somerton Man"], c:0,
cat:"POP", tier:"documented",
note:"The coroner ruled accidental drowning." },

{ q:"The Dyatlov Pass incident occurred in which year?",
a:["1959","1968","1972","1981"], c:0,
cat:"POP", tier:"documented",
note:"Nine hikers died in the Urals. A 2021 study proposed a slab avalanche." },

{ q:"The Somerton Man was identified in 2022 as likely whom?",
a:["Carl Webb","Alf Boxall","H.C. Reynolds","Tom Keane"], c:0,
cat:"POP", tier:"disputed",
note:"Identified by DNA genealogy, though not formally confirmed by all parties." },

{ q:"Which cipher on the Somerton Man case remains unexplained?",
a:["A page of letters","A number grid","A musical score","A map"], c:0,
cat:"POP", tier:"documented" },

{ q:"The Voynich manuscript is written in what?",
a:["Latin","An undeciphered script","Greek","Coptic"], c:1,
cat:"POP", tier:"documented" },

{ q:"The Zodiac Killer's 340 cipher was solved in which year?",
a:["1974","2001","2020","2015"], c:2,
cat:"POP", tier:"documented",
note:"Cracked by a team of three amateur codebreakers." },

{ q:"The 'Havana syndrome' reports involve what symptom cluster?",
a:["Vertigo and cognitive effects","Rashes","Hair loss","Blindness"], c:0,
cat:"POP", tier:"disputed",
note:"A 2023 US intelligence assessment found no foreign weapon likely responsible." },

{ q:"The Taos hum is an example of what?",
a:["A localised low-frequency hum","A radio signal","A seismic event","An animal call"], c:0,
cat:"POP", tier:"disputed" },

{ q:"The Bloop, recorded in 1997, was later attributed to what?",
a:["Icequakes","A submarine","A whale","A volcano"], c:0,
cat:"POP", tier:"documented",
note:"Large-scale ice cracking in Antarctica." },

{ q:"The Max Headroom intrusion remains unsolved in which sense?",
a:["The intruder was never identified","No recording exists","It never aired","It was a hoax"], c:0,
cat:"POP", tier:"documented" },

{ q:"Which viral 2000s email claimed a hidden message in a currency note?",
a:["The dollar bill 9/11 fold","The euro star map","The pound serial","The yen watermark"], c:0,
cat:"POP", tier:"legend" },

{ q:"What is 'Poe's Law'?",
a:["Satire is indistinguishable from sincerity online","Every thread ends in Hitler","Bad news spreads faster","Users never read"], c:0,
cat:"POP", tier:"documented" },

{ q:"Godwin's Law states what?",
a:["Online arguments trend toward Nazi comparisons","Bots outnumber users","All memes decay","Threads die at 100 posts"], c:0,
cat:"POP", tier:"documented" },

{ q:"The 'Streetlight Effect' describes research that does what?",
a:["Looks where data is easy","Uses small samples","Ignores theory","Repeats itself"], c:0,
cat:"POP", tier:"documented" },


/* =================================== CIA ==================================== */

{ q:"MKUltra was formally authorised in which year?",
a:["1947","1953","1961","1972"], c:1,
cat:"CIA", tier:"documented",
note:"Approved 1953. Most records destroyed in 1973." },

{ q:"Which drug was central to MKUltra experiments?",
a:["Mescaline","LSD","Amphetamine","Scopolamine"], c:1,
cat:"CIA", tier:"documented" },

{ q:"How did most MKUltra documentation come to be lost?",
a:["A fire","Deliberate destruction in 1973","A flood","Misfiling"], c:1,
cat:"CIA", tier:"documented",
note:"Ordered destroyed by Director Richard Helms. Financial records survived." },

{ q:"Which MKUltra subproject dosed unwitting members of the public?",
a:["Operation Chaos","Operation Midnight Climax","Project Artichoke","Project Bluebird"], c:1,
cat:"CIA", tier:"documented",
note:"Run out of safehouses in San Francisco and New York." },

{ q:"Which scientist's 1953 death is tied to MKUltra dosing?",
a:["Frank Olson","Sidney Gottlieb","Harold Blauer","Ewen Cameron"], c:0,
cat:"CIA", tier:"documented",
note:"Fell from a New York hotel window days after being dosed." },

{ q:"Who ran MKUltra's chemical division?",
a:["Sidney Gottlieb","Richard Helms","James Angleton","Allen Dulles"], c:0,
cat:"CIA", tier:"documented" },

{ q:"Which Canadian psychiatrist conducted CIA-funded depatterning experiments?",
a:["Ewen Cameron","Wilder Penfield","Norman Doidge","Hans Selye"], c:0,
cat:"CIA", tier:"documented",
note:"At the Allan Memorial Institute in Montreal." },

{ q:"Project Stargate researched what?",
a:["Satellite imaging","Remote viewing","Cryptography","Sonar"], c:1,
cat:"CIA", tier:"documented",
note:"Ran roughly 1978 to 1995. Closed as not useful for intelligence." },

{ q:"Operation Northwoods was a proposal to do what?",
a:["Invade Cuba openly","Stage pretexts for war with Cuba","Fund exiles","Blockade shipping"], c:1,
cat:"CIA", tier:"documented",
note:"Drafted 1962 by the Joint Chiefs. Rejected by Kennedy." },

{ q:"COINTELPRO was run by which agency?",
a:["CIA","FBI","NSA","DIA"], c:1,
cat:"CIA", tier:"documented",
note:"1956 to 1971, exposed after a break-in at a field office." },

{ q:"Which 1971 break-in exposed COINTELPRO?",
a:["Media, Pennsylvania","Watergate","Camden","Hoover Building"], c:0,
cat:"CIA", tier:"documented" },

{ q:"What does FOIA stand for?",
a:["Federal Office of Internal Affairs","Freedom of Information Act","Foreign Operations Intelligence Archive","Federal Oversight and Inquiry Act"], c:1,
cat:"CIA", tier:"documented" },

{ q:"A limited hangout means what?",
a:["A total denial","Releasing partial truth to protect more","Leaking to a rival","Sealing a file"], c:1,
cat:"CIA", tier:"documented" },

{ q:"Operation Gladio referred to what?",
a:["Arctic surveillance","NATO stay-behind networks in Europe","A currency scheme","A satellite programme"], c:1,
cat:"CIA", tier:"documented" },

{ q:"The Phoenix Program operated during which conflict?",
a:["Korean War","Vietnam War","Gulf War","Cold War Berlin"], c:1,
cat:"CIA", tier:"documented" },

{ q:"Operation Paperclip recruited whom after WWII?",
a:["Soviet defectors","German scientists","Japanese codebreakers","Italian partisans"], c:1,
cat:"CIA", tier:"documented" },

{ q:"Which Paperclip recruit later led NASA's Saturn V programme?",
a:["Wernher von Braun","Hubertus Strughold","Arthur Rudolph","Kurt Debus"], c:0,
cat:"CIA", tier:"documented" },

{ q:"Project MKUltra's existence became public largely through what?",
a:["A film","Congressional hearings and a FOIA release","A defection","A newspaper hoax"], c:1,
cat:"CIA", tier:"documented",
note:"Church Committee 1975, then a 1977 cache of surviving records." },

{ q:"Operation Chaos targeted which group domestically?",
a:["Bankers","Anti-war and student movements","Farmers","Union bosses"], c:1,
cat:"CIA", tier:"documented" },

{ q:"The Family Jewels report was an internal review of what?",
a:["Budget waste","CIA activities of questionable legality","Recruitment","Satellite failures"], c:1,
cat:"CIA", tier:"documented",
note:"Compiled 1973, largely declassified in 2007." },

{ q:"Which programme tested biological agents on a US city's transit system?",
a:["Operation Sea-Spray","Project Artichoke","Operation Mongoose","Project Azorian"], c:0,
cat:"CIA", tier:"documented",
note:"US Navy, San Francisco, 1950. Bacteria released to study dispersal." },

{ q:"Project Azorian was a covert attempt to recover what?",
a:["A satellite","A sunken Soviet submarine","A crashed aircraft","Gold bullion"], c:1,
cat:"CIA", tier:"documented" },

{ q:"Which ship was built for Project Azorian?",
a:["Glomar Explorer","USS Halibut","Glomar Challenger","Hughes Mining Barge"], c:0,
cat:"CIA", tier:"documented",
note:"Cover story: Howard Hughes was mining manganese nodules." },

{ q:"The term 'plausible deniability' describes what?",
a:["A legal defence","Structuring operations so leaders can deny knowledge","A cover story","An alias system"], c:1,
cat:"CIA", tier:"documented" },

{ q:"A 'honey trap' operation uses what as leverage?",
a:["Money","Sexual or romantic compromise","Family threats","Career blocking"], c:1,
cat:"CIA", tier:"documented" },

{ q:"Kompromat is best translated as what?",
a:["Compromise agreement","Compromising material","Comrade network","Complete record"], c:1,
cat:"CIA", tier:"documented" },

{ q:"Which 2013 disclosures revealed mass NSA collection programmes?",
a:["The Snowden files","The Pentagon Papers","Cablegate","Vault 7"], c:0,
cat:"CIA", tier:"documented" },

{ q:"Which NSA programme collected data directly from tech companies?",
a:["PRISM","ECHELON","XKeyscore","Bullrun"], c:0,
cat:"CIA", tier:"documented" },

{ q:"XKeyscore was described as what kind of tool?",
a:["A search system for collected internet data","A satellite","A cipher","A firewall"], c:0,
cat:"CIA", tier:"documented" },

{ q:"ECHELON was a signals intelligence network among which grouping?",
a:["The Five Eyes","NATO","SEATO","The G7"], c:0,
cat:"CIA", tier:"documented" },

{ q:"The Five Eyes comprises which countries?",
a:["US, UK, Canada, Australia, New Zealand","US, UK, France, Germany, Italy","US, UK, Israel, Japan, Canada","US, Canada, Mexico, UK, Australia"], c:0,
cat:"CIA", tier:"documented" },

{ q:"Vault 7 concerned leaked documents about what?",
a:["CIA hacking tools","Nuclear codes","Drone strikes","Prison sites"], c:0,
cat:"CIA", tier:"documented",
note:"Published by WikiLeaks in 2017." },

{ q:"The Pentagon Papers revealed what?",
a:["Systematic misleading about Vietnam","Domestic spying","Bank fraud","A coup plan"], c:0,
cat:"CIA", tier:"documented" },

{ q:"Who leaked the Pentagon Papers?",
a:["Daniel Ellsberg","Mark Felt","Chelsea Manning","Philip Agee"], c:0,
cat:"CIA", tier:"documented" },

{ q:"Watergate's 'Deep Throat' was later revealed to be whom?",
a:["Mark Felt","Alexander Butterfield","John Dean","Bob Haldeman"], c:0,
cat:"CIA", tier:"documented",
note:"The FBI's associate director, confirmed in 2005." },

{ q:"Operation Mongoose aimed at what?",
a:["Destabilising Cuba","Invading Laos","Bugging the UN","Recruiting Soviets"], c:0,
cat:"CIA", tier:"documented" },

{ q:"Which CIA-backed 1953 operation overthrew Iran's prime minister?",
a:["Operation Ajax","Operation PBSuccess","Operation Gold","Operation Condor"], c:0,
cat:"CIA", tier:"documented",
note:"The CIA acknowledged its role in declassified documents in 2013." },

{ q:"Operation PBSuccess targeted which country's government?",
a:["Guatemala","Chile","Brazil","Bolivia"], c:0,
cat:"CIA", tier:"documented",
note:"1954, against Jacobo Arbenz." },

{ q:"Operation Condor involved coordinated repression in which region?",
a:["South America","West Africa","Southeast Asia","Eastern Europe"], c:0,
cat:"CIA", tier:"documented" },

{ q:"The Tuskegee study withheld treatment for which disease?",
a:["Syphilis","Tuberculosis","Malaria","Typhus"], c:0,
cat:"CIA", tier:"documented",
note:"1932 to 1972. It led to modern informed consent rules." },

{ q:"Which 1970s revelation concerned radiation experiments on US citizens?",
a:["Plutonium injection studies","Project Sunshine only","Operation Crossroads","Castle Bravo"], c:0,
cat:"CIA", tier:"documented",
note:"Documented by the 1994 Advisory Committee report." },

{ q:"What was Project Sunshine?",
a:["Collection of human tissue to study fallout","A solar project","A radar net","A satellite"], c:0,
cat:"CIA", tier:"documented",
note:"Body parts were collected, often without consent." },

{ q:"Operation Fishbowl involved what?",
a:["High-altitude nuclear tests","Undersea listening","Fish farming","Radar mapping"], c:0,
cat:"CIA", tier:"documented" },

{ q:"Which programme monitored US mail for decades?",
a:["HTLINGUAL","SHAMROCK","MINARET","CHAOS"], c:0,
cat:"CIA", tier:"documented",
note:"The CIA opened and photographed mail from 1952 to 1973." },

{ q:"Operation SHAMROCK collected what?",
a:["Telegraph traffic","Phone books","Passports","Bank records"], c:0,
cat:"CIA", tier:"documented" },

{ q:"Project MINARET watchlisted whom?",
a:["US citizens including public figures","Foreign diplomats","Soldiers","Bankers"], c:0,
cat:"CIA", tier:"documented" },

{ q:"Which 1975 assassination revelation shocked the Church Committee?",
a:["Plots against foreign leaders","Domestic hits","Kidnappings","Bank raids"], c:0,
cat:"CIA", tier:"documented" },

{ q:"The 'Gulf of Tonkin' incident is now understood how?",
a:["The second attack likely did not occur","Both attacks confirmed","It was a naval accident","It was a Soviet test"], c:0,
cat:"CIA", tier:"documented",
note:"NSA historians concluded the 4 August 1964 attack did not happen." },

{ q:"Which document formally created the CIA?",
a:["The National Security Act of 1947","The Patriot Act","The Espionage Act","The Church Report"], c:0,
cat:"CIA", tier:"documented" },


/* ================================= ANCIENT ================================== */

{ q:"The Dogon people are associated with claimed knowledge of which star?",
a:["Betelgeuse","Sirius","Polaris","Vega"], c:1,
cat:"ANCIENT", tier:"disputed",
note:"Later fieldwork suggested contamination from earlier visitors." },

{ q:"The Piri Reis map is notable for allegedly depicting what?",
a:["Australia","An ice-free Antarctic coast","Atlantis","The Pacific"], c:1,
cat:"ANCIENT", tier:"disputed",
note:"Drawn 1513. The 'Antarctic' reading is contested." },

{ q:"Vimana appear in the texts of which tradition?",
a:["Norse","Ancient Indian","Egyptian","Mesoamerican"], c:1,
cat:"ANCIENT", tier:"documented" },

{ q:"The Nazca Lines are located in which country?",
a:["Chile","Peru","Bolivia","Mexico"], c:1,
cat:"ANCIENT", tier:"documented" },

{ q:"The Nazca Lines were most likely made by doing what?",
a:["Removing surface stones","Burning the ground","Carving bedrock","Planting crops"], c:0,
cat:"ANCIENT", tier:"documented",
note:"Reachable with simple surveying tools and cord." },

{ q:"The Antikythera mechanism is best described as what?",
a:["A weapon","An astronomical calculating device","A lock","A musical instrument"], c:1,
cat:"ANCIENT", tier:"documented",
note:"Roughly 2nd century BC. Genuinely remarkable, and genuinely human-made." },

{ q:"The Antikythera mechanism was recovered from what?",
a:["A shipwreck","A tomb","A temple","A cave"], c:0,
cat:"ANCIENT", tier:"documented",
note:"Found by sponge divers in 1901." },

{ q:"Gobekli Tepe upended assumptions because of its what?",
a:["Size","Age, predating agriculture","Location","Materials"], c:1,
cat:"ANCIENT", tier:"documented",
note:"Roughly 9500 BC, older than farming or pottery in the region." },

{ q:"Gobekli Tepe is located in which modern country?",
a:["Turkey","Iraq","Syria","Iran"], c:0,
cat:"ANCIENT", tier:"documented" },

{ q:"The Baghdad Battery is claimed by some to be what?",
a:["A galvanic cell","A scroll case","A weight","A lamp"], c:0,
cat:"ANCIENT", tier:"disputed",
note:"Most archaeologists read it as a storage vessel for scrolls." },

{ q:"Shambhala appears in the traditions of which region?",
a:["West Africa","Tibet and Central Asia","Scandinavia","The Andes"], c:1,
cat:"ANCIENT", tier:"legend" },

{ q:"Plato's account of Atlantis appears in which works?",
a:["The Republic","Timaeus and Critias","The Symposium","Phaedo"], c:1,
cat:"ANCIENT", tier:"documented" },

{ q:"Plato presents Atlantis primarily as what?",
a:["A moral parable","A travel report","A prophecy","A legal code"], c:0,
cat:"ANCIENT", tier:"disputed" },

{ q:"The Great Pyramid was originally clad in what?",
a:["Gold leaf","Polished white limestone","Granite","Painted plaster"], c:1,
cat:"ANCIENT", tier:"documented" },

{ q:"Which claim about the pyramids is NOT supported by evidence?",
a:["They were tombs","They used ramps and levers","They generated electricity","They were surveyed precisely"], c:2,
cat:"ANCIENT", tier:"legend" },

{ q:"Which papyrus archive documented the labour organising pyramid construction?",
a:["The Merer diary at Wadi al-Jarf","The Rhind papyrus","The Ebers papyrus","The Turin canon"], c:0,
cat:"ANCIENT", tier:"documented",
note:"Found in 2013, it logs stone transport crews." },

{ q:"The Voynich manuscript remains notable because it is what?",
a:["The oldest book","Written in an undeciphered script","Made of metal","A forgery proven in court"], c:1,
cat:"ANCIENT", tier:"documented",
note:"Carbon dated to the early 1400s. Still unread." },

{ q:"Hollow Earth theory proposes what?",
a:["A molten core","A habitable interior with polar openings","A metal shell","An expanding crust"], c:1,
cat:"ANCIENT", tier:"legend" },

{ q:"Which ancient site is most associated with acoustic resonance claims?",
a:["Stonehenge","Newgrange","The Hypogeum of Hal Saflieni","Machu Picchu"], c:2,
cat:"ANCIENT", tier:"disputed" },

{ q:"Newgrange is aligned to which event?",
a:["The winter solstice sunrise","The summer solstice sunset","The equinox moonrise","A star rising"], c:0,
cat:"ANCIENT", tier:"documented" },

{ q:"Stonehenge's bluestones were transported from where?",
a:["The Preseli Hills in Wales","Cornwall","Normandy","Ireland"], c:0,
cat:"ANCIENT", tier:"documented",
note:"Roughly 200 kilometres, confirmed by geochemical matching." },

{ q:"Which Egyptian tomb discovery spawned a durable 'curse' legend?",
a:["Tutankhamun's","Seti I's","Ramses II's","Hatshepsut's"], c:0,
cat:"ANCIENT", tier:"legend",
note:"Statistical studies of the excavators found no unusual mortality." },

{ q:"The Rosetta Stone was key to deciphering what?",
a:["Egyptian hieroglyphs","Linear B","Cuneiform","Mayan glyphs"], c:0,
cat:"ANCIENT", tier:"documented" },

{ q:"Linear B was deciphered as an early form of which language?",
a:["Greek","Hittite","Phoenician","Etruscan"], c:0,
cat:"ANCIENT", tier:"documented" },

{ q:"Linear A remains what?",
a:["Undeciphered","Fully translated","A forgery","A numeral system"], c:0,
cat:"ANCIENT", tier:"documented" },

{ q:"The Indus Valley script remains what?",
a:["Undeciphered","Translated","A calendar","A trade code"], c:0,
cat:"ANCIENT", tier:"documented" },

{ q:"Which Mesoamerican calendar cycle drove 2012 apocalypse claims?",
a:["The Maya Long Count","The Aztec sun stone","The Zapotec cycle","The Olmec count"], c:0,
cat:"ANCIENT", tier:"documented",
note:"It simply rolled over to a new bak'tun." },

{ q:"Which ancient wonder's location is still unconfirmed?",
a:["The Hanging Gardens of Babylon","The Colossus of Rhodes","The Lighthouse of Alexandria","The Mausoleum"], c:0,
cat:"ANCIENT", tier:"disputed" },

{ q:"Which ancient library's destruction is often overstated as a single event?",
a:["Alexandria","Pergamon","Nineveh","Ebla"], c:0,
cat:"ANCIENT", tier:"disputed",
note:"It declined over centuries through several incidents." },

{ q:"Which Roman concrete property still puzzles engineers?",
a:["Self-healing seawater durability","Transparency","Flexibility","Low weight"], c:0,
cat:"ANCIENT", tier:"documented",
note:"Lime clasts appear to reseal cracks." },

{ q:"Greek fire's exact composition is what?",
a:["Lost","Water-based","Sulphur only","Documented in full"], c:0,
cat:"ANCIENT", tier:"documented" },

{ q:"Damascus steel's distinctive pattern comes from what?",
a:["Carbide banding in the ore","Etching after forging","Folding only","Quenching in oil"], c:0,
cat:"ANCIENT", tier:"documented" },

{ q:"The 'Saqqara bird' is claimed by some to model what?",
a:["A glider","A boat","A weapon","A loom"], c:0,
cat:"ANCIENT", tier:"legend" },

{ q:"Which Peruvian site features stonework cited in ancient-technology claims?",
a:["Sacsayhuaman","Chan Chan","Caral","Sipan"], c:0,
cat:"ANCIENT", tier:"documented" },

{ q:"Puma Punku's precision stonework is located in which country?",
a:["Bolivia","Peru","Ecuador","Chile"], c:0,
cat:"ANCIENT", tier:"documented" },

{ q:"Which Easter Island question drove decades of debate?",
a:["How the moai were moved","Who carved them","When they were made","What they depict"], c:0,
cat:"ANCIENT", tier:"documented",
note:"Walking and rolling experiments have both been demonstrated." },

{ q:"The 'ecocide' narrative of Easter Island has been challenged by what?",
a:["Evidence of rat impact and colonial disease","New carvings","Pollen loss","Volcanic dating"], c:0,
cat:"ANCIENT", tier:"disputed" },

{ q:"Which artefact was proven a hoax by radiocarbon dating in 1953?",
a:["Piltdown Man","The Shroud of Turin","The Antikythera mechanism","The Dead Sea Scrolls"], c:0,
cat:"ANCIENT", tier:"documented" },

{ q:"The Cardiff Giant was what?",
a:["A carved gypsum hoax","A fossil","A meteorite","A statue of a god"], c:0,
cat:"ANCIENT", tier:"documented" },


/* ================================== MONEY =================================== */

{ q:"The US Federal Reserve was created in which year?",
a:["1901","1913","1933","1944"], c:1,
cat:"MONEY", tier:"documented" },

{ q:"Which island hosted the secret 1910 meeting that shaped the Fed's design?",
a:["Jekyll Island","Ellis Island","Nantucket","Block Island"], c:0,
cat:"MONEY", tier:"documented",
note:"A genuine private meeting, often overstated in retellings." },

{ q:"Fractional reserve banking means banks do what?",
a:["Hold all deposits","Lend out more than they hold in reserve","Insure deposits","Print currency"], c:1,
cat:"MONEY", tier:"documented" },

{ q:"The Bretton Woods system pegged currencies to what?",
a:["Silver","The US dollar, itself pegged to gold","Oil","A basket of goods"], c:1,
cat:"MONEY", tier:"documented" },

{ q:"Which US president ended dollar convertibility to gold in 1971?",
a:["Johnson","Nixon","Ford","Carter"], c:1,
cat:"MONEY", tier:"documented" },

{ q:"A CBDC is what?",
a:["A private crypto token","A central bank digital currency","A bond type","A credit rating"], c:1,
cat:"MONEY", tier:"documented" },

{ q:"The petrodollar concept refers to oil being priced in what?",
a:["Gold","US dollars","Local currencies","Special drawing rights"], c:1,
cat:"MONEY", tier:"documented" },

{ q:"Which three asset managers are most cited in ownership-concentration arguments?",
a:["Goldman, Morgan, Citi","BlackRock, Vanguard, State Street","HSBC, UBS, Barclays","Fidelity, Schwab, TIAA"], c:1,
cat:"MONEY", tier:"documented" },

{ q:"The Panama Papers leak concerned what?",
a:["Election funding","Offshore shell companies","Arms sales","Drug routes"], c:1,
cat:"MONEY", tier:"documented",
note:"11.5 million documents from the firm Mossack Fonseca, 2016." },

{ q:"The Pandora Papers, released in 2021, exposed what?",
a:["Offshore holdings of world leaders","Bank hacks","Tax rates","Crypto theft"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"A shell company is characterised by having what?",
a:["Many employees","No significant operations","Public shares","Foreign debt"], c:1,
cat:"MONEY", tier:"documented" },

{ q:"Which 2008 mechanism transferred private losses to public balance sheets?",
a:["Quantitative easing only","Bank bailouts","Tariffs","Currency pegs"], c:1,
cat:"MONEY", tier:"documented" },

{ q:"Bitcoin's creator is known by what name?",
a:["Nick Szabo","Satoshi Nakamoto","Hal Finney","Adam Back"], c:1,
cat:"MONEY", tier:"documented",
note:"Identity still unconfirmed." },

{ q:"A social credit system, as commonly described, scores what?",
a:["Loan risk only","Behaviour affecting access to services","Tax compliance","Employment history"], c:1,
cat:"MONEY", tier:"disputed" },

{ q:"What does 'too big to fail' describe?",
a:["Firms whose collapse threatens the system","Large factories","State monopolies","Old banks"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"The Glass-Steagall Act separated what?",
a:["Commercial and investment banking","State and federal banks","Insurance and lending","Retail and wholesale"], c:0,
cat:"MONEY", tier:"documented",
note:"Largely repealed in 1999." },

{ q:"A credit default swap is best described as what?",
a:["Insurance on debt default","A stock option","A loan","A bond"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"The LIBOR scandal involved banks doing what?",
a:["Manipulating a benchmark rate","Hiding deposits","Forging bonds","Front-running"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Which bank collapsed in 2008, triggering global panic?",
a:["Lehman Brothers","Barclays","Deutsche Bank","Wells Fargo"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Enron's collapse was enabled by what accounting practice?",
a:["Mark-to-market and off-book entities","Double entry","LIFO","Straight-line depreciation"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Which auditor was destroyed by the Enron scandal?",
a:["Arthur Andersen","KPMG","Deloitte","EY"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"A Ponzi scheme pays returns from what?",
a:["New investor money","Profits","Interest","Dividends"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Bernie Madoff's fraud totalled roughly what?",
a:["65 billion dollars in claimed value","1 billion","500 million","10 trillion"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Quantitative easing involves central banks doing what?",
a:["Buying assets to add reserves","Raising taxes","Printing paper cash","Cutting spending"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Seigniorage is the profit from what?",
a:["Issuing currency","Selling bonds","Taxing trade","Minting medals"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"The gold standard's main constraint was what?",
a:["Money supply tied to reserves","High taxes","Slow trade","Weak banks"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Executive Order 6102 in 1933 required Americans to do what?",
a:["Turn in most gold","Register bank accounts","Buy war bonds","Report income"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Fiat currency derives value from what?",
a:["Government decree and confidence","Gold backing","Land","Silver"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Hyperinflation in Weimar Germany peaked in which year?",
a:["1923","1919","1929","1933"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"The Bank for International Settlements is often called what?",
a:["The central bank for central banks","The world treasury","The IMF's bank","The trade bank"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"The IMF's Special Drawing Rights function as what?",
a:["A reserve asset unit","A currency","A loan","A tax"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Which country's 2013 bail-in seized portions of large deposits?",
a:["Cyprus","Greece","Iceland","Ireland"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Iceland's response to its 2008 crisis was unusual because it did what?",
a:["Prosecuted bankers","Printed money","Joined the euro","Nationalised oil"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Dark pools in finance are what?",
a:["Private trading venues","Illegal accounts","Crypto wallets","Offshore banks"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"High-frequency trading advantages come mostly from what?",
a:["Speed and proximity to exchanges","Better analysis","Insider tips","Lower fees"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Front-running means trading ahead of what?",
a:["A known client order","A news release","An earnings call","A dividend"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"Which 2010 event saw the Dow drop nearly 1000 points in minutes?",
a:["The Flash Crash","Black Monday","The Taper Tantrum","The Repo Crunch"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"A 'bank run' is driven primarily by what?",
a:["Loss of depositor confidence","High interest rates","Regulation","Currency pegs"], c:0,
cat:"MONEY", tier:"documented" },

{ q:"The FDIC insures US deposits up to what standard limit?",
a:["250,000 dollars","100,000 dollars","500,000 dollars","1 million dollars"], c:0,
cat:"MONEY", tier:"documented" },


/* ================================ SOCIETIES ================================= */

{ q:"Skull and Bones is a society at which university?",
a:["Harvard","Yale","Princeton","Columbia"], c:1,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Bavarian Illuminati was founded in which year?",
a:["1717","1776","1799","1848"], c:1,
cat:"SOCIETIES", tier:"documented",
note:"Founded 1776, suppressed by 1785. Modern claims are unsupported." },

{ q:"Who founded the Bavarian Illuminati?",
a:["Adam Weishaupt","Johann Fichte","Christian Rosenkreuz","Franz Mesmer"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"Bohemian Grove is located in which US state?",
a:["Colorado","California","Vermont","Oregon"], c:1,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Bilderberg Meeting is characterised by what?",
a:["Public minutes","Invitation-only, off-record attendance","Elected delegates","Open press access"], c:1,
cat:"SOCIETIES", tier:"documented" },

{ q:"The first Bilderberg Meeting was held in which year?",
a:["1954","1948","1961","1973"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"Freemasonry's most recognised emblem combines which two tools?",
a:["Hammer and anvil","Square and compasses","Plumb and level","Chisel and mallet"], c:1,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Knights Templar were formally dissolved in which century?",
a:["12th","14th","16th","18th"], c:1,
cat:"SOCIETIES", tier:"documented",
note:"Suppressed 1307 onward, dissolved by papal order in 1312." },

{ q:"The Rosicrucian movement began with the circulation of what?",
a:["A coin","Anonymous manifestos","A map","A relic"], c:1,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Hermetic Order of the Golden Dawn was primarily concerned with what?",
a:["Banking","Ceremonial magic","Shipping","Publishing"], c:1,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Council on Foreign Relations publishes which journal?",
a:["Foreign Policy","Foreign Affairs","The Economist","World Report"], c:1,
cat:"SOCIETIES", tier:"documented" },

{ q:"The phrase 'as above, so below' comes from which tradition?",
a:["Norse myth","Hermeticism","Zen","Stoicism"], c:1,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Trilateral Commission was founded by whom in 1973?",
a:["David Rockefeller","Henry Kissinger","Zbigniew Brzezinski","Robert McNamara"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Club of Rome is best known for which 1972 report?",
a:["The Limits to Growth","Silent Spring","Our Common Future","The Population Bomb"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Protocols of the Elders of Zion is definitively what?",
a:["An antisemitic forgery","A real minute book","A translation","A satire"], c:0,
cat:"SOCIETIES", tier:"documented",
note:"Exposed as plagiarised fabrication by The Times in 1921." },

{ q:"Which US fraternal order once claimed millions of members and shaped local politics?",
a:["The Freemasons","The Elks only","The Grange","The Rotary"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Anti-Masonic Party was notable in US history as what?",
a:["The first significant third party","A trade union","A church group","A militia"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"The disappearance of William Morgan in 1826 triggered what?",
a:["A national anti-Masonic movement","A duel law","A trade embargo","A census"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"Opus Dei is a body within which church?",
a:["The Roman Catholic Church","The Anglican Church","The Orthodox Church","The Lutheran Church"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"Which secretive Yale society's tomb sits on High Street?",
a:["Skull and Bones","Wolf's Head","Book and Snake","Scroll and Key"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Rhodes Scholarship was founded with money from which industry?",
a:["Diamond mining","Steel","Railways","Oil"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Fabian Society's emblem historically featured what?",
a:["A wolf in sheep's clothing","A lion","An owl","A serpent"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"The Ordo Templi Orientis is associated with which figure?",
a:["Aleister Crowley","Madame Blavatsky","Gurdjieff","Rudolf Steiner"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"Theosophy was founded by whom?",
a:["Helena Blavatsky","Annie Besant","Alice Bailey","Rudolf Steiner"], c:0,
cat:"SOCIETIES", tier:"documented" },

{ q:"Which organisation's meetings are protected by the Chatham House Rule?",
a:["Chatham House","The UN","NATO","The IMF"], c:0,
cat:"SOCIETIES", tier:"documented",
note:"Statements may be used, but not attributed." },

{ q:"The 'Deep State' as an analytical term originally described which country?",
a:["Turkey","The US","Russia","Egypt"], c:0,
cat:"SOCIETIES", tier:"documented",
note:"From the Turkish 'derin devlet'." },


/* ================================== ALIENS ================================== */

{ q:"The Roswell incident occurred in which year?",
a:["1938","1947","1952","1961"], c:1,
cat:"ALIENS", tier:"documented",
note:"The Air Force later attributed it to Project Mogul balloons." },

{ q:"Project Mogul was designed to detect what?",
a:["Soviet nuclear tests","Weather fronts","Submarines","Radio traffic"], c:0,
cat:"ALIENS", tier:"documented" },

{ q:"Area 51 is officially part of which facility?",
a:["Edwards AFB","Nevada Test and Training Range","White Sands","Wright-Patterson"], c:1,
cat:"ALIENS", tier:"documented" },

{ q:"The CIA formally acknowledged Area 51's existence in which year?",
a:["2013","1997","2005","1989"], c:0,
cat:"ALIENS", tier:"documented",
note:"In declassified documents about the U-2 programme." },

{ q:"Project Blue Book was run by which body?",
a:["CIA","US Air Force","NASA","Navy"], c:1,
cat:"ALIENS", tier:"documented",
note:"1952 to 1969. It examined over 12,000 sightings." },

{ q:"The Majestic 12 documents are generally regarded as what?",
a:["Authenticated","Forgeries or of unproven origin","Classified","Partially released"], c:1,
cat:"ALIENS", tier:"disputed" },

{ q:"What does UAP stand for in current official usage?",
a:["Unified Aerial Protocol","Unidentified Anomalous Phenomena","Unmanned Aircraft Platform","Upper Atmospheric Pressure"], c:1,
cat:"ALIENS", tier:"documented",
note:"Replaced UFO in US government language, broadening the category." },

{ q:"Which US office now handles UAP reporting for the Pentagon?",
a:["AARO","AATIP","DARPA","NRO"], c:0,
cat:"ALIENS", tier:"documented",
note:"The All-domain Anomaly Resolution Office, established 2022." },

{ q:"AARO's 2024 historical report concluded what?",
a:["No evidence of extraterrestrial technology","Confirmed craft recovery","Ongoing cover-up","Inconclusive on all counts"], c:0,
cat:"ALIENS", tier:"documented" },

{ q:"The Black Knight satellite legend claims what is in orbit?",
a:["A Soviet probe","An ancient alien object","A lost NASA module","A debris cloud"], c:1,
cat:"ALIENS", tier:"legend",
note:"Widely traced to a thermal blanket lost during a 1998 spacewalk." },

{ q:"The Face on Mars was photographed in which region?",
a:["Valles Marineris","Cydonia","Olympus Mons","Hellas"], c:1,
cat:"ALIENS", tier:"documented" },

{ q:"Higher-resolution imaging of the Face on Mars revealed what?",
a:["An eroded mesa","A carved surface","A crater","A dust field"], c:0,
cat:"ALIENS", tier:"documented" },

{ q:"Project Blue Beam alleges a plan to fake what?",
a:["A moon landing","A staged alien or religious event","A currency collapse","A pandemic"], c:1,
cat:"ALIENS", tier:"legend" },

{ q:"The Anunnaki appear in the writings of which author, popularised as ancient astronauts?",
a:["Erich von Daniken","Zecharia Sitchin","Graham Hancock","Charles Berlitz"], c:1,
cat:"ALIENS", tier:"legend" },

{ q:"Chariots of the Gods was written by whom?",
a:["Erich von Daniken","Zecharia Sitchin","Immanuel Velikovsky","Charles Fort"], c:0,
cat:"ALIENS", tier:"documented" },

{ q:"Cattle mutilation reports are most often explained by what?",
a:["Aircraft","Predation and decomposition","Poachers","Lightning"], c:1,
cat:"ALIENS", tier:"disputed" },

{ q:"The Men in Black archetype was popularised by which 1950s writer?",
a:["Gray Barker","Frank Scully","Donald Keyhoe","George Adamski"], c:0,
cat:"ALIENS", tier:"documented" },

{ q:"The Betty and Barney Hill case is significant as the first widely reported what?",
a:["Crash retrieval","Alien abduction account","Crop circle","Radar contact"], c:1,
cat:"ALIENS", tier:"documented",
note:"1961. It set the template for nearly all later abduction reports." },

{ q:"The Fermi Paradox asks why we observe no what?",
a:["Dark matter","Evidence of other civilisations","Cosmic background","Antimatter"], c:1,
cat:"ALIENS", tier:"documented" },

{ q:"The Drake Equation attempts to estimate what?",
a:["Communicating civilisations","Star lifespans","Planet mass","Signal strength"], c:0,
cat:"ALIENS", tier:"documented" },

{ q:"The Great Filter hypothesis proposes what?",
a:["A step most civilisations fail to pass","A cosmic barrier","A signal jammer","A time limit"], c:0,
cat:"ALIENS", tier:"disputed" },

{ q:"Crop circles were shown in 1991 to be made by whom?",
a:["Two English hoaxers","Farmers","Wind","Static"], c:0,
cat:"ALIENS", tier:"documented",
note:"Doug Bower and Dave Chorley demonstrated their method." },

{ q:"The Rendlesham Forest incident took place near which country's air bases?",
a:["The United Kingdom","Belgium","Germany","Canada"], c:0,
cat:"ALIENS", tier:"documented",
note:"1980, near two USAF-operated bases in Suffolk." },

{ q:"The Phoenix Lights occurred in which year?",
a:["1997","1988","2003","1975"], c:0,
cat:"ALIENS", tier:"documented",
note:"Part of the event was traced to military flares." },

{ q:"The Belgian UFO wave occurred in which years?",
a:["1989 to 1990","1975 to 1976","1995 to 1996","2005 to 2006"], c:0,
cat:"ALIENS", tier:"documented" },

{ q:"The Tic Tac video was released through which route?",
a:["A 2017 New York Times report","A leak on 4chan","A NASA briefing","A FOIA suit"], c:0,
cat:"ALIENS", tier:"documented" },

{ q:"AATIP was a US programme studying what?",
a:["Advanced aerospace threats","Satellites","Weather balloons","Radar arrays"], c:0,
cat:"ALIENS", tier:"documented" },

{ q:"Which whistleblower testified to Congress in 2023 about alleged retrieval programmes?",
a:["David Grusch","Luis Elizondo","Bob Lazar","Steven Greer"], c:0,
cat:"ALIENS", tier:"disputed",
note:"His claims were second-hand and remain unverified." },

{ q:"Bob Lazar claims to have worked at which site?",
a:["S-4 near Papoose Lake","Dugway","Groom Lake only","Wright-Patterson"], c:0,
cat:"ALIENS", tier:"disputed" },

{ q:"Element 115, cited by Lazar, was later synthesised and named what?",
a:["Moscovium","Nihonium","Tennessine","Oganesson"], c:0,
cat:"ALIENS", tier:"documented",
note:"It is highly unstable and useless as a fuel." },

{ q:"The Kecksburg incident of 1965 involved what?",
a:["An object falling in Pennsylvania","A crash in Texas","A landing in Ohio","A sighting in Maine"], c:0,
cat:"ALIENS", tier:"disputed" },

{ q:"The 'Tabby's Star' dimming was eventually best explained by what?",
a:["Uneven dust","A megastructure","A planet","Instrument error"], c:0,
cat:"ALIENS", tier:"documented" },

{ q:"Fast radio bursts are now known to include sources from what?",
a:["Magnetars","Alien beacons","Solar flares","Radar"], c:0,
cat:"ALIENS", tier:"documented" },

{ q:"The 'Oumuamua debate concerns whether the object was what?",
a:["A natural interstellar body","A comet from Mars","A satellite","A meteor"], c:0,
cat:"ALIENS", tier:"disputed",
note:"Most astronomers favour natural explanations." },


/* =================================== MIND =================================== */

{ q:"Confirmation bias is the tendency to do what?",
a:["Forget details","Favour information that fits existing belief","Trust authority","Copy the majority"], c:1,
cat:"MIND", tier:"documented" },

{ q:"The Milgram experiments studied what?",
a:["Memory","Obedience to authority","Group size","Sleep"], c:1,
cat:"MIND", tier:"documented" },

{ q:"Milgram's stated inspiration was which trial?",
a:["Adolf Eichmann's","Nuremberg's","Scopes'","Dreyfus'"], c:0,
cat:"MIND", tier:"documented" },

{ q:"The Asch experiments demonstrated what?",
a:["Conformity to a group's wrong answer","Learned helplessness","Placebo effects","Selective attention"], c:0,
cat:"MIND", tier:"documented" },

{ q:"The Stanford Prison Experiment has been criticised for what?",
a:["Coached behaviour and weak method","Sample size only","Funding","Duration"], c:0,
cat:"MIND", tier:"disputed" },

{ q:"Apophenia is the perception of what?",
a:["Faces in noise","Meaningful patterns in unrelated data","Missing time","False memory"], c:1,
cat:"MIND", tier:"documented" },

{ q:"Cognitive dissonance describes discomfort from what?",
a:["Loud noise","Holding conflicting beliefs","Sleep loss","Crowds"], c:1,
cat:"MIND", tier:"documented" },

{ q:"Which study of a doomsday group produced the theory of cognitive dissonance?",
a:["When Prophecy Fails","The Authoritarian Personality","Obedience","Thinking Fast and Slow"], c:0,
cat:"MIND", tier:"documented" },

{ q:"Learned helplessness was first demonstrated in studies of what?",
a:["Children","Animals unable to escape aversive stimuli","Prisoners","Students"], c:1,
cat:"MIND", tier:"documented" },

{ q:"The illusory truth effect means repetition does what?",
a:["Reduces recall","Increases perceived truthfulness","Causes fatigue","Improves accuracy"], c:1,
cat:"MIND", tier:"documented",
note:"Repeating a claim makes it feel truer, regardless of accuracy." },

{ q:"Gaslighting originally took its name from what?",
a:["A novel","A play and its film adaptations","A court case","A medical paper"], c:1,
cat:"MIND", tier:"documented" },

{ q:"Parasocial relationships are one-sided bonds with whom?",
a:["Colleagues","Media figures","Neighbours","Family"], c:1,
cat:"MIND", tier:"documented" },

{ q:"A moral panic is characterised by what?",
a:["Slow policy change","Disproportionate public fear of a perceived threat","Media blackout","Economic decline"], c:1,
cat:"MIND", tier:"documented" },

{ q:"The backfire effect describes corrections that sometimes do what?",
a:["Work instantly","Strengthen the original false belief","Cause forgetting","Reduce trust in facts generally"], c:1,
cat:"MIND", tier:"disputed",
note:"Later replications found it far weaker than first reported." },

{ q:"Anchoring bias means judgements are pulled toward what?",
a:["The most recent fact","The first number encountered","The loudest source","The simplest option"], c:1,
cat:"MIND", tier:"documented" },

{ q:"The Barnum effect explains why people accept what?",
a:["Statistics","Vague personality descriptions as personally accurate","Expert advice","Group decisions"], c:1,
cat:"MIND", tier:"documented" },

{ q:"Sleep paralysis is frequently reported alongside what?",
a:["Sleepwalking","A sensed presence in the room","Snoring","Night sweats"], c:1,
cat:"MIND", tier:"documented",
note:"A likely physiological root of many abduction and intruder accounts." },

{ q:"Hypnagogic hallucinations occur at which point?",
a:["Falling asleep","Deep sleep","Waking fully","Mid-afternoon"], c:0,
cat:"MIND", tier:"documented" },

{ q:"False memories were shown to be implantable in which classic study?",
a:["Lost in the Mall","The Marshmallow Test","Little Albert","Bobo Doll"], c:0,
cat:"MIND", tier:"documented",
note:"Elizabeth Loftus's work reshaped eyewitness law." },

{ q:"Source amnesia means forgetting what?",
a:["Where information came from","The information itself","A name","A date"], c:0,
cat:"MIND", tier:"documented" },

{ q:"The 'sleeper effect' in persuasion means what?",
a:["Message impact grows as the source is forgotten","Ads work at night","Repetition fails","Recall is instant"], c:0,
cat:"MIND", tier:"documented" },

{ q:"Confabulation describes what?",
a:["Fabricated memories reported sincerely","Deliberate lying","Silence","Mimicry"], c:0,
cat:"MIND", tier:"documented" },

{ q:"Deindividuation describes loss of what?",
a:["Self-awareness in a group","Memory","Language","Vision"], c:0,
cat:"MIND", tier:"documented" },

{ q:"Groupthink was named by which researcher?",
a:["Irving Janis","Solomon Asch","Kurt Lewin","Leon Festinger"], c:0,
cat:"MIND", tier:"documented" },

{ q:"The bystander effect was popularised after which case?",
a:["The Kitty Genovese killing","The Rodney King case","The Zodiac killings","The Manson trial"], c:0,
cat:"MIND", tier:"disputed",
note:"Later reporting showed the original press account was inaccurate." },

{ q:"The Dunning-Kruger effect concerns what?",
a:["Miscalibrated self-assessment of skill","Group size","Memory decay","Reaction time"], c:0,
cat:"MIND", tier:"documented" },

{ q:"Motivated reasoning means using reasoning to do what?",
a:["Reach a preferred conclusion","Test a hypothesis","Reduce bias","Slow judgement"], c:0,
cat:"MIND", tier:"documented" },

{ q:"The 'illusion of explanatory depth' means people overestimate what?",
a:["How well they understand systems","Their memory","Their speed","Their honesty"], c:0,
cat:"MIND", tier:"documented" },

{ q:"Conspiracy belief correlates most consistently with which trait in research?",
a:["Need for uniqueness and pattern perception","Age","Income","Handedness"], c:0,
cat:"MIND", tier:"documented" },

{ q:"Which term describes belief in one conspiracy predicting belief in others?",
a:["Monological belief systems","Serial reasoning","Nested logic","Chain bias"], c:0,
cat:"MIND", tier:"documented" },

{ q:"The 'proportionality bias' means people assume big events have what?",
a:["Big causes","No causes","Random causes","Slow causes"], c:0,
cat:"MIND", tier:"documented" },

{ q:"Hyperactive agency detection means over-attributing what?",
a:["Intent behind events","Speed","Distance","Colour"], c:0,
cat:"MIND", tier:"documented" },

{ q:"The Forer effect is another name for which bias?",
a:["The Barnum effect","Anchoring","Framing","Priming"], c:0,
cat:"MIND", tier:"documented" },

{ q:"Priming in psychology has faced what recent challenge?",
a:["Replication failures","Legal bans","Funding growth","New consensus"], c:0,
cat:"MIND", tier:"disputed" },

{ q:"The placebo effect is strongest for which outcomes?",
a:["Subjective symptoms like pain","Tumour size","Blood counts","Bone density"], c:0,
cat:"MIND", tier:"documented" },

{ q:"The nocebo effect describes harm from what?",
a:["Negative expectation","A real drug","Overdose","Allergy"], c:0,
cat:"MIND", tier:"documented" },

{ q:"Mass psychogenic illness spreads primarily through what?",
a:["Social observation and anxiety","Airborne agents","Water","Insects"], c:0,
cat:"MIND", tier:"documented" },

{ q:"The 1962 Tanganyika laughter epidemic is an example of what?",
a:["Mass psychogenic illness","A virus","A toxin","A hoax"], c:0,
cat:"MIND", tier:"documented" },

{ q:"Which 1789 case gave 'mesmerism' its name and an early controlled test?",
a:["Franz Mesmer's animal magnetism","Charcot's clinic","Freud's studies","Braid's hypnosis"], c:0,
cat:"MIND", tier:"documented",
note:"A French royal commission found the effects came from imagination." }

];

var QUESTION_COUNT=QUESTIONS.length;
