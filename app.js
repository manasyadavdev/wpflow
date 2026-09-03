const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];

const progress=$("#progress");
addEventListener("scroll",()=>{const h=document.documentElement;progress.style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+"%"},{passive:true});

$$("[data-scroll]").forEach(b=>b.addEventListener("click",()=>$(b.dataset.scroll)?.scrollIntoView({behavior:"smooth"})));

const menu=$("#menu"), nav=$("#nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
$$(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

$("#theme")?.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("wpflow-theme",document.body.classList.contains("dark")?"dark":"light");
});
if(localStorage.getItem("wpflow-theme")==="dark") document.body.classList.add("dark");

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
},{threshold:.12});
$$(".reveal").forEach(el=>observer.observe(el));

$$(".journey-item").forEach(item=>item.addEventListener("mouseenter",()=>{
  $$(".journey-item").forEach(x=>x.classList.remove("active")); item.classList.add("active");
}));

$$(".toggle button").forEach(btn=>btn.addEventListener("click",()=>{
  $$(".toggle button").forEach(x=>x.classList.remove("selected"));btn.classList.add("selected");
  const period=btn.dataset.period;
  $$(".cost strong").forEach(el=>el.textContent=el.dataset[period]);
}));

$("#leadForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const form=e.currentTarget,status=$("#formStatus");
  if(!form.checkValidity()){form.reportValidity();status.textContent="Please complete the required fields.";status.style.color="#d92d20";return}
  status.style.color="";
  status.textContent="Enquiry validated — ready for a WordPress AJAX endpoint.";
  form.reset();
});
