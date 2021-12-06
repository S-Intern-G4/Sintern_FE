import React, { useEffect, useState } from "react";
import Navbar from "../../layout/navbar/Navbar";
import Container from "../../shared/Container";
import ApiService from "../../../services/apiService";
import { ApiEndpoints } from "../../../configs/api/endpoints";
import { StudentApplier } from "../../../interfaces/application/StudentApplier";
import OpenPositionFeedComponent from "./OpenPositionFeedComponent";
import OpenPositionFeedContainer from "./OpenPositionFeedContainer";

const OpenPositionFeed = (props) => {
  const [studentsAppliers, setStudentsAppliers] = useState<StudentApplier[]>(
    []
  );
  const { openPositionId } = props;

  useEffect(() => {
    ApiService.get<any>(ApiEndpoints.studentsAppliers("4cbcf0d2-3ede-11ec-9bbc-0242ac130002")).then(
      (data) => {
        setStudentsAppliers(data.data);
      }
    );
  }, []);

  return (
    <Container>
      <Navbar />
      <OpenPositionFeedContainer>
        {studentsAppliers.map((value, key) => (
          <OpenPositionFeedComponent
            studentApplier={value}
            key={key}
          ></OpenPositionFeedComponent>
        ))}
      </OpenPositionFeedContainer>
    </Container>
  );
};

export default OpenPositionFeed;
