import catalog from "../../images/catalog1.svg";
interface IData {
	id: number;
	image: string;
	name: string;
	price: number;
	description: string;
	details: {
		gender: string;
		size: string;
		caseColour: string;
		bandMaterial: string;
		caseMaterial: string;
		feature: string;
		waterResistant: string;
		bandColor: string;
	};
}

const data: IData[] = [
	{
		id: 1,
		image: "/images/catalog1.svg",
		name: "Tube Watch S42 Date Steel With Black Case",
		price: 395,
		description:
			"Richly detailed with an understated design - the Police Men’s Greenlane watch.",
		details: {
			gender: "man",
			size: "46x54.5mm",
			caseColour: "Steel",
			bandMaterial: "Metal",
			caseMaterial: "Metal",
			feature: "Multifunction",
			waterResistant: "5 (ATM)",
			bandColor: "Steel",
		},
	},
	{
		id: 2,
		image: "/images/catalog2.svg",
		name: "Avondale Watch Police For Men",
		price: 800,
		description:
			"Elegant design combined with advanced functionality - perfect for any occasion.",
		details: {
			gender: "man",
			size: "42x50mm",
			caseColour: "White",
			bandMaterial: "Leather",
			caseMaterial: "Stainless Steel",
			feature: "Chronograph",
			waterResistant: "3 (ATM)",
			bandColor: "Black",
		},
	},
	{
		id: 3,
		image: "/images/catalog3.svg",
		name: "Diver  300M Co‑Axial Master Chronometer Chronograph",
		price: 600,
		description:
			"Elegant design combined with advanced functionality - perfect for any occasion.",
		details: {
			gender: "man",
			size: "42x50mm",
			caseColour: "White",
			bandMaterial: "Leather",
			caseMaterial: "Stainless Steel",
			feature: "Chronograph",
			waterResistant: "3 (ATM)",
			bandColor: "Black",
		},
	},
	{
		id: 4,
		image: "/images/catalog4.svg",
		name: "Diver 300M Co-Axial Master Chronometer",
		price: 1400,
		description:
			"Elegant design combined with advanced functionality - perfect for any occasion.",
		details: {
			gender: "man",
			size: "42x50mm",
			caseColour: "White",
			bandMaterial: "Leather",
			caseMaterial: "Stainless Steel",
			feature: "Chronograph",
			waterResistant: "3 (ATM)",
			bandColor: "Black",
		},
	},
	{
		id: 5,
		image: "/images/catalog5.svg",
		name: "Taman Watch By Police For Men",
		price: 500,
		description:
			"Elegant design combined with advanced functionality - perfect for any occasion.",
		details: {
			gender: "man",
			size: "42x50mm",
			caseColour: "White",
			bandMaterial: "Leather",
			caseMaterial: "Stainless Steel",
			feature: "Chronograph",
			waterResistant: "3 (ATM)",
			bandColor: "Black",
		},
	},
	{
		id: 6,
		image: "/images/catalog6.svg",
		name: "Malawi Watch Police For Men",
		price: 555,
		description:
			"Elegant design combined with advanced functionality - perfect for any occasion.",
		details: {
			gender: "man",
			size: "42x50mm",
			caseColour: "White",
			bandMaterial: "Leather",
			caseMaterial: "Stainless Steel",
			feature: "Chronograph",
			waterResistant: "3 (ATM)",
			bandColor: "Black",
		},
	},
	{
		id: 7,
		image: "/images/catalog7.svg",
		name: "Diver 300M Co-Axial Master Chronometer ",
		price: 1200,
		description:
			"Elegant design combined with advanced functionality - perfect for any occasion.",
		details: {
			gender: "man",
			size: "42x50mm",
			caseColour: "White",
			bandMaterial: "Leather",
			caseMaterial: "Stainless Steel",
			feature: "Chronograph",
			waterResistant: "3 (ATM)",
			bandColor: "Black",
		},
	},
	{
		id: 8,
		image: "/images/catalog8.svg",
		name: "Greenlane Watch By Police For Men",
		price: 1000,
		description:
			"Elegant design combined with advanced functionality - perfect for any occasion.",
		details: {
			gender: "man",
			size: "42x50mm",
			caseColour: "White",
			bandMaterial: "Leather",
			caseMaterial: "Stainless Steel",
			feature: "Chronograph",
			waterResistant: "3 (ATM)",
			bandColor: "Black",
		},
	},
	{
		id: 9,
		image: "/images/catalog9.svg",
		name: "Squardrc 5402 Chrono",
		price: 359,
		description:
			"Elegant design combined with advanced functionality - perfect for any occasion.",
		details: {
			gender: "man",
			size: "42x50mm",
			caseColour: "White",
			bandMaterial: "Leather",
			caseMaterial: "Stainless Steel",
			feature: "Chronograph",
			waterResistant: "3 (ATM)",
			bandColor: "Black",
		},
	},
	{
		id: 10,
		image: "/images/catalog10.svg",
		name: "Diver  300M Co‑Axial Master Chronometer Chronograph",
		price: 400,
		description:
			"Elegant design combined with advanced functionality - perfect for any occasion.",
		details: {
			gender: "man",
			size: "42x50mm",
			caseColour: "White",
			bandMaterial: "Leather",
			caseMaterial: "Stainless Steel",
			feature: "Chronograph",
			waterResistant: "3 (ATM)",
			bandColor: "Black",
		},
	},
	{
		id: 11,
		image: "/images/catalog11.svg",
		name: "Citizen",
		price: 519,
		description:
			"Elegant design combined with advanced functionality - perfect for any occasion.",
		details: {
			gender: "man",
			size: "42x50mm",
			caseColour: "White",
			bandMaterial: "Leather",
			caseMaterial: "Stainless Steel",
			feature: "Chronograph",
			waterResistant: "3 (ATM)",
			bandColor: "Black",
		},
	},
	{
		id: 12,
		image: "/images/catalog12.svg",
		name: "Armani Exchange",
		price: 400,
		description:
			"Elegant design combined with advanced functionality - perfect for any occasion.",
		details: {
			gender: "man",
			size: "42x50mm",
			caseColour: "White",
			bandMaterial: "Leather",
			caseMaterial: "Stainless Steel",
			feature: "Chronograph",
			waterResistant: "3 (ATM)",
			bandColor: "Black",
		},
	},
];

export default data;
