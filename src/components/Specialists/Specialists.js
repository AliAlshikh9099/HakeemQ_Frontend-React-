import Title from "../UI/Title";
import SpecialistCard from "./SpecialistCard";

import DiabestIcon from "../../assets/glucose-meter.png";
import NutritionIcon from "../../assets/schedule.png";
import FamilyIcon from "../../assets/family.png";
import PsyIcon from "../../assets/psychiatry.png";

const Specialists = () => {
  return (
    <section className="bg-blue-100 py-[70px]">
      <div className="container grid grid-cols-12 items-center gap-5">
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          className="max-w-[320px] col-span-12 md:col-span-4"
        >
          <h1 className="uppercase font-bold text-3xl text-[#1459d5]">
            Our Specialists
          </h1>
          <p className="text-gray-500 mt-1">
            These are the specialists you can consult doctors about it
          </p>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <SpecialistCard
              name="Diabetes"
              icon={DiabestIcon}
              animation="flip-left"
              duration="1000"
            />
            <SpecialistCard
              name="Nutrition"
              icon={NutritionIcon}
              animation="flip-right"
              duration="1500"
            />
            <SpecialistCard
              name="Family"
              icon={FamilyIcon}
              animation="flip-left"
              duration="2000"
            />
            <SpecialistCard
              name="Psychiatry"
              icon={PsyIcon}
              animation="flip-right"
              duration="2500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
