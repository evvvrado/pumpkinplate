export default class ZeroToNumber {
	element: HTMLElement
	frameRequest: any

	constructor(ref: React.MutableRefObject<HTMLElement>) {
		this.element = ref.current
	}

	increaseNumber() {
		this.createAnimation()

		const spanItem = this.element.querySelectorAll("li strong span")

		spanItem.forEach((element) => {
			const elementNumber = parseInt(element.innerHTML)
			let count = 0
			const speed = elementNumber > 50 ? 60 : elementNumber * 100

			const innerIncrease = () => {
				if (elementNumber >= count) {
					element.innerHTML = `${count} `
					count++
					setTimeout(() => innerIncrease(), speed)
				}
			}

			innerIncrease()
		})

		this.cancel()
	}

	createAnimation() {
		this.frameRequest = requestAnimationFrame(this.increaseNumber)
	}

	cancel() {
		this.frameRequest && cancelAnimationFrame(this.frameRequest)
	}
}
