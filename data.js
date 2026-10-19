/* ===== 여기만 고치면 됩니다 =====
   사진은 images 폴더에 넣고 경로를 "images/파일명.jpg" 로 적으세요. */
const DATA={
passcode:"0707",
me:{name:"이름",photo:"",appleId:"Apple ID"},
cameraImage:"",            // 카메라 뷰파인더에 보일 사진. 예: "images/cam.jpg"
photos:[                   // 갤러리. 비워두면 회색 칸이 나와요
 // {src:"images/1.jpg",date:"2026-10-17"},
],
contacts:[                 // favorite:true 면 최근 통화 위에 즐겨찾기 타일로 나와요
 {id:"a",name:"지우",number:"010-1234-5678",favorite:true,photo:"",
  calls:[{dir:"out",label:"휴대전화",time:"오후 2:00"},{dir:"in",label:"휴대전화 (3)",time:"어제"}],
  messages:[["in","야 어디야","오전 9:38"],["out","집","오전 9:39"]]},
 {id:"b",name:"엄마",number:"010-0000-0000",favorite:true,photo:"",
  calls:[{dir:"out",label:"전화",time:"오후 1:45"}],
  messages:[["in","밥은 먹었어?","어제"]]},
 {id:"g",name:"애들 단톡",group:true,messages:[["in","이번 주말에 볼 사람","어제"]]}
],
events:[                   // 날짜는 "YYYY-MM-DD"
 {date:"2026-10-23",title:"약속",time:"오후 4:30"},
 {date:"2026-10-24",title:"약속",time:"종일"}
],
notes:[                    // 첫 줄이 제목
 {text:"살 것\n커피, 충전 케이블",date:"10/18/26",pinned:true},
 {text:"메모\n내용을 여기에",date:"10/17/26"},
 {text:"비밀 메모",date:"6/17/26",locked:true}
],
alarms:[{time:"6:20",ap:"오전",label:"매주 평일",on:true},{time:"6:30",ap:"오전",label:"매주 평일",on:true},{time:"8:01",ap:"오후",label:"알람",on:false}],
worldClock:[{city:"서울",tz:"Asia/Seoul"},{city:"마이애미",tz:"America/New_York"},{city:"바리",tz:"Europe/Rome"}],
weather:[
 {name:"플로리다",temp:18,cond:"흐림",hi:23,lo:17,bg:"linear-gradient(#3a3f4c,#1b1f2b)",note:"오전 6시경 비가 예상됩니다. 돌풍은 최대 24mph입니다.",
  hourly:[["지금","☁️",18],["오후 9시","☁️",18],["오후 10시","⛅",19],["오후 11시","⛅",18],["오전 12시","⛅",17],["오전 1시","⛅",17],["오전 2시","⛅",17]],
  daily:[["오늘","⛅",17,23],["월","🌧",16,24],["화","☀️",12,25],["수","☀️",13,26],["목","☀️",13,25]]},
 {name:"평택시",temp:15,cond:"흐림",hi:18,lo:12,bg:"linear-gradient(#8fa2b5,#b8c6d4)",note:"",hourly:[],daily:[]}
],
notices:[
 {app:"메시지",title:"지우",body:"야 어디야",time:"방금",chat:"a"},
 {app:"캘린더",title:"오늘 일정",body:"오후 4:30 · 약속",time:"오전 9:12"}
]};
