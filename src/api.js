// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const ProjectsAPI = {
  projects: [
    
    { number: 1, name: "Morai Logistics", image: '../images/moraiDes.png' },
    { number: 2, name: "EnergyGeeks", image: '../images/energyGeeksDes.png' },
    { number: 3, name: "Dolphin Gaming", image: '../images/DolphinDes.png' },
    { number: 4, name: "JK Hannaford", image: '../images/inhabitentDes.png' },
    { number: 5, name: "Shopping Cart", image: '../images/CartDes.png' },
    { number: 6, name: "Tesla Range Calculator", image: '../images/tesla.gif' },
    { number: 7, name: "Sage Canada", image: '../images/sageDes.png' },
    { number: 8, name: "Inhabitent", image: '../images/inhabitentDes.png' }
  ],
  all: function() { return this.projects},
  get: function(id) {
    const isProject = p => p.number === id
    return this.projects.find(isProject)
  }
}

export default ProjectsAPI
