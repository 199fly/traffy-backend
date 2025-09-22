"use client";

import Count from "@/common/count";


const counter_data = [
  {
    id: 1,
    count: 20,
    symbol: "+",
    text: "Startups Funded",
  },
  {
    id: 2,
    count: 98,
    symbol: "%",
    text: "Client Satisfaction",
  },
  {
    id: 3,
    count: 5,
    symbol: "x",
    text: "Average ROI",
  },

]

const CounterAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-counter-section bg-heading">
        <div className="container">
          <div className="uxora-counter-wrap" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            {counter_data.map((item, i) => (
              <div key={i} className={`uxora-counter-item ${i === 2? 'item2' : ''}`}>
                <h2 className="uxora-counter-data">
                  <Count number={item.count} text={item.symbol} />                   
                </h2>
                <p>{item.text}</p>
              </div>
            ))} 
          </div>
          <div className="uxora-counter-shape">
            <img src="assets/images/shape/coun-02.svg" alt="" />
            <img src="assets/images/shape/coun-03.svg" alt="" />
            <img src="assets/images/shape/coun-04.svg" alt="" />
          </div>
        </div>

      </div>
    </>
  );
};

export default CounterAreaHomeOne;