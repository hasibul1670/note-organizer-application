import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import { useEffect } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import animationlottie2 from "../../assets/home/Elearning.json";

const questions = [
  {
    title: "What is Sunlight Academy?",
    content:
      "Sunlight Academy is an intensive summer program designed to provide students with an immersive learning experience in various subjects. It offers a unique combination of academic courses, hands-on workshops, and recreational activities to enhance knowledge, skills, and personal development.",
  },
  {
    title: "Who can participate in Sunlight Academy?",
    content:
      "Sunlight Academy is open to students of all ages and educational backgrounds. Whether you're in elementary, middle, or high school, or even a college student seeking additional enrichment, Sunlight Academy welcomes participants from diverse backgrounds and interests.",
  },
  {
    title: "What courses and activities are offered at Sunlight Academy?",
    content:
      "Sunlight Academy offers a wide range of courses and activities to cater to different interests. Some examples include coding and programming, robotics, creative writing, entrepreneurship, art and design, sports and outdoor adventures, and team-building exercises. Please check our program schedule for a complete list of available courses.",
  },
  {
    title: "How long is Sunlight Academy, and where is it located?",
    content:
      "Sunlight Academy typically runs for four weeks during the summer vacation. The exact dates may vary each year, so it's important to check our website for the latest information. As for the location, our camp is situated in a picturesque setting, combining natural surroundings with modern facilities. Please refer to our website for the specific location details.",
  },
  {
    title: "How can I register for Sunlight Academy, and what is the cost?",
    content:
      "To register for Sunlight Academy, you can visit our website and navigate to the registration page. There, you will find instructions on how to complete the registration process. As for the cost, fees may vary depending on the duration of the program and the chosen courses. Please refer to the registration page or contact our team for detailed information regarding fees and payment options.",
  },
  {
    title: "What is the daily schedule like at Sunlight Academy?",
    content:
      "The daily schedule at Sunlight Academy is carefully structured to provide a balanced mix of academic learning, hands-on activities, and recreational time. Each day typically starts with morning classes or workshops, followed by lunch and afternoon sessions. Afternoons are often dedicated to engaging in sports, outdoor adventures, or group activities. Evenings may include special events, guest speakers, or social activities to foster connections among participants. Rest assured, we prioritize both learning and fun throughout the day.",
  },
];

const FAQ = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const durationStep = 500;
  const initialDuration = 200;

  const aosProperties = questions.map((question, index) => ({
    property: "fade-up",
    duration: initialDuration + index * durationStep,
  }));

  return (
    <>
      <SectionTitle heading={"Frequently Asked Question"}></SectionTitle>

      <div className="lg:grid mt-10 lg:grid-cols-2 p-10 mx-auto flex flex-col-reverse ">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="w-1/8 mb-10 md:mb-0 mx-auto"
        >
          <Lottie animationData={animationlottie2} loop={true} />
        </div>

        <div>
          {questions.map((question, index) => (
            <div
              key={index}
              data-aos={aosProperties[index]?.property}
              data-aos-duration={aosProperties[index]?.duration}
              tabIndex={0}
              className="collapse collapse-arrow border-2 border-sky-500  m-2 rounded-box"
            >
              <div className="collapse-title text-xl font-semibold">
                {question.title}
              </div>
              <div className="collapse-content">
                <p className="text-sm font-semibold text-yellow-500">
                  {question.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
