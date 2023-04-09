export default class ZeroToNumber {
	element: HTMLUListElement;
	frameRequest: number | undefined;
	children: string;

	constructor(
		ref: React.MutableRefObject<HTMLUListElement>,
		children: string
	) {
		this.element = ref.current;
		this.children = children;
	}

	increaseNumber() {
		this.createAnimation();

		const spanItem = this.element.querySelectorAll(this.children);

		spanItem.forEach((element) => {
			const elementNumber = parseInt(element.innerHTML);
			let count = 0;
			const speed = elementNumber > 50 ? 60 : elementNumber * 100;

			const innerIncrease = () => {
				if (elementNumber >= count) {
					element.innerHTML = `${count} `;
					count++;
					setTimeout(() => innerIncrease(), speed);
				}
			};

			innerIncrease();
		});

		this.cancel();
	}

	createAnimation() {
		this.frameRequest = requestAnimationFrame(this.increaseNumber);
	}

	cancel() {
		this.frameRequest && cancelAnimationFrame(this.frameRequest);
	}
}
