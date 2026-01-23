// components/data/projects.helpers.js
import projects from "./projectsData";

export function getAllProjectIds() {
  return projects.map((p) => p.id);
}

export function getProjectById(id) {
  return projects.find((p) => p.id === id) || null;
}
