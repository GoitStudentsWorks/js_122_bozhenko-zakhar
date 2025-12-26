import{a as w,i as L,S as G,N as K,P as Z,K as ae,A as oe,b as v}from"./assets/vendor-DPMqQZsn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const u="/js_122_bozhenko-zakhar/assets/sprite-DntPMVyq.svg",ne=document.querySelector(".header__link-logo"),ie=`
	<svg class="header-logo">
			<use href="${u}#icon-alternate-false"></use>
	</svg>
`;function re(){ne.innerHTML=ie}const T=document.querySelector(".modal-menu"),k=document.querySelector(".header__burger"),le=document.querySelectorAll(".modal-menu__nav a"),b=document.querySelector(".header"),ce=document.querySelector(".modal-menu__button");function A(){return T.classList.contains("modal-menu--open")}function de(){T.classList.add("modal-menu--open"),k.classList.add("is-open"),k.setAttribute("aria-expanded","true"),document.body.classList.add("no-scroll"),b==null||b.classList.remove("header__blur")}function j(){T.classList.remove("modal-menu--open"),k.classList.remove("is-open"),k.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),b==null||b.classList.add("header__blur")}function ue(){A()?j():de()}k.addEventListener("click",e=>{e.stopPropagation(),ue()});document.addEventListener("keydown",e=>{e.key==="Escape"&&A()&&j()});document.addEventListener("click",e=>{if(!A())return;const t=e.target.closest(".header__burger"),s=e.target.closest(".modal-menu__container");!t&&!s&&j()});le.forEach(e=>e.addEventListener("click",j));re();ce.addEventListener("click",()=>{j()});const r={categoryList:document.querySelector(".categories-list"),productlist:document.querySelector(".products-list"),divNotFound:document.querySelector(".not-found"),loadMoreBtn:document.querySelector(".js-products-load-more"),loader:document.querySelector(".js-product-loader"),paginationList:document.querySelector(".products-pagination__list"),prevBtn:document.querySelector(".products-pagination__btn--prev"),nextBtn:document.querySelector(".products-pagination__btn--next"),paginationContainer:document.querySelector(".products-pagination-container")},H={animals:new Map},pe="https://paw-hut.b.goit.study",I={CATEGORIES:"/api/categories",PRODUCTS:"/api/animals"};w.defaults.baseURL=pe;const me=async()=>{const{data:e}=await w(`${I.CATEGORIES}`);return e},S=async(e,t)=>{const{data:s}=await w(`${I.PRODUCTS}`,{params:{limit:t,page:e}});return s.animals.forEach(n=>{H.animals.set(n._id,n)}),s},O=async({categoryId:e,page:t=1,limit:s=9})=>{const{data:n}=await w(`${I.PRODUCTS}`,{params:{categoryId:e,page:t,limit:s}});return n.animals.forEach(a=>{H.animals.set(a._id,a)}),n},_e=e=>{const t=e.map(({_id:s,name:n})=>`<li class="categories__item">
   <button class="categories__btn" data-category-id="${s}" type="button">${n}</button>
 </li>
`).join("");r.categoryList.innerHTML=t},g=(e,t=!1)=>{const s=e.map(({_id:n,image:a,species:o,name:c,categories:p,age:Q,gender:Y,behavior:ee})=>{const te=`
                    <ul class="product-card__categories">
                        ${p.map(se=>`<li class="product-card__category">${se.name}</li>`).join("")}
                    </ul>
                `;return`
            <li class="product-card" data-id="${n}">
                <article class="product-card__body">
                
                <div class="product-card__image-wrapper">
                    <img class="product-card__image" src="${a}" alt="${o}" loading="lazy" width="392" height="309"/>
                </div>
                    
                    <p class="product-card__title">${o}</p>
                    <h3 class="product-card__name">${c}</h3>

                    ${p.length?te:""}
            
                    <ul class="product-card__meta">
                        <li class="product-card__meta-item product-card__meta-item--age">${Q}</li>
                        <li class="product-card__meta-item product-card__meta-item--gender">${Y}</li>
                    </ul>
            
                    <p class="product-card__info">${ee}</p>
                    <button class="product-card__btn product-card__btn--learnMore" data-modal-id=${n} type="button">
                        Дізнатись більше
                    </button>
                </article>
            </li>`}).join("");t?r.productlist.insertAdjacentHTML("beforeend",s):r.productlist.innerHTML=s},z=(e,t)=>{let s="";if(t<=1){r.paginationList.innerHTML="";return}if(t<=3){for(let o=1;o<=t;o++)s+=`
                <li class="products-pagination__item">
                    <button class="products-pagination__btn ${o===e?"products-pagination__btn--active":""}"
                            data-page="${o}"
                            type="button">
                        ${o}
                    </button>
                </li>
            `;r.paginationList.innerHTML=s;return}e>2&&(s+=`<li class="products-pagination__item">
            <button class="products-pagination__btn ${e===1?"products-pagination__btn--active":""}" data-page="1" type="button">1</button>
        </li>`,e>3&&(s+=`<li class="products-pagination__item products-pagination__dots">
                    <span>...</span>
                </li>`));let n=Math.max(1,e-1),a=Math.min(t,e+1);a-n<2&&(n===1?a=Math.min(3,t):a===t&&(n=Math.max(1,t-2)));for(let o=n;o<=a;o++)s+=`<li class="products-pagination__item">
                <button class="products-pagination__btn ${o===e?"products-pagination__btn--active":""}" data-page="${o}" type="button">${o}</button>
            </li>`;e<t-1&&(e<t-2&&(s+=`<li class="products-pagination__item products-pagination__dots">
                    <span>...</span>
                </li>`),s+=`<li class="products-pagination__item">
                <button class="products-pagination__btn ${e===t?"products-pagination__btn--active":""}" data-page="${t}" 
                type="button">${t}</button>
            </li>`),r.paginationList.innerHTML=s},W=()=>{const e=window.innerWidth;return e>=1440?"desktop":e>=768?"tablet":"mobile"},$=e=>{switch(e){case"desktop":return 9;case"tablet":case"mobile":default:return 8}},ge=(e,t=300)=>{let s;return(...n)=>{clearTimeout(s),s=setTimeout(()=>e(...n),t)}},be=e=>{document.querySelectorAll(".categories__btn--active").forEach(s=>s.classList.remove("categories__btn--active")),e.classList.add("categories__btn--active")},C=()=>{const e=document.querySelector(".product-card");if(!e)return;const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*.5,behavior:"smooth"})},D=()=>{r.productlist.innerHTML=""};function B(){r.loader.classList.remove("hidden")}function M(){r.loader.classList.add("hidden")}function J(){r.loadMoreBtn.classList.remove("hidden")}function N(){r.loadMoreBtn.classList.add("hidden")}function h(e,t){e<t&&y()?J():N()}const R=(e,t)=>{y()||(r.prevBtn.disabled=e===1,r.nextBtn.disabled=e===t),t<=1?r.paginationContainer.style.display="none":r.paginationContainer.style.display="flex"},he=()=>{r.paginationContainer.style.display="flex"},P=()=>{r.paginationContainer.style.display="none"},y=()=>window.innerWidth<768,U=()=>{y()?(r.paginationContainer.style.display="none",J()):(N(),r.paginationContainer.style.display="flex")};let f=W(),i=1,_="all",l;const fe=async()=>{try{const e=await me(),t={_id:"all",name:"Всі"},s=[...e].sort((a,o)=>a._id.localeCompare(o._id));_e([t,...s]);const n=document.querySelector(".categories__btn");n&&n.classList.add("categories__btn--active")}catch(e){console.log(e),L.error({message:"Oops, something went wrong!"})}},ye=ge(async()=>{const e=W();e!==f&&(f=e,U())},300);window.addEventListener("resize",ye);const ve=async()=>{D(),B(),P(),i=1;try{const e=$(f),{animals:t,totalItems:s}=await S(i,e);g(t,!1),l=Math.ceil(s/e),h(i,l),y()||z(i,l),R(i,l),U(),h(i,l)}catch(e){console.log(e),L.error({message:"Oops, something went wrong!"})}finally{M()}},ke=async e=>{if(e.target.nodeName!=="BUTTON")return;_=e.target.dataset.categoryId,i=1;const t=$(f);D(),be(e.target),B(),P();try{if(_==="all"){const{animals:s,totalItems:n}=await S(i,t);g(s,!1),l=Math.ceil(n/t),h(i,l)}else{const{animals:s,totalItems:n}=await O({categoryId:_,page:i,limit:t});g(s,!1),l=Math.ceil(n/t)}h(i,l),y()||z(i,l),R(i,l),U(),C()}catch(s){console.log(s),L.error({message:"Oops, something went wrong!"})}finally{M()}};r.categoryList.addEventListener("click",ke);r.paginationList.addEventListener("click",async e=>{if(e.target.nodeName!=="BUTTON")return;e.target.blur();const t=Number(e.target.dataset.page);t!==i&&(i=t,await F())});r.prevBtn.addEventListener("click",async e=>{e.target.blur(),i!==1&&(i-=1,await F())});r.nextBtn.addEventListener("click",async e=>{e.target.blur(),i!==l&&(i+=1,await F())});const F=async()=>{if(!y()){D(),B(),P();try{const e=$(f);if(_==="all"){const{animals:t,totalItems:s}=await S(i,e);g(t,!1),l=Math.ceil(s/e)}else{const{animals:t,totalItems:s}=await O({categoryId:_,page:i,limit:e});g(t,!1),l=Math.ceil(s/e)}z(i,l),R(i,l),he()}catch(e){console.log(e),L.error({message:"Oops, something went wrong!"})}finally{M()}}};r.loadMoreBtn.addEventListener("click",async()=>{i+=1;const e=$(f);B(),N();try{if(_==="all"){const{animals:t}=await S(i,e);g(t,!0),C(),h(i,l)}else{const{animals:t}=await O({categoryId:_,page:i,limit:e});g(t,!0),C(),h(i,l)}z(i,l)}catch(t){console.log(t),L.error({message:"Oops, something went wrong!"})}finally{M()}});fe();ve();const we="/js_122_bozhenko-zakhar/assets/slide-1-mob-min-dSbCqo9H.jpg",Le="/js_122_bozhenko-zakhar/assets/slide-1-mob@2x-min-DMWamx1N.jpg",je="/js_122_bozhenko-zakhar/assets/slide-1-tab-min-DIK2ilev.jpg",Se="/js_122_bozhenko-zakhar/assets/slide-1-tab@2x-min-DZwyF8XH.jpg",ze="/js_122_bozhenko-zakhar/assets/slide-1-desktop-min-CUit_ctj.jpg",$e="/js_122_bozhenko-zakhar/assets/slide-1-desktop@2x-min-BsyZrAam.jpg",Be="/js_122_bozhenko-zakhar/assets/slide-2-mob-min-Bc5esMqH.jpg",Me="/js_122_bozhenko-zakhar/assets/slide-2-mob@2x-min-DschUynu.jpg",xe="/js_122_bozhenko-zakhar/assets/slide-2-tab-min-CmAeux2c.jpg",qe="/js_122_bozhenko-zakhar/assets/slide-2-tab@2x-min-ZMkCsw4y.jpg",Ee="/js_122_bozhenko-zakhar/assets/slide-2-desktop-min-BVb5UXDB.jpg",Ce="/js_122_bozhenko-zakhar/assets/slide-2-desktop@2x-min-hhFJ02Um.jpg",Te="/js_122_bozhenko-zakhar/assets/slide-3-mob-min-DdMDgsZs.jpg",Ae="/js_122_bozhenko-zakhar/assets/slide-3-mob@2x-min-CW0Jcbru.jpg",He="/js_122_bozhenko-zakhar/assets/slide-3-tab-min-DBrmqaBK.jpg",Ie="/js_122_bozhenko-zakhar/assets/slide-3-tab@2x-min-BXJ6Rb3v.jpg",Oe="/js_122_bozhenko-zakhar/assets/slide-3-desktop-min-Bu_7PKVK.jpg",De="/js_122_bozhenko-zakhar/assets/slide-3-desktop@2x-min-CLG3N8EE.jpg",Ne="/js_122_bozhenko-zakhar/assets/slide-4-mob-min-9NkQUEbI.jpg",Re="/js_122_bozhenko-zakhar/assets/slide-4-mob@2x-min-B9RINJi2.jpg",Pe="/js_122_bozhenko-zakhar/assets/slide-4-tab-min-Cirko9ef.jpg",Ue="/js_122_bozhenko-zakhar/assets/slide-4-tab@2x-min-C3_VmGFk.jpg",Fe="/js_122_bozhenko-zakhar/assets/slide-4-desktop-min-DhDfqD-0.jpg",Ve="/js_122_bozhenko-zakhar/assets/slide-4-desktop@2x-min-CxR8bxza.jpg",Ge="/js_122_bozhenko-zakhar/assets/slide-5-mob-min-BiqkKyQ8.jpg",Ke="/js_122_bozhenko-zakhar/assets/slide-5-mob@2x-min-R3odaZlS.jpg",Ze="/js_122_bozhenko-zakhar/assets/slide-5-tab-min-BsZGumiA.jpg",We="/js_122_bozhenko-zakhar/assets/slide-5-tab@2x-min-RaHw714B.jpg",Je="/js_122_bozhenko-zakhar/assets/slide-5-desktop-min-BUEZTg-Z.jpg",Xe="/js_122_bozhenko-zakhar/assets/slide-5-desktop@2x-min-BX9zHC6l.jpg",Qe=[[ze,$e,je,Se,we,Le,"Людина сидить поруч із безпритульним собакою, демонструючи турботу та довіру","Все почалося у 2015 році з кількох небайдужих людей та одноговрятованого собаки. Сьогодні ми — один з найбільших притулків урегіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."],[Ee,Ce,xe,qe,Be,Me,"Врятована собака з притулку Хатинка Лапок дивиться в камеру",'Ми рятуємо, реабілітуємо та знаходимо люблячі родини длябезпритульних тварин. Наша мета — не просто дати прихисток, а йзабезпечити кожному "хвостику" щасливе та повноцінне життя в новій'],[Oe,De,He,Ie,Te,Ae,"Команда волонтерів притулку Хатинка Лапок разом із врятованими тваринами",'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів тадесятків волонтерів, які щодня вкладають свою душу та час у турботупро наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить віднас.'],[Fe,Ve,Pe,Ue,Ne,Re,"Територія притулку Хатинка Лапок з будівлями та вигульними зонами для тварин","Ми створили безпечний та комфортний простір. Кожна тварина отримуєякісне харчування, своєчасну ветеринарну допомогу, проходитьсоціалізацію та гуляє на спеціально обладнаних майданчиках."],[Je,Xe,Ze,We,Ge,Ke,"Людина ніжно обіймає собаку з притулку, символ любові та безпеки","Ваша допомога — безцінна. Ви можете взяти тваринку додому, стативолонтером, допомогти фінансово або інформаційно. Кожен маленькийвнесок наближає нас до великої мети — світу без безпритульнихтварин."]];document.querySelectorAll(".gallerySlide");const Ye=document.querySelector(".galleryWrapper"),et=Qe.map(e=>`
	<div class="swiper-slide gallerySlide">
		<picture>
			<source
				media="(min-width: 1440px)"
				srcset="
					${e[0]} 1x,
					${e[1]} 2x
				"
			/>
			<source
				media="(min-width: 768px)"
				srcset="
					${e[2]} 1x,
					${e[3]} 2x
				"
			/>
			<source
				media="(max-width: 768px)"
				srcset="
					${e[4]} 1x,
					${e[5]} 2x
				"
			/>
			<img
				src="${e[0]}}"
				alt="${e[6]}"
				loading="lazy"
			/>
		</picture>
		<p class="p-overlay">
			${e[7]}
		</p>
	</div>
	`);function tt(){Ye.insertAdjacentHTML("beforeend",et.join(""))}const st=document.querySelector(".galleryNavBtn"),at=`
	<button
		class="swiper-button-prev galleryBtn"
		type="button"
		aria-label="previous"
	>
		<svg
			class="gallery-btn__icon"
			width="24"
			height="24"
			aria-hidden="true"
		>
			<use href="${u}#icon-arrow_back"></use>
		</svg>
	</button>

	<button
		class="swiper-button-next galleryBtn"
		type="button"
		aria-label="next"
	>
		<svg
			class="gallery-btn__icon"
			width="24"
			height="24"
			aria-hidden="true"
		>
			<use href="${u}#icon-arrow_forward"></use>
		</svg>
	</button>
`;function ot(){st.innerHTML=at}tt();ot();new G(".gallerySwiper",{modules:[K,Z,ae],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,loop:!1,navigation:{nextEl:".gallerySwiper .swiper-button-next",prevEl:".gallerySwiper .swiper-button-prev"},pagination:{el:".gallerySwiper .swiper-pagination",clickable:!0},keyboard:{enabled:!0}});new oe(".accordion",{duration:300,showMultiple:!1,collapse:!0});const nt=document.querySelectorAll("#faq .ac");nt.forEach(e=>{const t=e.querySelector(".icon-plus"),s=e.querySelector(".icon-close");new MutationObserver(()=>{e.classList.contains("is-active")?(t.style.display="none",s.style.display="inline-block"):(t.style.display="inline-block",s.style.display="none")}).observe(e,{attributes:!0,attributeFilter:["class"]})});const it=document.querySelector(".testimonial-navigation-buttons"),rt=`
	<div class="testimonials-prev js-testimonials-prev">
		<svg class="icon-back" viewBox="0 0 24 24">
			<use href="${u}#icon-arrow_back"></use>
		</svg>
	</div>
	<div class="testimonials-next js-testimonials-next">
		<svg class="icon-forward" viewBox="0 0 24 24">
			<use href="${u}#icon-arrow_forward"></use>
		</svg>
	</div>
`;function lt(){it.innerHTML=rt}const ct=document.querySelector(".testimonials-wrapper");function dt(e){const t=parseFloat(e)||0,s=Math.floor(t)+(t%1>=.5?.5:0);let n="";for(let a=1;a<=5;a++){let o="icon-star-outline",c="outline";a<=Math.floor(s)?(o="icon-star-filled",c="filled"):a===Math.ceil(s)&&s%1!==0&&(o="icon-star-half",c="half"),n+=`
      <div class="star ${c}">
        <svg class="star-icon">
          <use href="${u}#${o}"></use>
        </svg>
      </div>
    `}return`<div class="rating">${n}</div>`}async function ut(){try{const t=await(await fetch("https://paw-hut.b.goit.study/api/feedbacks")).json(),s=Array.isArray(t)?t.slice(1,7):t.feedbacks.slice(1,7);s.length&&(pt(s),mt())}catch(e){console.error("Помилка завантаження відгуків:",e)}}function pt(e){ct.innerHTML=e.map(t=>`
        <div class="swiper-slide swiper-slide-testimonial">
          <div class="testimonial-card">
            ${dt(t.rate)}
            <p class="testimonial-quote">${t.description}</p>
            <p class="testimonial-author">${t.author}</p>
          </div>
        </div>
      `).join("")}function mt(){const e=document.querySelector(".section.testimonial"),t=e.querySelector(".testimonials-swiper"),s=e.querySelector(".js-testimonials-next"),n=e.querySelector(".js-testimonials-prev"),a=e.querySelector(".testimonials-pagination");new G(t,{modules:[K,Z],slidesPerView:1,slidesPerGroup:1,spaceBetween:32,loop:!1,watchOverflow:!0,observer:!0,observeParents:!0,navigation:{nextEl:s,prevEl:n,disabledClass:"swiper-button-isNotActive"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{el:a,clickable:!0},breakpoints:{768:{slidesPerGroup:1,slidesPerView:2,spaceBetween:32}}})}ut();lt();const _t=document.querySelector(".footer-logo"),gt=document.querySelector(".footer-social-links-list"),bt=`
<svg class="footer-logo-icon">
		<use href="${u}#icon-alternate-false"></use>
</svg>
`,ht=`
<li class="footer-social-links-list-item">
	<a href="https://www.facebook.com/" class="footer-social-icon" target="_blank">
		<svg class="footer-social-icon-unit">
				<use href="${u}#icon-facebook"></use>
		</svg>
	</a>
</li>
<li class="footer-social-links-list-item">
	<a href="https://www.instagram.com/" class="footer-social-icon" target="_blank">
		<svg class="footer-social-icon-unit">
				<use href="${u}#icon-instagram"></use>
		</svg>
	</a>
</li>
`;function ft(){_t.innerHTML=bt,gt.innerHTML=ht}ft();let X="682f9bbf8acbdf505592ac36";const d=document.querySelector("[data-modal]"),V=document.querySelector("[data-modal-close]"),E=document.querySelector(".adopt-modal-form"),yt=document.querySelector("[data-modal-close]");yt.innerHTML=`
<svg class="adopt-modal-svg" width="24" height="24">
	<use href="${u}#icon-close"></use>
</svg>
`;function vt(e){e&&(X=e),d==null||d.classList.remove("is-hidden"),document.body.classList.add("modal-open"),q()}function x(){d==null||d.classList.add("is-hidden"),document.body.classList.remove("modal-open")}V&&V.addEventListener("click",x);d&&d.addEventListener("click",e=>{e.target===d&&x()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!(d!=null&&d.classList.contains("is-hidden"))&&x()});E&&(E.setAttribute("novalidate","true"),E.addEventListener("submit",async e=>{var c;e.preventDefault();const{name:t,phone:s,comment:n}=e.target.elements,a=s.value.replace(/\D/g,"");if(a.length!==12){v.fire({icon:"error",title:"Помилка",text:"Телефон має містити 12 цифр"});return}if(!t.value.trim()){v.fire({icon:"warning",title:"Помилка заповнення",text:"Будь ласка, введіть ваше ім’я"});return}const o={name:t.value.trim(),phone:a,animalId:X,comment:n.value.trim()||"Запит на знайомство"};try{v.showLoading();const p=await w.post("https://paw-hut.b.goit.study/api/orders",o);console.log("orderData :>> ",p.data),await v.fire({icon:"success",title:"Дякуємо за Вашу заявку!",text:"Запис на знайомство прийнято."}),e.target.reset(),x()}catch(p){console.error("SERVER ERROR:",(c=p.response)==null?void 0:c.data),v.fire({icon:"error",title:"Помилка сервера",text:"Спробуйте пізніше"})}}));const m={backdrop:document.querySelector(".animal-detail-backdrop")};document.addEventListener("click",e=>{const t=e.target.closest(".product-card__btn--learnMore");if(!t)return;const s=t.dataset.modalId;kt(s)});function kt(e){const t=H.animals.get(e);t&&(m.backdrop.innerHTML=wt(t),m.backdrop.classList.add("is-open"),document.body.classList.add("not-scroll"),m.dataBtn=document.querySelector("[data-btn]"),m.dataBtn.addEventListener("click",()=>{vt(e),q()}))}function wt({image:e,species:t,name:s,age:n,gender:a,description:o,healthStatus:c,behavior:p}){return`
		<div class="animal-detail-modal">
			<button type="button" aria-label="close button" class="animal-detail-close-btn">
					<svg class="animal-detail-close-svg" width="32" height="32">
							<use href="${u}#icon-close"></use>
					</svg>
			</button>
			<div class="animal-detail-picture-wrap">
					<img src="${e}" alt="${t}" width="295" height="295" class="animal-detail-picture">
			</div>
		
			<div class="animal-detail-info-wrap">
				<div class="animal-detail-animal-preview">
					<p class="animal-detail-animal">${t}</p>
					<h3 class="animal-detail-headline">${s}</h3>
					<ul class="animal-detail-short-info">
							<li class="animal-detail-descript-item">${n}</li>
							<li class="animal-detail-descript-item">${a}</li>
					</ul>
				</div>

				<ul class="animal-detail-info">
					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Опис:</span>
							${o}
					</li>

					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Здоров’я:</span>
							${c}
					</li>

					<li class="animal-detail-info-item">
							<span class="animal-detail-info-span">Поведінка:</span>
								${p}
					</li>
				</ul>

				<button type="button" data-btn="take-home" class="animal-detail-get-btn">Взяти додому</button>
			</div>
		</div>
`}function q(){m.backdrop.classList.remove("is-open"),document.body.classList.remove("not-scroll")}m.backdrop.addEventListener("click",e=>{(e.target===m.backdrop||e.target.closest(".animal-detail-close-btn"))&&q()});document.addEventListener("keydown",e=>{e.key==="Escape"&&q()});
//# sourceMappingURL=index.js.map
