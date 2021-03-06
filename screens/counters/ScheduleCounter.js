import * as React from "react";
import ScheduleCard from "../components/ScheduleCard";

const ScheduleCounter = (props, navigation) => {
  return props.props.map((timeslot, i) => (
    <ScheduleCard key={i} timeslot={timeslot} />
  ));
};

export default ScheduleCounter;
