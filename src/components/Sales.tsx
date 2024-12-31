import { epilogue } from "@/app/font";
import Image from "next/image";
import React from "react";
import sales1 from "../../public/images/sales1.svg";
import sales2 from "../../public/images/sales2.svg";

const Sales = () => {
	return (
		<div className="w-[90%] max-w-[1440px] mx-auto py-[70px]">
			<div>
				<h3
					className={`${epilogue.className} font-light text-[12px] tracking-[6%] text-[#14141466] mb-[8px] `}>
					New watches
				</h3>
				<h1
					className={`${epilogue.className} w-full text-[32px] md:w-[448px] font-semibold md:text-[40px] tracking-[-1px] leading-[44px] text-[#1E2827] mb-[40px] md:mb-[80px]`}>
					Green And Bronze—The Match Made In Heaven
				</h1>
				<div className="flex w-full md:justify-between flex-col md:flex-row">
					<Image src={sales1} alt="" className="md:w-[48%] " />
					<Image
						src={sales2}
						alt=""
						className="md:w-[48%] mt-[20px] md:mt-[0]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Sales;
