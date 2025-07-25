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
})()
