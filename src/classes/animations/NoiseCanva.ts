/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject } from "react";

export default class NoiseCanva {
	canvas: HTMLCanvasElement | HTMLElement | null;
	ctx;

	wWidth = 0;
	wHeight = 0;

	noiseData = [] as ImageData[];
	frame: number;

	loopTimeout: any;
	resizeThrottle: any;

	constructor({
		ref: elementReference,
	}: {
		ref: MutableRefObject<HTMLCanvasElement>;
	}) {
		this.canvas = elementReference.current;
		this.ctx = (this.canvas as HTMLCanvasElement).getContext("2d");
		this.frame = 0;

		this.setup();
	}

	createNoise = () => {
		if (!this.ctx) return;

		const idata = this.ctx.createImageData(this.wWidth, this.wHeight);
		const buffer32 = new Uint32Array(idata.data.buffer);
		const len = buffer32.length;

		for (let i = 0; i < len; i++) {
			if (Math.random() < 0.5) {
				buffer32[i] = 0xff000000;
			}
		}

		this.noiseData.push(idata);
	};

	paintNoise = () => {
		if (!this.ctx) return;

		if (this.frame === 9) {
			this.frame = 0;
		} else {
			this.frame++;
		}

		this.ctx.putImageData(this.noiseData[this.frame], 0, 0);
	};

	loop = () => {
		this.paintNoise();

		this.loopTimeout = window.setTimeout(() => {
			window.requestAnimationFrame(this.loop);
		}, 1000 / 25);
	};

	setup = () => {
		this.wWidth = window.innerWidth;
		this.wHeight = window.innerHeight;

		(this.canvas as HTMLCanvasElement).width = this.wWidth;
		(this.canvas as HTMLCanvasElement).height = this.wHeight;

		for (let i = 0; i < 10; i++) {
			this.createNoise();
		}

		this.loop();
	};

	reset = () => {
		window.addEventListener(
			"resize",
			() => {
				window.clearTimeout(this.resizeThrottle);

				this.resizeThrottle = window.setTimeout(() => {
					window.clearTimeout(this.loopTimeout);
					this.setup();
				}, 200);
			},
			false
		);
	};
}
