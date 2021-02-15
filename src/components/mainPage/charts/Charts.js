import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CHART_HEADERS } from "../../../utils/consts";
import {
  ChartsWrapper,
  ChartWrapper,
  ChartHeader,
  Header,
  Button,
  Icon,
  Text,
  TimeText,
} from "./style";

const Charts = () => {
  return (
    <ChartsWrapper>
      {CHART_HEADERS.map((header, i) => {
        return <Chart key={i} header={header} />;
      })}
    </ChartsWrapper>
  );
};

const Chart = ({ header }) => {
  return (
    <ChartWrapper isReport={header === CHART_HEADERS[1]}>
      <ChartHeader>
        <Header>{header}</Header>
        <Button>
          <TimeText>Period: </TimeText>
          <Text>Last Year</Text>
          <Icon icon={faChevronDown} />
        </Button>
      </ChartHeader>
    </ChartWrapper>
  );
};

export default Charts;
