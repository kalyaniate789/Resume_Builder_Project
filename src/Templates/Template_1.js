import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles_Css/Templates.css";
import Header_Template from "../Components/Header_Template";
import Heading_Template from "../Components/Heading_Template";
import OneExperience_TemplateComponent from "../Components/OneExperience_TemplateComponent";
import { data } from "../Data/data";
import Education_Template_Compnent from "../Components/Education_Template_Compnent";
import Template_Skill_Component from "../Components/Template_Skill_Component";

const Template_1 = (props) => {
  // console.log(
  //   props.personalinfo,
  //   props.workexperience,
  //   props.educationinfo,
  //   props.skills
  // );
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;
  // console.log(props.index);
  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "600px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      <Header_Template
        primaryColor={"#ff9d9d"}
        secondaryColor={"black"}
        bgColor={"white"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <Heading_Template color={"#ff9d9d"} title={"Professional Experience"} />
        <ul style={{ paddingBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <OneExperience_TemplateComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <Heading_Template color={"#ff9d9d"} title={"Education"} />
        <Education_Template_Compnent education={educationinfo} />
        <Heading_Template color={"#ff9d9d"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <Template_Skill_Component key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template_1;
