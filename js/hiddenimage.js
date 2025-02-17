/**
 * @package Helix Ultimate Framework
 * @author JoomShaper https://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2023 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or Later
 */


jQuery(function ($) {
	
		/* ==================================================
		    Services Hover JS
		================================================== */
		const link = document.querySelectorAll('.service-hover-item');
		const linkHoverReveal = document.querySelectorAll('.service-hover-wrapper');
		const linkImages = document.querySelectorAll('.service-hover-wrapper img');
		for (let i = 0; i < link.length; i++) {
			link[i].addEventListener('mousemove', (e) => {
				linkHoverReveal[i].style.opacity = 1;
				linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(-3deg)`;
				linkImages[i].style.transform = 'scale(1, 1)';
				linkHoverReveal[i].style.left = e.clientX + "px";
			})
			link[i].addEventListener('mouseleave', (e) => {
				linkHoverReveal[i].style.opacity = 0;
				linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(5deg)`;
				linkImages[i].style.transform = 'scale(0.8, 0.8)';
			})
		}	
	
});
