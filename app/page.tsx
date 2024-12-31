import AboutUs from "@/src/components/AboutUs";
import Header from "../src/components/Header";
import MainSection from "../src/components/MainSection";
import Sales from "@/src/components/Sales";

export default function Home() {
	return (
		<div>
			<Header />
			<MainSection />
			<AboutUs />
			<Sales />
		</div>
	);
}
