class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)


    yearsExperienceFromBeginningOf(year){
        let startYear = this.startDate.getFullYear()
        return year - startYear
          }
  }

}


class Route {
  constructor(){

  }
}
