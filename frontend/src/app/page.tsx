import AdMiddle from "@/components/home/ad_middle";
import BestSeller from "@/components/home/best_seller";
import Brands from "@/components/home/brands";
import Categories from "@/components/home/categories";
import JustLanded from "@/components/home/just_landed";
import SuggestToday from "@/components/home/suggest_today";
import TopAdvertisement from "@/components/home/top_ad";
import WeeklyDeals from "@/components/home/weekly_deals";
import React from "react";

const Home = () => {
  return (
    <main className="py-16 flex flex-col gap-8">
      <Categories />
      <TopAdvertisement />
      <WeeklyDeals />
      <AdMiddle />
      <BestSeller />
      <Brands />
      <SuggestToday />
      <JustLanded />
    </main>
  );
};

export default Home;
