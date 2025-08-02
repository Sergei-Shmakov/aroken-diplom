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
})()
