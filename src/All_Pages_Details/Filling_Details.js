import React, { useState } from "react";
import Navbar from "../Components/Head_Part/Navbar";
import Detail_Filling_Sidebar from "../Components/Detail_Filling_Sidebar";
import Education_Component from "../Components/Education_Component";
import Skills_Component from "../Components/Skills_Component";
import Personal_Info_Component from "../Components/Personal_Info_Component";
import Preview_Component from "../Components/Preview_Component";
import Work_Experience_Component from "../Components/Work_Experience_Component";
import "../Styles_Css/DetailsFilling.css";

const DetailsFilling = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="details-filling">
      <Navbar active={""} />
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          <Detail_Filling_Sidebar tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <Personal_Info_Component setTab={setTab} tab={tab} />
          ) : null}
          {tab === 3 ? <Skills_Component setTab={setTab} tab={tab} /> : null}
          {tab === 1 ? (
            <Work_Experience_Component setTab={setTab} tab={tab} />
          ) : null}
          {tab === 2 ? <Education_Component setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 4 ? <Preview_Component setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default DetailsFilling;
