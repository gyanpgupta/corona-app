import React from "react";
import { Statistic, Row, Col } from "antd";
import { getMappedColors } from "./utility";

export default function Summary({ globalSummary = {} }) {
  return (
    <Row className="col-flex-mobile">
      {Object.keys(globalSummary).map((key, i) => (
        <Col key={i} span={4}>
          <Statistic
            title={key}
            value={globalSummary[key]}
            valueStyle={{ color: getMappedColors(key) }}
          />
        </Col>
      ))}
    </Row>
  );
}
