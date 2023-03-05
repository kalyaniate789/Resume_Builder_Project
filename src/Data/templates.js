import templateOneImg from "../Img/resume-template-one.JPG";
import templateTwoImg from "../Img/resume-template-two.JPG";
import Template_1 from "../Templates/Template_1";
import Template_2 from "../Templates/Template_2";


// =============Template one==============
export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    template: <Template_1 />,
  },
  {
    // =============Template Two==============
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    template: <Template_2 />,
  },
];
