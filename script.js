const nav=document.getElementById('nav');
document.getElementById('menu').addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const toast=document.getElementById('toast');let toastTimer;
function showToast(t){toast.textContent=t;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),4000)}
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>document.getElementById('serviceSelect').value=a.dataset.service));
document.querySelectorAll('[data-topic]').forEach(b=>b.addEventListener('click',()=>showToast('Selected tutorial topic: '+b.dataset.topic+'. Add your lesson or video link here when ready.')));
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim(),email=document.getElementById('email').value.trim(),service=document.getElementById('serviceSelect').value,message=document.getElementById('message').value.trim();const subject=encodeURIComponent('AMOH JUSTICE enquiry — '+service);const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nService: '+service+'\n\nProject details:\n'+message);window.location.href='mailto:YOUR-EMAIL@example.com?subject='+subject+'&body='+body;});
