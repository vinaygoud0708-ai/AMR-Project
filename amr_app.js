// ═══════════════════════════════════════════════════════════
// AMR_APP.JS — Application Logic for AMR Dashboard
// ═══════════════════════════════════════════════════════════

function partyColor(p){return p==='BRS'?'#e91e8c':p==='INC'?'#0066cc':'#ff6600'}
function formatNum(n){if(n>=1000000)return(n/1000000).toFixed(1)+'M';if(n>=1000)return(n/1000).toFixed(0)+'K';return n}

// ── CHARTS ───────────────────────────────────────────────────

// Platform followers radar
function initPlatformChart(){
  const ctx = document.getElementById('platformFollowerChart').getContext('2d');
  new Chart(ctx,{
    type:'bar',
    data:{
      labels:['Twitter','Facebook','Instagram','YouTube'],
      datasets:[
        {label:'Alleti Maheshwar Reddy',data:[85000,180000,22000,48000],backgroundColor:'rgba(255,102,0,0.7)',borderColor:'#ff6600',borderWidth:2,borderRadius:6},
        {label:'KTR (Comparison)',data:[4100000,2900000,2400000,1500000],backgroundColor:'rgba(233,30,140,0.2)',borderColor:'#e91e8c',borderWidth:2,borderRadius:6}
      ]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{position:'top',labels:{color:'#94a3b8',font:{size:11},padding:12}},
        tooltip:{backgroundColor:'#1a2640',titleColor:'#f1f5f9',bodyColor:'#94a3b8',
          callbacks:{label:ctx=>`${ctx.dataset.label}: ${formatNum(ctx.parsed.y)}`}}
      },
      scales:{
        x:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#475569'}},
        y:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#475569',callback:v=>formatNum(v)}}
      }
    }
  });
}

// 6-month growth trend
function initGrowthChart(){
  const ctx = document.getElementById('growthTrendChart').getContext('2d');
  new Chart(ctx,{
    type:'line',
    data:{
      labels:['May','Jun','Jul','Aug','Sep','Oct'],
      datasets:[
        {label:'Alleti Maheshwar Reddy',data:[52,55,58,60,61,62],borderColor:'#ff6600',backgroundColor:'rgba(255,102,0,0.1)',tension:0.4,fill:true,pointBackgroundColor:'#ff6600',pointRadius:5,borderWidth:2.5},
        {label:'Bandi Sanjay (BJP)',data:[68,70,74,78,76,79],borderColor:'#ff8c00',backgroundColor:'rgba(255,140,0,0.05)',tension:0.4,fill:false,pointBackgroundColor:'#ff8c00',pointRadius:4,borderDash:[5,3]},
        {label:'Etela Rajender (BJP)',data:[58,60,63,65,64,65],borderColor:'#ffd700',backgroundColor:'transparent',tension:0.4,fill:false,pointBackgroundColor:'#ffd700',pointRadius:4,borderDash:[3,3]}
      ]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{position:'top',labels:{color:'#94a3b8',font:{size:11},padding:10}},
        tooltip:{backgroundColor:'#1a2640',titleColor:'#f1f5f9',bodyColor:'#94a3b8'}
      },
      scales:{
        x:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#475569'}},
        y:{min:40,max:90,grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#475569'}}
      }
    }
  });
}

// Viral rank bar chart
function initViralRankChart(){
  const ctx = document.getElementById('viralRankChart').getContext('2d');
  const sorted=[...ALL_POLITICIANS].sort((a,b)=>b.viralScore-a.viralScore);
  new Chart(ctx,{
    type:'bar',
    data:{
      labels:sorted.map(p=>p.short),
      datasets:[{
        label:'Viral Score',
        data:sorted.map(p=>p.viralScore),
        backgroundColor:sorted.map(p=>p.isAMR?'rgba(255,102,0,0.9)':partyColor(p.party)+'44'),
        borderColor:sorted.map(p=>p.isAMR?'#ff6600':partyColor(p.party)),
        borderWidth:sorted.map(p=>p.isAMR?3:1),
        borderRadius:6
      }]
    },
    options:{
      indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{display:false},
        tooltip:{backgroundColor:'#1a2640',titleColor:'#f1f5f9',bodyColor:'#94a3b8'}
      },
      scales:{
        x:{min:0,max:100,grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#475569'}},
        y:{grid:{display:false},ticks:{color:'#94a3b8',font:{size:11}}}
      }
    }
  });
}

// Radar comparison
function initRadarChart(){
  const ctx = document.getElementById('radarChart').getContext('2d');
  new Chart(ctx,{
    type:'radar',
    data:{
      labels:['Twitter','Facebook','Instagram','YouTube','News Coverage','Google Trends'],
      datasets:[
        {
          label:'Alleti Maheshwar Reddy',
          data:[8,14,6,5,10,38],
          borderColor:'#ff6600',backgroundColor:'rgba(255,102,0,0.15)',pointBackgroundColor:'#ff6600',borderWidth:2.5,pointRadius:5
        },
        {
          label:'KTR (Leader)',
          data:[100,60,100,100,84,90],
          borderColor:'#e91e8c',backgroundColor:'rgba(233,30,140,0.08)',pointBackgroundColor:'#e91e8c',borderWidth:2,pointRadius:4,borderDash:[5,3]
        },
        {
          label:'Bandi Sanjay (BJP Peer)',
          data:[44,43,41,52,50,78],
          borderColor:'#ffd700',backgroundColor:'rgba(255,215,0,0.06)',pointBackgroundColor:'#ffd700',borderWidth:1.5,pointRadius:3,borderDash:[3,3]
        }
      ]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{position:'top',labels:{color:'#94a3b8',font:{size:10},padding:8}},
        tooltip:{backgroundColor:'#1a2640',titleColor:'#f1f5f9',bodyColor:'#94a3b8'}
      },
      scales:{
        r:{
          grid:{color:'rgba(255,255,255,0.08)'},
          ticks:{display:false},
          pointLabels:{color:'#94a3b8',font:{size:10}},
          min:0,max:100
        }
      }
    }
  });
}

// News coverage donut
function initNewsCoverageChart(){
  const ctx = document.getElementById('newsCoverageChart').getContext('2d');
  const portals=Object.keys(AMR.newsCoverage.byPortal);
  const vals=Object.values(AMR.newsCoverage.byPortal);
  const colors=['#f57c00','#e53935','#1b5e20','#1a237e','#d50000','#4a148c','#795548'];
  new Chart(ctx,{
    type:'doughnut',
    data:{
      labels:portals,
      datasets:[{data:vals,backgroundColor:colors,borderColor:'#111827',borderWidth:3}]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{position:'right',labels:{color:'#94a3b8',font:{size:11},padding:8}},
        tooltip:{backgroundColor:'#1a2640',titleColor:'#f1f5f9',bodyColor:'#94a3b8'}
      },cutout:'60%'
    }
  });
}

// ── COMPARISON TABLE ──────────────────────────────────────────
function renderComparisonTable(){
  const sorted=[...ALL_POLITICIANS].sort((a,b)=>b.viralScore-a.viralScore);
  const tbody=sorted.map((p,i)=>{
    const isAmr=p.isAMR;
    const c=partyColor(p.party);
    const rankEmoji=i===0?'🥇':i===1?'🥈':i===2?'🥉':`#${i+1}`;
    const amrViral=62;
    const gap=p.viralScore-amrViral;
    const gapStr=isAmr?'<span style="color:#ff6600;font-weight:800">← YOU</span>':
      gap>0?`<span style="color:#ef4444">-${gap} pts</span>`:`<span style="color:#10b981">+${Math.abs(gap)} pts</span>`;
    const partyStyle=`background:${c}22;color:${c};border:1px solid ${c}44;padding:2px 7px;border-radius:8px;font-size:10px;font-weight:700`;
    return `<tr class="${isAmr?'highlight-row':''}">
      <td><span style="font-size:16px">${rankEmoji}</span></td>
      <td>
        <div class="pol-name-cell">
          <div class="pol-avatar-sm" style="background:${c}22;color:${c};border:1px solid ${c}44">${p.short.replace(' ⭐','').split(' ').map(w=>w[0]).join('').slice(0,3)}</div>
          <div>
            <div style="font-weight:700;color:${isAmr?'#ff6600':'#f1f5f9'};font-size:13px">${p.name}</div>
            ${isAmr?'<span class="you-label">YOU</span>':''}
          </div>
        </div>
      </td>
      <td><span style="${partyStyle}">${p.party}</span></td>
      <td style="font-size:12px;color:#94a3b8;max-width:160px">${p.role}</td>
      <td style="font-weight:700">${formatNum(p.twitter)}</td>
      <td style="font-weight:700">${formatNum(p.instagram)}</td>
      <td style="font-weight:700">${formatNum(p.youtube)}</td>
      <td style="font-weight:700">${formatNum(p.facebook)}</td>
      <td>${p.newsArticles.toLocaleString()}</td>
      <td>
        <div class="bar-cell">
          <div class="bar-mini"><div class="bar-fill" style="width:${p.googleScore}%;background:${c}"></div></div>
          <span class="score-num" style="color:${c}">${p.googleScore}</span>
        </div>
      </td>
      <td>
        <div class="bar-cell">
          <div class="bar-mini"><div class="bar-fill" style="width:${p.viralScore}%;background:${isAmr?'#ff6600':c}"></div></div>
          <span class="score-num" style="color:${isAmr?'#ff6600':c};font-size:16px">${p.viralScore}</span>
        </div>
      </td>
      <td>${gapStr}</td>
    </tr>`;
  }).join('');
  document.getElementById('comparisonTable').innerHTML+=tbody;
}

// ── PLATFORM GAP BARS ─────────────────────────────────────────
function renderGapBars(containerId, field, label){
  const c=document.getElementById(containerId);
  if(!c)return;
  const sorted=[...ALL_POLITICIANS].sort((a,b)=>b[field]-a[field]);
  const max=sorted[0][field];
  c.innerHTML=sorted.map(p=>{
    const color=p.isAMR?'#ff6600':partyColor(p.party);
    const pct=Math.max(1,(p[field]/max)*100);
    return `<div style="padding:4px 0">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:12px">
        <span style="color:${color};font-weight:${p.isAMR?'800':'500'}">${p.short}${p.isAMR?' ⭐':''}</span>
        <span style="color:${color};font-weight:700">${formatNum(p[field])}</span>
      </div>
      <div style="background:rgba(255,255,255,0.05);height:7px;border-radius:4px;overflow:hidden">
        <div style="width:${pct}%;height:7px;border-radius:4px;background:${color};transition:width 1.2s ease"></div>
      </div>
    </div>`;
  }).join('');
}

// ── RECENT ACTIVITIES ─────────────────────────────────────────
function renderActivities(){
  const c=document.getElementById('recent-activities');
  if(!c)return;
  const impColors={'HIGH':'#ef4444','MEDIUM':'#f59e0b','LOCAL':'#10b981','MILESTONE':'#8b5cf6'};
  c.innerHTML=AMR_ACTIVITIES.map(a=>`
    <div style="display:flex;gap:12px;padding:12px;background:var(--bg3);border-radius:10px;border:1px solid var(--border)">
      <div style="font-size:24px;flex-shrink:0">${a.icon}</div>
      <div style="flex:1">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
          <span style="font-size:13px;font-weight:700;color:var(--text)">${a.title}</span>
          <span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:8px;background:${impColors[a.impact]||'#64748b'}22;color:${impColors[a.impact]||'#64748b'};border:1px solid ${impColors[a.impact]||'#64748b'}44">${a.impact}</span>
        </div>
        <div style="font-size:12px;color:var(--text2);line-height:1.5;margin-bottom:6px">${a.desc}</div>
        <div style="font-size:11px;color:var(--text3)">📅 ${a.date} &nbsp;·&nbsp; 📰 ${a.sources.join(', ')}</div>
      </div>
    </div>`).join('');
}

// ── NEWS ARTICLES ─────────────────────────────────────────────
function renderNews(){
  const c=document.getElementById('amr-news');
  if(!c)return;
  const sColors={positive:'#10b981',neutral:'#94a3b8',negative:'#ef4444'};
  c.innerHTML=AMR_NEWS.map(n=>`
    <div class="news-item">
      <div class="news-source" style="background:${n.portalColor}22;color:${n.portalColor};border:1px solid ${n.portalColor}44">${n.portal}</div>
      <div class="news-body">
        <div class="news-headline">${n.headline}</div>
        <div class="news-meta">
          <span>📅 ${n.date}</span>
          <span>👁 ${n.reads || '—'} reads</span>
          <span>🏷️ ${n.category}</span>
          <span class="news-sentiment" style="background:${sColors[n.sentiment]}22;color:${sColors[n.sentiment]};border:1px solid ${sColors[n.sentiment]}44">${n.sentiment.toUpperCase()}</span>
        </div>
      </div>
    </div>`).join('');
}

// ── GAPS GRID ─────────────────────────────────────────────────
function renderGaps(){
  const c=document.getElementById('gaps-grid');
  if(!c)return;
  const sevColors={critical:{bg:'rgba(239,68,68,0.08)',border:'rgba(239,68,68,0.2)',cls:'sev-critical'},high:{bg:'rgba(245,158,11,0.08)',border:'rgba(245,158,11,0.2)',cls:'sev-high'},medium:{bg:'rgba(59,130,246,0.08)',border:'rgba(59,130,246,0.2)',cls:'sev-medium'}};
  c.innerHTML=GAPS.map(g=>{
    const s=sevColors[g.severity];
    return `<div class="gap-card" style="background:${s.bg};border:1px solid ${s.border}">
      <div class="gap-icon">${g.icon}</div>
      <div>
        <div class="gap-title">${g.title}</div>
        <div class="gap-desc">${g.desc}</div>
        <span class="gap-severity ${s.cls}">${g.severity.toUpperCase()} PRIORITY</span>
      </div>
    </div>`;
  }).join('');
}

// ── ACTION PLAN ───────────────────────────────────────────────
function renderActionPlan(){
  const c=document.getElementById('action-grid');
  if(!c)return;
  c.innerHTML=ACTION_PLAN.map(a=>`
    <div class="action-card" style="border-left-color:${a.borderColor}">
      <span class="action-priority ${a.pClass}">${a.priority}</span>
      <div class="action-title">${a.title}</div>
      <div class="action-desc">${a.desc}</div>
      <ul class="action-steps">${a.steps.map(s=>`<li>${s}</li>`).join('')}</ul>
      <div class="action-timeline">⏰ ${a.timeline}</div>
    </div>`).join('');
}

// ── ROADMAP ───────────────────────────────────────────────────
function renderRoadmap(){
  const c=document.getElementById('roadmap-items');
  if(!c)return;
  c.innerHTML=ROADMAP.map((r,i)=>`
    <div class="rm-item">
      <div class="rm-timeline">
        <div class="rm-dot ${r.status}"></div>
        ${i<ROADMAP.length-1?'<div class="rm-line"></div>':''}
      </div>
      <div class="rm-content">
        <div class="rm-date">${r.date}</div>
        <div class="rm-title">${r.title}</div>
        <div class="rm-desc">${r.desc}</div>
      </div>
    </div>`).join('');
}

// ── EXPORT CSV ────────────────────────────────────────────────
function exportReport(){
  const sorted=[...ALL_POLITICIANS].sort((a,b)=>b.viralScore-a.viralScore);
  const rows=[
    ['Rank','Politician','Party','Role','Constituency','Twitter Followers','Instagram Followers','YouTube Subscribers','Facebook Followers','News Articles','Google Trends Score','Viral Score','Gap vs AMR (Viral Score)'],
    ...sorted.map((p,i)=>[
      i+1, p.name, p.party, p.role, p.constituency,
      formatNum(p.twitter), formatNum(p.instagram), formatNum(p.youtube), formatNum(p.facebook),
      p.newsArticles, p.googleScore, p.viralScore,
      p.isAMR ? 'YOU' : `${p.viralScore-62>0?'-':'+'} ${Math.abs(p.viralScore-62)} pts`
    ])
  ];
  const csv=rows.map(r=>r.map(c=>`"${c}"`).join(',')).join('\n');
  const blob=new Blob([csv],{type:'text/csv'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='AMR_Political_Intelligence_Report_Oct2026.csv';
  a.click(); URL.revokeObjectURL(url);
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  initPlatformChart();
  initGrowthChart();
  initViralRankChart();
  initRadarChart();
  initNewsCoverageChart();
  renderComparisonTable();
  renderGapBars('twitterGapChart','twitter','Twitter Followers');
  renderGapBars('youtubeGapChart','youtube','YouTube Subscribers');
  renderGapBars('newsGapChart','newsArticles','News Articles');
  renderActivities();
  renderNews();
  renderGaps();
  renderActionPlan();
  renderRoadmap();
});
