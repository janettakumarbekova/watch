import AboutUs from "@/src/components/AboutUs";
import Header from "../src/components/Header";
import MainSection from "../src/components/MainSection";
import Watchs from "@/src/components/Watchs";
import Sales from "@/src/components/Sales";

export default function Home() {
	return (
		<div>
			<Header />
			<MainSection />
			<AboutUs />
			<Watchs />
			<Sales />
		</div>
	);
}
