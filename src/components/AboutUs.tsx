import { epilogue } from "@/app/font";
import gif from "../../public/images/gif.svg";
import Image from "next/image";
const AboutUs = () => {
	return (
		<div className="py-[40px] ">
			<div className="w-[90%] max-w-[1440px] mx-auto">
				<div className=" md:flex items-start justify-between">
					<h1
						className={`${epilogue.className} text-[32px] md:text-[40px] font-semibold tracking-[-1px]`}>
						About us
					</h1>
					<div className="md:flex gap-[20px] ">
						<p
							className={`${epilogue.className} font-light text-[14px] md:w-[240px] lg:w-[369px] xl:w-[439px] leading-[18px] tracking-[-1px] mt-[40px] md:mt-0`}>
							Welcome to our premium watch collection, where luxury and
							style meet functionality and precision. Our selection of
							timepieces embodies the very best in Swiss craftsmanship
							and engineering, ensuring that you'll always have a
							reliable and stylish accessory on your wrist.
						</p>
						<p
							className={`${epilogue.className} font-light text-[14px] md:w-[240px] lg:w-[369px] xl:w-[439px] leading-[18px] tracking-[-1px] mt-[20px] md:mt-0`}>
							At our premium watch collection, we believe that a watch is
							more than just a timekeeping device – it's a statement
							piece that reflects your personality and style. So why
							settle for anything less than the best? Browse our
							collection today and discover the perfect watch for you.
						</p>
					</div>
				</div>
				<Image
					src={gif}
					alt=""
					className="mt-[40px] ml-auto lg:w-[892px]"
				/>
			</div>
		</div>
	);
};

export default AboutUs;
