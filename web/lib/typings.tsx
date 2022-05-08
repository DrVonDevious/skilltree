export interface Tree {
  id: string,
  name: string,
  description: string,
}

export interface Leaf {
  id: string,
  name: string,
  position: number,
}

export interface Branch {
  id: string,
  name: string,
  position: number,
  leaves: Leaf[],
}
