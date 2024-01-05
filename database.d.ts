interface Project {
  id: number;
  title: string;
  period: string;
  desc: string;
  role: Array<string>;
  stack: Array<string>;
  image: string;
}

interface Skills {
  [key: string]: number;
}
