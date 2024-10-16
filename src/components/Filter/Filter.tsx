import React, { useState } from "react";
import "./Filter.scss";

type FilterProps = {
  onFilterChange: (category: string) => void;
};

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const options = ["All", "Game", "News", "Announce", "Update"];
  const defaultOption = "Game";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onFilterChange(option);
  };

  const ArrowUp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
    >
      <g clip-path="url(#clip0_9_6)">
        <rect
          width="16"
          height="10"
          transform="matrix(1 0 0 -1 0 10)"
          fill="#121212"
        />
        <path d="M0.571429 10H0V9.375H0.571429V10Z" fill="#FEFEFE" />
        <path d="M1.14369 10H0.572266V9.375H1.14369V10Z" fill="#FEFEFE" />
        <path d="M1.71596 10H1.14453V9.375H1.71596V10Z" fill="#FEFEFE" />
        <path d="M2.28627 10H1.71484V9.375H2.28627V10Z" fill="#FEFEFE" />
        <path d="M14.2863 10H13.7148V9.375H14.2863V10Z" fill="#FEFEFE" />
        <path d="M14.8566 10H14.2852V9.375H14.8566V10Z" fill="#FEFEFE" />
        <path d="M15.4269 10H14.8555V9.375H15.4269V10Z" fill="#FEFEFE" />
        <path d="M15.9992 10H15.4277V9.375H15.9992V10Z" fill="#FEFEFE" />
        <path d="M0.571429 9.375H0V8.75H0.571429V9.375Z" fill="#FEFEFE" />
        <path d="M1.14369 9.375H0.572266V8.75H1.14369V9.375Z" fill="#FEFEFE" />
        <path d="M1.71596 9.375H1.14453V8.75H1.71596V9.375Z" fill="#FEFEFE" />
        <path d="M2.28627 9.375H1.71484V8.75H2.28627V9.375Z" fill="#FEFEFE" />
        <path d="M14.2863 9.375H13.7148V8.75H14.2863V9.375Z" fill="#FEFEFE" />
        <path d="M14.8566 9.375H14.2852V8.75H14.8566V9.375Z" fill="#FEFEFE" />
        <path d="M15.4269 9.375H14.8555V8.75H15.4269V9.375Z" fill="#FEFEFE" />
        <path d="M15.9992 9.375H15.4277V8.75H15.9992V9.375Z" fill="#FEFEFE" />
        <path d="M0.571429 8.75H0V8.125H0.571429V8.75Z" fill="#FEFEFE" />
        <path d="M1.14369 8.75H0.572266V8.125H1.14369V8.75Z" fill="#FEFEFE" />
        <path d="M1.71596 8.75H1.14453V8.125H1.71596V8.75Z" fill="#FEFEFE" />
        <path d="M2.28627 8.75H1.71484V8.125H2.28627V8.75Z" fill="#FEFEFE" />
        <path d="M14.2863 8.75H13.7148V8.125H14.2863V8.75Z" fill="#FEFEFE" />
        <path d="M14.8566 8.75H14.2852V8.125H14.8566V8.75Z" fill="#FEFEFE" />
        <path d="M15.4269 8.75H14.8555V8.125H15.4269V8.75Z" fill="#FEFEFE" />
        <path d="M15.9992 8.75H15.4277V8.125H15.9992V8.75Z" fill="#FEFEFE" />
        <path d="M0.571429 8.125H0V7.5H0.571429V8.125Z" fill="#FEFEFE" />
        <path d="M1.14369 8.125H0.572266V7.5H1.14369V8.125Z" fill="#FEFEFE" />
        <path d="M1.71596 8.125H1.14453V7.5H1.71596V8.125Z" fill="#FEFEFE" />
        <path d="M2.28627 8.125H1.71484V7.5H2.28627V8.125Z" fill="#FEFEFE" />
        <path d="M14.2863 8.125H13.7148V7.5H14.2863V8.125Z" fill="#FEFEFE" />
        <path d="M14.8566 8.125H14.2852V7.5H14.8566V8.125Z" fill="#FEFEFE" />
        <path d="M15.4269 8.125H14.8555V7.5H15.4269V8.125Z" fill="#FEFEFE" />
        <path d="M15.9992 8.125H15.4277V7.5H15.9992V8.125Z" fill="#FEFEFE" />
        <path d="M2.85658 7.5H2.28516V6.875H2.85658V7.5Z" fill="#FEFEFE" />
        <path d="M3.4269 7.5H2.85547V6.875H3.4269V7.5Z" fill="#FEFEFE" />
        <path d="M3.99916 7.5H3.42773V6.875H3.99916V7.5Z" fill="#FEFEFE" />
        <path d="M4.57143 7.5H4V6.875H4.57143V7.5Z" fill="#FEFEFE" />
        <path d="M11.9992 7.5H11.4277V6.875H11.9992V7.5Z" fill="#FEFEFE" />
        <path d="M12.5714 7.5H12V6.875H12.5714V7.5Z" fill="#FEFEFE" />
        <path d="M13.1437 7.5H12.5723V6.875H13.1437V7.5Z" fill="#FEFEFE" />
        <path d="M13.716 7.5H13.1445V6.875H13.716V7.5Z" fill="#FEFEFE" />
        <path d="M2.85658 6.875H2.28516V6.25H2.85658V6.875Z" fill="#FEFEFE" />
        <path d="M3.4269 6.875H2.85547V6.25H3.4269V6.875Z" fill="#FEFEFE" />
        <path d="M3.99916 6.875H3.42773V6.25H3.99916V6.875Z" fill="#FEFEFE" />
        <path d="M4.57143 6.875H4V6.25H4.57143V6.875Z" fill="#FEFEFE" />
        <path d="M11.9992 6.875H11.4277V6.25H11.9992V6.875Z" fill="#FEFEFE" />
        <path d="M12.5714 6.875H12V6.25H12.5714V6.875Z" fill="#FEFEFE" />
        <path d="M13.1437 6.875H12.5723V6.25H13.1437V6.875Z" fill="#FEFEFE" />
        <path d="M13.716 6.875H13.1445V6.25H13.716V6.875Z" fill="#FEFEFE" />
        <path d="M2.85658 6.25H2.28516V5.625H2.85658V6.25Z" fill="#FEFEFE" />
        <path d="M3.4269 6.25H2.85547V5.625H3.4269V6.25Z" fill="#FEFEFE" />
        <path d="M3.99916 6.25H3.42773V5.625H3.99916V6.25Z" fill="#FEFEFE" />
        <path d="M4.57143 6.25H4V5.625H4.57143V6.25Z" fill="#FEFEFE" />
        <path d="M11.9992 6.25H11.4277V5.625H11.9992V6.25Z" fill="#FEFEFE" />
        <path d="M12.5714 6.25H12V5.625H12.5714V6.25Z" fill="#FEFEFE" />
        <path d="M13.1437 6.25H12.5723V5.625H13.1437V6.25Z" fill="#FEFEFE" />
        <path d="M13.716 6.25H13.1445V5.625H13.716V6.25Z" fill="#FEFEFE" />
        <path d="M2.85658 5.625H2.28516V5H2.85658V5.625Z" fill="#FEFEFE" />
        <path d="M3.4269 5.625H2.85547V5H3.4269V5.625Z" fill="#FEFEFE" />
        <path d="M3.99916 5.625H3.42773V5H3.99916V5.625Z" fill="#FEFEFE" />
        <path d="M4.57143 5.625H4V5H4.57143V5.625Z" fill="#FEFEFE" />
        <path d="M11.9992 5.625H11.4277V5H11.9992V5.625Z" fill="#FEFEFE" />
        <path d="M12.5714 5.625H12V5H12.5714V5.625Z" fill="#FEFEFE" />
        <path d="M13.1437 5.625H12.5723V5H13.1437V5.625Z" fill="#FEFEFE" />
        <path d="M13.716 5.625H13.1445V5H13.716V5.625Z" fill="#FEFEFE" />
        <path d="M5.14369 5H4.57227V4.375H5.14369V5Z" fill="#FEFEFE" />
        <path d="M5.71596 5H5.14453V4.375H5.71596V5Z" fill="#FEFEFE" />
        <path d="M6.28627 5H5.71484V4.375H6.28627V5Z" fill="#FEFEFE" />
        <path d="M6.85658 5H6.28516V4.375H6.85658V5Z" fill="#FEFEFE" />
        <path d="M9.71596 5H9.14453V4.375H9.71596V5Z" fill="#FEFEFE" />
        <path d="M10.2863 5H9.71484V4.375H10.2863V5Z" fill="#FEFEFE" />
        <path d="M10.8566 5H10.2852V4.375H10.8566V5Z" fill="#FEFEFE" />
        <path d="M11.4269 5H10.8555V4.375H11.4269V5Z" fill="#FEFEFE" />
        <path d="M5.14369 4.375H4.57227V3.75H5.14369V4.375Z" fill="#FEFEFE" />
        <path d="M5.71596 4.375H5.14453V3.75H5.71596V4.375Z" fill="#FEFEFE" />
        <path d="M6.28627 4.375H5.71484V3.75H6.28627V4.375Z" fill="#FEFEFE" />
        <path d="M6.85658 4.375H6.28516V3.75H6.85658V4.375Z" fill="#FEFEFE" />
        <path d="M9.71596 4.375H9.14453V3.75H9.71596V4.375Z" fill="#FEFEFE" />
        <path d="M10.2863 4.375H9.71484V3.75H10.2863V4.375Z" fill="#FEFEFE" />
        <path d="M10.8566 4.375H10.2852V3.75H10.8566V4.375Z" fill="#FEFEFE" />
        <path d="M11.4269 4.375H10.8555V3.75H11.4269V4.375Z" fill="#FEFEFE" />
        <path d="M5.14369 3.75H4.57227V3.125H5.14369V3.75Z" fill="#FEFEFE" />
        <path d="M5.71596 3.75H5.14453V3.125H5.71596V3.75Z" fill="#FEFEFE" />
        <path d="M6.28627 3.75H5.71484V3.125H6.28627V3.75Z" fill="#FEFEFE" />
        <path d="M6.85658 3.75H6.28516V3.125H6.85658V3.75Z" fill="#FEFEFE" />
        <path d="M9.71596 3.75H9.14453V3.125H9.71596V3.75Z" fill="#FEFEFE" />
        <path d="M10.2863 3.75H9.71484V3.125H10.2863V3.75Z" fill="#FEFEFE" />
        <path d="M10.8566 3.75H10.2852V3.125H10.8566V3.75Z" fill="#FEFEFE" />
        <path d="M11.4269 3.75H10.8555V3.125H11.4269V3.75Z" fill="#FEFEFE" />
        <path d="M5.14369 3.125H4.57227V2.5H5.14369V3.125Z" fill="#FEFEFE" />
        <path d="M5.71596 3.125H5.14453V2.5H5.71596V3.125Z" fill="#FEFEFE" />
        <path d="M6.28627 3.125H5.71484V2.5H6.28627V3.125Z" fill="#FEFEFE" />
        <path d="M6.85658 3.125H6.28516V2.5H6.85658V3.125Z" fill="#FEFEFE" />
        <path d="M9.71596 3.125H9.14453V2.5H9.71596V3.125Z" fill="#FEFEFE" />
        <path d="M10.2863 3.125H9.71484V2.5H10.2863V3.125Z" fill="#FEFEFE" />
        <path d="M10.8566 3.125H10.2852V2.5H10.8566V3.125Z" fill="#FEFEFE" />
        <path d="M11.4269 3.125H10.8555V2.5H11.4269V3.125Z" fill="#FEFEFE" />
        <path d="M7.4269 2.5H6.85547V1.875H7.4269V2.5Z" fill="#FEFEFE" />
        <path d="M7.99916 2.5H7.42773V1.875H7.99916V2.5Z" fill="#FEFEFE" />
        <path d="M8.57143 2.5H8V1.875H8.57143V2.5Z" fill="#FEFEFE" />
        <path d="M9.14369 2.5H8.57227V1.875H9.14369V2.5Z" fill="#FEFEFE" />
        <path d="M7.4269 1.875H6.85547V1.25H7.4269V1.875Z" fill="#FEFEFE" />
        <path d="M7.99916 1.875H7.42773V1.25H7.99916V1.875Z" fill="#FEFEFE" />
        <path d="M8.57143 1.875H8V1.25H8.57143V1.875Z" fill="#FEFEFE" />
        <path d="M9.14369 1.875H8.57227V1.25H9.14369V1.875Z" fill="#FEFEFE" />
        <path d="M7.4269 1.25H6.85547V0.625H7.4269V1.25Z" fill="#FEFEFE" />
        <path d="M7.99916 1.25H7.42773V0.625H7.99916V1.25Z" fill="#FEFEFE" />
        <path d="M8.57143 1.25H8V0.625H8.57143V1.25Z" fill="#FEFEFE" />
        <path d="M9.14369 1.25H8.57227V0.625H9.14369V1.25Z" fill="#FEFEFE" />
        <path d="M7.4269 0.625H6.85547V0H7.4269V0.625Z" fill="#FEFEFE" />
        <path d="M7.99916 0.625H7.42773V0H7.99916V0.625Z" fill="#FEFEFE" />
        <path d="M8.57143 0.625H8V0H8.57143V0.625Z" fill="#FEFEFE" />
        <path d="M9.14369 0.625H8.57227V0H9.14369V0.625Z" fill="#FEFEFE" />
      </g>
      <defs>
        <clipPath id="clip0_9_6">
          <rect
            width="16"
            height="10"
            fill="white"
            transform="matrix(1 0 0 -1 0 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const ArrowDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
    >
      <g clip-path="url(#clip0_9_127)">
        <rect width="16" height="10" fill="#121212" />
        <path d="M0.571429 0H0V0.625H0.571429V0Z" fill="#FEFEFE" />
        <path d="M1.14369 0H0.572266V0.625H1.14369V0Z" fill="#FEFEFE" />
        <path d="M1.71596 0H1.14453V0.625H1.71596V0Z" fill="#FEFEFE" />
        <path d="M2.28627 0H1.71484V0.625H2.28627V0Z" fill="#FEFEFE" />
        <path d="M14.2863 0H13.7148V0.625H14.2863V0Z" fill="#FEFEFE" />
        <path d="M14.8566 0H14.2852V0.625H14.8566V0Z" fill="#FEFEFE" />
        <path d="M15.4269 0H14.8555V0.625H15.4269V0Z" fill="#FEFEFE" />
        <path d="M15.9992 0H15.4277V0.625H15.9992V0Z" fill="#FEFEFE" />
        <path d="M0.571429 0.625H0V1.25H0.571429V0.625Z" fill="#FEFEFE" />
        <path d="M1.14369 0.625H0.572266V1.25H1.14369V0.625Z" fill="#FEFEFE" />
        <path d="M1.71596 0.625H1.14453V1.25H1.71596V0.625Z" fill="#FEFEFE" />
        <path d="M2.28627 0.625H1.71484V1.25H2.28627V0.625Z" fill="#FEFEFE" />
        <path d="M14.2863 0.625H13.7148V1.25H14.2863V0.625Z" fill="#FEFEFE" />
        <path d="M14.8566 0.625H14.2852V1.25H14.8566V0.625Z" fill="#FEFEFE" />
        <path d="M15.4269 0.625H14.8555V1.25H15.4269V0.625Z" fill="#FEFEFE" />
        <path d="M15.9992 0.625H15.4277V1.25H15.9992V0.625Z" fill="#FEFEFE" />
        <path d="M0.571429 1.25H0V1.875H0.571429V1.25Z" fill="#FEFEFE" />
        <path d="M1.14369 1.25H0.572266V1.875H1.14369V1.25Z" fill="#FEFEFE" />
        <path d="M1.71596 1.25H1.14453V1.875H1.71596V1.25Z" fill="#FEFEFE" />
        <path d="M2.28627 1.25H1.71484V1.875H2.28627V1.25Z" fill="#FEFEFE" />
        <path d="M14.2863 1.25H13.7148V1.875H14.2863V1.25Z" fill="#FEFEFE" />
        <path d="M14.8566 1.25H14.2852V1.875H14.8566V1.25Z" fill="#FEFEFE" />
        <path d="M15.4269 1.25H14.8555V1.875H15.4269V1.25Z" fill="#FEFEFE" />
        <path d="M15.9992 1.25H15.4277V1.875H15.9992V1.25Z" fill="#FEFEFE" />
        <path d="M0.571429 1.875H0V2.5H0.571429V1.875Z" fill="#FEFEFE" />
        <path d="M1.14369 1.875H0.572266V2.5H1.14369V1.875Z" fill="#FEFEFE" />
        <path d="M1.71596 1.875H1.14453V2.5H1.71596V1.875Z" fill="#FEFEFE" />
        <path d="M2.28627 1.875H1.71484V2.5H2.28627V1.875Z" fill="#FEFEFE" />
        <path d="M14.2863 1.875H13.7148V2.5H14.2863V1.875Z" fill="#FEFEFE" />
        <path d="M14.8566 1.875H14.2852V2.5H14.8566V1.875Z" fill="#FEFEFE" />
        <path d="M15.4269 1.875H14.8555V2.5H15.4269V1.875Z" fill="#FEFEFE" />
        <path d="M15.9992 1.875H15.4277V2.5H15.9992V1.875Z" fill="#FEFEFE" />
        <path d="M2.85658 2.5H2.28516V3.125H2.85658V2.5Z" fill="#FEFEFE" />
        <path d="M3.4269 2.5H2.85547V3.125H3.4269V2.5Z" fill="#FEFEFE" />
        <path d="M3.99916 2.5H3.42773V3.125H3.99916V2.5Z" fill="#FEFEFE" />
        <path d="M4.57143 2.5H4V3.125H4.57143V2.5Z" fill="#FEFEFE" />
        <path d="M11.9992 2.5H11.4277V3.125H11.9992V2.5Z" fill="#FEFEFE" />
        <path d="M12.5714 2.5H12V3.125H12.5714V2.5Z" fill="#FEFEFE" />
        <path d="M13.1437 2.5H12.5723V3.125H13.1437V2.5Z" fill="#FEFEFE" />
        <path d="M13.716 2.5H13.1445V3.125H13.716V2.5Z" fill="#FEFEFE" />
        <path d="M2.85658 3.125H2.28516V3.75H2.85658V3.125Z" fill="#FEFEFE" />
        <path d="M3.4269 3.125H2.85547V3.75H3.4269V3.125Z" fill="#FEFEFE" />
        <path d="M3.99916 3.125H3.42773V3.75H3.99916V3.125Z" fill="#FEFEFE" />
        <path d="M4.57143 3.125H4V3.75H4.57143V3.125Z" fill="#FEFEFE" />
        <path d="M11.9992 3.125H11.4277V3.75H11.9992V3.125Z" fill="#FEFEFE" />
        <path d="M12.5714 3.125H12V3.75H12.5714V3.125Z" fill="#FEFEFE" />
        <path d="M13.1437 3.125H12.5723V3.75H13.1437V3.125Z" fill="#FEFEFE" />
        <path d="M13.716 3.125H13.1445V3.75H13.716V3.125Z" fill="#FEFEFE" />
        <path d="M2.85658 3.75H2.28516V4.375H2.85658V3.75Z" fill="#FEFEFE" />
        <path d="M3.4269 3.75H2.85547V4.375H3.4269V3.75Z" fill="#FEFEFE" />
        <path d="M3.99916 3.75H3.42773V4.375H3.99916V3.75Z" fill="#FEFEFE" />
        <path d="M4.57143 3.75H4V4.375H4.57143V3.75Z" fill="#FEFEFE" />
        <path d="M11.9992 3.75H11.4277V4.375H11.9992V3.75Z" fill="#FEFEFE" />
        <path d="M12.5714 3.75H12V4.375H12.5714V3.75Z" fill="#FEFEFE" />
        <path d="M13.1437 3.75H12.5723V4.375H13.1437V3.75Z" fill="#FEFEFE" />
        <path d="M13.716 3.75H13.1445V4.375H13.716V3.75Z" fill="#FEFEFE" />
        <path d="M2.85658 4.375H2.28516V5H2.85658V4.375Z" fill="#FEFEFE" />
        <path d="M3.4269 4.375H2.85547V5H3.4269V4.375Z" fill="#FEFEFE" />
        <path d="M3.99916 4.375H3.42773V5H3.99916V4.375Z" fill="#FEFEFE" />
        <path d="M4.57143 4.375H4V5H4.57143V4.375Z" fill="#FEFEFE" />
        <path d="M11.9992 4.375H11.4277V5H11.9992V4.375Z" fill="#FEFEFE" />
        <path d="M12.5714 4.375H12V5H12.5714V4.375Z" fill="#FEFEFE" />
        <path d="M13.1437 4.375H12.5723V5H13.1437V4.375Z" fill="#FEFEFE" />
        <path d="M13.716 4.375H13.1445V5H13.716V4.375Z" fill="#FEFEFE" />
        <path d="M5.14369 5H4.57227V5.625H5.14369V5Z" fill="#FEFEFE" />
        <path d="M5.71596 5H5.14453V5.625H5.71596V5Z" fill="#FEFEFE" />
        <path d="M6.28627 5H5.71484V5.625H6.28627V5Z" fill="#FEFEFE" />
        <path d="M6.85658 5H6.28516V5.625H6.85658V5Z" fill="#FEFEFE" />
        <path d="M9.71596 5H9.14453V5.625H9.71596V5Z" fill="#FEFEFE" />
        <path d="M10.2863 5H9.71484V5.625H10.2863V5Z" fill="#FEFEFE" />
        <path d="M10.8566 5H10.2852V5.625H10.8566V5Z" fill="#FEFEFE" />
        <path d="M11.4269 5H10.8555V5.625H11.4269V5Z" fill="#FEFEFE" />
        <path d="M5.14369 5.625H4.57227V6.25H5.14369V5.625Z" fill="#FEFEFE" />
        <path d="M5.71596 5.625H5.14453V6.25H5.71596V5.625Z" fill="#FEFEFE" />
        <path d="M6.28627 5.625H5.71484V6.25H6.28627V5.625Z" fill="#FEFEFE" />
        <path d="M6.85658 5.625H6.28516V6.25H6.85658V5.625Z" fill="#FEFEFE" />
        <path d="M9.71596 5.625H9.14453V6.25H9.71596V5.625Z" fill="#FEFEFE" />
        <path d="M10.2863 5.625H9.71484V6.25H10.2863V5.625Z" fill="#FEFEFE" />
        <path d="M10.8566 5.625H10.2852V6.25H10.8566V5.625Z" fill="#FEFEFE" />
        <path d="M11.4269 5.625H10.8555V6.25H11.4269V5.625Z" fill="#FEFEFE" />
        <path d="M5.14369 6.25H4.57227V6.875H5.14369V6.25Z" fill="#FEFEFE" />
        <path d="M5.71596 6.25H5.14453V6.875H5.71596V6.25Z" fill="#FEFEFE" />
        <path d="M6.28627 6.25H5.71484V6.875H6.28627V6.25Z" fill="#FEFEFE" />
        <path d="M6.85658 6.25H6.28516V6.875H6.85658V6.25Z" fill="#FEFEFE" />
        <path d="M9.71596 6.25H9.14453V6.875H9.71596V6.25Z" fill="#FEFEFE" />
        <path d="M10.2863 6.25H9.71484V6.875H10.2863V6.25Z" fill="#FEFEFE" />
        <path d="M10.8566 6.25H10.2852V6.875H10.8566V6.25Z" fill="#FEFEFE" />
        <path d="M11.4269 6.25H10.8555V6.875H11.4269V6.25Z" fill="#FEFEFE" />
        <path d="M5.14369 6.875H4.57227V7.5H5.14369V6.875Z" fill="#FEFEFE" />
        <path d="M5.71596 6.875H5.14453V7.5H5.71596V6.875Z" fill="#FEFEFE" />
        <path d="M6.28627 6.875H5.71484V7.5H6.28627V6.875Z" fill="#FEFEFE" />
        <path d="M6.85658 6.875H6.28516V7.5H6.85658V6.875Z" fill="#FEFEFE" />
        <path d="M9.71596 6.875H9.14453V7.5H9.71596V6.875Z" fill="#FEFEFE" />
        <path d="M10.2863 6.875H9.71484V7.5H10.2863V6.875Z" fill="#FEFEFE" />
        <path d="M10.8566 6.875H10.2852V7.5H10.8566V6.875Z" fill="#FEFEFE" />
        <path d="M11.4269 6.875H10.8555V7.5H11.4269V6.875Z" fill="#FEFEFE" />
        <path d="M7.4269 7.5H6.85547V8.125H7.4269V7.5Z" fill="#FEFEFE" />
        <path d="M7.99916 7.5H7.42773V8.125H7.99916V7.5Z" fill="#FEFEFE" />
        <path d="M8.57143 7.5H8V8.125H8.57143V7.5Z" fill="#FEFEFE" />
        <path d="M9.14369 7.5H8.57227V8.125H9.14369V7.5Z" fill="#FEFEFE" />
        <path d="M7.4269 8.125H6.85547V8.75H7.4269V8.125Z" fill="#FEFEFE" />
        <path d="M7.99916 8.125H7.42773V8.75H7.99916V8.125Z" fill="#FEFEFE" />
        <path d="M8.57143 8.125H8V8.75H8.57143V8.125Z" fill="#FEFEFE" />
        <path d="M9.14369 8.125H8.57227V8.75H9.14369V8.125Z" fill="#FEFEFE" />
        <path d="M7.4269 8.75H6.85547V9.375H7.4269V8.75Z" fill="#FEFEFE" />
        <path d="M7.99916 8.75H7.42773V9.375H7.99916V8.75Z" fill="#FEFEFE" />
        <path d="M8.57143 8.75H8V9.375H8.57143V8.75Z" fill="#FEFEFE" />
        <path d="M9.14369 8.75H8.57227V9.375H9.14369V8.75Z" fill="#FEFEFE" />
        <path d="M7.4269 9.375H6.85547V10H7.4269V9.375Z" fill="#FEFEFE" />
        <path d="M7.99916 9.375H7.42773V10H7.99916V9.375Z" fill="#FEFEFE" />
        <path d="M8.57143 9.375H8V10H8.57143V9.375Z" fill="#FEFEFE" />
        <path d="M9.14369 9.375H8.57227V10H9.14369V9.375Z" fill="#FEFEFE" />
      </g>
      <defs>
        <clipPath id="clip0_9_127">
          <rect width="16" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className="dropdown-block">
      <div className={`dropdown ${isOpen ? "active" : ""}`}>
        <ul className="dropdown-menu">
          <li onClick={handleToggle} className="dropdown-toggle">
            <span className="filter-label">Filter:</span> {selectedOption}{" "}
            {isOpen ? ArrowUp : ArrowDown}
          </li>
          {isOpen &&
            options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={`dropdown-item ${
                  selectedOption === option ? "active" : ""
                }`}
              >
                {option}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Filter;
