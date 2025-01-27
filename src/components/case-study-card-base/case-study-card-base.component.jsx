// Components
import { CaseStudyCardList } from "./case-study-card-list/case-study-card-list.component";

// Styles
import {
  CaseStudyCardBaseContainer,
  CaseStudyCardBaseHeading,
} from "./case-study-card-base.styles";

// Images
import caseStudyCardBongalo from "../../assets/images/case-study-card-bongalo.png";
import caseStudyCardFreterium from "../../assets/images/case-study-card-freterium.png";
import caseStudyCardAsusu from "../../assets/images/case-study-card-asusu.png";
import caseStudyCardSwimmo from "../../assets/images/case-study-card-swimmo.png";

// Static Data
export const CASE_STUDY_ITEMS = [
  {
    id: 1,
    cards: [
      {
        id: "bongalo",
        title: "Catalyzing Success: A Redesign of Bongalo Platform",
        role: "Product design, Prototyping",
        img: caseStudyCardBongalo,
        bgColor: "#D5EBFD",
        to: "/case-study",
      },
      {
        id: "asusu",
        title: "Digital Banking for Credit Unions",
        role: "Product design, Prototyping",
        img: caseStudyCardAsusu,
        bgColor: "#A6CAFF",
        to: "/case-study",
      },
    ],
  },
  {
    id: 2,
    applyMargin: true,
    cards: [
      {
        id: "freterium",
        title:
          "Revamping Onboarding: A User-Centric UX Approach to Elevate the First User Experience",
        role: "UX design, Research & Workshop",
        img: caseStudyCardFreterium,
        bgColor: "#CDF1FF",
        to: "/case-study",
      },
      {
        id: "swimmo",
        title:
          "Diving into Fitness: Strategies for Swimming Consistency and Success",
        role: "Product design, Prototyping",
        img: caseStudyCardSwimmo,
        bgColor: "#C5D0FF",
        to: "/case-study",
      },
    ],
  },
];

export const CaseStudyCardBase = () => {
  const caseStudyItems = CASE_STUDY_ITEMS;

  return (
    <CaseStudyCardBaseContainer>
      <CaseStudyCardBaseHeading>Case studies</CaseStudyCardBaseHeading>
      <CaseStudyCardList items={caseStudyItems} />
    </CaseStudyCardBaseContainer>
  );
};
