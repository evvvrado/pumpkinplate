/* eslint-disable @typescript-eslint/no-explicit-any */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import horizontalLoop from "../../utils/helpers/horizontalLoop";

export default class InfiniteList {
	ref: React.MutableRefObject<HTMLHeadingElement>;
	wrapperRef: React.MutableRefObject<HTMLDivElement>;
	children: NodeListOf<HTMLSpanElement>;

	constructor({
		reference,
		wrapperReference,
	}: {
		reference: React.MutableRefObject<HTMLHeadingElement>;
		wrapperReference: React.MutableRefObject<HTMLDivElement>;
	}) {
		this.ref = reference;
		this.wrapperRef = wrapperReference;
		this.children = this.ref.current.querySelectorAll("span");

		this.newAnimation();
	}

	newAnimation() {
		const loop = horizontalLoop(this.children, {
			paused: true,
			repeat: -1,
		});

		loop.play();

		ScrollTrigger.create({
			onUpdate: function (self: any) {
				const velocity = self.getVelocity();

				loop.timeScale(-velocity / 100);

				gsap.to(loop, {
					timeScale: self.direction === -1 ? 1 : -1,
				});
			},
		});
	}
}
