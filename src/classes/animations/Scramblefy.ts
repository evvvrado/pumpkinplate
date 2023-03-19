export default class Scramblefy {
	scrambledChars: string;

	mainText: string;
	mainTextSize: number;

	draft: Array<string>;

	frame: number;
	frameRequest: number | undefined;
	ref: React.MutableRefObject<HTMLSpanElement>;
	speed: number;

	constructor({
		text,
		reference,
		speed,
	}: {
		text: string;
		reference: React.MutableRefObject<HTMLSpanElement>;
		speed: number;
	}) {
		this.scrambledChars =
			"!<>-_\\/[]{}—=+*^?#________123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		this.mainText = text;
		this.mainTextSize = this.mainText.length;

		this.frame = 0;
		this.ref = reference;

		this.draft = [];

		this.speed = speed;

		this.setText();
	}

	setText() {
		this.frameRequest = requestAnimationFrame(this.updateChars);
		this.updateChars();
	}

	updateChars() {
		if (this.frame < this.mainTextSize) {
			if (this.frame <= this.mainTextSize - 2) {
				for (let i = this.frame; i < this.mainTextSize; i++) {
					this.draft[i] = this.randomChar();
				}
			}

			this.draft[this.frame] = Array.from(this.mainText)[this.frame];

			const output = this.draft.toString().replace(/,/g, "");

			this.ref.current.textContent = output;

			this.frame++;

			setTimeout(() => this.updateChars(), this.speed);
		}

		this.cancel();
	}

	cancel() {
		this.frameRequest && cancelAnimationFrame(this.frameRequest);
	}

	randomChar() {
		return this.scrambledChars[
			Math.floor(Math.random() * this.scrambledChars.length)
		];
	}
}
