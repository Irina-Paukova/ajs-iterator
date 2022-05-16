export default class Team {
  constructor(team) {
    this.innerTeam = team;
  }

  [Symbol.iterator]() {
    let lengthArr = 0;

    return {
      next: () => {
        if (this.innerTeam.length > lengthArr) {
          lengthArr += 1;

          return {
            done: false,
            value: this.innerTeam[lengthArr - 1],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
