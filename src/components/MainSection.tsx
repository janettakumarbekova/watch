"use client";
import React, { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import watch1 from "../../public/images/watch1.svg";
import watch2 from "../../public/images/watch2.svg";
import watch3 from "../../public/images/watch3.svg";
import watch4 from "../../public/images/watch4.svg";
import watch5 from "../../public/images/watch4.svg";
import rectangle from "../../public/images/Rectangle.svg";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
	subsets: ["latin"],
	weight: ["300", "700"],
});

const MainSection = () => {
	const images = [
		{ image: watch1 },
		{ image: watch2 },
		{ image: watch3 },
		{ image: watch4 },
		{ image: watch5 },
	];
	const [currentSlide, setCurrentSlide] = useState(1);
	const totalSlides = images.length;

	const onSlideChange = (swiper: any) => {
		setCurrentSlide(swiper.realIndex + 1);
	};

	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<div className="bg-[#141414] py-[70px] ">
			<div className="w-[90%] max-w-[1440px] mx-auto -z-20">
				<div className="flex justify-between flex-wrap">
					<h1
						className={`${epilogue.className} text-[38px] lg:w-[70%] lg:text-[60px] font-semibold tracking-[-2px] text-white order-1 `}>
						Welcome to our collection of premium watches
					</h1>

					<p
						className={`${epilogue.className} md:flex md:items-center ml-auto md:mt-[-10px] mt-[40px] lg:mt-[0] font-light w-[248px] xl:w-[282px] text-[14px] text-white order-3 lg:order-2`}>
						Our watches are not just timepieces, but also an expression of
						your personality and lifestyle. From classic designs to modern
						ones, we have a watch to suit every taste and occasion.
					</p>
					<div className="flex items-end lg:mb-[-15px] order-2 lg:order-3 mt-[60px] lg:mt-[0]">
						<div className="w-[266px]  md:w-[436px] z-10">
							<Swiper
								modules={[Navigation]}
								navigation={{
									prevEl: ".custom-prev",
									nextEl: ".custom-next",
								}}
								slidesPerView={1}
								onSlideChange={onSlideChange}
								loop
								className=" md:h-[255px] bg-[#1E2827] -z-10">
								{images.map((item, index) => (
									<SwiperSlide
										key={index}
										className="flex justify-center -z-10">
										<div className="w-[266px] h-[200px] md:w-[436px] md:h-[255px] bg-[#1E2827] flex justify-center">
											<Image
												src={item.image}
												alt=""
												width={384}
												height={233}
											/>
										</div>
									</SwiperSlide>
								))}
							</Swiper>

							<div className="mt-[20px] flex justify-between items-center">
								<div className="flex gap-[12px]">
									<button className="custom-prev w-[32px] h-[32px] md:w-[40px] md:h-[40px] flex justify-center items-center border-[1px] border-[#fff] rounded-[5px]">
										<ChevronLeft className="w-[24px] h-[24px] text-[#fff]" />
									</button>
									<button className="custom-next w-[32px] h-[32px] md:w-[40px] md:h-[40px] flex justify-center items-center border-[1px] border-[#fff] rounded-[5px]">
										<ChevronRight className="w-[24px] h-[24px] text-[#fff]" />
									</button>
								</div>
								<div className="flex items-center gap-[6px]">
									<h1 className="text-[14px] md:text-[16px] text-[#fff]">
										{String(currentSlide).padStart(2, "0")}
									</h1>
									<hr className="w-[32px] md:w-[40px] border-[#fff]" />
									<h1 className="text-[14px] md:text-[16px] text-[#fff]">
										{String(totalSlides).padStart(2, "0")}
									</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="order-4 mt-[40px] ">
						<Image
							src={rectangle}
							alt=""
							width={676}
							height={394}
							className="lg:w- lg:h-[379px] xl:w-[676px] xl:h-[394px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainSection;
