import React, { useState, useContext, useEffect } from "react";
import Labels from "../Labels";
import Box from "../Box";
import { MainOutlineButton, MainButton } from "../../styles/Button";
import InputField from "../InputField";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import { ADD_PROJECT, GET_PROJECTS } from "../../helpers/apiUrls";
import AuthContext from "../../context/AuthContext";

const Projects = () => {
  const [project, setProject] = useState("");
  const [projects, setProjects] = useState([]);
  const [showAddNewProject, setShowAddNewProject] = useState(false);
  const [authenticated] = useContext(AuthContext);

  const showAddNewProjectInput = () => {
    setShowAddNewProject(true);
  };

  const submitProject = () => {
    fetch(`${ADD_PROJECT}`, {
      method: "POST",
      headers: {
        forUser: authenticated.userID,
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
        forUser: authenticated.userID,
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
      {projects.map((project, index) => (
        <Labels key={index} title={project.name} />
      ))}
      {showAddNewProject && (
        <InputField
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
