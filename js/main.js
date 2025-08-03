;(function () {
	//burger
	document.addEventListener('click', burgerInit)
	function burgerInit(e) {
		const target = e.target
		const burgerIcon = target.closest('.burger-icon')
		const burgerNavLink = target.closest('.nav__link')
		if (!burgerIcon && !burgerNavLink) return
		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else {
			document.body.classList.remove('body--opened-menu')
		}
	}

	//language
	document.addEventListener('click', selectLanguage)
	function selectLanguage(e) {
		const languageSelector = document.querySelector('.language-selector')
		const selectedLanguage = languageSelector.querySelector(
			'.selected__language'
		)
		const languageDropdown = languageSelector.querySelector('.language__list')

		languageDropdown.querySelectorAll('li').forEach(item => {
			item.addEventListener('click', function () {
				const flagSrc = this.querySelector('img').src
				const langText = this.querySelector('span').textContent

				selectedLanguage.querySelector('img').src = flagSrc
				selectedLanguage.querySelector('.language-code').textContent = langText
			})
		})
		document.addEventListener('click', function (e) {
			if (!languageSelector.contains(e.target)) {
				languageDropdown.style.overflow = 'hidden'
				languageDropdown.style.opacity = '0'
			} else {
				languageDropdown.style.overflow = 'visible'
				languageDropdown.style.opacity = '1'
			}
		})
	}
	document.addEventListener('click', selectLanguageMenu)
	function selectLanguageMenu(e) {
		const languageSelectorMenu = document.querySelector(
			'.language-selector__menu'
		)
		const selectedLanguageMenu = languageSelectorMenu.querySelector(
			'.selected__language__menu'
		)
		const languageDropdownMenu = languageSelectorMenu.querySelector(
			'.language__list__menu'
		)

		languageDropdownMenu.querySelectorAll('li').forEach(item => {
			item.addEventListener('click', function () {
				const flagSrc = this.querySelector('img').src
				const langText = this.querySelector('span').textContent

				selectedLanguageMenu.querySelector('img').src = flagSrc
				selectedLanguageMenu.querySelector('.language-code').textContent =
					langText
			})
		})
		document.addEventListener('click', function (e) {
			if (!languageSelectorMenu.contains(e.target)) {
				languageDropdownMenu.style.overflow = 'hidden'
				languageDropdownMenu.style.opacity = '0'
			} else {
				languageDropdownMenu.style.overflow = 'visible'
				languageDropdownMenu.style.opacity = '1'
			}
		})
	}

	//button active

	document.addEventListener('DOMContentLoaded', function () {
		function checkRequiredFields(form) {
			const requiredInputs = form.querySelectorAll('input[required]')
			let allFilled = true
			requiredInputs.forEach(input => {
				if (!input.value.trim()) {
					allFilled = false
				}
			})
			return allFilled
		}
		function updateSubmitButton(form) {
			const submitButton = form.querySelector('button[type="submit"]')
			if (!submitButton) return
			const isFormValid = checkRequiredFields(form)
			if (isFormValid) {
				submitButton.classList.add('feedback__button--active')
				submitButton.disabled = false
			} else {
				submitButton.classList.remove('feedback__button--active')
				submitButton.disabled = true
			}
		}
		document.addEventListener('click', function (event) {
			const contactForm = event.target.closest('.form, form')
			if (contactForm) {
				const requiredInputs = contactForm.querySelectorAll('input[required]')
				requiredInputs.forEach(input => {
					input.addEventListener('input', function () {
						updateSubmitButton(contactForm)
					})
				})
				updateSubmitButton(contactForm)
			}
		})
		document.querySelectorAll('.form, form').forEach(form => {
			updateSubmitButton(form)
		})
	})
	//accordion

	const accordionLists = document.querySelectorAll('.accordion-list')

	accordionLists.forEach(el => {
		el.addEventListener('click', e => {
			const accordionList = e.currentTarget
			const accordionOpenedItem = accordionList.querySelector(
				'.accordion-list__item--opened'
			)
			const accordionOpenedContent = accordionList.querySelector(
				'.accordion-list__item--opened .accordion__item-text'
			)

			const accordionControl = e.target.closest('.accordion-list__control')
			if (!accordionControl) return
			const accordionItem = accordionControl.parentElement
			const accordionContent = accordionControl.nextElementSibling

			if (accordionOpenedItem && accordionOpenedItem != accordionItem) {
				accordionOpenedItem.classList.remove('accordion-list__item--opened')
				accordionOpenedContent.style.maxHeight = null
			}
			accordionItem.classList.toggle('accordion-list__item--opened')

			if (accordionItem.classList.contains('accordion-list__item--opened')) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
			} else {
				accordionContent.style.maxHeight = null
			}
		})
	})

	const container = document.querySelector('.news-list')
	const button = document.querySelector('.show__more')

	button.addEventListener('click', function () {
		if (container.classList.contains('news-list--closed')) {
			container.classList.remove('news-list--closed')
			button.classList.add('show__more--close')
		} else {
			container.scrollTo({
				top: 0,
				behavior: 'smooth',
			})

			setTimeout(() => {
				container.classList.add('news-list--closed')
				button.classList.remove('show__more--close')
			}, 1)
		}
	})
})()
