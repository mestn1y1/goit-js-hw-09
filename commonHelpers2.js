import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},t=document.querySelector(".feedback-form"),s=t.querySelector('input[name="email"]'),m=t.querySelector('textarea[name="message"]'),r=()=>{e.email=s.value,e.message=m.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))},a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(e.email=a.email,e.message=a.message,s.value=a.email,m.value=a.message);t.addEventListener("input",l=>{const o=l.target;(o===s||o===m)&&r()});t.addEventListener("submit",l=>{l.preventDefault(),e.email.trim()===""||e.message.trim()===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",s.value="",m.value="")});
//# sourceMappingURL=commonHelpers2.js.map
