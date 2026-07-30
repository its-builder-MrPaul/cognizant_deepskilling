import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
    return (
        <div>

            <CohortDetails
                cohortName="React - Batch 1"
                status="ongoing"
                coach="John"
                trainer="David"
            />

            <CohortDetails
                cohortName="Angular - Batch 2"
                status="completed"
                coach="Smith"
                trainer="Alex"
            />

        </div>
    );
}

export default App;