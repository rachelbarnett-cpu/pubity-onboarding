import { useState, useEffect } from "react";

const YELLOW = "#FFD700";
const BLACK = "#0A0A0A";
const DARK = "#141414";
const CARD = "#1A1A1A";
const BORDER = "#2A2A2A";
const MUTED = "#888";
const GREEN = "#28A745";
const ORANGE = "#FF9900";
const BLUE = "#4A9EFF";

// ─── DOCUMENT LINKS ────────────────────────────────────────────────────────
const LINKS = {
  welcomeDeck: "https://docs.google.com/presentation/d/1qcRCoZE40imsAmwqHBCblrirQAJkFc1RdOPZeQQg-R4/edit",
  credsDeck: "https://we.tl/t-UIPH36exQU",
  credsScript: "https://65twenty-my.sharepoint.com/:w:/r/personal/seb_pubitygroup_com/Documents/Creds%20Deck%20Script.docx",
  springboard: "https://forms.monday.com/forms/1bf181f23ce93bc765a452aa0a944e6f?r=euc1",
  businessPlan: "https://pubitypgl.sharepoint.com/sites/Pubity/Shared%20Documents/Brand%20Partnerships%20Hub/Sales%20Collateral/Revenue%20Forecasts/Pubity%20Group/Sales%20Annual%20Business%20Plans/2025/Commercial%20Team%20Business%20Plan%202026.xlsx",
  qualifyingProspects: "https://65twenty-my.sharepoint.com/:x:/r/personal/seb_pubitygroup_com/Documents/Brand%20Partnerships%20-%20Qualifying%20Prospects.xlsx",
  hubspotGuide: "https://pubitygroup.slack.com/docs/T020METK554/F0AJA00CGG3",
  mondayTracker: "https://pubitygroup.monday.com/boards/1214765329/views/32786570",
  mondayCalendar: "https://pubitygroup.monday.com/boards/1214765329/views/4795974",
  sharepoint: "https://pubitypgl.sharepoint.com/:f:/r/sites/Pubity/Shared%20Documents/Brand%20Partnerships%20Hub",
  zoominfoGuide: "https://pubitygroup.slack.com/archives/C06L3JTRHKQ/p1772622989550079",
  demographicsPro: "https://www.demographicspro.com/dashboard",
  demographicsAI: "https://pubitygroup.slack.com/docs/T020METK554/F0ALC8PV3PW",
  demographicsGPT: "https://chatgpt.com/g/g-p-699467110d0081919887a5e27a3d8745",
  paidMedia101: "https://docs.google.com/presentation/d/1W3l_a1w76Go7RRgIX-SsOnXegtFUSD3Q3eb3sDC6x34/edit",
  productsHub: "https://65twenty.sharepoint.com/:x:/r/sites/Pubity/_layouts/15/Doc.aspx?sourcedoc=%7BB42C25D4-1ED0-462E-A958-58A8B1C031C6%7D&file=Commercial%20Products%20Hub.xlsx",
  onboardingHub: "https://pubitygroup.slack.com/docs/T020METK554/F0ANPJ1FC92",
  commercialPolicies: "https://pubitypgl.sharepoint.com/sites/Pubity/Shared%20Documents/Brand%20Partnerships%20Hub/Commercial%20Policies",
  procedureOverview: "https://pubitygroup.slack.com/docs/T020METK554/F0AJ38GKYR1",
  caseStudyFinder: "https://pubitygroup.slack.com/docs/T020METK554/F0AJ12LJ96K",
  caseStudyDatabase: "https://docs.google.com/spreadsheets/d/1_uR6wYU6yjVoA7fDZ8I9csB7jIJoBj0a-lf4WbbRULM/edit?gid=1509807453#gid=1509807453",
  caseStudyRequestForm: "https://docs.google.com/forms/d/1Spq1qaI3uzsV08xAl12qldJuefgcNJS9XUzLHidScHQ/edit",
  caseStudyGPT: "https://chatgpt.com/g/g-698d940834008191af9de43369ea70a0-case-study-builder",
  ampRateCard: "https://docs.google.com/presentation/d/1_5VcfUS_SyyprHFAYX4pcoYI2h2ElvP2IQJfayQzNJo/edit",
  responseTemplate: "https://docs.google.com/presentation/d/14qBlqEXo7PZWCjmTvEAVxdpSWCqg6-uQUXHDVgpgGfE/edit",
  commitmentTemplate: "https://pubitygroup.slack.com/docs/T020METK554/F08QERKQFAQ",
  wowCanvas: "https://pubitygroup.slack.com/docs/T020METK554/F08R032UCHW",
  costTracker: "https://65twenty.sharepoint.com/:x:/r/sites/Pubity/_layouts/15/Doc.aspx?action=default&file=2024%20Campaign%20Costs%20Tracker.xlsx",
  deliverablesTracker: "https://docs.google.com/spreadsheets/d/1Cf58fizq_b1sLOkr1ngFutoPNggpr11ZpUGCQxy47yk/edit#gid=0",
  hubspotApp: "https://app.hubspot.com",
  zoominfoApp: "https://app.zoominfo.com",
  mediaRadarApp: "https://app.mediaradar.com",
  mondayApp: "https://pubitygroup.monday.com",
  hubspotAcademy: "https://academy.hubspot.com/courses/hubspot-sales-software",
  zoominfoAcademy: "https://university.zoominfo.com",
};

// ─── CASE STUDIES ────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  // ── US ──────────────────────────────────────────────────────────────────
  {
    region:"US", client:"Epic Games / Fortnite", campaign:"The Simpsons Collab", sector:"Gaming",
    date:"Oct–Nov 2025", budget:"$1.2M", type:"Bespoke",
    brief:"Make the Fortnite x Simpsons collab land with Gen Alpha — so it doesn't feel like parent nostalgia.",
    solution:"Disruptive viral stunts + 'brainrot' always-on content across Pubity IG and TikTok. Included a week-long logo takeover across Pubity IG + TikTok, plus meme-led content to keep it top of mind.",
    results:[{label:"Impressions",val:"2.1B organic"},{label:"Above Target",val:"+38M"},{label:"Logo Takeover",val:"2B organic views"},{label:"Earned Media",val:"Press coverage + UGC across social"}],
    pitch:"https://docs.google.com/presentation/d/1AgGPkpPWfSRnT9iuJ9UmjzDh8pxwx2xRkyVlx2UbBMU/edit",
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    ig:"https://www.instagram.com/p/DRPL04zDY2W/?img_index=1",
    press:"https://www.financialexpress.com/trending/homer-clones-invade-california-donut-shop-fortnite-x-simpsons-comes-to-life-in-top-tier-marketing/4049413/lite/",
    why:"Our biggest ever bespoke campaign. Shows what we do when a client trusts us fully. Lead with this for any gaming or entertainment brief.",
    color:"#FF6B35",
  },
  {
    region:"US", client:"Epic Games / Fortnite", campaign:"OG Season 1 — You Decide", sector:"Gaming",
    date:"Dec 2024–Jan 2025", budget:"$800K", type:"Bespoke",
    brief:"Spark huge hype for the OG Map's return with 18–34s — big impact at launch, then sustain momentum.",
    solution:"Led with nostalgia using our best-performing formats. Ran a 'You Decide' voting competition where users voted for the greatest landing spot on the OG Map.",
    results:[{label:"Impressions",val:"70.2M organic"},{label:"ER (You Decide)",val:"12% — 12x industry avg"},{label:"Votes",val:"3.3M competition votes"},{label:"Campaign ER",val:"6% average"}],
    pitch:"https://pubitygroup.slack.com/archives/C0AFYPZQGTV",
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    ig:"https://www.instagram.com/p/DDu-ucYC2uy/?igsh=QkJLX1dYTjV1Ng%3D%3D",
    why:"The 12% ER stat from You Decide is the single most impressive engagement number we have. Use it whenever a client asks 'what's your best ever ER?'",
    color:"#9B59B6",
  },
  {
    region:"US", client:"Epic Games / Fortnite", campaign:"OG Season 2 — Tilted Towers", sector:"Gaming",
    date:"Jan–Feb 2025", budget:"$280K", type:"Bespoke",
    brief:"Drive hype for the OG S2 map's return — especially Tilted Towers — peaking in the first week.",
    solution:"Two-phase rollout: launch-day impact with love/fear nostalgia content, then sustained editorial using Tilted Towers as Fortnite's most iconic showdown spot.",
    results:[{label:"Impressions",val:"24.4M organic"},{label:"Above Target",val:"+9M impressions"},{label:"ER",val:"2.8% — 5.6x industry avg"}],
    pitch:"https://pubitygroup.slack.com/archives/C0AFYPZQGTV",
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    ig:"https://www.instagram.com/p/DFgRfgHNZm1/?igsh=MWdkdmRkcmUzdHF5cg%3D%3D&img_index=1",
    why:"Shows how we sustain momentum after a launch spike — relevant for any brand running a multi-phase campaign.",
    color:"#9B59B6",
  },
  {
    region:"US", client:"Epic Games / Fortnite", campaign:"iOS Return", sector:"Gaming",
    date:"May 2025", budget:"$400K", type:"Integrated Editorial",
    brief:"Build hype for the long-awaited return of Fortnite on iOS in the US. Show youth they can play anywhere.",
    solution:"Relatable mobile-gaming moments to drive instant awareness, then insight-led content and custom UGC proving Fortnite fits into everyday life.",
    results:[{label:"Impressions",val:"32.2M organic"},{label:"Above Target",val:"+12M impressions"}],
    pitch:"https://pubitygroup.slack.com/archives/C0AFYPZQGTV",
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    ig:"https://www.instagram.com/p/DJ5ZF9bJadv/",
    why:"Strong example of how editorial-led content outperforms ad-style content. Great for tech clients.",
    color:"#9B59B6",
  },
  {
    region:"US", client:"Subway", campaign:"Sub Club", sector:"QSR",
    date:"2025", budget:"Undisclosed", type:"Integrated Editorial",
    brief:"Drive brand awareness and purchase intent for Subway's Sub Club loyalty programme.",
    solution:"Editorial-led content campaign across Pubity pages. Performance dipped when client insisted on heavy branded assets against our recommendation — shows the value of trusting our format.",
    results:[{label:"Purchase Intent",val:"+27 percentage point uplift (primary KPI)"},{label:"Impressions",val:"Significant overdelivery"},{label:"Learning",val:"Heavy client branding reduced ER — native format always wins"}],
    pitch:"https://pubitygroup.slack.com/archives/C09MNC94UG6",
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    why:"Subway is on Seb's strategic client list. Use this case study for any QSR or F&B brand — the 27-point purchase intent uplift is extraordinary. Also a lesson: don't let clients over-brand the content.",
    color:"#27AE60",
  },
  // ── UK — FilmSeal ────────────────────────────────────────────────────────
  {
    region:"UK", client:"FilmSeal x Lionsgate", campaign:"Weapons", sector:"Entertainment",
    date:"2025", budget:"Undisclosed", type:"Amplification",
    brief:"Drive views and awareness for Weapons on FilmSeal's film-first audience.",
    solution:"Filmseal editorial post leveraging the channel's movie-buff audience with bold headline-led content.",
    results:[{label:"Views",val:"705,522"},{label:"Reach",val:"379,744"},{label:"KPI",val:"300,000"},{label:"% to KPI",val:"235%"}],
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    ig:"https://www.instagram.com/p/DND0mMMof9f",
    why:"Best-ever FilmSeal campaign by % to KPI. Lead with this for any UK entertainment or film client.",
    color:"#E74C3C",
  },
  {
    region:"UK", client:"FilmSeal x Paramount UK", campaign:"Running Man", sector:"Entertainment",
    date:"2025", budget:"Undisclosed", type:"Amplification",
    brief:"Drive awareness and views for The Running Man on FilmSeal.",
    solution:"Pubity 'Study Shows' poll format (audience poll + results carousel) — one of our highest-performing editorial formats, repurposed as a case study example for Universal's Disclosure Day brief.",
    results:[{label:"Views",val:"346,377"},{label:"Reach",val:"143,849"},{label:"KPI",val:"150,000"},{label:"% to KPI",val:"231%"}],
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    ig:"https://www.instagram.com/p/DQxQNc2Deqx/?hl=en",
    why:"Running Man is referenced internally as a format example for entertainment pitches. Know the IG link and the stats.",
    color:"#E74C3C",
  },
  {
    region:"UK", client:"FilmSeal", campaign:"28 Years Later", sector:"Entertainment",
    date:"2025", budget:"Undisclosed", type:"Amplification",
    brief:"Drive awareness and pre-release buzz for 28 Years Later on FilmSeal.",
    solution:"FilmSeal editorial post in native film-news format targeting horror and sequel audiences.",
    results:[{label:"Views",val:"1,460,000"},{label:"Standout",val:"Largest view count of any FilmSeal campaign"}],
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    why:"Best FilmSeal campaign by raw view count — use this when a client asks about scale on niche pages.",
    color:"#E74C3C",
  },
  {
    region:"UK", client:"FilmSeal", campaign:"Bugonia", sector:"Entertainment",
    date:"2025", budget:"Undisclosed", type:"Amplification",
    brief:"Drive awareness for Bugonia on FilmSeal's movie-enthusiast audience.",
    solution:"FilmSeal editorial content in headline-led native format.",
    results:[{label:"Views",val:"251,000"}],
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    why:"Shows FilmSeal's consistent delivery across different title types and genres.",
    color:"#E74C3C",
  },
  {
    region:"UK", client:"FilmSeal", campaign:"Naked Gun", sector:"Entertainment",
    date:"2025", budget:"Undisclosed", type:"Amplification",
    brief:"Drive awareness for Naked Gun reboot on FilmSeal.",
    solution:"FilmSeal editorial post targeting comedy film fans.",
    results:[{label:"Views",val:"171,000"}],
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    why:"Good proof point that FilmSeal delivers across comedy and drama, not just action/horror.",
    color:"#E74C3C",
  },
  // ── UK — Other ──────────────────────────────────────────────────────────
  {
    region:"UK", client:"Warner Bros UK", campaign:"Wuthering Heights", sector:"Entertainment",
    date:"Feb 2025", budget:"Undisclosed", type:"Bespoke / Collab",
    brief:"Drive awareness for Wuthering Heights using our lifestyle and female-skewing pages.",
    solution:"Tri-brand collab post across Girlyzar x Old Friend Club x @warnerbrosuk — a paid collab post reaching female audiences through culturally relevant editorial.",
    results:[{label:"Format",val:"Girlyzar x OFC x WB Collab"},{label:"Sentiment",val:"Minor feedback, broadly positive"},{label:"Stand-out",val:"20k+ likes in first few hours"}],
    monday:"https://pubitygroup.monday.com/boards/5088638067/pulses/2555080803",
    slack:"https://pubitygroup.slack.com/archives/C09HB0KBS00",
    why:"Our first major female-audience collab post with WB UK. Strong proof point for entertainment brands targeting women — Girlyzar + OFC is an underused combo.",
    color:"#17A2B8",
  },
  {
    region:"UK", client:"Last Minute.com", campaign:"Multi-Campaign", sector:"Travel",
    date:"2024–2025", budget:"Undisclosed", type:"Amplification",
    brief:"Drive awareness and clicks for Last Minute travel deals across multiple seasonal campaigns.",
    solution:"Multiple Pubity Grid posts across Q2 and Q4. Repeated partner across several quarters.",
    results:[{label:"Total Views",val:"28.5M (target: 12.5M)"},{label:"Reach",val:"13,875,571"},{label:"Median % to KPI",val:"244%"},{label:"Best campaign",val:"314% to KPI"}],
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    ig:"https://www.instagram.com/p/DChg1rzIOVB/?img_index=1",
    why:"Repeat buyer across multiple quarters — shows how well we retain travel clients. The 314% stat is remarkable. Strong case study for any travel, lifestyle, or eCommerce brief.",
    color:"#17A2B8",
  },
  {
    region:"UK", client:"Warner Bros UK", campaign:"The Mummy (WB)", sector:"Entertainment",
    date:"Mar 2025", budget:"£90,000", type:"Amplification",
    brief:"Drive pre-release awareness for The Mummy reboot with UK entertainment fans.",
    solution:"UK Amplification campaign across Pubity UK pages targeting entertainment and film audiences.",
    results:[{label:"Budget",val:"£90,000"},{label:"Status",val:"Closed Won — Mar 2025"}],
    monday:"https://pubitygroup.monday.com/boards/1214765329/views/32786570",
    slack:"https://pubitygroup.slack.com/archives/C0AD95UGRR6",
    why:"Most recent UK deal (Alex S). Shows WB UK is an active repeat buyer. Good proof point for any UK entertainment pitch.",
    color:"#17A2B8",
  },
];

// ─── CHECKS ─────────────────────────────────────────────────────────────────
const ALL_CHECKS = {
  day1: ["Read the Welcome Deck","Get Slack access & join all channels","Book intro meetings (Rachel, Alex S, Seb)","Sort laptop setup via #it-help"],
  products: ["Can describe all 3 products in one sentence each","Can name all 15 pages with follower counts","Know UK minimum budget for each product","Completed HubSpot training with Rachel","Completed Monday.com training with Rachel"],
  casestudies: ["Know 5+ case studies from memory","Know answer to 'why Pubity over an influencer?'","Case Study Finder bookmarked","Know which 2 studies to lead with for entertainment clients"],
  sales: ["Can explain full deal lifecycle without notes","Shadowed Alex S on at least one client call","Attended daily stand-up every day this week","Submitted at least one Springboard brief","60-second opener practised out loud 3+ times","Know responses to all 5 objections"],
  tools: ["HubSpot access confirmed","Monday.com — Deliverables Tracker & Content Calendar","SharePoint Commercial Hub access","ZoomInfo connected to HubSpot","Media Radar access","Demographics Pro login obtained","Claude (AI) set up via Hugo","Outlook Calendar connected to Slack","Springboard Form bookmarked"],
  compliance: ["IO without NCF rule understood","Media plan screenshot responsibility understood","24-hour check-in process understood","Restricted categories list memorised","Slack channel naming convention memorised","Monday.com updated before weekly meeting"],
  reading: ["Welcome Deck read","Creds Deck Script read","Paid Media 101 Deck read","Commercial Products Hub read","New Seller Onboarding Hub (Process Refresh) read","Commercial Policies folder reviewed","Procedure Overview for Sales read","Commercial Team Business Plan 2026 reviewed","Amplification Rate Card reviewed"],
  knowledge: ["Full knowledge check completed","Ready for first solo client meeting"],
};
const TOTAL = Object.values(ALL_CHECKS).flat().length;

// ─── SALES PROCESS ──────────────────────────────────────────────────────────
const SALES_STEPS = [
  {
    n:"01",label:"Prospecting",owner:"Seller",color:YELLOW,
    time:"Ongoing — minimum 6 meetings booked per week",
    summary:"Find the right people at the right brands and get meetings in the diary.",
    detail:[
      {heading:"Where to find contacts",body:"Use ZoomInfo and Media Radar as your two primary research tools. ZoomInfo gives you contact details and org charts. Media Radar shows you which brands are actively spending on media and what channels they're using — this is gold for timing your outreach."},
      {heading:"Who to target",body:"Your UK verticals are Entertainment, Alcohol, F&B, Gaming, QSR, Travel, eCommerce and Streaming. Within those, target VP, Director, or Head of level on the brand side. Don't go straight to C-Suite at large brands — they're gatekept and rarely respond to cold outreach. Agency contacts at Planning, Account Director, or Strategy level often move faster."},
      {heading:"Your hit list",body:"The Commercial Team Business Plan is your primary hit list — it has targets, contact databases, and sector splits by seller. The Brand Partnerships Qualifying Prospects sheet is where you score and prioritise — use it to decide who to go after first and how hot each opportunity is."},
      {heading:"Your weekly target",body:"Six client-facing meetings per week is the target from Week 4 onwards. In your first two weeks, aim for four. Track everything in HubSpot from the moment a conversation becomes real."},
      {heading:"Manager tip",body:"The sellers who fill their calendar fastest batch their outreach — set aside two hours every Monday and Wednesday morning for prospecting only. Always personalise: if you can reference something they've recently launched or a campaign you spotted on Media Radar, your reply rate will be significantly higher."},
    ],
    links:[{label:"Commercial Team Business Plan 2026",url:LINKS.businessPlan},{label:"Brand Partnerships Qualifying Prospects",url:LINKS.qualifyingProspects},{label:"Myles' ZoomInfo Guide",url:LINKS.zoominfoGuide}],
    mistake:"Don't log prospects in your head — the moment a conversation becomes a real opportunity, it goes in HubSpot. If it's not in HubSpot, Seb doesn't know it exists.",
  },
  {
    n:"02",label:"First Meeting — Creds",owner:"Seller",color:YELLOW,
    time:"60–90 minute meeting, usually week 2–4 of contact",
    summary:"Present credentials, ask discovery questions, leave with a clear next step.",
    detail:[
      {heading:"What this meeting is for",body:"The creds meeting has one job: establish who we are, build credibility, and surface what the client actually needs. It is not a sales pitch. You're there to understand their world so that when you come back with a proposal, it answers a real problem."},
      {heading:"The first 60 seconds",body:"Name who we are. Give the reach stat — 175M+ followers, 1.5B+ monthly reach. State the engagement point — our campaigns hit 3–12% ER while the industry average sits under 1%. Name a relevant brand you've worked with in their sector. Your killer opener: 'We're not an ad platform — we're the internet's most-followed social publisher, and brands come to us when they want to be part of culture, not just sit next to it.'"},
      {heading:"The right meeting ratio",body:"You should be doing 30% of the talking and 70% of the listening. Use the deck as a guide, not a script. Resist the urge to talk through every slide in order."},
      {heading:"What a good meeting looks like",body:"You ask every discovery question. You understand their objective. You know their budget range. You leave with a clear next step: a brief, a follow-up call, or a commitment to share case studies. If you leave without knowing what they need, you haven't done your job."},
      {heading:"Manager tip",body:"Prep for every first meeting by reading the brand's recent social presence and any Media Radar data. Clients notice when you know their world — and they notice when you don't."},
    ],
    links:[{label:"Creds Deck",url:LINKS.credsDeck},{label:"Creds Deck Script",url:LINKS.credsScript},{label:"Demographics Pro (audience data)",url:LINKS.demographicsPro}],
    mistake:"Don't promise anything in the first meeting you can't deliver. You haven't seen the brief yet. Stay curious, not committal.",
  },
  {
    n:"03",label:"Discovery",owner:"Seller",color:YELLOW,
    time:"During the creds meeting — before or after the deck",
    summary:"The seven questions you must ask every client before writing a single word of a proposal.",
    detail:[
      {heading:"Why discovery matters",body:"Your Springboard brief will only be as strong as the intel you gathered in the meeting. Weak discovery = generic proposal = lost deal. Strong discovery = tailored solution = higher conversion."},
      {heading:"Question 1: Objective",body:"What are you trying to achieve — awareness, consideration, or purchase intent? This determines which product you pitch and what KPIs you commit to. Don't assume. Ask."},
      {heading:"Question 2: Audience",body:"Who is your target audience — age, location, interests? This tells you which of our 15 pages to feature. Demographics Pro can validate this with real data."},
      {heading:"Question 3: Current spend",body:"What platforms are you currently spending on and what's working? This tells you where we sit relative to their existing strategy."},
      {heading:"Question 4: Previous experience",body:"Have you worked with social publishers before? If yes, what worked and what didn't? Position us as the opposite of any bad experience."},
      {heading:"Question 5: Success definition",body:"What does success look like for you? Impressions? ER? Knowing their definition of success means your KPI commitments will actually land."},
      {heading:"Question 6: Key dates",body:"What are your key dates this year? Product launches, seasonal peaks, tentpole events — these drive campaign timing and urgency."},
      {heading:"Question 7: Budget",body:"What's your rough budget range? If they say a number below our minimums, explain the minimums clearly and ask about H2 budget or a different entry point."},
      {heading:"Manager tip",body:"If you fill in the answers to these seven questions mentally before you submit the Springboard form, your brief will be dramatically stronger and you'll spend less time going back and forth with Josiah."},
    ],
    links:[{label:"Demographics Pro",url:LINKS.demographicsPro},{label:"Demographics Pro AI Bot",url:LINKS.demographicsAI},{label:"Case Study Finder",url:LINKS.caseStudyFinder}],
    mistake:"Never skip the budget question because it feels awkward. Frame it as: 'Just so we can tailor the most relevant response, do you have a rough ballpark in mind?'",
  },
  {
    n:"04",label:"Brief & Springboard",owner:"Seller → Solutions / Strategy",color:ORANGE,
    time:"Submit within 24 hours of receiving a brief",
    summary:"Log the brief via the Springboard form. This triggers the creative team and starts the clock.",
    detail:[
      {heading:"What the Springboard is",body:"The Campaign Briefing Springboard is the Monday.com form that officially kicks off the creative response process. Submitting it puts your deal on the board for the daily stand-up and assigns it to the correct team. Do not brief the creative team verbally or by Slack message — always use the form."},
      {heading:"Who picks it up",body:"For deals under £250k, the Solutions team (Josiah Campbell) leads. For deals over £250k, the Strategy team (Karen Lew) leads."},
      {heading:"What the Springboard needs",body:"Brand name and campaign name. The challenge the client is trying to solve. Target audience. Deliverables if already agreed. Primary KPI. Deal size. Campaign dates. Any creative do's and don'ts. The more detail you include, the better the creative response."},
      {heading:"Restricted categories — check before submitting",body:"Alcohol, crypto, health/medical, betting, beauty surgery, CBD, supplements, and energy drinks all require Alex Giacon sign-off. If you're unsure, ask before submitting — not after."},
      {heading:"Manager tip",body:"The Springboard is not just admin — it's your opportunity to give the creative team everything they need to build something excellent. Sellers who write vague briefs get vague proposals."},
    ],
    links:[{label:"Campaign Briefing Springboard Form",url:LINKS.springboard},{label:"New Seller Onboarding Hub",url:LINKS.onboardingHub},{label:"Commercial Policies",url:LINKS.commercialPolicies}],
    mistake:"Never promise a brief turnaround to the client before you've spoken to the creative team about capacity. Check at stand-up first, then give the client a deadline.",
  },
  {
    n:"05",label:"Proposal & Media Plan",owner:"Creative Team + Will B",color:ORANGE,
    time:"Typically 3–5 business days from brief",
    summary:"The creative team builds the response. Your job is to review, check, and approve before it goes to the client.",
    detail:[
      {heading:"What you're responsible for",body:"The creative team owns the content of the proposal. Will Bartholomew owns the media plan. But you are responsible for overall quality and client-appropriateness. You know the client better than anyone — review the proposal through their eyes."},
      {heading:"The 24-hour check-in call",body:"Book it the same day you receive the brief deadline. Put it in your calendar for the day before the proposal is due. This is your chance to flag anything that doesn't land: wrong tone, missing a use case, pricing that doesn't match what the client mentioned, creative direction they'll hate."},
      {heading:"What to review",body:"Does the proposal answer the actual brief? Does the pricing make sense? Are the case studies sector-relevant? Is the creative direction client-appropriate? Does the media plan reflect the right pages for their audience?"},
      {heading:"Posting to #media-plan-approvals",body:"Once the media plan is finalised, YOU must post the screenshot to #media-plan-approvals. This is your responsibility as the seller — not Will's, even if he built the plan. Seb checks this channel. Don't skip it."},
      {heading:"Manager tip",body:"Sellers who produce the best proposals stay close to the creative team during the build — not just at the 24-hour check-in. A quick ten-minute call with Josiah early in the process will make the proposal significantly better."},
    ],
    links:[{label:"2025 Response Template",url:LINKS.responseTemplate},{label:"Amplification Rate Card",url:LINKS.ampRateCard},{label:"SharePoint — Commercial Hub",url:LINKS.sharepoint}],
    mistake:"Do not let the 24-hour check-in slip because you're busy. Block it in your calendar the day you get the deadline, not the day before the deadline.",
  },
  {
    n:"06",label:"Verbal Approval",owner:"Seller",color:"#FF6600",
    time:"Immediate — within the same business day",
    summary:"Client says yes. Everything that happens in the next few hours determines whether the deal lands cleanly.",
    detail:[
      {heading:"Step one: Open the Slack channel",body:"The moment a client gives a verbal yes — open the campaign Slack channel. Use the exact naming convention: DealNumber_Brand-Name_Project-Location_Year. If you don't have a deal number yet, use XX as a placeholder."},
      {heading:"Who to invite",body:"Invite Rachel Barnett immediately — she goes into every proposal channel without exception. Invite the relevant CS contact (Harriet or Rhea). Invite Josiah (creative). Invite Will (media). For deals over £250k, invite Alex Giacon."},
      {heading:"Book the internal kickoff",body:"You arrange the internal kickoff call — you own the calendar invite. CS leads the external kickoff with the client. The internal call should happen before the external one."},
      {heading:"Send the IO and NCF together",body:"For any new billing entity, the Insertion Order and New Customer Form always go out together — never one without the other. Use the UK NCF for UK clients and the US NCF for US clients. Seb signs all contracts."},
      {heading:"Manager tip",body:"The moments immediately after a verbal yes are when most admin mistakes happen. Slow down and do it in sequence: channel → invite Rachel → invite team → kickoff → IO + NCF. In that order, every time."},
    ],
    links:[{label:"Commitment Email Template",url:LINKS.commitmentTemplate},{label:"Procedure Overview for Sales",url:LINKS.procedureOverview},{label:"SharePoint — IOs & Contracts",url:LINKS.sharepoint}],
    mistake:"Never send just the IO without the NCF for a new billing entity. Finance will chase you and it delays production. When in doubt, send both.",
  },
  {
    n:"07",label:"Live & Delivery",owner:"CS owns delivery — Seller supports",color:"#E05C00",
    time:"Duration of the campaign — usually 4–8 weeks",
    summary:"CS owns delivery. You stay close to the client, keep HubSpot clean, and look for upsell opportunities.",
    detail:[
      {heading:"Your role during delivery",body:"CS owns the delivery of the campaign. Harriet and her team manage the relationship with the studio, the content calendar, and client feedback rounds. Your role is to manage the client relationship and be the first to know if something is going wrong."},
      {heading:"HubSpot hygiene",body:"During a live campaign your HubSpot record must be clean: correct deal stage, service start and end dates, budget, and contact associated correctly. Seb runs the business from CRM data. If your deal isn't updated, it doesn't exist."},
      {heading:"Client management",body:"Check in with the client at the midpoint of the campaign — not to report data (CS do that), but to maintain the relationship. This is where the next brief comes from."},
      {heading:"Upsell opportunities",body:"A live campaign is the best time to talk about what comes next. The client is engaged, results are coming in, and you have real data to reference. Ask about upcoming campaign windows."},
      {heading:"Manager tip",body:"The sellers who build the best long-term books of business treat the delivery period as the start of the next deal, not the end of this one. Stay visible and proactive throughout."},
    ],
    links:[{label:"HubSpot Guide Canvas",url:LINKS.hubspotGuide},{label:"Monday.com Deliverables Tracker",url:LINKS.mondayTracker},{label:"Monday.com Content Calendar",url:LINKS.mondayCalendar}],
    mistake:"Don't go dark during a live campaign. Even a quick 'how's everything looking from your side?' keeps the relationship warm and surfaces problems before they become crises.",
  },
  {
    n:"08",label:"Wrap & Renewal",owner:"CS (wrap) + Seller (renewal)",color:GREEN,
    time:"Within 2 weeks of final deliverable going live",
    summary:"CS produces the wrap report. You attend. Then immediately start the renewal conversation.",
    detail:[
      {heading:"The wrap report (PCA)",body:"CS produces the Post-Campaign Analysis. The format depends on deal size: under £100k = one pager; £101–125k = mini wrap; £125k+ = standard wrap report. Large deals may include a Brand Lift Study via This That."},
      {heading:"Your role in the PCA",body:"Attend the PCA presentation where relevant. Your job in the room is not to present the data — Harriet does that. Your job is to manage the client's emotional response and set up the renewal conversation naturally."},
      {heading:"The renewal conversation",body:"The best time to start the renewal conversation is during or immediately after the PCA. Ask: 'Given what we've seen here, what's coming up in your calendar for the next two quarters?' That question opens the door without being pushy."},
      {heading:"Manager tip",body:"The sellers who hit their annual targets are the ones who renew existing clients at a higher average deal value. Protect your existing relationships as fiercely as you chase new ones."},
    ],
    links:[{label:"Case Study Finder",url:LINKS.caseStudyFinder},{label:"Commercial Products Hub",url:LINKS.productsHub},{label:"Commitment Email Template",url:LINKS.commitmentTemplate}],
    mistake:"Don't wait for CS to finish the wrap before starting the renewal conversation. By the time the PCA is produced, the client may have already allocated budget elsewhere.",
  },
];

// ─── CS PROCESS ─────────────────────────────────────────────────────────────
const CS_STEPS = [
  {phase:"POST-VERBAL",label:"Internal Kickoff",who:"Seller arranges · CS leads externally",detail:"Seller books the internal kickoff call and calendar invite. CS team leads the external kickoff with the client once the internal team is fully briefed. The internal call should always precede the external one."},
  {phase:"PRE-LIVE",label:"Campaign Setup",who:"CS Ops (Rhea Cheshire)",detail:"Rhea sets up the Monday.com project. Deliverables are confirmed against the IO. Studio is briefed. Timeline is locked with key milestones. All relevant parties have access to the project board."},
  {phase:"PRE-LIVE",label:"Content Creation",who:"Studio / Ollie Williams",detail:"In-house studio creates original content based on the brief. Client receives one round of feedback per piece of content, with a 48-hour window to respond. If a client rejects creative direction, our T&Cs protect the impression guarantee."},
  {phase:"PRE-LIVE",label:"Content Approval",who:"CS + Client",detail:"Client reviews and approves content. CS manages this process — the seller is a support layer and should not independently chase the client for approval unless CS ask for help. One round. 48 hours. Then it proceeds."},
  {phase:"LIVE",label:"Content Goes Live",who:"CS + Studio",detail:"Posts go live across agreed pages on the scheduled dates. Seller must post the media plan screenshot to #media-plan-approvals if not already done. Monitoring of performance begins immediately on go-live."},
  {phase:"LIVE",label:"Performance Monitoring",who:"CS (Harriet Killen)",detail:"Real-time performance tracked against benchmarks. If impressions are tracking below target, Hugo Walker can pad with paid spend to protect against underdelivery. Harriet flags any delivery risks to the seller immediately."},
  {phase:"POST-LIVE",label:"Wrap Report (PCA)",who:"CS (Harriet Killen)",detail:"CS produces the Post-Campaign Analysis. Under £100k = one pager. £101–125k = mini wrap. £125k+ = standard. Large deals may include a Brand Lift Study via This That. Seller attends the PCA presentation where relevant."},
  {phase:"POST-LIVE",label:"Brand Lift Study",who:"This That (3rd party)",detail:"Large deals only. Measures brand awareness and sentiment shift pre and post campaign. Powerful tool for justifying renewal budgets. Seller to discuss availability with CS for deals over £125k."},
  {phase:"RENEWAL",label:"Renewal Conversation",who:"Seller",detail:"Seller initiates the renewal. Best time: during or immediately after the PCA presentation. Ask: 'What's coming up in your calendar for the next two quarters?' Don't wait for the wrap to be finalised — start the renewal conversation at the midpoint of the campaign."},
];

// ─── ONBOARDING TIMELINE ─────────────────────────────────────────────────────
const ONBOARDING = [
  {date:"Apr 7",label:"Day 1",goal:"Get the Basics",tasks:"Welcome Deck · Slack access · Book 3 intro meetings · IT setup",color:YELLOW,links:[{label:"Welcome Deck",url:LINKS.welcomeDeck}]},
  {date:"Apr 14",label:"Week 1",goal:"Know the Product",tasks:"All 15 pages memorised · 3 products cold · HubSpot + Monday.com training · All tools access",color:YELLOW,links:[{label:"Commercial Products Hub",url:LINKS.productsHub},{label:"Paid Media 101",url:LINKS.paidMedia101},{label:"HubSpot Guide",url:LINKS.hubspotGuide}]},
  {date:"Apr 21",label:"Week 2",goal:"Know the Process",tasks:"Full deal lifecycle · Shadow Alex S · Daily stand-up every day · Process Refresh read",color:ORANGE,links:[{label:"New Seller Onboarding Hub",url:LINKS.onboardingHub},{label:"Commercial Policies",url:LINKS.commercialPolicies},{label:"Procedure Overview for Sales",url:LINKS.procedureOverview}]},
  {date:"May 5",label:"Month 1",goal:"First Meetings",tasks:"6 client meetings · 1+ Springboard submitted · Pipeline in HubSpot · Creds deck without notes",color:"#FF6600",links:[{label:"Creds Deck",url:LINKS.credsDeck},{label:"Creds Deck Script",url:LINKS.credsScript},{label:"Springboard Form",url:LINKS.springboard}]},
  {date:"Jun 1",label:"Month 2",goal:"In the Rhythm",tasks:"Active proposals · Weekly summary rotation · 1+ deal at Evolving Proposal stage",color:"#E05C00",links:[{label:"Business Plan 2026",url:LINKS.businessPlan},{label:"Case Study Finder",url:LINKS.caseStudyFinder}]},
  {date:"Jul 1",label:"Month 3",goal:"Closing",tasks:"Closing independently · HubSpot daily · Media plan screenshots routine · Own client Slacks",color:GREEN,links:[{label:"HubSpot Guide",url:LINKS.hubspotGuide},{label:"Amplification Rate Card",url:LINKS.ampRateCard}]},
];

const PAGES = [
  ["Pubity","70.6M","624M","flagship"],["Memezar","41.8M","673M",""],["Dad Says Jokes","22M","551M",""],
  ["Girlyzar","4M","102M",""],["Moviezar","6.4M","36M",""],["Warm Up","5.3M","36M",""],
  ["Fluffy","4.5M","17M",""],["Football Newz","3M","16M",""],["Old Friend Club","1.7M","16M",""],
  ["Filmseal","1.8M","22M",""],["Backpacking Bananas","2.5M","31M",""],["British Memes","2.9M","15M",""],
  ["Memelord","2.6M","7M",""],["Gamingzar","814K","10M",""],["Acknowledge AI","590K","3M",""],
];

const TEAM = [
  {name:"Seb Rossi",role:"CEO / Founder",go:"Contracts, flights, accommodation, gifting, strategy docs. Concise updates only. Loop in for strategic clients or deals over $250k."},
  {name:"Alex Giacon",role:"Commercial Director (VP)",go:"Complex deal sign-off, escalations above £250k, VP approval on restricted categories."},
  {name:"Alex S (Sijpesteijn)",role:"UK Seller",go:"UK client context, PepsiCo UK, Sky, Google. Your closest sales partner — shadow him first."},
  {name:"Rachel Barnett",role:"Sales Account Manager",go:"HubSpot help, IO + NCF queries, deal admin, Slack setup, SharePoint, finance, gifting, trips. ADD to ALL proposal Slacks."},
  {name:"Josh Kobe Leonardo",role:"Revenue Ops",go:"HubSpot issues, CRM fields, automations, reporting dashboards."},
  {name:"Harriet Killen",role:"CS Lead",go:"Campaign delivery questions, wrap reports, client satisfaction. She owns the full post-sale process."},
  {name:"Rhea Cheshire",role:"CS Ops",go:"Monday.com, project setup, process queries, Springboard follow-up."},
  {name:"Josiah Campbell",role:"Creative Solutions Manager",go:"Creative direction on briefs, brief submissions, daily stand-up — your main contact for deals under £250k."},
  {name:"Karen Lew",role:"Strategy",go:"Deals over £250k, strategic responses, complex integrated briefs."},
  {name:"Ollie Williams",role:"Creative Lead",go:"Creative concepts on bespoke campaigns."},
  {name:"Will Bartholomew",role:"Media Planner",go:"Media plan building, forecast tool. YOU still post the screenshot to #media-plan-approvals."},
  {name:"Myles Chilvers",role:"US Seller (Tech/Gaming)",go:"ZoomInfo best practices, industry intel, Claude AI tips."},
  {name:"Leanne Farleigh",role:"Production Lead",go:"Shoot logistics, production budgets, timelines."},
];

const OBJECTIONS = [
  {q:"We want to control exactly how the post looks",a:"Our approval process gives clients one round of feedback per piece of content, with a 48-hour window to respond. The reason our content consistently hits 3–12% engagement rate is precisely because it feels native to the platform — if it looks like an ad, it performs like an ad. We guide every client on what works and what doesn't, and our track record across Epic Games, Subway, and Wicked speaks for itself. We're not asking you to give up control — we're asking you to trust a process that's proven to work."},
  {q:"We already work with influencers",a:"Influencers give you one person's audience. We give you 175 million followers across 15 pages in a single campaign. We also have the in-house creative studio to produce the content, the reporting infrastructure to back every claim with data, and case studies across every major sector. Critically, we can work alongside your influencer strategy — we're complementary, not competing."},
  {q:"The budget is lower than your minimums",a:"Be honest with them: our minimums exist because below them we genuinely can't deliver the quality or reach that makes the campaign worth doing for either of us. We'd rather be upfront now than have a campaign underdeliver. Ask if there's budget flexibility in Q2 or H2 — often there is. Or suggest Amplification as a lower entry point at £30k minimum. Don't apologise for the minimums. Hold the line professionally."},
  {q:"We need guaranteed impressions",a:"We offer estimated impressions based on real page benchmarks, updated quarterly. We can also pad campaigns with paid spend via Hugo Walker to protect against underdelivery. If a client rejects our creative recommendations, our T&Cs mean the impression guarantee becomes void — because the performance of our content is directly tied to how native it feels. This is in the IO, and it protects both sides."},
  {q:"We've never heard of Pubity",a:"That's entirely expected — we're a B2B business. But your audience knows us very well. Ask them to search @Pubity on Instagram right now. 70.6 million followers. Then show them the Epic Games result: 28 million impressions, 8 million above target, 12% engagement rate against an industry average of under 1%. The question is never whether our audience exists — it does. The question is whether it's the right audience for their campaign."},
];

// ─── TRAINING DATA ────────────────────────────────────────────────────────────
const TOOL_COURSES = [
  {
    id:"zoominfo",
    icon:"🔍",
    title:"ZoomInfo",
    tagline:"Prospecting & contact intelligence",
    color:"#4A9EFF",
    overview:"ZoomInfo is your primary prospecting tool. It gives you contact details, org charts, direct dials, email addresses, and technographic data on thousands of companies. Connected to HubSpot, it means you never have to manually create a contact record again.",
    modules:[
      {title:"Getting Started",content:"Log in at app.zoominfo.com. Your licence should be set up on day one — if not, ask Josh or Rachel. Connect ZoomInfo to HubSpot via the integration settings. This lets you push contacts directly from a ZoomInfo search into HubSpot with one click."},
      {title:"Building a Prospect List",content:"Use the 'Companies' search with filters: Industry (Entertainment, F&B, Gaming, QSR etc.), Employee Count (50–500 for mid-market brands, 500+ for enterprise), Location (United Kingdom, United States), and Revenue if relevant. Save your searches — you can set up alerts so you're notified when new companies match your criteria."},
      {title:"Finding the Right Contacts",content:"Once you've identified a company, click through to their org chart. You're looking for VP Marketing, Head of Social, Director of Brand Partnerships, or Director of Media. Avoid filtering only for C-Suite — they get too much outreach. Mid-senior decision-makers move faster. Use the 'Intent' filter if available — it shows companies actively researching media partnerships."},
      {title:"Pushing to HubSpot",content:"When you find a contact you want to reach out to, click 'Export to HubSpot'. The contact record creates automatically with company, title, email, and direct dial. No manual entry. Check the record has been created correctly in HubSpot, then create a deal from it immediately if it's a serious prospect."},
      {title:"Best Practices from Myles",content:"Search by recent news and funding rounds — companies that have just raised are actively spending. Use the 'Scoops' feature to see intel like new hires, recent campaigns, or tech stack changes. A company hiring a Head of Social is often about to increase media spend. Always verify email addresses before a large outreach push."},
    ],
    tips:["Batch your prospecting: 2 hours every Monday and Wednesday, not in dribs and drabs","Set saved searches for your top 5 target verticals — check weekly for new companies","Use Intent data to prioritise who to contact first","Check Media Radar first — if a brand is actively spending, ZoomInfo contact data is more valuable"],
    links:[{label:"ZoomInfo App",url:LINKS.zoominfoApp},{label:"Myles' ZoomInfo Guide (Slack)",url:LINKS.zoominfoGuide},{label:"ZoomInfo University",url:LINKS.zoominfoAcademy}],
  },
  {
    id:"mediaradar",
    icon:"📡",
    title:"Media Radar",
    tagline:"Competitive intelligence & brand spend tracking",
    color:"#FF6B6B",
    overview:"Media Radar shows you which brands are actively spending on advertising, which media partners they're working with, how much they're spending, and what their creative looks like. It's your secret weapon for timing outreach perfectly and walking into meetings with intel the client doesn't expect you to have.",
    modules:[
      {title:"What Media Radar Tells You",content:"For any brand, you can see: total digital ad spend estimates, which publishers and platforms they're buying on, how their spend has changed over the last 12 months, and what their recent creative looks like. This means you can approach a brand knowing exactly which of their competitors are already working with us, or knowing they've just ramped up their social spend."},
      {title:"Using It to Time Your Outreach",content:"The best time to contact a brand is when they've just increased their media spend — Media Radar tracks this in real time. Set up alerts for your target brands so you get notified when spend activity changes. A brand that has just launched a new product and ramped up digital spending is actively in a buying cycle."},
      {title:"Competitive Intel in Meetings",content:"Before every first meeting, look up the brand in Media Radar. Know their current spend level, which publishers they use, and whether any of our direct competitors are on their roster. Then reference it naturally in the meeting: 'We noticed you've been very active on [platform] recently — here's how our audience complements that.' Clients are always impressed by this."},
      {title:"Creative Intelligence",content:"Media Radar lets you see the actual creative assets brands are running. This tells you their brand tone, messaging priorities, and what kind of content they're comfortable with. Use this to inform how you position the Pubity editorial tone in your proposal."},
    ],
    tips:["Check Media Radar for every prospect before you reach out — it changes your whole approach","Set up brand alerts for your top 20 targets","Use spend trends to prioritise: a brand reducing spend is not your hottest lead","If a brand already buys from LADbible or The Lad Bible Network — you have a great opening"],
    links:[{label:"Media Radar App",url:LINKS.mediaRadarApp}],
  },
  {
    id:"hubspot",
    icon:"🟠",
    title:"HubSpot",
    tagline:"Your CRM — if it's not in HubSpot, it doesn't exist",
    color:"#FF7A59",
    overview:"HubSpot is the single source of truth for all commercial activity at Pubity Group. Every contact, every company, every deal, every email, every call — it all lives here. Seb, Alex, and Rachel run the business from HubSpot data. If your pipeline isn't updated, your deals don't exist in leadership's eyes.",
    modules:[
      {title:"Installing the Sales Extension",content:"Install the HubSpot Sales Extension for Outlook first. This connects your inbox to HubSpot so every email you send or receive can be logged to a contact record automatically. Go to Settings → Integrations → Email Integrations → Connect Outlook. Once connected, you'll see a HubSpot sidebar in every Outlook email."},
      {title:"Creating Contacts & Companies",content:"When you receive or open an email from a new prospect, click the HubSpot icon in the Outlook sidebar. HubSpot checks if the contact or company already exists. If not, click 'Create Contact' or 'Create Company'. HubSpot auto-fills what it can from the email domain — company name, website, industry, size, location. Review and save. No manual data entry needed."},
      {title:"Logging Emails Correctly",content:"When composing an email in Outlook, click 'Log' and 'Track' before sending. Log = saves the email to the contact's CRM timeline. Track = notifies you when the email is opened. Always use Log + Track for all prospect and client emails. This is how Rachel and Seb can see your activity without asking you for updates."},
      {title:"Making & Logging Calls",content:"Option 1 — Call directly from HubSpot: Go to the Contact record, click Call, select the number. The call is automatically logged with duration and call notes. Option 2 — Aircall: Calls made via Aircall sync automatically into HubSpot. The recording, duration, and notes all appear on the contact timeline. The recordings are stored in Aircall but visible in HubSpot."},
      {title:"Managing Your Pipeline",content:"Your deals should always be at the correct stage. The stages are: Prospecting → First Contact Made → Meeting Booked → Meeting Held → Brief Received → Proposal Sent → Verbal Approval → Received IO → Closed Won / Closed Lost. Update your deal stage the day it changes — not at the end of the week. Set a task for every deal with a next action and next action date. No deal should be sitting without a next step."},
      {title:"HubSpot Hygiene Rules",content:"Every contact must have: company associated, deal associated, last activity logged, lifecycle stage correct. Every deal must have: close date, deal value, deal stage, service start and end dates, associated contacts. Rachel audits the CRM regularly. Incomplete records will be flagged. The standard is: if Rachel looks at your deal, she should be able to tell exactly where it is and what the next step is without asking you."},
    ],
    tips:["Update HubSpot at the end of every client conversation — don't batch it to Fridays","Log + Track every email — your open rates are valuable intel","Create a task for every deal with a next action date so nothing goes cold","Use the HubSpot mobile app for logging calls on the go"],
    links:[{label:"HubSpot App",url:LINKS.hubspotApp},{label:"HubSpot Sales Extension Guide (Slack Canvas)",url:LINKS.hubspotGuide},{label:"HubSpot Sales Academy (free)",url:LINKS.hubspotAcademy}],
  },
  {
    id:"monday",
    icon:"🗓️",
    title:"Monday.com",
    tagline:"Campaign tracking & project management",
    color:"#FF3D57",
    overview:"Monday.com is how CS manages live campaigns. As a seller, you need to understand the structure well enough to check the status of your deals, understand delivery milestones, and know when to flag things to Harriet or Rhea. You also use it to follow the Springboard process.",
    modules:[
      {title:"The Two Boards You Need",content:"The Deliverables Tracker is where all live campaign deliverables are tracked — which posts are scheduled, which are live, which are complete. The Content Calendar shows when content goes live across which pages. Bookmark both. Check them before every client call."},
      {title:"The DELIVERY Workspace",content:"All live projects are managed in a workspace called 'DELIVERY'. Each project has its own folder inside 'LIVE PROJECTS', named using the deal naming convention. Inside each folder: Checklist (internal admin), Project Overview (internal intel), Campaign Summary (client-facing), and Timeline. You don't manage these — CS do — but you need to know they exist and how to find them."},
      {title:"Slack Automations",content:"Two Slack notifications are triggered from Monday.com. Project Kick-off: fires when a deal is marked 'Received IO' in HubSpot — this is the green light for CS to start project setup. Project Delivered: fires when a project is marked complete in Monday.com. These automations mean the team always knows when to act."},
      {title:"The Springboard Form",content:"Submitting the Campaign Briefing Springboard form creates a record in Monday.com and triggers the brief into the daily stand-up workflow. This is how your brief gets picked up by Josiah or Karen. After submission, check Monday.com to confirm the brief has appeared on the board — if it hasn't after 24 hours, flag at stand-up."},
      {title:"Naming Convention — Critical",content:"Every Monday.com folder, every Slack channel, every SharePoint folder, every cost tracker tab uses the same deal name: DealNumber_BrandName_CampaignTitle_Market_MonthYear. If the deal isn't closed won yet, use XX as the deal number. This naming convention is how the whole company cross-references everything — do not improvise."},
    ],
    tips:["Check the Deliverables Tracker before every client status call","If you've submitted a Springboard and it doesn't appear on Monday within 24hrs — chase at stand-up","Never rename a project folder without telling CS — it breaks cross-references across the business","Update your HubSpot deal stage when a project moves to 'delivered' in Monday"],
    links:[{label:"Monday.com Deliverables Tracker",url:LINKS.mondayTracker},{label:"Monday.com Content Calendar",url:LINKS.mondayCalendar},{label:"Monday.com App",url:LINKS.mondayApp},{label:"WOW — Best Practice Canvas",url:LINKS.wowCanvas}],
  },
  {
    id:"demographics",
    icon:"📊",
    title:"Demographics Pro",
    tagline:"Audience intelligence & insight generation",
    color:"#A855F7",
    overview:"Demographics Pro gives you detailed audience data across all 15 of our pages — age splits, interests, income, gender, education, and geographic breakdown. Use it to validate which pages to recommend for a brief, or to build a persona slide for a proposal.",
    modules:[
      {title:"What You Can Find",content:"For each page you can get: age breakdown (under 25, 25-34, 35-44, 45-54, 55+), gender split, top interests and categories (travel, gaming, fashion, food etc.), income bracket distribution, and geographic concentration. You can also query the data across the whole Pubity Group audience to give a consolidated view."},
      {title:"Using It in a Pitch",content:"If a client says their audience is 25–44 year old males interested in gaming, pull the Demographics Pro data for Gamingzar and Memezar immediately. Show the audience overlap with their target. This takes a conversation from 'we think our audience is relevant' to 'here is the data proving your audience watches our content.'"},
      {title:"The Custom AI Bot",content:"There is a custom ChatGPT agent built on Demographics Pro data. You can ask it questions in plain English: 'What percentage of the Pubity Group audience are 25–44?', 'Write a 3-sentence persona for Memezar', 'Does travel over-index as an interest for Dad Says Jokes?'. This is much faster than manually reading dashboards. Note: Warm Up is classified as PubitySport, and Backpacking Bananas as Pubityearth in the tool."},
      {title:"Building Audience Slides",content:"When building a proposal, use Demographics Pro to generate an audience profile slide. Pull the top 3–5 interests, the dominant age bracket, and a key stat that's relevant to the client's sector. If you're pitching a travel brand, the travel over-index stat for Backpacking Bananas is essential."},
    ],
    tips:["Use the AI bot for quick questions — it's faster than the dashboard","Always cross-reference with the brief before choosing pages — don't just go with the biggest pages","The 25–44 demographic dominates Pubity Group — lead with this for most brands","Save audience screenshots to the SharePoint proposal folder for future reference"],
    links:[{label:"Demographics Pro Dashboard",url:LINKS.demographicsPro},{label:"Demographics Pro AI Bot (ChatGPT)",url:LINKS.demographicsGPT},{label:"Demographics Pro Slack Canvas",url:LINKS.demographicsAI}],
  },
];

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    brand:"Fortnite x Simpsons (Epic Games)",
    sector:"Gaming",emoji:"🎮🍩",
    product:"Bespoke Partnership",
    market:"US",
    budget:"$1.2M",
    pages:"Pubity, Memezar, Gamingzar + Logo Takeover",
    summary:"Pubity ran a week-long logo takeover across Pubity IG and TikTok to launch the Fortnite x Simpsons collab for Gen Alpha. The campaign included disruptive viral stunts designed to feel like brainrot content — Homer clones in a California donut shop, real-life brand activations, and earned press coverage across news outlets. The activation delivered 2 billion organic impressions through the takeover alone, plus 111 million from the broader campaign — 38M above target.",
    stats:["2,111,863,065 organic impressions","38M impressions above target","£1.2M budget","Earned press coverage + UGC viral spread"],
    links:[
      {label:"IG Example (Pubity)",url:"https://www.instagram.com/p/DRPL04zDY2W/?img_index=1"},
      {label:"Press Coverage (Financial Express)",url:"https://www.financialexpress.com/trending/homer-clones-invade-california-donut-shop-fortnite-x-simpsons-comes-to-life-in-top-tier-marketing/4049413/lite/"},
      {label:"Monday Deliverables Board",url:"https://pubitygroup.monday.com/boards/1214765329/views/32786570"},
    ],
    when:"Use for any gaming brief, any brand wanting to go truly viral, or any client questioning whether social can drive real-world cultural moments.",
  },
  {
    brand:"Fortnite OG Season 1 (Epic Games)",
    sector:"Gaming",emoji:"🎮",
    product:"Integrated Editorial",
    market:"US",
    budget:"$800K",
    pages:"Pubity, Memezar, Gamingzar",
    summary:"Pubity launched the return of the Fortnite OG Map with a nostalgia-first strategy — reminding fans why they fell in love with the game using our best-performing formats. The hero unit was a 'You Decide' interactive competition where users voted for the greatest landing spot. It drove 3.3 million votes and peaked at 12% engagement rate — a figure that stops every client conversation cold. Total campaign delivered 70.2M organic impressions.",
    stats:["70,211,473 organic impressions","3.3M votes on 'You Decide' unit","12% engagement rate (industry avg under 1%)","$800K budget"],
    links:[
      {label:"IG Example (Pubity You Decide)",url:"https://www.instagram.com/p/DDu-ucYC2uy/?igsh=QkJLX1dYTjV1Ng%3D%3D"},
      {label:"Monday Deliverables Board",url:"https://pubitygroup.monday.com/boards/1214765329/views/32786570"},
    ],
    when:"Your #1 stat for any gaming or entertainment brief. Also use for any client who doubts our ER or has never heard of Pubity. '12% ER while the industry sits under 1%' is a conversation-stopper.",
  },
  {
    brand:"Fortnite iOS Return (Epic Games)",
    sector:"Gaming",emoji:"🎮📱",
    product:"Integrated Editorial",
    market:"US",
    budget:"$400K",
    pages:"Pubity, Memezar, Gamingzar",
    summary:"Fortnite returned to iOS after years away. Pubity built hype through relatable mobile-gaming moments, insight-led content, and custom UGC across multiple pages. The brief was to reach youth and show them they could play anywhere. The campaign delivered 32.2M organic impressions — 12 million above target.",
    stats:["32,217,074 organic impressions","12M impressions above target","$400K budget"],
    links:[
      {label:"IG Example (Pubity)",url:"https://www.instagram.com/p/DJ5ZF9bJadv/"},
      {label:"Monday Deliverables Board",url:"https://pubitygroup.monday.com/boards/1214765329/views/32786570"},
    ],
    when:"Use for any mobile, gaming, or youth-skewing brief. Also good for showing we can sustain performance across a multi-week campaign, not just spike on day one.",
  },
  {
    brand:"Filmseal: Weapons (Paramount)",
    sector:"Entertainment / Film",emoji:"🎬",
    product:"Integrated Editorial",
    market:"UK/US",
    budget:"Confidential",
    pages:"Filmseal",
    summary:"One of Filmseal's best-ever performing campaigns. Paramount partnered with Pubity Group to promote Weapons via Filmseal, our dedicated film-buff channel. The campaign drove 705,522 views and 379,744 reach — delivering 235% of the KPI target of 300,000 views. A near-perfect example of matching brand to channel: Filmseal's audience over-indexes heavily on film interest, sci-fi, and action.",
    stats:["705,522 views","379,744 reach","KPI: 300k views","235% to KPI"],
    links:[
      {label:"IG Post (Filmseal)",url:"https://www.instagram.com/p/DND0mMMof9f"},
      {label:"Monday Deliverables Board",url:"https://pubitygroup.monday.com/boards/1214765329/views/32786570"},
    ],
    when:"Use for any entertainment or film brief, especially when pitching Filmseal as a channel. The 235% to KPI stat proves our page-to-audience matching works. Lead with Filmseal audience data from Demographics Pro.",
  },
  {
    brand:"Filmseal: The Running Man (Paramount)",
    sector:"Entertainment / Film",emoji:"🎬🏃",
    product:"Integrated Editorial",
    market:"UK/US",
    budget:"Confidential",
    pages:"Filmseal",
    summary:"Paramount's The Running Man campaign on Filmseal. The brief was to eventise the film and build cultural conversation, with views and reach as primary KPIs. Filmseal delivered 346,377 views and 143,849 reach — 231% of the 150k KPI. This was followed by a larger bespoke US campaign for the same film at $150k with Glen Powell as the star focus.",
    stats:["346,377 views","143,849 reach","KPI: 150k views","231% to KPI"],
    links:[
      {label:"IG Post (Filmseal)",url:"https://www.instagram.com/p/DLlB124oJBP"},
      {label:"Monday Deliverables Board",url:"https://pubitygroup.monday.com/boards/1214765329/views/32786570"},
    ],
    when:"Pair with the Weapons case study for any Paramount or entertainment pitch. Two consecutive over-deliveries on the same brand is a compelling renewal story.",
  },
  {
    brand:"Filmseal: 28 Years Later",
    sector:"Entertainment / Film",emoji:"🎬🧟",
    product:"Integrated Editorial",
    market:"UK/US",
    budget:"Confidential",
    pages:"Filmseal",
    summary:"28 Years Later campaign on Filmseal — a continuation of Pubity Group's relationship with Sony Pictures in the horror/thriller genre. The campaign drove 1.46M views on Filmseal, showing the channel's depth for genre-specific audiences.",
    stats:["1,460,000 views","Filmseal — genre-targeted delivery"],
    links:[
      {label:"Monday Deliverables Board",url:"https://pubitygroup.monday.com/boards/1214765329/views/32786570"},
    ],
    when:"Use for any horror, thriller, or adult action brief. Also works to show the breadth of what Filmseal can do across different genre types beyond sci-fi.",
  },
  {
    brand:"Warner Bros: Wuthering Heights (UK)",
    sector:"Entertainment / Film",emoji:"🎬❤️",
    product:"Bespoke Partnership",
    market:"UK",
    budget:"£55,000",
    pages:"Pubity, Old Friend Club (OFC)",
    summary:"Warner Bros came to Pubity for the UK release of Wuthering Heights with a brief focused on Valentine's/Galentine's audiences — women 18–34, socially active, influenced by cultural chatter. Pubity used Old Friend Club, our original grandparent-led series, to create a bespoke content piece: the Elders reacting to the trailer with commentary on romance, lies, and modern dating. The OFC x Pubity collab post drove 7.8 million views and went live February 2026. The campaign was also supported by an amplification partnership with Daily Mail.",
    stats:["7,800,000 views (OFC x Pubity collab post)","Target audience: Women 18–34","UK deal — £55k","CPM: £12"],
    links:[
      {label:"IG Post (OFC x Pubity)",url:"https://www.instagram.com/p/DUjL7WGFJS5/?img_index=1"},
      {label:"Monday Deliverables Board",url:"https://pubitygroup.monday.com/boards/1214765329/views/32786570"},
    ],
    when:"Use for any UK entertainment brief, any female-skewing campaign, or any client who's unsure whether bespoke content is worth the extra investment. 7.8M views on a single bespoke OFC piece makes the case instantly.",
  },
  {
    brand:"OFC x Final Destination (Warner Bros / Memezar)",
    sector:"Entertainment / Film",emoji:"🎬💀",
    product:"Bespoke Partnership",
    market:"US",
    budget:"Confidential",
    pages:"Memezar, Old Friend Club (OFC)",
    summary:"Old Friend Club x Memezar activation for Final Destination. The campaign used Pubity Group's OFC format — grandparents reacting — to reach Memezar's audience in a completely unexpected way. The collab post delivered 8.0 million views, making it one of OFC's highest-performing branded pieces. A great example of format-first thinking: the brief wasn't 'put us on Memezar', it was 'make something people actually want to watch'.",
    stats:["8,000,000 views","OFC x Memezar collab format"],
    links:[
      {label:"IG Post (OFC x Memezar)",url:"https://www.instagram.com/p/DJjzgjmtUHP/"},
      {label:"Monday Deliverables Board",url:"https://pubitygroup.monday.com/boards/1214765329/views/32786570"},
    ],
    when:"Use for horror/thriller or any campaign that needs to reach a broad entertainment audience. Also brilliant for demonstrating what OFC can do as a format for brands that think it's 'too niche'.",
  },
  {
    brand:"OFC x NFL",
    sector:"Sports / Entertainment",emoji:"🏈",
    product:"Bespoke Partnership",
    market:"US",
    budget:"Confidential",
    pages:"Pubity, Old Friend Club (OFC)",
    summary:"Old Friend Club x NFL — grandparents reacting to American Football chaos. This campaign reached a 9.7 million views milestone on the OFC x Pubity collab post, making it the highest-viewed OFC branded post. The NFL used Pubity Group to reach a younger, meme-native audience they couldn't access through traditional sports channels.",
    stats:["9,700,000 views","Highest OFC collab post performance","Cross-generational audience bridge"],
    links:[
      {label:"IG Post (OFC x Pubity x NFL)",url:"https://www.instagram.com/p/DUY40wajd9V/?img_index=1"},
      {label:"Monday Deliverables Board",url:"https://pubitygroup.monday.com/boards/1214765329/views/32786570"},
    ],
    when:"Use for any sports brief — NFL, Premier League, F1. Shows we can make sport content feel meme-native and not just another broadcast clip. Pairs well with the Wuthering Heights OFC piece to show the format's range.",
  },
  {
    brand:"Paramount: Novocaine (UK)",
    sector:"Entertainment / Film",emoji:"🎬💊",
    product:"Bespoke Partnership",
    market:"UK",
    budget:"£70,000",
    pages:"Pubity, Memezar, Filmseal",
    summary:"Paramount UK came to Pubity for the UK release of Novocaine — a comedy/action/thriller with a 15–34 male-skew audience (comps: John Wick, Bullet Train, The Beekeeper). Budget was finalised at £70k bespoke, including production as added value. Pubity created original content using the film's 'love is pain' positioning across Pubity and Memezar. The campaign went live in March 2025 ahead of the March 14 release date. PCA subsequently led to a direct brief from Paramount for the Running Man.",
    stats:["£70k bespoke deal","Bespoke content — Pubity + Memezar","Led directly to Running Man brief"],
    links:[
      {label:"Media Plan (SharePoint)",url:"https://65twenty.sharepoint.com/:x:/r/sites/Pubity/Shared%20Documents/Commercial/Branded%20Content/Clients/Paramount/2025/%23XX_Paramount_Novocaine_UK_2025%20-%20BESPOKE%20Content/2.%20Media%20Plan/PubityGroup_Novocaine_MediaPlan_Jan2025.xlsx?d=we045131e2aa24242b037e5a67dc9f9ef&csf=1&web=1&e=kZg52h"},
      {label:"Creative Deck (Google Slides)",url:"https://docs.google.com/presentation/d/1p1sXeO-tGjOQXuDEb9t96T12qOWaORnivK4xs9kDS0s/edit#slide=id.g319f894bf60_0_0"},
      {label:"Monday Deliverables Board",url:"https://pubitygroup.monday.com/boards/1214765329/views/32786570"},
    ],
    when:"Use for UK film briefs, 15–34 male campaigns, or any Paramount meeting. The chain of Novocaine → Running Man shows how strong delivery drives repeat business.",
  },
  {
    brand:"Subway",
    sector:"QSR / Food & Beverage",emoji:"🥪",
    product:"Integrated Editorial",
    market:"US",
    budget:"Confidential",
    pages:"Pubity, Dad Says Jokes, Memezar",
    summary:"Subway ran a multi-phase campaign with Pubity Group targeting purchase intent — not just awareness. The campaign delivered 58% purchase intent uplift, making it Pubity's most powerful bottom-funnel case study. Subway is one of our Strategic Accounts, with ongoing repeat business. Breezy Simons manages this relationship and is the sole QSR seller.",
    stats:["58% purchase intent uplift","Strategic Account — ongoing relationship","Multi-phase campaign"],
    links:[
      {label:"Monday Deliverables Board",url:"https://pubitygroup.monday.com/boards/1214765329/views/32786570"},
      {label:"Case Study Database",url:"https://docs.google.com/spreadsheets/d/1_uR6wYU6yjVoA7fDZ8I9csB7jIJoBj0a-lf4WbbRULM/edit?gid=1509807453#gid=1509807453"},
    ],
    when:"Use for any QSR or F&B brief — especially if the client measures purchase intent or conversion rather than just reach. Most brands measure awareness; Subway proves we can move the funnel.",
  },
];

// ─── WOW CONTENT ──────────────────────────────────────────────────────────────
const WOW_SECTIONS = [
  {
    title:"Deal Naming Convention",
    icon:"🏷️",
    content:"All deals follow the same naming convention across every touchpoint — Slack channel name, SharePoint folder, CoS tracker, crew invoices, and Monday.com board. The deal name is created in HubSpot by the Sales team once the deal is set up.\n\nThe format is: DealNumber_BrandName_CampaignTitle_Market_MonthYear\n\nIf a project isn't Closed Won and you don't yet have a deal number, use XX_BrandName_CampaignTitle_Market_MonthYear. You can update the name once you have the number. Examples: 142_EpicGames_Fortnite-Collab_UK_Mar2026 or XX_Hersheys_HappyPlace_US_Apr2026.",
  },
  {
    title:"Project Set-Up — What Needs to Happen",
    icon:"⚙️",
    content:"When a project is confirmed (IO received), four things need to happen: (1) CS creates the Monday.com project folder, (2) Sales creates the SharePoint folder at brief inception, (3) CS adds a tab to the cost tracker, (4) CS adds a tab to the deliverables tracker.\n\nIn Monday.com, CS creates a new folder inside 'LIVE PROJECTS', names it using the deal naming convention, then duplicates the template folder including: Checklist, Project Overview, Campaign Summary, Timeline, and (for bespoke projects) Branded Content Production. When duplicating templates, always duplicate board structure + items + updates to pull through all automations.",
  },
  {
    title:"Slack Automations",
    icon:"⚡",
    content:"Two Slack channels handle automated project notifications. The 'Project Kick-off' channel receives a Slack notification when a project is marked as 'Received IO' in HubSpot — this is the green light for the Account Manager to complete project set-up. The 'Project Delivered' channel receives a notification when a project is marked as complete in Monday.com. These automations replace the need for manual kick-off messages.",
  },
  {
    title:"Monday.com — Campaign Summary (Client Facing)",
    icon:"📋",
    content:"The Campaign Summary is a client-facing document, not internal. Populate it with all the information you have, then remove any irrelevant items and export as a PDF to send to the client. Always tell the client this is an internal one-pager to help collect project details and posting requirements — it is not a legal document. When the client provides any outstanding information, it must be added back into the Campaign Summary on Monday.com.",
  },
  {
    title:"Campaign Cost Tracker",
    icon:"💰",
    content:"The cost tracker is in SharePoint (not Google Sheets). When setting up for a new project, duplicate the template tab and rename it per the deal naming convention. Ensure all information is included — there's a section at the top of each tab with overarching project info. Finance needs this completed to process payments. Never start a tab from scratch — always duplicate the template.",
  },
  {
    title:"Deliverables Tracker",
    icon:"📸",
    content:"The deliverables tracker records every live deliverable across all campaigns. When setting up a new project tab, list all deliverables with status marked as 'pending'. As assets go live, drop live links into the tracker. Log IG stories separately — there's a section for screenshots beneath the main table. Note: screenshots must include the date in shot for finance as Proof of Delivery (POD).",
  },
  {
    title:"Slack Best Practices for AMs",
    icon:"💬",
    content:"Each project Slack channel should have four bookmarked links from day one: the Monday.com project folder, the SharePoint project folder, the cost tracker tab, and the deliverables tracker tab. Rachel should be invited to every proposal channel without exception. The channel name must follow the deal naming convention exactly. Don't use informal names or abbreviations — it breaks the cross-referencing system that the whole team relies on.",
  },
  {
    title:"Timeline — How to Share with Clients",
    icon:"📅",
    content:"Campaign timelines are templated in Monday.com. Go through each one carefully: add any additional tasks and remove anything irrelevant. There are subitems specifically for internal actions — remove these before sharing with the client. The best way to share a timeline externally is to export the 'main view' as an Excel table, delete unnecessary columns, and paste it into the body of an email. Do not share the live Monday.com board link with clients.",
  },
];

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [checks, setChecks] = useState({});
  const [notes, setNotes] = useState({});
  const [activeTab, setActiveTab] = useState("training");
  const [activeSalesStep, setActiveSalesStep] = useState(null);
  const [expandedCS, setExpandedCS] = useState(null);
  const [objectionOpen, setObjectionOpen] = useState(null);
  const [activeTool, setActiveTool] = useState("zoominfo");
  const [activeToolModule, setActiveToolModule] = useState(null);
  const [expandedCS2, setExpandedCS2] = useState(null);
  const [expandedWOW, setExpandedWOW] = useState(null);
  const [expandedCase, setExpandedCase] = useState(null);
  const [trainingSection, setTrainingSection] = useState("tools");

  useEffect(() => {
    (async () => {
      try { const r = await window.storage.get("pb-checks3"); if (r) setChecks(JSON.parse(r.value)); } catch {}
      try { const r = await window.storage.get("pb-notes3"); if (r) setNotes(JSON.parse(r.value)); } catch {}
    })();
  }, []);

  const saveChecks = async (n) => { setChecks(n); try { await window.storage.set("pb-checks3", JSON.stringify(n)); } catch {} };
  const saveNotes = async (n) => { setNotes(n); try { await window.storage.set("pb-notes3", JSON.stringify(n)); } catch {} };
  const toggle = (id) => saveChecks({ ...checks, [id]: !checks[id] });
  const setNote = (id, v) => saveNotes({ ...notes, [id]: v });

  const completed = Object.values(checks).filter(Boolean).length;
  const pct = Math.round((completed / TOTAL) * 100);

  const [csRegion, setCsRegion] = useState("ALL");
  const [csExpanded, setCsExpanded] = useState(null);

  const tabs = [
    { id: "training", label: "🎓 Training" },
    { id: "timeline", label: "📅 Timeline" },
    { id: "sales", label: "🎯 Sales Process" },
    { id: "cs", label: "📦 CS Process" },
    { id: "casestudies", label: "📊 Case Studies" },
    { id: "product", label: "🏢 Product & Pages" },
    { id: "objections", label: "💬 Objections" },
    { id: "team", label: "👥 Team" },
    { id: "docs", label: "📂 All Documents" },
    { id: "checklist", label: "✅ Checklist" },
  ];

  const currentTool = TOOL_COURSES.find(t => t.id === activeTool);

  return (
    <div style={{ background: BLACK, minHeight: "100vh", color: "#FFF", fontFamily: "'DM Sans','Helvetica Neue',Arial,sans-serif" }}>
      {/* ── HEADER ── */}
      <div style={{ background: DARK, borderBottom: `2px solid ${YELLOW}`, padding: "16px 24px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 34, height: 34, background: YELLOW, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🟡</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>Pubity Group — New Seller Onboarding</div>
              <div style={{ fontSize: 11, color: MUTED }}>Giselle · UK Sales · Target: 6 meetings/week · £14.1M team target</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#111", padding: "7px 14px", borderRadius: 30, border: `1px solid ${BORDER}` }}>
            <div style={{ width: 110, height: 5, background: "#333", borderRadius: 99 }}>
              <div style={{ width: `${pct}%`, height: "100%", background: YELLOW, borderRadius: 99, transition: "width 0.4s" }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 800, color: pct === 100 ? GREEN : YELLOW }}>{pct}%</span>
            <span style={{ fontSize: 11, color: MUTED }}>{completed}/{TOTAL}</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4, marginTop: 12, overflowX: "auto", paddingBottom: 2 }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              background: activeTab === t.id ? YELLOW : "transparent",
              color: activeTab === t.id ? BLACK : "#999",
              border: `1px solid ${activeTab === t.id ? YELLOW : BORDER}`,
              borderRadius: 6, padding: "5px 12px", fontSize: 11, fontWeight: 700,
              cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s",
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "24px", maxWidth: 960, margin: "0 auto" }}>

        {/* ── TRAINING TAB ── */}
        {activeTab === "training" && (
          <div>
            <SH title="Training Hub" sub="Tool courses, case studies, and ways of working — everything you need to get up to speed." />

            {/* Training Sub-Nav */}
            <div style={{ display: "flex", gap: 8, marginTop: 20, marginBottom: 24 }}>
              {[
                { id: "tools", label: "🛠️ Tool Training" },
                { id: "casestudies", label: "📊 Case Studies" },
                { id: "wow", label: "⭐ Ways of Working" },
              ].map(s => (
                <button key={s.id} onClick={() => setTrainingSection(s.id)} style={{
                  background: trainingSection === s.id ? YELLOW : CARD,
                  color: trainingSection === s.id ? BLACK : "#AAA",
                  border: `1px solid ${trainingSection === s.id ? YELLOW : BORDER}`,
                  borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 700,
                  cursor: "pointer", transition: "all 0.2s",
                }}>{s.label}</button>
              ))}
            </div>

            {/* ── TOOL TRAINING ── */}
            {trainingSection === "tools" && (
              <div>
                {/* Tool selector */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, marginBottom: 24 }}>
                  {TOOL_COURSES.map(tool => (
                    <div key={tool.id} onClick={() => { setActiveTool(tool.id); setActiveToolModule(null); }} style={{
                      background: activeTool === tool.id ? "#1C1C1C" : CARD,
                      border: `1px solid ${activeTool === tool.id ? tool.color : BORDER}`,
                      borderRadius: 10, padding: "12px 10px", textAlign: "center",
                      cursor: "pointer", transition: "all 0.2s",
                    }}>
                      <div style={{ fontSize: 24, marginBottom: 4 }}>{tool.icon}</div>
                      <div style={{ fontSize: 12, fontWeight: 800, color: activeTool === tool.id ? tool.color : "#CCC" }}>{tool.title}</div>
                      <div style={{ fontSize: 10, color: MUTED, marginTop: 2, lineHeight: 1.3 }}>{tool.tagline}</div>
                    </div>
                  ))}
                </div>

                {/* Tool content */}
                {currentTool && (
                  <div>
                    <div style={{ background: CARD, border: `1px solid ${currentTool.color}`, borderRadius: 12, padding: "20px 22px", marginBottom: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                        <span style={{ fontSize: 32 }}>{currentTool.icon}</span>
                        <div>
                          <div style={{ fontWeight: 900, fontSize: 18, color: currentTool.color }}>{currentTool.title}</div>
                          <div style={{ fontSize: 13, color: MUTED }}>{currentTool.tagline}</div>
                        </div>
                      </div>
                      <p style={{ fontSize: 14, color: "#CCC", lineHeight: 1.75, margin: 0 }}>{currentTool.overview}</p>
                    </div>

                    {/* Modules */}
                    <Label text="TRAINING MODULES" />
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      {currentTool.modules.map((mod, i) => {
                        const mid = `${currentTool.id}-mod-${i}`;
                        const open = activeToolModule === mid;
                        return (
                          <div key={i} onClick={() => setActiveToolModule(open ? null : mid)} style={{
                            background: open ? "#1C1C1C" : CARD, border: `1px solid ${open ? currentTool.color : BORDER}`,
                            borderRadius: 10, padding: "14px 16px", cursor: "pointer", transition: "all 0.2s",
                          }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                                <div style={{ width: 24, height: 24, borderRadius: "50%", background: open ? currentTool.color : "#333", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: open ? BLACK : MUTED, flexShrink: 0 }}>{i + 1}</div>
                                <span style={{ fontWeight: 700, fontSize: 14, color: open ? currentTool.color : "#DDD" }}>{mod.title}</span>
                              </div>
                              <span style={{ color: MUTED, fontSize: 12 }}>{open ? "▲" : "▼"}</span>
                            </div>
                            {open && (
                              <div style={{ marginTop: 14 }}>
                                <p style={{ fontSize: 14, color: "#CCC", lineHeight: 1.75, margin: "0 0 12px 0" }}>{mod.content}</p>
                                <NoteBox id={`tool-${currentTool.id}-${i}`} setNote={setNote} notes={notes} placeholder={`My notes on module ${i + 1}...`} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Tips */}
                    <div style={{ background: "#111", borderLeft: `3px solid ${currentTool.color}`, padding: "14px 16px", borderRadius: "0 10px 10px 0", marginBottom: 20 }}>
                      <div style={{ fontSize: 11, fontWeight: 900, color: currentTool.color, marginBottom: 8, letterSpacing: 1 }}>⚡ PRO TIPS</div>
                      {currentTool.tips.map((tip, i) => (
                        <div key={i} style={{ fontSize: 13, color: "#CCC", lineHeight: 1.6, marginBottom: i < currentTool.tips.length - 1 ? 6 : 0 }}>• {tip}</div>
                      ))}
                    </div>

                    {/* Links */}
                    <Label text="QUICK ACCESS" />
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                      {currentTool.links.map((l, i) => <DocChip key={i} label={l.label} url={l.url} />)}
                    </div>

                    <NoteBox id={`tool-overall-${currentTool.id}`} setNote={setNote} notes={notes} placeholder={`Overall notes on ${currentTool.title}...`} />
                  </div>
                )}
              </div>
            )}

            {/* ── CASE STUDIES ── */}
            {trainingSection === "casestudies" && (
              <div>
                <div style={{ background: "#111", border: `1px solid ${YELLOW}`, borderRadius: 10, padding: "14px 18px", marginBottom: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 900, color: YELLOW, marginBottom: 8 }}>📚 CASE STUDY RESOURCES</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                    <DocChip label="Full Case Study Database" url={LINKS.caseStudyDatabase} />
                    <DocChip label="Request a New Case Study" url={LINKS.caseStudyRequestForm} />
                    <DocChip label="Case Study Builder GPT" url={LINKS.caseStudyGPT} />
                    <DocChip label="Case Study Finder Canvas" url={LINKS.caseStudyFinder} />
                    <DocChip label="Monday Deliverables Board" url={LINKS.mondayTracker} />
                  </div>
                </div>

                <Label text="CAMPAIGN CASE STUDIES — CLICK TO EXPAND" />
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {CASE_STUDIES.map((cs, i) => {
                    const open = expandedCase === i;
                    return (
                      <div key={i} onClick={() => setExpandedCase(open ? null : i)} style={{
                        background: CARD, border: `1px solid ${open ? YELLOW : BORDER}`,
                        borderRadius: 10, padding: "14px 18px", cursor: "pointer", transition: "all 0.2s",
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                            <span style={{ fontSize: 22, marginTop: 2 }}>{cs.emoji}</span>
                            <div>
                              <div style={{ fontWeight: 800, fontSize: 15, color: open ? YELLOW : "#DDD" }}>{cs.brand}</div>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 4 }}>
                                <span style={{ background: "#252525", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "2px 8px", fontSize: 11, color: "#AAA" }}>{cs.sector}</span>
                                <span style={{ background: "#252525", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "2px 8px", fontSize: 11, color: "#AAA" }}>{cs.product}</span>
                                <span style={{ background: "#252525", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "2px 8px", fontSize: 11, color: "#AAA" }}>{cs.market}</span>
                                {cs.budget && <span style={{ fontSize: 11, color: YELLOW, fontWeight: 700, padding: "2px 0" }}>{cs.budget}</span>}
                              </div>
                            </div>
                          </div>
                          <span style={{ color: MUTED, fontSize: 12, flexShrink: 0 }}>{open ? "▲" : "▼"}</span>
                        </div>
                        {!open && (
                          <div style={{ marginTop: 8, marginLeft: 34, display: "flex", flexWrap: "wrap", gap: 10 }}>
                            {cs.stats.slice(0,2).map((s, j) => (
                              <span key={j} style={{ fontSize: 12, color: "#888" }}>• {s}</span>
                            ))}
                          </div>
                        )}
                        {open && (
                          <div style={{ marginTop: 16 }}>
                            <p style={{ fontSize: 14, color: "#CCC", lineHeight: 1.75, margin: "0 0 14px 0" }}>{cs.summary}</p>
                            <div style={{ display: "grid", gridTemplateColumns: cs.stats.length > 1 ? "1fr 1fr" : "1fr", gap: 8, marginBottom: 14 }}>
                              {cs.stats.map((stat, j) => (
                                <div key={j} style={{ background: "#0D0D0D", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px" }}>
                                  <div style={{ fontSize: 13, fontWeight: 700, color: YELLOW }}>{stat}</div>
                                </div>
                              ))}
                            </div>
                            <div style={{ marginBottom: 12 }}>
                              <div style={{ fontSize: 11, fontWeight: 900, color: MUTED, marginBottom: 4, letterSpacing: 1 }}>PAGES USED</div>
                              <div style={{ fontSize: 13, color: "#CCC" }}>{cs.pages}</div>
                            </div>
                            <div style={{ background: "#1A1A00", borderLeft: `3px solid ${YELLOW}`, padding: "12px 14px", borderRadius: "0 8px 8px 0", marginBottom: 14 }}>
                              <div style={{ fontSize: 11, fontWeight: 900, color: YELLOW, marginBottom: 6, letterSpacing: 1 }}>🎯 USE IN A PITCH WHEN...</div>
                              <p style={{ fontSize: 13, color: "#CCC", margin: 0, lineHeight: 1.65 }}>{cs.when}</p>
                            </div>
                            {cs.links && cs.links.length > 0 && (
                              <div style={{ marginBottom: 14 }}>
                                <div style={{ fontSize: 11, fontWeight: 800, color: MUTED, marginBottom: 8, letterSpacing: 1 }}>📂 LINKS & DELIVERABLES</div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                  {cs.links.map((l, j) => <DocChip key={j} label={l.label} url={l.url} />)}
                                </div>
                              </div>
                            )}
                            <NoteBox id={`cs-study-${i}`} setNote={setNote} notes={notes} placeholder="My notes on this case study..." />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── WOW ── */}
            {trainingSection === "wow" && (
              <div>
                <div style={{ background: "#111", border: `1px solid ${YELLOW}`, borderRadius: 10, padding: "14px 18px", marginBottom: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 900, color: YELLOW, marginBottom: 6 }}>⭐ BEST PRACTICE WAYS OF WORKING</div>
                  <p style={{ fontSize: 13, color: "#AAA", margin: "0 0 10px 0", lineHeight: 1.6 }}>The official Pubity Group Ways of Working — the process standards everyone in the commercial team follows.</p>
                  <DocChip label="Original WOW Canvas (Slack)" url={LINKS.wowCanvas} />
                </div>

                <Label text="WAYS OF WORKING — CLICK TO EXPAND" />
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                  {WOW_SECTIONS.map((w, i) => {
                    const open = expandedWOW === i;
                    return (
                      <div key={i} onClick={() => setExpandedWOW(open ? null : i)} style={{
                        background: CARD, border: `1px solid ${open ? YELLOW : BORDER}`,
                        borderRadius: 10, padding: "14px 16px", cursor: "pointer", transition: "all 0.2s",
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                            <span style={{ fontSize: 20 }}>{w.icon}</span>
                            <span style={{ fontWeight: 700, fontSize: 14, color: open ? YELLOW : "#DDD" }}>{w.title}</span>
                          </div>
                          <span style={{ color: MUTED, fontSize: 12 }}>{open ? "▲" : "▼"}</span>
                        </div>
                        {open && (
                          <div style={{ marginTop: 14 }}>
                            {w.content.split("\n\n").map((para, j) => (
                              <p key={j} style={{ fontSize: 14, color: "#CCC", lineHeight: 1.75, margin: "0 0 12px 0" }}>{para}</p>
                            ))}
                            <NoteBox id={`wow-${i}`} setNote={setNote} notes={notes} placeholder="My notes..." />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* WOW quick reference links */}
                <Label text="QUICK REFERENCE" />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  <DocChip label="Cost Tracker (SharePoint)" url={LINKS.costTracker} />
                  <DocChip label="Deliverables Tracker" url={LINKS.deliverablesTracker} />
                  <DocChip label="Monday.com Deliverables Tracker" url={LINKS.mondayTracker} />
                  <DocChip label="Monday.com Content Calendar" url={LINKS.mondayCalendar} />
                  <DocChip label="SharePoint — Commercial Hub" url={LINKS.sharepoint} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── ONBOARDING TIMELINE ── */}
        {activeTab === "timeline" && (
          <div>
            <SH title="Your Onboarding Roadmap" sub="Work through each phase in order. Each has a clear pass mark." />
            <div style={{ position: "relative", marginTop: 28 }}>
              <div style={{ position: "absolute", left: 52, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom,${YELLOW},${GREEN})` }} />
              {ONBOARDING.map((o, i) => (
                <div key={i} style={{ display: "flex", gap: 22, marginBottom: 28 }}>
                  <div style={{ flexShrink: 0, zIndex: 1 }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: o.color, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 10, color: BLACK, boxShadow: `0 0 0 4px ${BLACK}`, textAlign: "center", lineHeight: 1.3 }}>{o.date}</div>
                  </div>
                  <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px", flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                      <span style={{ fontWeight: 900, fontSize: 15, color: o.color }}>{o.label}</span>
                      <span style={{ fontWeight: 700, fontSize: 13, color: "#DDD" }}>— {o.goal}</span>
                    </div>
                    <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 10 }}>{o.tasks}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                      {o.links.map((l, j) => <DocChip key={j} label={l.label} url={l.url} />)}
                    </div>
                    <NoteBox id={`tl-${i}`} setNote={setNote} notes={notes} placeholder={`Notes for ${o.label}...`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SALES PROCESS ── */}
        {activeTab === "sales" && (
          <div>
            <SH title="The Sales Process — Start to Finish" sub="Click any step to expand the full detail, tools, links, and manager tips." />
            <div style={{ marginTop: 24, position: "relative" }}>
              <div style={{ position: "absolute", left: 32, top: 32, bottom: 32, width: 2, background: `linear-gradient(to bottom,${YELLOW},${GREEN})` }} />
              {SALES_STEPS.map((s, i) => {
                const open = activeSalesStep === i;
                return (
                  <div key={i} style={{ display: "flex", gap: 18, marginBottom: 14 }}>
                    <div style={{ flexShrink: 0, zIndex: 1 }}>
                      <div onClick={() => setActiveSalesStep(open ? null : i)} style={{
                        width: 64, height: 64, borderRadius: "50%", cursor: "pointer",
                        background: open ? s.color : CARD, border: `2px solid ${s.color}`,
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        transition: "all 0.2s", boxShadow: open ? `0 0 0 4px ${s.color}30` : "none",
                      }}>
                        <span style={{ fontSize: 12, fontWeight: 900, color: open ? BLACK : s.color }}>{s.n}</span>
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div onClick={() => setActiveSalesStep(open ? null : i)} style={{
                        background: open ? "#1C1C1C" : CARD, border: `1px solid ${open ? s.color : BORDER}`,
                        borderRadius: 10, padding: "14px 18px", cursor: "pointer", transition: "all 0.2s",
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <div>
                            <span style={{ fontWeight: 900, fontSize: 16, color: open ? s.color : "#DDD" }}>{s.label}</span>
                            <div style={{ fontSize: 12, color: MUTED, marginTop: 3 }}>
                              <span style={{ color: "#AAA" }}>Owner: </span>{s.owner}
                              <span style={{ margin: "0 8px", color: BORDER }}>|</span>
                              <span style={{ color: "#AAA" }}>When: </span>{s.time}
                            </div>
                            {!open && <div style={{ fontSize: 13, color: "#999", marginTop: 6 }}>{s.summary}</div>}
                          </div>
                          <span style={{ color: MUTED, fontSize: 14, flexShrink: 0, marginLeft: 12 }}>{open ? "▲" : "▼"}</span>
                        </div>
                        {open && (
                          <div style={{ marginTop: 16 }}>
                            <div style={{ fontSize: 13, color: "#AAA", marginBottom: 16, fontStyle: "italic" }}>{s.summary}</div>
                            {s.detail.map((d, j) => (
                              <div key={j} style={{ marginBottom: 14 }}>
                                <div style={{ fontSize: 12, fontWeight: 800, color: s.color, marginBottom: 5, letterSpacing: 0.5, textTransform: "uppercase" }}>{d.heading}</div>
                                <p style={{ fontSize: 14, color: "#CCC", lineHeight: 1.75, margin: 0 }}>{d.body}</p>
                              </div>
                            ))}
                            <div style={{ background: "#111", borderLeft: `3px solid ${YELLOW}`, padding: "12px 16px", borderRadius: "0 8px 8px 0", margin: "16px 0" }}>
                              <div style={{ fontSize: 11, fontWeight: 900, color: YELLOW, marginBottom: 6, letterSpacing: 1 }}>📋 COMMON MISTAKE TO AVOID</div>
                              <p style={{ fontSize: 13, color: "#CCC", margin: 0, lineHeight: 1.6 }}>{s.mistake}</p>
                            </div>
                            {s.links.length > 0 && (
                              <div style={{ marginTop: 16 }}>
                                <div style={{ fontSize: 11, fontWeight: 800, color: MUTED, marginBottom: 8, letterSpacing: 1 }}>📂 RELEVANT DOCUMENTS</div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{s.links.map((l, j) => <DocChip key={j} label={l.label} url={l.url} />)}</div>
                              </div>
                            )}
                            <NoteBox id={`sales-${i}`} setNote={setNote} notes={notes} placeholder={`My notes on step ${s.n} — ${s.label}...`} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── CS PROCESS ── */}
        {activeTab === "cs" && (
          <div>
            <SH title="CS Process — After Verbal Approval" sub="Once the client says yes, CS takes over delivery. Know this so you can support them." />
            <div style={{ marginTop: 24 }}>
              {["POST-VERBAL","PRE-LIVE","LIVE","POST-LIVE","RENEWAL"].map(phase => {
                const steps = CS_STEPS.filter(s => s.phase === phase);
                const pc = {"POST-VERBAL":YELLOW,"PRE-LIVE":ORANGE,"LIVE":"#FF6600","POST-LIVE":GREEN,"RENEWAL":"#17A2B8"}[phase];
                return (
                  <div key={phase} style={{ marginBottom: 28 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <div style={{ height: 1, flex: 1, background: pc, opacity: 0.3 }} />
                      <span style={{ fontSize: 10, fontWeight: 900, color: pc, letterSpacing: 2, whiteSpace: "nowrap" }}>{phase}</span>
                      <div style={{ height: 1, flex: 1, background: pc, opacity: 0.3 }} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: steps.length > 1 ? "1fr 1fr" : "1fr", gap: 10 }}>
                      {steps.map((s, i) => {
                        const id = `cs-${phase}-${i}`;
                        const open = expandedCS === id;
                        return (
                          <div key={i} onClick={() => setExpandedCS(open ? null : id)} style={{ background: CARD, border: `1px solid ${open ? pc : BORDER}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", transition: "all 0.2s" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                              <div>
                                <div style={{ fontWeight: 800, fontSize: 14, color: open ? pc : "#DDD" }}>{s.label}</div>
                                <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{s.who}</div>
                              </div>
                              <span style={{ color: MUTED, fontSize: 12 }}>{open ? "▲" : "▼"}</span>
                            </div>
                            {open && (
                              <div style={{ marginTop: 12 }}>
                                <p style={{ fontSize: 13, color: "#CCC", lineHeight: 1.7, margin: 0 }}>{s.detail}</p>
                                <NoteBox id={`csn-${id}`} setNote={setNote} notes={notes} placeholder="My notes..." />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── CASE STUDIES ── */}
        {activeTab === "casestudies" && (() => {
          const filtered = csRegion === "ALL" ? CASE_STUDIES : CASE_STUDIES.filter(c => c.region === csRegion);
          return (
            <div>
              <SH title="Case Studies" sub="Real campaigns, real results. Know these before you pitch." />
              {/* Filter */}
              <div style={{ display: "flex", gap: 8, margin: "18px 0" }}>
                {["ALL","UK","US"].map(r => (
                  <button key={r} onClick={() => { setCsRegion(r); setCsExpanded(null); }} style={{
                    background: csRegion === r ? YELLOW : "transparent", color: csRegion === r ? BLACK : "#999",
                    border: `1px solid ${csRegion === r ? YELLOW : BORDER}`, borderRadius: 20,
                    padding: "5px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer",
                  }}>{r === "ALL" ? "All Regions" : r === "UK" ? "🇬🇧 UK" : "🇺🇸 US"}</button>
                ))}
                <span style={{ marginLeft: "auto", fontSize: 12, color: MUTED, lineHeight: "30px" }}>{filtered.length} campaigns</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((cs, i) => {
                  const open = csExpanded === i;
                  return (
                    <div key={i} style={{ background: CARD, border: `1px solid ${open ? cs.color : BORDER}`, borderRadius: 10, overflow: "hidden", transition: "border-color 0.2s" }}>
                      {/* Header row */}
                      <div onClick={() => setCsExpanded(open ? null : i)} style={{ padding: "14px 18px", cursor: "pointer", display: "flex", gap: 14, alignItems: "center" }}>
                        <div style={{ width: 4, alignSelf: "stretch", background: cs.color, borderRadius: 4, flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                            <span style={{ fontWeight: 900, fontSize: 14, color: open ? cs.color : "#FFF" }}>{cs.client}</span>
                            <span style={{ fontSize: 12, color: MUTED }}>·</span>
                            <span style={{ fontSize: 12, color: "#CCC" }}>{cs.campaign}</span>
                            <span style={{ marginLeft: "auto", display: "flex", gap: 6, flexShrink: 0 }}>
                              <Tag text={cs.region} color={cs.region === "UK" ? "#17A2B8" : "#FF6B35"} />
                              <Tag text={cs.type} color={MUTED} />
                              <Tag text={cs.sector} color="#888" />
                            </span>
                          </div>
                          {/* Stats preview */}
                          <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap" }}>
                            {cs.results.slice(0,3).map((r,j) => (
                              <div key={j}>
                                <span style={{ fontSize: 11, color: MUTED }}>{r.label}: </span>
                                <span style={{ fontSize: 12, fontWeight: 700, color: cs.color }}>{r.val}</span>
                              </div>
                            ))}
                            {cs.budget && <div><span style={{ fontSize: 11, color: MUTED }}>Budget: </span><span style={{ fontSize: 12, fontWeight: 700, color: "#DDD" }}>{cs.budget}</span></div>}
                          </div>
                        </div>
                        <span style={{ color: MUTED, fontSize: 16, flexShrink: 0 }}>{open ? "▲" : "▼"}</span>
                      </div>
                      {/* Expanded */}
                      {open && (
                        <div style={{ borderTop: `1px solid ${BORDER}`, padding: "16px 18px" }}>
                          {/* Brief + Solution */}
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                            <div style={{ background: "#111", borderRadius: 8, padding: "12px 14px" }}>
                              <div style={{ fontSize: 10, fontWeight: 900, color: YELLOW, letterSpacing: 1, marginBottom: 6 }}>BRIEF</div>
                              <p style={{ fontSize: 13, color: "#CCC", lineHeight: 1.6, margin: 0 }}>{cs.brief}</p>
                            </div>
                            <div style={{ background: "#111", borderRadius: 8, padding: "12px 14px" }}>
                              <div style={{ fontSize: 10, fontWeight: 900, color: YELLOW, letterSpacing: 1, marginBottom: 6 }}>SOLUTION</div>
                              <p style={{ fontSize: 13, color: "#CCC", lineHeight: 1.6, margin: 0 }}>{cs.solution}</p>
                            </div>
                          </div>
                          {/* Full results */}
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                            {cs.results.map((r,j) => (
                              <div key={j} style={{ background: "#0D0D0D", border: `1px solid ${cs.color}44`, borderRadius: 8, padding: "10px 14px", minWidth: 110 }}>
                                <div style={{ fontSize: 10, color: MUTED, marginBottom: 3 }}>{r.label}</div>
                                <div style={{ fontSize: 14, fontWeight: 900, color: cs.color }}>{r.val}</div>
                              </div>
                            ))}
                          </div>
                          {/* Why use this */}
                          <div style={{ background: "#111", borderLeft: `3px solid ${YELLOW}`, borderRadius: "0 8px 8px 0", padding: "10px 14px", marginBottom: 14 }}>
                            <span style={{ fontSize: 11, fontWeight: 900, color: YELLOW }}>WHEN TO USE THIS  </span>
                            <span style={{ fontSize: 13, color: "#CCC" }}>{cs.why}</span>
                          </div>
                          {/* Links */}
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                            {cs.monday && <DocChip label="Monday Board" url={cs.monday} />}
                            {cs.pitch && <DocChip label="Pitch / Proposal" url={cs.pitch} />}
                            {cs.ig && <DocChip label="View Post ↗" url={cs.ig} />}
                            {cs.slack && <DocChip label="Slack Channel" url={cs.slack} />}
                            {cs.press && <DocChip label="Press Coverage" url={cs.press} />}
                          </div>
                          <NoteBox id={`cs-note-${i}`} setNote={setNote} notes={notes} placeholder="My notes on this case study..." />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {/* Tools */}
              <div style={{ marginTop: 24, background: "#111", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                <div style={{ fontSize: 12, fontWeight: 900, color: YELLOW, marginBottom: 10, letterSpacing: 1 }}>📚 CASE STUDY TOOLS</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <DocChip label="Case Study Database" url={LINKS.caseStudyDatabase} />
                  <DocChip label="Case Study Finder (Slack)" url={LINKS.caseStudyFinder} />
                  <DocChip label="Case Study Builder GPT" url={LINKS.caseStudyGPT} />
                  <DocChip label="Request New Case Study" url={LINKS.caseStudyRequestForm} />
                  <DocChip label="Best Practices Canvas" url={LINKS.wowCanvas} />
                </div>
              </div>
            </div>
          );
        })()}

        {/* ── PRODUCT & PAGES ── */}
        {activeTab === "product" && (
          <div>
            <SH title="Product & Pages" sub="Know these cold before any meeting." />
            <div style={{ marginTop: 24 }}>
              <Label text="OUR THREE PRODUCTS" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
                {[
                  {name:"Amplification",tier:"Entry Level",uk:"£30k",us:"$60k",cos:"5–20%",desc:"Brand provides the asset. We post it. Fast, scalable, lower cost."},
                  {name:"Integrated Editorial",tier:"Mid-Tier",uk:"£75–100k",us:"$125–150k",cos:"40%",desc:"We create original content in our editorial tone. Most common. Best engagement."},
                  {name:"Bespoke Partnerships",tier:"Premium",uk:"£75–100k+",us:"$125–150k+",cos:"40%",desc:"Full custom — shoots, original formats, talent. Examples: Scream 7, NFL, BK Spongebob."},
                ].map((p,i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 14px" }}>
                    <div style={{ fontSize: 9, fontWeight: 900, color: YELLOW, letterSpacing: 1.5, marginBottom: 5 }}>{p.tier}</div>
                    <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 8 }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: "#AAA", lineHeight: 1.5, marginBottom: 12 }}>{p.desc}</div>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                      <div style={{ fontSize: 12, marginBottom: 3 }}><span style={{ color: MUTED }}>UK min: </span><span style={{ color: YELLOW, fontWeight: 700 }}>{p.uk}</span></div>
                      <div style={{ fontSize: 12, marginBottom: 3 }}><span style={{ color: MUTED }}>US min: </span><span style={{ fontWeight: 600 }}>{p.us}</span></div>
                      <div style={{ fontSize: 12 }}><span style={{ color: MUTED }}>CoS: </span>{p.cos}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                <DocChip label="Commercial Products Hub" url={LINKS.productsHub} />
                <DocChip label="Amplification Rate Card" url={LINKS.ampRateCard} />
                <DocChip label="Paid Media 101 Deck" url={LINKS.paidMedia101} />
              </div>

              <Label text="OUR 15 PAGES — KNOW THESE BEFORE ANY MEETING" />
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 110px 130px", padding: "8px 16px", background: "#111", borderBottom: `1px solid ${BORDER}` }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: MUTED }}>PAGE</span>
                  <span style={{ fontSize: 11, fontWeight: 800, color: MUTED }}>FOLLOWERS</span>
                  <span style={{ fontSize: 11, fontWeight: 800, color: MUTED }}>MONTHLY REACH</span>
                </div>
                {PAGES.map(([name,followers,reach,tag],i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 110px 130px", padding: "9px 16px", borderBottom: i<PAGES.length-1?`1px solid ${BORDER}`:"none" }}>
                    <span style={{ fontSize: 13, color: i<3?"#FFF":"#CCC" }}>{name}{tag==="flagship"&&<span style={{ marginLeft: 6, fontSize: 9, background: YELLOW, color: BLACK, padding: "1px 6px", borderRadius: 10, fontWeight: 800 }}>FLAGSHIP</span>}</span>
                    <span style={{ fontSize: 13, color: "#CCC", fontWeight: 600 }}>{followers}</span>
                    <span style={{ fontSize: 13, color: MUTED }}>{reach}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "#111", border: `1px solid ${YELLOW}44`, borderRadius: 10, padding: "14px 18px", marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 900, color: YELLOW, marginBottom: 6 }}>⚡ THE STAT THAT WINS EVERY PITCH</div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>Industry ER average: <span style={{ color: MUTED }}>under 1%</span> → Our campaigns: <span style={{ color: YELLOW }}>3–12% ER</span></div>
                <div style={{ fontSize: 13, color: MUTED, marginTop: 6 }}>Lead with this in every meeting. Epic Games peaked at 12%. Subway drove 58% purchase intent.</div>
              </div>
              <NoteBox id="product-notes" setNote={setNote} notes={notes} placeholder="My product & pages notes..." />
            </div>
          </div>
        )}

        {/* ── OBJECTIONS ── */}
        {activeTab === "objections" && (
          <div>
            <SH title="Pitch Talk Tracks & Objection Handling" sub="Click each objection to reveal the full response. Practise these out loud." />
            <div style={{ background: "#111", border: `1px solid ${YELLOW}`, borderRadius: 10, padding: "16px 20px", margin: "20px 0" }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: YELLOW, marginBottom: 8, letterSpacing: 1 }}>YOUR OPENING 60 SECONDS</div>
              <p style={{ fontSize: 14, color: "#DDD", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>
                "We run 15 of the internet's most-followed social pages — including Pubity, Memezar, and Dad Says Jokes — with over 175 million followers combined. What makes us different from every other media partner you'll speak to is our engagement rate. The industry average for branded content on social is under 1%. Our campaigns regularly hit 3 to 12%. For [Brand], given your objective around [awareness / consideration / purchase intent], here's why that matters..."
              </p>
            </div>
            <Label text="THE 5 OBJECTIONS YOU'LL HEAR — AND HOW TO HANDLE THEM" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {OBJECTIONS.map((o,i) => {
                const open = objectionOpen === i;
                return (
                  <div key={i} onClick={() => setObjectionOpen(open ? null : i)} style={{ background: CARD, border: `1px solid ${open ? YELLOW : BORDER}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", transition: "all 0.2s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <span style={{ fontSize: 18 }}>💬</span>
                        <span style={{ fontWeight: 700, fontSize: 14, color: open ? YELLOW : "#DDD" }}>"{o.q}"</span>
                      </div>
                      <span style={{ color: MUTED, fontSize: 12 }}>{open ? "▲" : "▼"}</span>
                    </div>
                    {open && (
                      <div style={{ marginTop: 14, background: "#111", borderLeft: `3px solid ${YELLOW}`, padding: "12px 16px", borderRadius: "0 8px 8px 0" }}>
                        <div style={{ fontSize: 11, fontWeight: 900, color: YELLOW, marginBottom: 6, letterSpacing: 1 }}>YOUR RESPONSE</div>
                        <p style={{ fontSize: 14, color: "#CCC", lineHeight: 1.75, margin: 0 }}>{o.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <NoteBox id="obj-notes" setNote={setNote} notes={notes} placeholder="Objections I'm least confident on..." />
          </div>
        )}

        {/* ── TEAM ── */}
        {activeTab === "team" && (
          <div>
            <SH title="Team Directory — Who to Go To" sub="Don't guess. Use this every time." />
            <div style={{ background: "#111", border: `1px solid ${YELLOW}`, borderRadius: 10, padding: "12px 16px", margin: "20px 0", display: "flex", gap: 10 }}>
              <span style={{ fontSize: 18 }}>⚠️</span>
              <div>
                <div style={{ fontWeight: 800, color: YELLOW }}>Rachel goes in every proposal Slack. Every single one.</div>
                <div style={{ fontSize: 13, color: "#AAA", marginTop: 2 }}>Not most of them. All of them. This is non-negotiable.</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {TEAM.map((t,i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 16px", display: "grid", gridTemplateColumns: "180px 1fr" }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 13 }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: YELLOW, marginTop: 2 }}>{t.role}</div>
                  </div>
                  <div style={{ fontSize: 13, color: "#AAA", lineHeight: 1.5 }}>{t.go}</div>
                </div>
              ))}
            </div>
            <Label text="SLACK CHANNELS — JOIN ALL ON DAY 1" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {["#bag-chasers","#global-sales-team","#general","#media-plan-approvals","#strictly-ws","#whats-hot","#industry-news","#ai-challenges","#it-help"].map((c,i) => (
                <CheckItem key={i} section="channels" idx={i} label={c} checks={checks} toggle={toggle} />
              ))}
            </div>
          </div>
        )}

        {/* ── ALL DOCUMENTS ── */}
        {activeTab === "docs" && (
          <div>
            <SH title="All Documents & Links" sub="Every link you need, organised by category. Click to open." />
            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {cat:"🎯 Sales & Pitching",links:[
                  {label:"Creds Deck (Keynote)",url:LINKS.credsDeck},
                  {label:"Creds Deck Script",url:LINKS.credsScript},
                  {label:"2025 Response Template (all proposals)",url:LINKS.responseTemplate},
                  {label:"Amplification Rate Card",url:LINKS.ampRateCard},
                  {label:"Commitment Email Template",url:LINKS.commitmentTemplate},
                  {label:"Case Study Finder",url:LINKS.caseStudyFinder},
                  {label:"Case Study Database (Google Sheet)",url:LINKS.caseStudyDatabase},
                  {label:"Case Study Request Form",url:LINKS.caseStudyRequestForm},
                  {label:"Case Study Builder GPT",url:LINKS.caseStudyGPT},
                ]},
                {cat:"📋 Briefing & Process",links:[
                  {label:"Campaign Briefing Springboard Form",url:LINKS.springboard},
                  {label:"Procedure Overview for Sales",url:LINKS.procedureOverview},
                  {label:"New Seller Onboarding Hub",url:LINKS.onboardingHub},
                  {label:"Commercial Policies (Restricted Categories, Ad Policy, CoS)",url:LINKS.commercialPolicies},
                  {label:"Best Practice WOW Canvas",url:LINKS.wowCanvas},
                ]},
                {cat:"📂 SharePoint — Source of Truth",links:[
                  {label:"Brand Partnerships Commercial Hub (root)",url:LINKS.sharepoint},
                  {label:"Commercial Team Business Plan 2026",url:LINKS.businessPlan},
                  {label:"Brand Partnerships Qualifying Prospects",url:LINKS.qualifyingProspects},
                  {label:"Cost Tracker",url:LINKS.costTracker},
                ]},
                {cat:"🛠️ Tools & Training",links:[
                  {label:"HubSpot App",url:LINKS.hubspotApp},
                  {label:"HubSpot Sales Extension Guide (Slack Canvas)",url:LINKS.hubspotGuide},
                  {label:"HubSpot Sales Academy (free course)",url:LINKS.hubspotAcademy},
                  {label:"ZoomInfo App",url:LINKS.zoominfoApp},
                  {label:"Myles' ZoomInfo Guide",url:LINKS.zoominfoGuide},
                  {label:"ZoomInfo University",url:LINKS.zoominfoAcademy},
                  {label:"Media Radar App",url:LINKS.mediaRadarApp},
                  {label:"Monday.com Deliverables Tracker",url:LINKS.mondayTracker},
                  {label:"Monday.com Content Calendar",url:LINKS.mondayCalendar},
                  {label:"Demographics Pro Dashboard",url:LINKS.demographicsPro},
                  {label:"Demographics Pro AI Bot (ChatGPT)",url:LINKS.demographicsGPT},
                ]},
                {cat:"📚 Essential Reading",links:[
                  {label:"Welcome Deck — Start here",url:LINKS.welcomeDeck},
                  {label:"Paid Media 101 Deck",url:LINKS.paidMedia101},
                  {label:"Commercial Products Hub",url:LINKS.productsHub},
                  {label:"Deliverables Tracker",url:LINKS.deliverablesTracker},
                ]},
              ].map((g,i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 12 }}>{g.cat}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {g.links.map((l,j) => (
                      <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" style={{
                        display: "flex", alignItems: "center", gap: 8, padding: "8px 10px",
                        background: "#111", borderRadius: 7, border: `1px solid ${BORDER}`,
                        color: "#CCC", textDecoration: "none", fontSize: 13, transition: "all 0.15s",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = YELLOW; e.currentTarget.style.color = YELLOW; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = "#CCC"; }}
                      >
                        <span style={{ fontSize: 14 }}>📄</span>{l.label}<span style={{ marginLeft: "auto", fontSize: 11, color: MUTED }}>↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CHECKLIST ── */}
        {activeTab === "checklist" && (
          <div>
            <SH title="Full Onboarding Checklist" sub={`${completed} of ${TOTAL} completed · ${pct}% done`} />
            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {key:"day1",title:"📅 Day 1 — Get the Basics"},
                {key:"products",title:"🏢 Week 1 — Know the Product"},
                {key:"casestudies",title:"📊 Case Studies & Stats"},
                {key:"sales",title:"🎯 Sales Process"},
                {key:"tools",title:"✅ Tools & Access"},
                {key:"compliance",title:"⚠️ Compliance & Process"},
                {key:"reading",title:"📚 Essential Reading"},
                {key:"knowledge",title:"🧠 Knowledge Check"},
              ].map(({key,title}) => {
                const items = ALL_CHECKS[key];
                const done = items.filter((_,i) => checks[`${key}-${i}`]).length;
                return (
                  <div key={key} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <div style={{ fontWeight: 800, fontSize: 14 }}>{title}</div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: done===items.length?GREEN:YELLOW }}>{done}/{items.length}</span>
                    </div>
                    {items.map((label,i) => <CheckItem key={i} section={key} idx={i} label={label} checks={checks} toggle={toggle} />)}
                    <NoteBox id={`cl-${key}`} setNote={setNote} notes={notes} placeholder={`Notes for ${title}...`} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "14px 24px", textAlign: "center", color: MUTED, fontSize: 12, marginTop: 32 }}>
        Questions? Message <strong style={{ color: "#DDD" }}>Rachel</strong> or <strong style={{ color: "#DDD" }}>Alex S</strong> on Slack. Let's go. 🟡
      </div>
    </div>
  );
}

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────
function SH({ title, sub }) {
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 14 }}>
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 900, letterSpacing: -0.3 }}>{title}</h2>
      {sub && <div style={{ fontSize: 13, color: MUTED, marginTop: 5 }}>{sub}</div>}
    </div>
  );
}
function Label({ text }) {
  return <div style={{ fontSize: 11, fontWeight: 900, color: YELLOW, letterSpacing: 1.5, marginBottom: 12 }}>{text}</div>;
}
function DocChip({ label, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      background: "#1E1E1E", border: `1px solid #3A3A3A`,
      borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600,
      color: "#AAA", textDecoration: "none", transition: "all 0.15s", whiteSpace: "nowrap",
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = YELLOW; e.currentTarget.style.color = YELLOW; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "#3A3A3A"; e.currentTarget.style.color = "#AAA"; }}
    >📄 {label} ↗</a>
  );
}
function CheckItem({ section, idx, label, checks, toggle }) {
  const id = `${section}-${idx}`;
  const done = !!checks[id];
  return (
    <div onClick={() => toggle(id)} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "7px 0", cursor: "pointer", borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${done ? YELLOW : "#444"}`, background: done ? YELLOW : "transparent", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
        {done && <span style={{ color: BLACK, fontSize: 11, fontWeight: 900 }}>✓</span>}
      </div>
      <span style={{ color: done ? MUTED : "#DDD", fontSize: 13, lineHeight: 1.5, textDecoration: done ? "line-through" : "none", transition: "all 0.2s" }}>{label}</span>
    </div>
  );
}
function Tag({ text, color }) {
  return (
    <span style={{ background: `${color}22`, border: `1px solid ${color}55`, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700, color: color, whiteSpace: "nowrap" }}>
      {text}
    </span>
  );
}

  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ fontSize: 10, fontWeight: 800, color: YELLOW, marginBottom: 4, letterSpacing: 1 }}>📝 MY NOTES</div>
      <textarea
        value={notes[id] || ""}
        onChange={e => setNote(id, e.target.value)}
        placeholder={placeholder || "Add your notes here..."}
        onClick={e => e.stopPropagation()}
        style={{ width: "100%", background: "#0D0D0D", border: `1px solid ${BORDER}`, color: "#CCC", borderRadius: 6, padding: "8px 12px", fontSize: 13, resize: "vertical", minHeight: 64, fontFamily: "inherit", outline: "none", boxSizing: "border-box", lineHeight: 1.6 }}
      />
    </div>
  );
}
