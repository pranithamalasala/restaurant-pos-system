import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import MiniCard from "../components/home/MiniCard";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";
import PaymentHistory from "../components/home/PaymentHistory";

const Home = () => {

  const userData = useSelector(state => state.user);
  const role = userData.role;

  useEffect(() => {
    document.title = "POS | Home";
  }, []);

  return (
    <section className="relative min-h-screen overflow-y-auto flex gap-3">

      {/* Spline Ball Background */}
      <iframe
        src="https://my.spline.design/core7-R9H27JTPULTRm31JVwkNp3am/"
        frameBorder="0"
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        title="Spline Background"
      />

      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      {/* Left Section */}

      <div className="flex-[3]">

        <Greetings />

        <div className="flex items-center w-full gap-3 px-8 mt-8">

          {role?.toLowerCase() === "cashier" && (
            <MiniCard
              title="Total Earnings"
              icon={<BsCashCoin />}
              number={512}
              footerNum={1.6}
            />
          )}

          <MiniCard
            title="In Progress"
            icon={<GrInProgress />}
            number={16}
            footerNum={3.6}
          />

          {role?.toLowerCase() === "cashier" && (
            <MiniCard
              title="Online Payments"
              icon={<BsCashCoin />}
              number={320}
              footerNum={2.1}
            />
          )}

        </div>

        <RecentOrders />

        {role?.toLowerCase() === "cashier" && <PaymentHistory />}

      </div>

      {/* Right Section */}
      <div className="flex-[2]">
        <PopularDishes />
      </div>

      <BottomNav />

      {/* Decorative 3D */}
      <div className="absolute bottom-10 right-10 w-[280px] h-[240px] overflow-hidden z-10">
        <iframe
          src="https://my.spline.design/japanesestreetrestaurantnobackground-cjNuLIpDK4gFWIBwPaEfJmZi/"
          className="w-full h-[280px] opacity-60 pointer-events-none"
          frameBorder="0"
          title="Restaurant 3D"
        />
      </div>
    </section>
  );
};

export default Home;