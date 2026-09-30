"use client";

import { useEffect, useMemo, useState } from "react";

const START_DATE = "2026-10-01";
const DAYS = 90;

const plan = [
  ["Maths","Real Numbers + Polynomials","Learn concepts; NCERT examples; 20 practice questions"],
  ["Science","Chemical Reactions","Concept map; equations; NCERT questions; active recall"],
  ["SST","Nationalism in Europe + Resources","Timeline; causes/results; map/terms; recall test"],
  ["English","Tenses + Reading","Grammar drill; one reading passage; error log"],
  ["Hindi","Literature + spelling","Read prescribed text; 15-minute writing/spelling drill"],
  ["Maths","Real Numbers + Polynomials","NCERT exercise; mixed questions; timed 30-minute set"],
  ["Science","Chemical Reactions","NCERT exercise; reaction practice; 15-question recall"],
  ["SST","Nationalism in Europe + Resources","Short answers; map practice; 20-minute recall"],
  ["English","Tenses + Reading","20 grammar questions; reading practice; review mistakes"],
  ["Hindi","Literature + grammar","Literature questions; grammar drill; spelling corrections"],
  ["Maths","Pair of Linear Equations","Learn methods; NCERT examples; 20 questions"],
  ["Science","Acids, Bases & Salts","Indicators, pH, reactions; NCERT questions"],
  ["SST","Nationalism in India + Forest/Wildlife","Timeline; causes/results; examples; map work"],
  ["English","Determiners + Writing","Grammar drill; formal-letter format; one response"],
  ["Hindi","Literature + writing","Chapter recall; writing format; spelling drill"],
  ["Maths","Pair of Linear Equations","NCERT exercise; case-based questions; timed set"],
  ["Science","Acids, Bases & Salts","Recall sheet; equations; competency questions"],
  ["SST","Nationalism in India + Forest/Wildlife","20-minute closed-book recall; map revision"],
  ["English","Determiners + Writing","Mixed grammar; analytical paragraph; corrections"],
  ["Hindi","Grammar + literature","Mixed grammar; chapter questions; correction log"],
  ["Maths","Quadratic Equations","Concepts; roots; discriminant; 20 questions"],
  ["Science","Metals & Non-metals","Properties; reactions; extraction concepts; NCERT"],
  ["SST","Agriculture + Federalism","Features; examples; map terms; comparison table"],
  ["English","Modals + Literature","Grammar drill; one literature answer; reading"],
  ["Hindi","Literature + grammar","Recall; grammar; writing practice"],
  ["Maths","Quadratic Equations","NCERT exercise; competency questions; timed set"],
  ["Science","Metals & Non-metals","Reaction practice; NCERT questions; recall"],
  ["SST","Agriculture + Federalism","Case-based questions; map; closed-book recall"],
  ["English","Modals + Literature","Mixed grammar; literature questions; error correction"],
  ["Hindi","Weekly test","Literature + grammar + writing mini test"],
  ["Maths","Arithmetic Progressions","Learn nth term/sum; examples; 20 questions"],
  ["Science","Carbon Compounds","Structures, bonding, reactions; NCERT questions"],
  ["SST","Minerals + Manufacturing","Distribution, industries, map work, recall"],
  ["English","Subject–verb Concord","Grammar drill; writing practice; literature"],
  ["Hindi","Literature + writing","Chapter recall; writing; spelling drill"],
  ["Maths","Arithmetic Progressions","NCERT exercise; case-based questions; timed set"],
  ["Science","Carbon Compounds","Reaction sheet; competency questions; recall"],
  ["SST","Minerals + Manufacturing","Map practice; short answers; closed-book recall"],
  ["English","Subject–verb Concord","Mixed grammar; one writing task; corrections"],
  ["Hindi","Weekly test","Literature + grammar + writing mini test"],
  ["Maths","Coordinate Geometry","Distance/section concepts; examples; practice"],
  ["Science","Life Processes","Nutrition, respiration, transport, excretion; diagrams"],
  ["SST","Agriculture + Geography revision","Maps; definitions; data/examples; recall"],
  ["English","Reported Speech","Statements, questions, commands/requests; drills"],
  ["Hindi","Literature + grammar","Recall; grammar; writing"],
  ["Maths","Coordinate Geometry","NCERT exercise; mixed questions; timed set"],
  ["Science","Life Processes","Diagrams from memory; NCERT questions; recall"],
  ["SST","Geography revision","Map test; 25-question recall"],
  ["English","Reported Speech","Mixed transformation practice; error log"],
  ["Hindi","Weekly test","Mini paper + corrections"],
  ["Maths","Triangles","Similarity; theorems; proofs; 20 questions"],
  ["Science","Control & Coordination","Nervous system; hormones; diagrams; NCERT"],
  ["SST","Political Parties + Outcomes of Democracy","Concepts; comparisons; case-based questions"],
  ["English","Mixed Grammar + Literature","Timed grammar; literature answer; reading"],
  ["Hindi","Literature + writing","Recall; writing; spelling"],
  ["Maths","Triangles","NCERT exercise; proof practice; case-based questions"],
  ["Science","Control & Coordination","Diagram recall; competency questions; test"],
  ["SST","Political Parties + Outcomes","Closed-book recall; case questions"],
  ["English","Mixed Grammar + Literature","Full grammar set; literature corrections"],
  ["Hindi","Weekly test","Mini paper + corrections"],
  ["Maths","Circles + Trigonometry","Concepts; identities; standard values; practice"],
  ["Science","Reproduction + Heredity","Processes, diagrams, heredity basics; NCERT"],
  ["SST","Development + Sectors","Definitions; indicators; comparison; application"],
  ["English","Writing + Literature","Formal letter; analytical paragraph; literature"],
  ["Hindi","Literature + grammar","Recall; grammar; writing"],
  ["Maths","Circles + Trigonometry","NCERT exercise; identities; case-based questions"],
  ["Science","Reproduction + Heredity","Diagram recall; competency questions; test"],
  ["SST","Development + Sectors","Closed-book recall; data/application questions"],
  ["English","Writing + Literature","Timed writing; literature answers; corrections"],
  ["Hindi","Weekly test","Mini paper + corrections"],
  ["Maths","Heights & Distances + Mensuration","Applications; formulas; 20 questions"],
  ["Science","Light","Ray diagrams; mirror/lens concepts; numericals"],
  ["SST","Money & Credit + Globalisation","Concepts; examples; application; recall"],
  ["English","Full Grammar Revision","All prescribed grammar areas; timed set"],
  ["Hindi","Full revision","Literature + grammar + writing"],
  ["Maths","Heights & Distances + Mensuration","Mixed numericals; case-based; timed set"],
  ["Science","Light","Diagrams + numericals; NCERT questions"],
  ["SST","Money & Credit + Globalisation","Case-based questions; recall"],
  ["English","Full Grammar Revision","Mixed test; error correction"],
  ["Hindi","Weekly test","Mini paper + corrections"],
  ["Maths","Areas + Surface Areas & Volumes","Formula sheet; application questions"],
  ["Science","Electricity","Formulas, circuits, numericals; NCERT"],
  ["SST","Civics + Economics revision","Recall maps/tables; application questions"],
  ["English","Full Literature Revision","Chapter themes; character/poetry answers"],
  ["Hindi","Literature revision","Closed-book recall + writing"],
  ["Maths","Statistics + Probability","Mean/median/mode; probability; practice"],
  ["Science","Magnetic Effects + Environment","Diagrams; rules; environment concepts"],
  ["SST","History + Geography revision","Timeline; maps; key terms; recall"],
  ["English","Full Writing Revision","Formal letter + analytical paragraph; timed"],
  ["Hindi","Grammar revision","Mixed grammar + spelling"],
  ["Maths","Full syllabus mixed test","80-minute board-style section; analyse every error"],
  ["Science","Full syllabus mixed test","Timed paper; diagrams/equations; error analysis"],
  ["SST","Full syllabus mixed test","Timed paper; map work; error analysis"],
  ["English","Full syllabus mixed test","Reading + grammar/writing + literature"],
  ["Hindi","Full syllabus mixed test","Timed paper + corrections"],
  ["Maths","Weakest 3 chapters","Error-book repair; 30–40 targeted questions"],
  ["Science","Weakest 3 chapters","Active recall; diagrams; equations; targeted questions"],
  ["SST","Weakest 3 chapters","Recall; maps; case-based questions"],
  ["English","Weakest grammar/literature areas","Targeted drills; writing correction"],
  ["Hindi","Weakest areas","Targeted drills; spelling + writing"],
  ["Maths","Mock 1","Full timed paper; score + error classification"],
  ["Science","Mock 1","Full timed paper; score + error classification"],
  ["SST","Mock 1","Full timed paper; score + error classification"],
  ["English","Mock 1","Full timed paper; score + error classification"],
  ["Hindi","Mock 1","Full timed paper; score + error classification"],
  ["All","Mock analysis day","Repair repeated errors; redo every wrong question"],
  ["All","Spaced revision","Day-1/day-7/day-21 recall; formulas; maps; grammar"],
  ["All","Mock 2","Full paper under exam conditions; analyse"],
  ["All","Final weak-topic repair","Only high-error chapters; no random new resources"],
  ["All","Mock 3","Full paper; final error-book update"],
  ["All","Final consolidation","Formula/reaction/map/grammar sheets; light recall"],
  ["All","Final board simulation","Full exam simulation + complete analysis"],
  ["All","Final review","Error book; formulas; diagrams; maps; writing formats"],
  ["All","Confidence day","Short recall tests; no heavy new learning; prepare exam kit"]
];

const subjects = ["Maths","Science","SST","English","Hindi"];
const STORAGE = "winter-arc-v1";

function dateAtDay(day) {
  const d = new Date(START_DATE + "T00:00:00");
  d.setDate(d.getDate() + day - 1);
  return d;
}
function isoDate(d) { return d.toISOString().slice(0,10); }
function dayIndexToday() {
  const start = new Date(START_DATE + "T00:00:00");
  const now = new Date();
  const diff = Math.floor((new Date(now.toDateString()) - new Date(start.toDateString())) / 86400000);
  return Math.min(DAYS, Math.max(1, diff + 1));
}

function buildTasks(day) {
  const idx = (day - 1) % plan.length;
  const [subject, topic, focus] = plan[idx] || ["All","Revision","Review your weakest topics"];
  const sunday = dateAtDay(day).getDay() === 0;
  const base = [
    { id:"learn", title:`Learn / revise: ${topic}`, detail: focus, minutes:sunday ? 50 : 60 },
    { id:"math", title:"Maths practice", detail: subject === "Maths" ? "Complete the planned Maths set and redo mistakes." : "Do 20 focused Maths questions or revise your current Maths weak area.", minutes:60 },
    { id:"science", title:"Science active recall", detail: subject === "Science" ? "Close the book and reproduce the concept, diagrams/equations, then check." : "Recall one Science topic without notes; correct what you missed.", minutes:50 },
    { id:"sst", title:"SST recall", detail: subject === "SST" ? "Use cause→event→result / definition→example / map structure." : "Do a 20-minute closed-book SST recall session.", minutes:45 },
    { id:"english", title:"English grammar / language", detail:"Complete the current grammar rotation and correct every error.", minutes:35 },
    { id:"hindi", title:"Hindi", detail:"Literature/grammar/writing + 10 minutes spelling or handwriting.", minutes:35 },
    { id:"review", title:"Error-book + spaced revision", detail:"Redo yesterday's errors and one older topic (7/21-day review).", minutes:45 }
  ];
  if (sunday) {
    base.push({id:"test", title:"Sunday test", detail:"Timed subject test or full/section paper, then classify every mistake as C/F/S/Q/T/P.", minutes:60});
    base.push({id:"analysis", title:"Test analysis", detail:"Write the score, mistakes, fixes and the exact questions to redo.", minutes:60});
  }
  return base;
}

export default function Home() {
  const [day, setDay] = useState(1);
  const [done, setDone] = useState({});
  const [scores, setScores] = useState([]);
  const [settings, setSettings] = useState({ reminder:"18:00", notifications:false });
  const [hydrated, setHydrated] = useState(false);
  const [tab, setTab] = useState("today");

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE);
    if (raw) {
      try {
        const s = JSON.parse(raw);
        setDay(s.day || dayIndexToday());
        setDone(s.done || {});
        setScores(s.scores || []);
        setSettings(s.settings || {reminder:"18:00",notifications:false});
      } catch {}
    } else {
      setDay(dayIndexToday());
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE, JSON.stringify({day,done,scores,settings}));
  }, [day,done,scores,settings,hydrated]);

  const tasks = useMemo(() => buildTasks(day), [day]);
  const completed = tasks.filter(t => done[`${day}-${t.id}`]).length;
  const pct = Math.round((completed / tasks.length) * 100);
  const studyMinutes = tasks.filter(t => done[`${day}-${t.id}`]).reduce((a,t)=>a+t.minutes,0);
  const date = dateAtDay(day);
  const isSunday = date.getDay() === 0;

  function toggle(id) {
    setDone(x => ({...x, [`${day}-${id}`]: !x[`${day}-${id}`]}));
  }
  async function enableNotifications() {
    if (!("Notification" in window)) {
      alert("This browser does not support notifications.");
      return;
    }
    const p = await Notification.requestPermission();
    if (p === "granted") {
      setSettings(s => ({...s,notifications:true}));
      new Notification("Winter Arc activated", {body:"Your study reminders are enabled while the app/PWA can run."});
    }
  }
  function addScore(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const row = {
      date: new Date().toISOString().slice(0,10),
      subject: fd.get("subject"),
      score: Number(fd.get("score")),
      max: Number(fd.get("max")),
      notes: fd.get("notes")
    };
    setScores(s => [row,...s]);
    e.currentTarget.reset();
  }
  function resetAll() {
    if (confirm("Reset ALL Winter Arc progress on this device?")) {
      localStorage.removeItem(STORAGE);
      location.reload();
    }
  }

  if (!hydrated) return <main className="shell"><div className="loading">Loading your Winter Arc…</div></main>;

  return (
    <main className="shell">
      <header className="hero">
        <div>
          <div className="eyebrow">❄️ WINTER ARC • CLASS 10</div>
          <h1>98% Mission</h1>
          <p>Learn → Practice → Test → Analyse → Repeat.</p>
        </div>
        <div className="heroStat"><b>{day}</b><span>/ {DAYS} days</span></div>
      </header>

      <nav className="tabs">
        {[
          ["today","Today"],
          ["calendar","90 Days"],
          ["scores","Scores"],
          ["settings","Settings"]
        ].map(([id,label])=><button key={id} className={tab===id?"active":""} onClick={()=>setTab(id)}>{label}</button>)}
      </nav>

      {tab==="today" && <section>
        <div className="daybar">
          <button disabled={day<=1} onClick={()=>setDay(d=>d-1)}>←</button>
          <div>
            <span className="muted">{date.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"short",year:"numeric"})}</span>
            <h2>Day {day} {isSunday && "• TEST DAY"}</h2>
          </div>
          <button disabled={day>=DAYS} onClick={()=>setDay(d=>d+1)}>→</button>
        </div>

        <div className="progressCard">
          <div><span>Today's completion</span><strong>{pct}%</strong></div>
          <div className="bar"><i style={{width:`${pct}%`}} /></div>
          <small>{studyMinutes} / {isSunday ? 480 : 360} focused minutes logged by completed tasks</small>
        </div>

        <div className="grid">
          <div className="card">
            <div className="cardTitle"><span>📋 Today's To-Do</span><span>{completed}/{tasks.length}</span></div>
            {tasks.map(t=>
              <label className={`task ${done[`${day}-${t.id}`]?"checked":""}`} key={t.id}>
                <input type="checkbox" checked={!!done[`${day}-${t.id}`]} onChange={()=>toggle(t.id)} />
                <span><b>{t.title}</b><small>{t.detail} • {t.minutes} min</small></span>
              </label>
            )}
          </div>
          <div className="side">
            <div className="card">
              <div className="cardTitle">🎯 Today's rule</div>
              <p>Do not count rereading as mastery. Close the book, retrieve the answer, then check it.</p>
              <p className="quote">“Your error book is your personal syllabus.”</p>
            </div>
            <div className="card">
              <div className="cardTitle">🔥 Streak</div>
              <Streak done={done}/>
            </div>
          </div>
        </div>
      </section>}

      {tab==="calendar" && <section className="card">
        <div className="cardTitle">📅 90-Day Roadmap</div>
        <div className="calendar">
          {Array.from({length:DAYS},(_,i)=>{
            const n=i+1, d=dateAtDay(n), ts=buildTasks(n), c=ts.filter(t=>done[`${n}-${t.id}`]).length;
            return <button className={`dayCell ${n===day?"selected":""} ${c===ts.length?"complete":""}`} key={n} onClick={()=>{setDay(n);setTab("today")}}>
              <b>{n}</b><span>{d.toLocaleDateString("en-IN",{day:"2-digit",month:"short"})}</span><i>{c}/{ts.length}</i>
            </button>
          })}
        </div>
      </section>}

      {tab==="scores" && <section className="grid">
        <div className="card">
          <div className="cardTitle">📊 Test score tracker</div>
          <form onSubmit={addScore} className="form">
            <select name="subject" required>{subjects.map(s=><option key={s}>{s}</option>)}</select>
            <input name="score" type="number" min="0" required placeholder="Score"/>
            <input name="max" type="number" min="1" defaultValue="80" required placeholder="Out of"/>
            <input name="notes" placeholder="What went wrong?"/>
            <button className="primary">Add score</button>
          </form>
        </div>
        <div className="card">
          <div className="cardTitle">🧠 Error-book categories</div>
          <p><b>C</b> Concept • <b>F</b> Forgot • <b>S</b> Silly • <b>Q</b> Misread • <b>T</b> Time • <b>P</b> Presentation</p>
          <p className="muted">Every test should end with a fix, not just a percentage.</p>
        </div>
        <div className="card full">
          <div className="cardTitle">Recent scores</div>
          {scores.length===0 ? <p className="muted">No scores yet. Add your first test.</p> :
            <div className="scores">{scores.map((s,i)=><div className="score" key={i}><b>{s.subject}</b><span>{s.score}/{s.max}</span><small>{s.date} {s.notes && "• "+s.notes}</small></div>)}</div>}
        </div>
      </section>}

      {tab==="settings" && <section className="grid">
        <div className="card">
          <div className="cardTitle">🔔 Reminders</div>
          <p className="muted">Browser notifications work when permission is granted. True background push while the app is completely closed needs a push service later.</p>
          <label className="setting">Preferred reminder time <input type="time" value={settings.reminder} onChange={e=>setSettings(s=>({...s,reminder:e.target.value}))}/></label>
          <button className="primary" onClick={enableNotifications}>{settings.notifications ? "Notifications enabled ✓" : "Enable browser notifications"}</button>
        </div>
        <div className="card">
          <div className="cardTitle">💾 Your data</div>
          <p>Everything is stored locally in this browser/device. No account or database is required.</p>
          <button className="danger" onClick={resetAll}>Reset all progress</button>
        </div>
        <div className="card full">
          <div className="cardTitle">📱 Install as an app</div>
          <p>On iPad/iPhone: open the deployed site in Safari → Share → Add to Home Screen. On supported browsers, install it as a PWA.</p>
        </div>
      </section>}

      <footer>Winter Arc Study • Built for GitHub + Vercel • Local-first</footer>
    </main>
  );
}

function Streak({done}) {
  let streak=0;
  for(let n=dayIndexToday();n>=1;n--){
    const ts=buildTasks(n);
    if(ts.length && ts.filter(t=>done[`${n}-${t.id}`]).length/ts.length >= .7) streak++;
    else if(n!==dayIndexToday()) break;
  }
  return <div className="streak"><b>🔥 {streak}</b><span>day consistency streak</span></div>;
}
