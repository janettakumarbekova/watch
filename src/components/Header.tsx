"use client";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/images/logo.svg";
import menu from "../../public/images/gg_menu-left.svg";
import close from "../../public/images/x.svg";
const epilogue = Epilogue({
	subsets: ["latin"],
	weight: ["400", "700"],
});

const Header = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen((prevState) => !prevState);
	};

	const closeSidebar = () => {
		setSidebarOpen(false);
	};

	return (
		<div className="bg-[#141414e1] w-full py-[20px] fixed backdrop-blur-[40px] z-50">
			<div className="w-[90%] max-x[1440px] mx-auto flex justify-between">
				<div className="flex justify-between w-full md:w-[450px] md:gap-[100px] items-center">
					<div className="flex items-center">
						<Image src={logo} alt="Logo" width={30} height={30} />
						<h1
							className={`${epilogue.className} tracking-[-1px] text-[#ffff] text-[16px]`}>
							thewatchspot
						</h1>
					</div>
					<nav className="hidden items-center md:flex gap-[40px]">
						<a
							href=""
							className={`${epilogue.className} text-[#ffff] text-[12px] uppercase`}>
							About us
						</a>
						<a
							href=""
							className={`${epilogue.className} text-[#ffff] text-[12px] uppercase`}>
							Catalog
						</a>
						<a
							href=""
							className={`${epilogue.className} text-[#ffff] text-[12px] uppercase`}>
							Sale
						</a>
					</nav>
					<div className="flex flex-wrap items-center justify-between md:hidden order-1">
						<div className="flex md:order-2 rtl:space-x-reverse">
							{isSidebarOpen ? (
								<button type="button" onClick={closeSidebar} id="close">
									<Image src={close} alt="Close Sidebar" />
								</button>
							) : (
								<button type="button" onClick={toggleSidebar}>
									<Image src={menu} alt="Open Sidebar" />
								</button>
							)}
						</div>
					</div>
					<div className="md:hidden">
						<aside
							className={`flex flex-col items-center fixed top-[72px] right-0 w-[346px] h-[100vh] bg-[#141414f1] backdrop-blur-[40px] transform transition-transform duration-300 ease-in-out ${
								isSidebarOpen ? "translate-x-0" : "translate-x-full"
							} z-[100]`}
							style={{
								borderRadius: "10px 0 0 0",
								boxShadow: "10px 4px 4px 0px rgba(229, 229, 255, 0.54)",
							}}>
							<div className="flex flex-col gap-[24px] mt-[61px]">
								<a
									href=""
									className={`${epilogue.className} text-[#ffff] text-[12px] uppercase`}>
									About us
								</a>
								<a
									href=""
									className={`${epilogue.className} text-[#ffff] text-[12px] uppercase`}>
									Catalog
								</a>
								<a
									href=""
									className={`${epilogue.className} text-[#ffff] text-[12px] uppercase`}>
									Sale
								</a>
							</div>
						</aside>
					</div>
				</div>
				<div className="hidden gap-[15px] md:flex">
					<button className="bg-[#ffff] text-[#1E2827] text-[16px] py-[4px] px-[15px] rounded-[6px]">
						Sign in
					</button>
					<button className="bg-[#1E2827] text-[#ffff] text-[16px] py-[6px] px-[15px] rounded-[6px]">
						Sign up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
