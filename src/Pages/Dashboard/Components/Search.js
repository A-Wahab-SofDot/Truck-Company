import React from "react";

export default function Search() {
  return (
    <>
      <div className="searchSection">
        <div className="searchImageContainer">
          <img src="/images/jobSearch.svg" alt="jobSerach" />
        </div>
        <div className="searchBox">
          <div className="heading">How our search for Trucking jobs works</div>
          <div className="paragraph1">
            Our job search system helps drivers filter available CDL jobs by
            position type, route and location. Once a job is selected and the
            application is completed, we will provide instant feedback regarding
            eligibility, including additional available trucking positions{" "}
          </div>
          <div className="paragraph2">
            in your area based on your qualifications.
          </div>
          <div className="paragraph3">
            Working with us to find the right truck driving job will certainly
            prove to be a win-win for the commercial driver and the trucking
            company. Experienced truckers are able to research multiple jobs in
            their area and the trucking companies receive pre-screened,
            qualified applicants. In addition, applications are submitted and
            received in real time. This means your application gets into the
            hands of the decision-maker immediately.
          </div>
          <div className="paragraph4">
            The best part! It is COMPLETELY FREE to apply!
          </div>
        </div>
      </div>
    </>
  );
}
