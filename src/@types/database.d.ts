interface Project {
  id: number;
  team: number;
  title: string;
  period: string;
  desc: string;
  role: Array<string>;
  stack: Array<string>;
  image: string;
  repo: string;
}[]

interface Skills {
  [key: string]: number;
}
