import React, { useState, useContext, useEffect } from "react";
// import Labels from "../Labels";
import Box from "../../common/components/Box";
import { MainOutlineButton, MainButton } from "../../styles/Button";
import Input from "../Input";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import { ADD_PROJECT, GET_PROJECTS } from "../../common/helpers/apiUrls";
import AuthContext from "../../common/context/AuthContext";

const Projects = () => {
  const [project, setProject] = useState("");
  const [projects, setProjects] = useState([]);
  const [showAddNewProject, setShowAddNewProject] = useState(false);
  const { AuthState } = useContext(AuthContext);

  const showAddNewProjectInput = () => {
    setShowAddNewProject(true);
  };

  const submitProject = () => {
    fetch(`${ADD_PROJECT}`, {
      method: "POST",
      headers: {
        forUser: AuthState.userID,
        name: project,
        type: "project"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const getProjects = () => {
    fetch(`${GET_PROJECTS}`, {
      method: "POST",
      headers: {
        forUser: AuthState.userID,
        type: "project"
      }
    })
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getProjects();
  }, [projects]);

  return (
    <Box heading="Projects">
      {/* {projects.map((project, index) => (
        <Labels key={index} title={project.name} />
      ))} */}
      {showAddNewProject && (
        <Input
          type="text"
          name="project"
          placeholder="Add New Project"
          handleInputChange={e => setProject(e.target.value)}
        />
      )}
      <InlineList>
        <InlineListItem>
          <MainOutlineButton onClick={showAddNewProjectInput} type="button">
            Add New Project
          </MainOutlineButton>
        </InlineListItem>
        {showAddNewProjectInput && (
          <InlineListItem>
            <MainButton onClick={submitProject} type="button">
              Submit
            </MainButton>
          </InlineListItem>
        )}
      </InlineList>
    </Box>
  );
};

export default Projects;
