import Image from "next/image";
import React from "react";
import saleImage1 from "../../public/images/image 68.svg";
import saleImage2 from "../../public/images/image 64.svg";
import saleImage3 from "../../public/images/image 65.svg";
import saleImage4 from "../../public/images/image 66.svg";
import { epilogue } from "@/app/font";

const Sales = () => {
	return (
		<div className="w-[90%] max-w-[1440px] mx-auto py-[70px]">
			<h1
				className={`${epilogue.className} text-[#1E2827] text-[40px] font-semibold tracking-[-1px] mb-[80px]`}>
				Sale
			</h1>
			<div className="flex justify-between">
				<div className="flex gap-[20px]">
					<div className="flex flex-col gap-[10px]">
						<div className="w-[146px] h-[146px] bg-[#141414] flex justify-center items-center">
							<Image src={saleImage1} alt="" />
						</div>
						<div className="w-[146px] h-[146px] bg-[#141414] flex justify-center items-center">
							<Image src={saleImage2} alt="" />
						</div>
						<div className="w-[146px] h-[146px] bg-[#141414] flex justify-center items-center">
							<Image src={saleImage3} alt="" />
						</div>
						<div className="w-[146px] h-[146px] bg-[#141414] flex justify-center items-center">
							<Image src={saleImage4} alt="" />
						</div>
					</div>
					<div className="w-[406px] h-[614px] bg-[#141414] flex justify-center items-center">
						<Image src={saleImage1} alt="" className="w-full " />
					</div>
				</div>
				<div className="w-[369px]">
					<h2
						className={`${epilogue.className} font-normal text-[#141414] text-[38px] tracking-[-1px]`}>
						Greenlane Watch By Police For MenHT{" "}
					</h2>
					<p
						className={`${epilogue.className} mt-[8px] font-normal text-[#14141480] text-[14px] tracking-[-1px]`}>
						Product tag: PEWJK2227003
					</p>
					<p
						className={`${epilogue.className} mt-[16px] font-normal text-[##141414] text-[18px] tracking-[-1px]`}>
						€700{" "}
						<span className="text-[#14141480] text-[12px] ml-[8px] line-through">
							€1000
						</span>
					</p>
					<div className="flex justify-between items-center border-t-[1.5px] border-[#202020ba] mt-[40px] py-[8px]">
						<h1
							className={`${epilogue.className} font-normal text-[#141414] text-[18px] tracking-[-1px] uppercase`}>
							Description
						</h1>
						<hr className="border-[1.5px] border-[#202020bd] w-[16px]" />
					</div>
					<p
						className={`${epilogue.className} mt-[9px] font-normal text-[#14141480] text-[14px] tracking-[-0.5px] leading-[18px]`}>
						Richly detailed with an understated design - the Police Men’s
						Greenlane watch features a versatile multifunction design that
						fits effortlessly into work and play. The steel case is
						adorned with a semi-transparent black dial. The timepiece
						exhibits a contrast through a black IP bracelet with matching
						crown and pushers.
					</p>
					<div className="flex justify-between items-center border-t-[1.5px] border-[#202020ba] mt-[20px] py-[8px]">
						<h1
							className={`${epilogue.className} font-normal text-[#141414] text-[18px] tracking-[-1px] uppercase`}>
							DETAILS & FEATUREStion
						</h1>
						<hr className="border-[1.5px] border-[#202020bd] w-[16px]" />
					</div>
					<p
						className={`${epilogue.className} mt-[9px] font-normal text-[#14141480] text-[14px] tracking-[-0.5px]`}>
						Gender: man
					</p>
					<p
						className={`${epilogue.className} mt-[-4px] font-normal text-[#14141480] text-[14px] tracking-[-0.5px]`}>
						Size: 46x54.5mm
					</p>
					<p
						className={`${epilogue.className} mt-[-4px]  font-normal text-[#14141480] text-[14px] tracking-[-0.5px]`}>
						Case Colour: Steel Band
					</p>
					<p
						className={`${epilogue.className} mt-[-4px]  font-normal text-[#14141480] text-[14px] tracking-[-0.5px]`}>
						Material: Metal
					</p>
					<p
						className={`${epilogue.className} mt-[-4px]  font-normal text-[#14141480] text-[14px] tracking-[-0.5px]`}>
						Case Material: Metal
					</p>
					<p
						className={`${epilogue.className} mt-[-4px]  font-normal text-[#14141480] text-[14px] tracking-[-0.5px]`}>
						Features: Multifunction
					</p>
					<p
						className={`${epilogue.className} mt-[-4px]  font-normal text-[#14141480] text-[14px] tracking-[-0.5px]`}>
						Water Resistant: 5 (ATM) Band
					</p>
					<p
						className={`${epilogue.className} mt-[-4px]  font-normal text-[#14141480] text-[14px] tracking-[-0.5px]`}>
						Colour: Steel
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sales;
