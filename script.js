// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    }else{

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


const glow=document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});


// =========================
// STICKY HEADER
// =========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


// =========================
// FADE IN ANIMATION
// =========================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(".fade-up").forEach(el=>{

    observer.observe(el);

});


// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn=document.createElement("div");

topBtn.className="top-btn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);


window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("active");

    }else{

        topBtn.classList.remove("active");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// =========================
// COUNTER ANIMATION
// =========================

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// =========================
// PORTFOLIO FILTER
// =========================

const filterButtons=document.querySelectorAll(".portfolio-filter button");
const portfolioItems=document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

portfolioItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}else{

if(item.classList.contains(filter)){

item.style.display="block";

}else{

item.style.display="none";

}

}

});

});

});

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

});

// PROJECT VIEWER

const projectViewer=document.querySelector(".project-viewer");

const viewerTitle=document.getElementById("viewerTitle");

const viewerCategory=document.getElementById("viewerCategory");

const viewerImage=document.getElementById("viewerImage");

const viewerDescription=document.getElementById("viewerDescription");

const viewerAlbum=document.getElementById("albumview");

document.querySelectorAll(".open-project").forEach(button=>{

button.onclick=(e)=>{

e.preventDefault();

viewerTitle.innerHTML=button.dataset.title;

viewerCategory.innerHTML=button.dataset.category;

viewerImage.src=button.dataset.image;

viewerDescription.innerHTML=button.dataset.description;

viewerAlbum.href=button.dataset.album;

projectViewer.classList.add("active");

};

});

document.querySelector(".close-viewer").onclick=()=>{

projectViewer.classList.remove("active");

};

document.querySelector(".viewer-overlay").onclick=()=>{

projectViewer.classList.remove("active");

};