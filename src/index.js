import React from "react";
import ReactDOM from "react-dom";
import { Login, Student, Supervisor, Admin, Examiner, Consent } from "./portals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import PrivateRoute from "./CommonComponents/PrivateRoute";
import LoadUser from "./CommonComponents/LoadUser";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import DscState from "./context/dsc/DscState";
import CoursesState from "./context/courses/CoursesState";
import ProfessorState from "./context/professor/ProfessorState";
import AssignedThesisState from "./context/assignedThesis/AssignedThesisState";
import ProgressReportState from "./context/progressReport/ProgressReportState";
import SupervisorAllocationState from "./context/supervisorAllocation/SupervisorAllocationState";
import ForumState from "./context/forum/ForumState";
import SupervisorGroupState from "./context/supervisorGroups/SupervisorGroupState";
import ScholarState from "./context/scholar/ScholarState";
import ActivityPlanState from "./context/activityPlan/ActivityPlanState";

function App() {
  return (
    <AuthState>
      <AlertState>
        <DscState>
          <ProfessorState>
            <AssignedThesisState>
              <ProgressReportState>
                <SupervisorAllocationState>
                  <ForumState>
                    <CoursesState>
                      <SupervisorGroupState>
                        <ScholarState>
                          <ActivityPlanState>
                            <Router>
                              <LoadUser />
                              <Routes>
                                <Route path="ad/*" element={<Admin />} />
                                <Route path="ex/*" element={<Examiner />} />
                                <Route path='co/*' element={<Consent />} />
                                <Route
                                  path="st/*"
                                  exact
                                  element={<PrivateRoute component={Student} />}
                                />
                                <Route
                                  path="sp/*"
                                  element={
                                    <PrivateRoute component={Supervisor} />
                                  }
                                />
                                <Route path="/" element={<Login />} />
                              </Routes>
                            </Router>
                          </ActivityPlanState>
                        </ScholarState>
                      </SupervisorGroupState>
                    </CoursesState>
                  </ForumState>
                </SupervisorAllocationState>
              </ProgressReportState>
            </AssignedThesisState>
          </ProfessorState>
        </DscState>
      </AlertState>
    </AuthState>
  );
}
reportWebVitals();

ReactDOM.render(<App />, document.getElementById("root"));
