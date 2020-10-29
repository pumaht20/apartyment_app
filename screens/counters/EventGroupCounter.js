import * as React from "react";
import GroupCard from "../components/GroupCard";

const EventGroupCounter = (props, navigation) => {
  return props.props.map((group, i) => <GroupCard key={i} group={group} />);
};

export default EventGroupCounter;
