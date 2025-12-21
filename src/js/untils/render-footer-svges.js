import sprite from "../../img/sprite.svg";

const logoContainer = document.querySelector(".footer-logo");
const footerIcons = document.querySelectorAll(".footer-social-links-list-item");

const logo = `
<svg class="footer-logo-icon">
		<use href="${sprite}#icon-alternate-false"></use>
</svg>
`

const svg1 = `
<svg class="footer-social-icon-unit">
		<use href="${sprite}#icon-facebook"></use>
</svg>
`

const svg2 = `
<svg class="footer-social-icon-unit">
		<use href="${sprite}#icon-instagram"></use>
</svg>
`

export default function renderFooterSvges() {
	logoContainer.innerHTML = logo;
	footerIcons[0].innerHTML = svg1;
	footerIcons[1].innerHTML = svg2;
}