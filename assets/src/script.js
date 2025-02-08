// DOM ELEMENT
const dayInputValue = document.querySelector("#day")
const monthInputValue = document.querySelector("#month")
const yearInputValue = document.querySelector("#year")
const submitBtnEl = document.querySelector("#submit-btn")
const allFormInput = document.querySelectorAll(".form__input")

const formContainerYearEl = document.querySelector(".form__container--year")
const formContainerMonthEl = document.querySelector(".form__container--month")
const formContainerdayEl = document.querySelector(".form__container--day")
const formErrorEl = document.querySelectorAll(".form__error")

const birthYearEl = document.querySelector("#birth-year")
const birthMonthEl = document.querySelector("#birth-month")
const birthDayEl = document.querySelector("#birth-date")
// console.log(latestDate.now());

// check for date Error
const datey = new Date(2024, 3, 31)
console.log(datey.getDate())



const checkDay = function (e) {
	e.preventDefault()

	if (!checkYear()) return checkYear()
	else {
		emptyfield()
		invalidDate()
		checkYear()
	}
	if (checkYear() && emptyfield() && invalidDate()) {
		const latestDate = new Date()

		const birthDate = new Date(+yearInputValue.value, +monthInputValue.value, +dayInputValue.value)
		const birthYear = latestDate.getFullYear() - birthDate.getFullYear()
		birthMonth = birthDate.getMonth()
		birthDay = birthDate.getDate()
		console.log(birthMonth)

		setTimeInterval(birthYearEl, birthYear)
		setTimeInterval(birthDayEl, birthDay)
		setTimeInterval(birthMonthEl, birthMonth)
	}
}
const displayError = function (index= 0, textContent= "must be valid day") {
	formErrorEl[index].textContent = textContent
	formErrorEl[index].parentElement.classList.add("error")
}

const inputElement = function () {
	allFormInput.forEach((e) => {
		e.addEventListener("input", function () {
			formErrorEl.forEach((e) => e.parentElement.classList.remove("error"))
			if (e.classList.contains("form__input--year")) {
				this.value = this.value.slice(0, 4)
			} else {
				this.value = this.value.slice(0, 2)
			}
		})
	})
}
inputElement()

const emptyfield = function () {
	let checkIfTrue = true
	if (!dayInputValue.value) {
		displayError(0, `input field is required`)
		checkIfTrue = false
	}

	if (!monthInputValue.value) {
		displayError(1, `input field is required`)
		checkIfTrue = false
	}

	if (!yearInputValue.value) {
		displayError(2, `input field is required`)
		checkIfTrue = false
	}

	return checkIfTrue
}
const invalidDate = function () {
	const month = +monthInputValue.value - 1,
		day = +dayInputValue.value
	console.log(dayInputValue.value)

	const thirtyDays = [3, 5, 8, 10]
	const february = 2

	let checkInvalidDate = true

	if (thirtyDays.includes(month) && day > 30) {
		displayError()

		checkInvalidDate = false
	}

	if (+monthInputValue.value === february && !checkLeapYear(yearInputValue.value) && day > 28) {
		displayError()
		checkInvalidDate = false
		console.log(checkInvalidDate)
	}
	if (+monthInputValue.value === february && checkLeapYear(yearInputValue.value) && day > 29) {
		displayError()
		checkInvalidDate = false
	}

	return checkInvalidDate
}
const x= "jdjdjdjddjdj"
const checkYear = function () {
	let checkYear = true
	const latestDate = new Date()
	if (parseFloat(yearInputValue.value) > latestDate.getFullYear()) {
		displayError(2, `Must be in the Past`)
		checkYear = false
	}
	if (+monthInputValue.value > 12) {
		displayError(1, `Must be a valid Month`)
		checkYear = false
	}
	if (+dayInputValue.value > 31) {
		displayError(0, `Must be a valid day`)
		checkInvalidDate = false
	}
	return checkYear
}

submitBtnEl.addEventListener("click", checkDay)
const setTimeInterval = function (dom, birthDate) {
	let years = 0
	let interval

	const inc = function () {
		dom.textContent = `${years}`

		if (years === birthDate || birthDate === 0) {
			clearInterval(interval)
		}

		years++
	}

	interval = setInterval(inc, 100)
}

const checkLeapYear = function (year) {
	let checkIfTrue = true
	if (year % 4 === 0) {
		checkIfTrue = true
		if (year % 100 === 0) {
			checkIfTrue = false
			if (year % 400 === 0) {
				checkIfTrue = true
			} else {
				checkIfTrue = false
			}
		} else {
			checkIfTrue = true
		}
	} else {
		checkIfTrue = false
	}
	return checkIfTrue
}

/*
 *we have 11 month
 */
