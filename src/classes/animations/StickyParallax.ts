import gsap from "gsap";

export default class StickyParallax {
	ref: React.MutableRefObject<HTMLDivElement>;
	distance: number;
	child:
		| Array<{
				element: string;
				distance: number;
		  }>
		| string;
	thereIsChildren: boolean;

	constructor({
		ref,
		child,
		distance,
	}: {
		ref: React.MutableRefObject<HTMLDivElement>;
		child:
			| Array<{
					element: string;
					distance: number;
			  }>
			| string;
		distance?: number;
	}) {
		this.ref = ref;
		this.child = child;
		this.distance = distance || 0;
		this.thereIsChildren = Array.isArray(this.child);

		this.setListeners();
	}

	setListeners() {
		this.ref.current.addEventListener("mouseleave", () => {
			this.thereIsChildren
				? this.noSupport()
				: gsap.to(this.child, 0.3, { scale: 1, x: 0, y: 0 });
		});

		// this.ref.current.addEventListener("mouseenter", function () {});

		this.ref.current.addEventListener("mousemove", (e) => {
			this.thereIsChildren ? this.noSupport() : this.parallaxIt(e);
		});
	}

	parallaxIt(e: MouseEvent) {
		const $this = this.ref.current.getBoundingClientRect();
		const relX = e.pageX - $this.left - window.scrollX;
		const relY = e.pageY - $this.top - window.scrollY;

		const x = ((relX - $this.width / 2) / $this.width) * this.distance;
		const y = ((relY - $this.height / 2) / $this.height) * this.distance;

		gsap.to(this.child, 0.3, {
			x,
			y,
			ease: "power2.easeOut",
		});
	}

	noSupport() {
		console.log("No support to +1 elements. ");
	}
}
