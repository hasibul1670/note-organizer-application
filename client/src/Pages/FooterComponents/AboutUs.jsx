import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="mx-auto px-4 pt-20 ">
        <Helmet>
        <title> Sunlight Academy | About ❤️</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className=" p-5">
          <SectionTitle heading={"About Us "}></SectionTitle>
          <div className=" font-bold">
            <p>
              Welcome to our Summer Camp Learning School! We are dedicated to
              providing a fun and educational experience for children during the
              summer break.
            </p>
            <p>
              At our camp, we believe that learning should be an exciting
              adventure. Our programs are designed to foster creativity, inspire
              curiosity, and promote personal growth in a safe and nurturing
              environment.
            </p>
            <p>
              Our highly qualified team of instructors is passionate about
              education and committed to creating memorable experiences for
              every camper. With a diverse range of activities and classNamees,
              we aim to cater to the individual interests and talents of each
              child.
            </p>

            <p>
              From outdoor adventures and team sports to art, science, and
              technology workshops, our camp offers a wide array of engaging and
              hands-on learning opportunities. We encourage children to explore
              new interests, develop new skills, and make lasting friendships
              along the way.
            </p>
            <p>
              Safety is our top priority. We maintain a secure and supervised
              environment, ensuring that all campers are well taken care of. Our
              facilities are equipped with state-of-the-art resources and
              age-appropriate materials to enhance the learning experience.
            </p>
            <p>
              Join us this summer for an unforgettable journey of discovery,
              growth, and fun! We look forward to welcoming your child to our
              Summer Camp Learning School.
            </p>
          </div>
          <Link to="/login">
            {" "}
            <button className="btn btn-primary justify-center mt-5">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
