import React, { useEffect, useState } from "react";

const ScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<string>("section1"); // 현재 보고 있는 섹션을 저장하는 state

  const sections = [
    { id: "section1", title: "섹션 1" },
    { id: "section2", title: "섹션 2" },
    { id: "section3", title: "섹션 3" },
    // ... 더 많은 섹션 데이터를 추가할 수 있습니다.
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "50%",
        }}
      >
        {sections.map((section) => (
          <h2
            key={section.id}
            style={activeSection === section.id ? { color: "red" } : { color: "black" }}
            id={section.id}
          >
            {section.title}
          </h2>
        ))}
      </div>
      <div>
        {sections.map((section) => (
          <p
            key={section.id}
            style={{
              height: "50vh",
            }}
          >
            본문 내용 {section.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollSpy;
