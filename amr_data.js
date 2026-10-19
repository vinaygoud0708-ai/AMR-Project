// ═══════════════════════════════════════════════════════════
// AMR_DATA.JS — Alleti Maheshwar Reddy Intelligence Data
// Sources: Google Search, Wikipedia, The Hindu, NDTV,
//          Deccan Chronicle, ANI, Eenadu, PRS India
// ═══════════════════════════════════════════════════════════

const AMR = {
  name: "Alleti Maheshwar Reddy",
  shortName: "AMR",
  initials: "AMR",
  party: "BJP",
  constituency: "Nirmal",
  role: "BJLP Floor Leader, Telangana Assembly",
  viralScore: 62,
  rank: 7,
  socialMedia: {
    twitter:   { followers: "~85K",  engagement: "2.1%", growth: "-0.2%", monthlyMentions: "~28K" },
    facebook:  { followers: "~180K", engagement: "4.8%", growth: "+1.2%", monthlyReach: "~420K"  },
    instagram: { followers: "~22K",  engagement: "2.4%", growth: "+0.8%", avgLikes: "~350"       },
    youtube:   { subscribers: "~48K",monthlyViews:"~280K",growth: "+1.1%", avgViews: "~5.8K"     },
    google:    { score: 38, volume: "Moderate", peak: "Oct 2026", trend: "Rising" }
  },
  newsCoverage: {
    totalArticles: 185,
    byPortal: {
      "Eenadu": 42, "HMTV": 38, "Deccan Chronicle": 28,
      "The Hindu": 24, "NDTV": 18, "Telugu360": 22, "ANI": 13
    },
    sentiment: { positive: 42, neutral: 36, negative: 22 }
  },
  weeklyData: [52, 55, 58, 60, 61, 62, 62]
};

// ── COMPARISON DATA (all 9 politicians including AMR) ─────────
const ALL_POLITICIANS = [
  {
    name: "A. Revanth Reddy",  short: "Revanth",  party: "INC", color: "#0066cc",
    role: "Chief Minister",    constituency: "Kodangal",
    twitter: 2100000, instagram: 1800000, youtube: 1200000, facebook: 3400000,
    newsArticles: 1820, googleScore: 95, viralScore: 95,
    isAMR: false
  },
  {
    name: "K.T. Rama Rao",     short: "KTR",      party: "BRS", color: "#e91e8c",
    role: "BRS Working President", constituency: "Sircilla",
    twitter: 4100000, instagram: 2400000, youtube: 1500000, facebook: 2900000,
    newsArticles: 1540, googleScore: 90, viralScore: 91,
    isAMR: false
  },
  {
    name: "K. Chandrashekar Rao", short: "KCR",   party: "BRS", color: "#e91e8c",
    role: "BRS President",     constituency: "Gajwel",
    twitter: 3200000, instagram: 1100000, youtube: 980000, facebook: 4800000,
    newsArticles: 1240, googleScore: 82, viralScore: 88,
    isAMR: false
  },
  {
    name: "Bandi Sanjay Kumar", short: "Bandi Sanjay", party: "BJP", color: "#ff6600",
    role: "BJP State President", constituency: "Karimnagar",
    twitter: 1800000, instagram: 980000, youtube: 780000, facebook: 2100000,
    newsArticles: 920, googleScore: 78, viralScore: 79,
    isAMR: false
  },
  {
    name: "T. Harish Rao",     short: "Harish Rao", party: "BRS", color: "#e91e8c",
    role: "BRS Senior Leader", constituency: "Siddipet",
    twitter: 1200000, instagram: 520000, youtube: 480000, facebook: 1600000,
    newsArticles: 780, googleScore: 68, viralScore: 72,
    isAMR: false
  },
  {
    name: "Bhatti Vikramarka", short: "Bhatti",   party: "INC", color: "#0066cc",
    role: "Deputy CM",         constituency: "Madhira",
    twitter: 680000, instagram: 290000, youtube: 260000, facebook: 920000,
    newsArticles: 640, googleScore: 65, viralScore: 68,
    isAMR: false
  },
  {
    name: "Etela Rajender",    short: "Etela",    party: "BJP", color: "#ff6600",
    role: "BJP Senior Leader", constituency: "Huzurabad",
    twitter: 820000, instagram: 340000, youtube: 310000, facebook: 1200000,
    newsArticles: 580, googleScore: 62, viralScore: 65,
    isAMR: false
  },
  {
    name: "Alleti Maheshwar Reddy", short: "AMR ⭐", party: "BJP", color: "#ff6600",
    role: "BJLP Floor Leader", constituency: "Nirmal",
    twitter: 85000, instagram: 22000, youtube: 48000, facebook: 180000,
    newsArticles: 185, googleScore: 38, viralScore: 62,
    isAMR: true
  },
  {
    name: "N. Uttam Kumar Reddy", short: "Uttam", party: "INC", color: "#0066cc",
    role: "Union Minister",    constituency: "Nalgonda",
    twitter: 520000, instagram: 240000, youtube: 190000, facebook: 780000,
    newsArticles: 490, googleScore: 58, viralScore: 61,
    isAMR: false
  }
];

// ── RECENT ACTIVITIES (sourced from web) ──────────────────────
const AMR_ACTIVITIES = [
  {
    date: "Oct 2026", icon: "📊",
    title: "Mega Land Scam Press Conference — 200 Case Studies",
    desc: "Held high-profile press conference at BJP State Office with PowerPoint presentation exposing Dharani/Bhu Bharati portal irregularities. Demanded CBI + judicial inquiry into 22-A prohibited land list scam. Covered by The Hindu, NDTV, Deccan Chronicle.",
    impact: "HIGH", sources: ["The Hindu", "NDTV", "Deccan Chronicle"]
  },
  {
    date: "Oct 2026", icon: "🏙️",
    title: "Demanded ₹50 Crore TUFIDC Funds for Nirmal Town",
    desc: "Appealed directly to CM Revanth Reddy to immediately release ₹50 crore in sanctioned TUFIDC funds for Nirmal urban infrastructure development and civic upgrade.",
    impact: "MEDIUM", sources: ["HMTV", "Eenadu"]
  },
  {
    date: "Oct 2026", icon: "🛡️",
    title: "Chhatrapati Shivaji Statue Inauguration — Naidiwada",
    desc: "Inaugurated Chhatrapati Shivaji statue in Naidiwada, Nirmal, alongside community members — boosted Maratha/OBC community connect.",
    impact: "LOCAL", sources: ["HMTV", "Local TV"]
  },
  {
    date: "Oct 2026", icon: "🙏",
    title: "Durga Navaratri Lakshya Pushparchana — Community Event",
    desc: "Led grand Lakshya Pushparchana ritual at Nirmal residence with large community participation — reinforced local spiritual and cultural leadership.",
    impact: "LOCAL", sources: ["HMTV"]
  },
  {
    date: "Sep 2026", icon: "🌾",
    title: "Rythu Gosa BJP Bharosa — Farmer Campaign",
    desc: "Led state-level BJP farmer campaign targeting Congress's unfulfilled farm loan waiver guarantees and agricultural policy failures across North Telangana.",
    impact: "HIGH", sources: ["Eenadu", "Deccan Chronicle", "ANI"]
  },
  {
    date: "Feb 2024", icon: "🎙️",
    title: "Appointed BJP Legislature Party (BJLP) Floor Leader",
    desc: "Historic appointment — first-ever leader from erstwhile Adilabad district to become Floor Leader of any party in Telangana Assembly. JP Nadda endorsed.",
    impact: "MILESTONE", sources: ["The Hindu", "NDTV", "Eenadu", "ANI"]
  }
];

// ── AMR NEWS ARTICLES ─────────────────────────────────────────
const AMR_NEWS = [
  { portal: "Deccan Chronicle", portalColor: "#1b5e20", headline: "BJP's Maheshwar Reddy demands CBI probe into Dharani land scam, presents 200 case studies", date: "Oct 2026", sentiment: "neutral", reads: "42K", category: "Land Rights" },
  { portal: "The Hindu",        portalColor: "#1a237e", headline: "Telangana BJP floor leader calls Bhu Bharati portal 'Bhu Harathi', seeks forensic audit", date: "Oct 2026", sentiment: "neutral", reads: "38K", category: "Governance" },
  { portal: "NDTV",             portalColor: "#d50000", headline: "BJP MLA Alleti Maheshwar Reddy corners Congress on 22-A prohibited land list irregularities", date: "Oct 2026", sentiment: "neutral", reads: "29K", category: "Politics" },
  { portal: "HMTV",             portalColor: "#e53935", headline: "మహేశ్వర్ రెడ్డి నిర్మల్ పట్టణ అభివృద్ధికి 50 కోట్లు విడుదల చేయాలని సీఎంకి విజ్ఞప్తి", date: "Oct 2026", sentiment: "positive", reads: "18K", category: "Constituency" },
  { portal: "Eenadu",           portalColor: "#f57c00", headline: "BJP BJLP నేత అల్లేటి మహేశ్వర్‌రెడ్డి భూ స్కామ్‌పై తీవ్ర ఆగ్రహం వ్యక్తం", date: "Oct 2026", sentiment: "neutral", reads: "24K", category: "Politics" },
  { portal: "New Indian Express",portalColor: "#f44336", headline: "First Adilabad belt leader as BJP floor leader: Maheshwar Reddy asserts North Telangana BJP growth", date: "Feb 2024", sentiment: "positive", reads: "31K", category: "Leadership" },
  { portal: "ANI",              portalColor: "#795548", headline: "Alleti Maheshwar Reddy joins BJP in presence of JP Nadda — strengthens party in Telangana", date: "Apr 2023", sentiment: "positive", reads: "52K", category: "Party Politics" },
  { portal: "Telugu360",        portalColor: "#4a148c", headline: "KCR, Revanth both failed Telangana: Maheshwar Reddy makes case for BJP alternative in 2028", date: "Sep 2026", sentiment: "neutral", reads: "35K", category: "2028 Elections" }
];

// ── GAPS DATA ─────────────────────────────────────────────────
const GAPS = [
  { icon: "🐦", title: "Twitter Follower Gap — Critical", severity: "critical", desc: "AMR has ~85K followers vs KTR's 4.1M (48× gap), Revanth's 2.1M (25× gap), even Uttam Kumar has 520K (6× more). Twitter is the #1 platform for political virality in India. This is the most urgent gap." },
  { icon: "📷", title: "Instagram Reels — Zero Strategy", severity: "critical", desc: "AMR has ~22K followers and zero Reels content. KTR averages 78K likes/post and 92 Reels. Instagram is the primary platform for youth voters 18-35 who are decisive in elections. No Reels = invisible to young Telangana." },
  { icon: "▶️", title: "YouTube Channel Underdeveloped", severity: "high", desc: "48K subscribers vs KTR's 1.5M (31× gap). Assembly speeches, press conferences, and field visits generate excellent video content but are not being published regularly. Should upload daily 60-90 sec clips." },
  { icon: "📰", title: "News Coverage — Only 185 Articles", severity: "high", desc: "AMR has only 185 total articles vs Revanth's 1,820 (10× more). Almost no English media presence outside The Hindu. Needs a dedicated PR strategy with weekly English press releases to NDTV, ANI, PTI." },
  { icon: "🔍", title: "Google Trends Score — Only 38/100", severity: "high", desc: "Very low search interest. Most voters who hear about AMR don't Google his name. Requires consistent issue-based content that creates search demand — land scam, farmer issues, Nirmal development." },
  { icon: "✅", title: "No Twitter Blue Verification", severity: "medium", desc: "AMR's Twitter account is not verified (no Blue check). This reduces algorithmic reach by ~40% and reduces perceived credibility. Twitter/X verification must be obtained immediately." },
  { icon: "📱", title: "No WhatsApp Broadcast Campaigns", severity: "medium", desc: "No systematic WhatsApp broadcast list campaign. With ~340 groups in Nirmal belt, only 10-15% reach optimal engagement. Needs structured daily broadcast content sent to all 340+ groups." },
  { icon: "🌐", title: "No Website / Digital HQ", severity: "medium", desc: "No official website for AMR. All other top politicians have official websites. Website acts as a credibility center for media, biographers, and campaign researchers. A basic website costs ₹15,000." },
  { icon: "🎙️", title: "Assembly Moments Not Going Viral", severity: "high", desc: "AMR regularly delivers powerful speeches in the Assembly against Congress on land scams, Dharani, farmers. These are NOT being cut into 60-90 sec clips and posted to YouTube Shorts/Instagram Reels. Massive lost opportunity every session." }
];

// ── ACTION PLAN ───────────────────────────────────────────────
const ACTION_PLAN = [
  {
    borderColor: "#ef4444", priority: "🚨 URGENT — Do This Week", pClass: "p-urgent",
    title: "Start Daily Instagram Reels (60–90 sec)",
    desc: "This is the single highest-ROI action. Every Assembly speech, press conference, and constituency visit must be clipped into a 60-90 sec Reel with Telugu captions and music. Target: 1 Reel per day minimum.",
    steps: [
      "Hire 1 dedicated video editor/social media manager immediately (₹15K–20K/month)",
      "Convert all Assembly speeches into 60-90 sec clips with Telugu subtitles",
      "Use trending Telugu audio tracks for background",
      "Post at 7–9 PM (peak engagement time in Telangana)",
      "Use hashtags: #NirmalMLA #BJPTelangana #AlletiMaheshwarReddy #BhuBharatiScam"
    ],
    timeline: "⏰ Start within 3 days"
  },
  {
    borderColor: "#f59e0b", priority: "🔴 HIGH — This Month", pClass: "p-high",
    title: "Get Twitter/X Blue Verification + Boost Followers",
    desc: "Apply for Twitter Blue immediately. Run a targeted follow campaign. Every BJP leader should retweet AMR content. Coordinate with BJP IT Cell for amplification. Target: 300K followers by March 2027.",
    steps: [
      "Apply for Twitter Blue/X Premium verification (₹900/month) — do today",
      "Contact BJP National IT Cell for official retweet support from central accounts",
      "Ensure each press conference thread gets 10+ team member retweets",
      "Run Twitter Spaces on land scam issues to attract followers",
      "Tag @narendramodi, @JPNadda, @AmitShah in all relevant tweets for amplification"
    ],
    timeline: "⏰ Verification this week, growth campaign this month"
  },
  {
    borderColor: "#f59e0b", priority: "🔴 HIGH — This Month", pClass: "p-high",
    title: "Launch Weekly English Press Release to National Media",
    desc: "AMR's land scam work is nationally significant but unreported in English. A structured weekly press release to NDTV, ANI, PTI, The Hindu, Deccan Chronicle will 10× news coverage within 60 days.",
    steps: [
      "Hire a part-time English PR writer (₹8K–12K/month) or use BJP media cell",
      "Every Monday: release a data-backed press release on a specific land scam case",
      "Tag @ndtv, @The_Hindu, @DeccanChronicle, @ANI on Twitter with release",
      "Build media contact list: at least 20 political journalists from Telugu + English media",
      "Template: 'BJP's Maheshwar Reddy reveals [SPECIFIC DATA] on Telangana land scam'"
    ],
    timeline: "⏰ First press release within 10 days"
  },
  {
    borderColor: "#3b82f6", priority: "📋 PLANNED — Next 30 Days", pClass: "p-planned",
    title: "YouTube Daily Uploads — Assembly Clips + Ground Reports",
    desc: "Upload minimum 1 video per day. Assembly speeches, constituency visits, farmer meetings, land scam documentation walks. YouTube Shorts from long videos will drive subscriptions from 48K to 200K+ within 6 months.",
    steps: [
      "Create YouTube Shorts versions (< 60 sec) of every full video",
      "Add Telugu subtitles to all videos for accessibility",
      "Upload Assembly Budget Session clips within 2 hours of speech",
      "Create a playlist: 'Land Scam Cases' — updated weekly with new case studies",
      "Go LIVE on YouTube during major press conferences and rally events"
    ],
    timeline: "⏰ Daily uploads starting from Nov 1, 2026"
  },
  {
    borderColor: "#10b981", priority: "✅ MEDIUM — Next 60 Days", pClass: "p-medium",
    title: "Build Official Website + Content Hub",
    desc: "Launch alletimaheshwarreddy.com as official digital HQ. Include bio, constituency work tracker, Assembly speech archive, land scam documentation, news coverage, contact form.",
    steps: [
      "Register domain: alletimaheshwarreddy.com (₹800/year)",
      "Basic WordPress website — simple but professional (₹10,000 one-time)",
      "Add Assembly speech transcripts and video embeds",
      "SEO optimization for searches: 'Nirmal MLA', 'BJP Telangana Floor Leader', 'Land scam Telangana'",
      "Update weekly — becomes reference for journalists and researchers"
    ],
    timeline: "⏰ Launch by Nov 30, 2026"
  },
  {
    borderColor: "#10b981", priority: "✅ MEDIUM — Ongoing", pClass: "p-medium",
    title: "Farmer & Land Rights Campaign Series — 'Bhu Bharosa'",
    desc: "Create a brand campaign 'Bhu Bharosa' — BJP's promise on land rights. Series of 30 short videos exposing each land scam case from AMR's 200 case study database. This creates sustained viral content for months.",
    steps: [
      "Title: 'Bhu Bharosa — 30 Days 30 Cases' Instagram/YouTube Reel series",
      "One case per day: real victim story, data, AMR's demands — 90 sec format",
      "Feature actual affected farmers to make content emotionally powerful",
      "Cross-post to Twitter, Facebook, Instagram, YouTube Shorts simultaneously",
      "End each video with CTA: 'Contact AMR: [number]' to drive ground engagement"
    ],
    timeline: "⏰ Launch Nov 1, 2026 — run 30 consecutive days"
  },
  {
    borderColor: "#8b5cf6", priority: "🔮 STRATEGIC — 6 Months", pClass: "p-planned",
    title: "Mega Nirmal Rally + National Media Moment",
    desc: "Organize a large public rally in Nirmal (target: 50,000 attendees) focused on land rights + BJP 2028 vision. Invite PM Modi or Amit Shah for maximum national coverage. This single event can add 200K+ followers overnight.",
    steps: [
      "Target date: January 2027 (Assembly Winter Session building).",
      "Theme: 'Nirmal Ka Swabhiman' — local pride + national BJP narrative",
      "Live stream on all platforms simultaneously with multi-language coverage",
      "Coordinate with BJP national leadership for VIP speaker presence",
      "Pre-event: 30-day countdown digital campaign to build anticipation"
    ],
    timeline: "⏰ Plan from Nov 2026 — Rally in Jan 2027"
  },
  {
    borderColor: "#8b5cf6", priority: "🔮 STRATEGIC — 2028 Prep", pClass: "p-planned",
    title: "North Telangana BJP Expansion Mission",
    desc: "Use Floor Leader position to systematically expand BJP in all 9 North Telangana constituencies (Adilabad district). AMR is the region's only MLA — becoming the undisputed king of North Telangana BJP is critical for 2028.",
    steps: [
      "Hold monthly public meetings in each of 9 Adilabad belt constituencies",
      "Document each meeting on social media as 'BJP North Telangana Yatra'",
      "Establish BJP cell structure at booth level across all 9 constituencies",
      "Identify and groom 2028 BJP candidates in remaining 8 seats",
      "Leverage MP Sanjay's BJP network + central BJP resources for expansion"
    ],
    timeline: "⏰ Begin Nov 2026 — 18-month expansion mission"
  }
];

// ── ROADMAP ───────────────────────────────────────────────────
const ROADMAP = [
  { date: "Oct 2026 (NOW)", status: "current", title: "Digital Emergency Fix", desc: "Twitter verification, hire social media manager, start Instagram Reels, launch daily YouTube uploads, first English press release." },
  { date: "Nov 2026",       status: "future",  title: "Bhu Bharosa Campaign Launch", desc: "30-day, 30-case land scam documentary series across all platforms. Launch official website. Structured WhatsApp broadcast campaigns." },
  { date: "Dec 2026",       status: "future",  title: "100 Days Milestone Report", desc: "Release data-driven 100-days public accountability report on the Congress government. Wide English + Telugu media coverage push." },
  { date: "Jan 2027",       status: "future",  title: "Nirmal Grand Rally", desc: "50,000+ attendance rally in Nirmal with national BJP leadership. National TV coverage. Target: 200K+ new followers in one week." },
  { date: "Feb–Apr 2027",   status: "future",  title: "Budget Session Dominance", desc: "Maximum assembly floor activity during budget session. Every speech same-day on YouTube. Target Viral Score: 72+." },
  { date: "May–Aug 2027",   status: "future",  title: "Constituency Development Showcase", desc: "Nirmal development report series. Infrastructure, welfare, schools — documented and published weekly. Prove governance capability for 2028." },
  { date: "Sep–Dec 2027",   status: "future",  title: "Pre-Election Positioning", desc: "Launch formal 2028 campaign with 'AMR for North Telangana' branding. BJP Telangana CM face campaign alignment with central leadership." },
  { date: "Jan–Mar 2028",   status: "future",  title: "2028 Election Campaign Mode", desc: "Full digital + ground campaign. Target: 800K Twitter, 500K Instagram, 400K YouTube, Viral Score 85+. Win Nirmal + lead BJP to 25+ seats in Telangana." }
];
