class Rule {
    name: string;
    affectEveryone: boolean;
    penalty: number;
  constructor(name : string, affectEveryone : boolean, penalty : number) {
    this.name = name;
    this.affectEveryone = affectEveryone;
    this.penalty = penalty;
  }
}
export default Rule;