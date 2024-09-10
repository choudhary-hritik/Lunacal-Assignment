import React, { useState } from "react";

function firstWidget() {
  const [tab, setTab] = useState(1);

  function activeTab(tabNumber) {
    setTab(tabNumber);
  }
  return (
      <div
      className="firstWidget w-[720px] h-[316px] bg-[#363C43] rounded-[18.89px] mt-[60px] p-[15px] flex gap-6 mr-7"
      style={{ boxShadow: "rgba(0,0,0,0.55) 1.95px 1.95px 2.6px " }}
    >
      <div className="flex flex-col gap-[105px]">
        <img src="/Vector.png" alt="vector" width="24px" height="24px" />
        <img src="/frame.png" alt="frame" />
      </div>
      <div className="flex flex-col gap-7">
        <div className=" w-full  h-[62px] rounded-[23px] bg-[#171717] shadow-navShadow flex items-center justify-evenly relative">
          <button
            className={`about ${
              tab === 1 ? "text-white" : "text-[#A3ADB2]"
            } w-[195px] h-[49px] rounded-[16px] ${
              tab === 1 ? "shadow-2xl shadow-[#101112]" : ""
            } text-[18px] font-[500px]`}
            onClick={() => activeTab(1)}
            style={{ backgroundColor: tab === 1 ? "#28292F" : "" }}
          >
            About Me
          </button>
          <button
            className={`experience ${
              tab === 2 ? "text-white" : "text-[#A3ADB2]"
            } w-[195px] h-[49px] rounded-[16px] ${
              tab === 2 ? "shadow-2xl shadow-[#101112]" : ""
            } text-[18px] font-[500px]`}
            onClick={() => activeTab(2)}
            style={{ backgroundColor: tab === 2 ? "#28292F" : "" }}
          >
            Experience
          </button>
          <button
            className={`recommend ${
              tab === 3 ? "text-white" : "text-[#A3ADB2]"
            } w-[195px] h-[49px] rounded-[16px] ${
              tab === 3 ? "shadow-2xl shadow-[#101112]" : ""
            } text-[18px] font-[500px]`}
            onClick={() => activeTab(3)}
            style={{ backgroundColor: tab === 3 ? "#28292F" : "" }}
          >
            Recommended
          </button>
        </div>
        <div className="text flex flex-col gap-8 w-[611px] h-[175px]">
          {tab === 1 ? (
            <>
              <p className="text-[#969696] text-[20px] font-[400] leading-[25.2px]">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
              </p>
              <p className="text-[#969696] text-[20px] font-[400] leading-[25.2px]">
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This is...
              </p>
            </>
          ) : tab === 2 ? (
            <>
              <p className="text-[#969696] text-[20px] font-[400] leading-[25.2px]">
                Hello! I’m Dave, I have [10 years] of experience in driving sales
                growth and building strong customer relationships. I
                consistently exceed sales targets, implement strategies that
                boost revenue, and manage the entire sales cycle from
                prospecting to closing
              </p>
              <p className="text-[#969696] text-[20px] font-[400] leading-[25.2px]">
                Skilled in understanding customer needs, I deliver tailored
                solutions that result in long-term client satisfaction.
              </p>
            </>
          ) : tab === 3 ? (
            <>
              <p className="text-[#969696] text-[20px] font-[400] leading-[25.2px]">
                "I highly recommend ME as a dedicated and results-oriented sales
                professional. Their ability to consistently exceed targets and
                build lasting relationships with clients sets them apart in the
                industry.
              </p>
              <p className="text-[#969696] text-[20px] font-[400] leading-[25.2px]">
                I has a strong understanding of customer needs and offers
                personalized solutions that drive growth and client
                satisfaction.
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="vl"></div>
    </div>
  );
}

export default firstWidget;
