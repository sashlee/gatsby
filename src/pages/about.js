import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
const About = () => (
  <Layout>
    <h1>About Lagos</h1>
    <p>This is a story of the busiest city in Nigeria.</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default About;