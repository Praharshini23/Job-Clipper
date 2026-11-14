const KEY='jobClipperJobs';
chrome.runtime.onInstalled.addListener(()=>{chrome.alarms.create('refreshJobReminders',{periodInMinutes:60});scheduleAll()});
chrome.runtime.onStartup.addListener(()=>scheduleAll());
chrome.runtime.onMessage.addListener((msg,sender,sendResponse)=>{if(msg.type==='SAVE_JOB'){saveJob(msg.job).then(()=>sendResponse({ok:true}));return true}if(msg.type==='JOBS_CHANGED'){scheduleAll().then(()=>sendResponse({ok:true}));return true}});
async function getJobs(){const r=await chrome.storage.local.get(KEY);return r[KEY]||[]}
async function saveJob(job){const jobs=await getJobs();jobs.unshift(job);await chrome.storage.local.set({[KEY]:jobs});await scheduleAll()}
async function scheduleAll(){const jobs=await getJobs();const existing=await chrome.alarms.getAll();for(const a of existing)if(a.name.startsWith('job:'))chrome.alarms.clear(a.name);const now=Date.now();for(const j of jobs){if(!j.deadline||j.status==='Result')continue;const [y,m,d]=j.deadline.split('-').map(Number);const when=new Date(y,m-1,d,9,0).getTime()-Number(j.reminderDays??1)*86400000;if(when>now)chrome.alarms.create(`job:${j.id}`,{when})}}
chrome.alarms.onAlarm.addListener(async alarm=>{if(alarm.name==='refreshJobReminders'){await scheduleAll();return}if(!alarm.name.startsWith('job:'))return;const id=alarm.name.slice(4);const j=(await getJobs()).find(x=>x.id===id);if(!j)return;chrome.notifications.create(`reminder:${id}`,{type:'basic',iconUrl:'icons/icon128.png',title:'Job deadline coming up',message:`${j.role}${j.company?' · '+j.company:''} — deadline ${j.deadline}`,priority:2})});
