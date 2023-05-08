import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight, Star } from "react-feather";
import { Link } from "react-router-dom";

function Carousel({ children, ...props }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ containScroll: 'trimSnaps' });

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<div className="relative" {...props}>
			<div className="viewport overflow-hidden md:py-4" ref={emblaRef}>
				<div className="container flex gap-4">
					{children}
				</div>
			</div>
			<button className="max-md:hidden absolute flex items-center justify-center top-0 left-0 h-full w-[50px] hover:bg-white/25" onClick={scrollPrev}>
				<ArrowLeft color="white" />
			</button>
			<button className="max-md:hidden absolute flex items-center justify-center top-0 right-0 h-full w-[50px] hover:bg-white/25" onClick={scrollNext}>
				<ArrowRight color="white" />
			</button>
		</div>
	)
}

function Item({ src }) {
	return (
		<div className="rounded overflow-hidden basis-full flex justify-center items-center grow-0 shrink-0 min-w-0 w-full h-[300px]">
			<img src={src} alt="carousel slide" />
		</div>
	)
}

function AdItem({ src, goto }) {
	return (
		<div className="rounded overflow-hidden basis-full flex justify-center items-center grow-0 shrink-0 min-w-0 w-full h-[300px]">
            <Link to={goto}>
			    <img src={src} alt="carousel slide" />
            </Link>
		</div>
	)
}

function MenuItem({ menuItem }) {
	return (
		<div className="rounded md:hover:scale-105 ease-in duration-50 overflow-hidden drop-shadow-md bg-white flex-col basis-[300px] min-w-0 grow-0 shrink-0 flex min-w-0 align-start">
			<img className="object-cover h-[250px]" src={menuItem.src} alt="item" />
			<div className="p-3">
				<div className="flex justify-between">
					<div>
						<h1 className="font-bold">{menuItem.name}</h1>
						<p className="text-sm text-gray-400">{menuItem.description}</p>
					</div>
					<div className="text-white rounded-full px-2 py-1 bg-green-800 flex self-start text-sm gap-1"><span>3.4</span> <Star fill="white" size={18}/></div>
				</div>
				<hr className="my-3"/>
				<div className="flex justify-between">
					<span className="text-lg font-bold" >Rs. {menuItem.price}</span>
					<button className="primary-button">Add</button>
				</div>
			</div>
			<div className="p-2 bg-orange-200 text-orange-400 text-sm">
				Grab Now over 50% off
			</div>
		</div>
	)
}

Carousel.Item = Item
Carousel.MenuItem = MenuItem
Carousel.AdItem = AdItem

export default Carousel;
