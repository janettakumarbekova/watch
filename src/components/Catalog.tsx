"use client";
import { epilogue } from "@/app/font";
import React from "react";
import Image from "next/image";
import data from "../data/const";

const Catalog = () => {
	return (
		<div className="py-[70px] w-[90%] max-w-[1440px] mx-auto">
			<h1
				className={`${epilogue.className} text-[#1E2827] text-[40px] font-semibold tracking-[-1px]`}>
				Catalog
			</h1>
			<div className="mt-[10px] flex flex-wrap gap-[20px] max-w-[1240px] justify-center">
				{data.map((el) => (
					<div key={el.id}>
						<div className="rounded-[8px] w-[266px] h-[375px] shadow flex flex-col justify-center px-[10px] mt-[40px] md:mt-[60px]">
							<Image src={el.image} alt="" width={276} height={325} />
							<h3
								className={`${epilogue.className} text-[14px] text-[#141414] tracking-[-1px] font-normal mt-[39px]`}>
								{el.name}
							</h3>
							<h4
								className={`${epilogue.className} text-[12px] text-[rgba(20, 20, 20, 0.5)] tracking-[-1px] font-normal mt-[4px]`}>
								€{el.price}
							</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Catalog;
