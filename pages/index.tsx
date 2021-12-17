import type { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/organism/Navbar";
import MainBanner from "@/components/organism/MainBanner";
import TransactionStep from "@/components/organism/TrancasctionStep";
import FeatureGame from "@/components/organism/FeatureGame";
import Reached from "@/components/organism/Reached";
import Story from "@/components/organism/Story";
import Footer from "@/components/organism/Footer";

const Home: NextPage = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Navbar />
			<MainBanner />
			<TransactionStep />
			<FeatureGame />
			<Reached />
			<Story />
			<Footer />
		</>
	);
};

export default Home;
