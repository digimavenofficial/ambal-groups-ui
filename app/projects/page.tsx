"use client";

import { useState } from "react";
import { PageFrame, PageHero, ProjectCard, projects } from "../components/site";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "ongoing" | "completed">("all");
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.status === filter);
  return <PageFrame><main><PageHero label="Our projects" title="Made for the life you are building." description="Explore residential plots, villas and apartments in the fast-growing western corridors of Chennai." /><section className="container page-intro"><div className="filter-row" role="tablist" aria-label="Project status">
    {(["all", "ongoing", "completed"] as const).map((value) => <button key={value} className={`filter${filter === value ? " active" : ""}`} type="button" role="tab" aria-selected={filter === value} onClick={() => setFilter(value)}>{value === "all" ? "All projects" : value[0].toUpperCase() + value.slice(1)}</button>)}
  </div></section><section className="container projects-page-grid">{visibleProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</section></main></PageFrame>;
}