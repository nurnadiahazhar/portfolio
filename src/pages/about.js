import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const AboutPage = () => {
  return (
    <Layout pageName="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container>
        <h1>About</h1>
        <p>Software Tester with proven problem solving,programming skills, 
          web development, SQL, and etc. Experienced as a Software Engineer for about 2 years.
          Involved in two big projects (Web Application and Mobile Application) with Dewan Bandaraya Kuala Lumpur (DBKL). 
          Honors Degree in Information Technology from Universiti Teknologi Mara (UiTM). 
       Nadiah also have experience in teaching Mathematics and Bahasa Melayu for standard school and high school.</p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
