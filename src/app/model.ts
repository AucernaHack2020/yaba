export interface Category {
  _id: string;
  name: string;
}
export interface Style {
  _id: string;
  name: string;
  // srm: number;
  category: Category;
  colour?: string;
  OG_Max?: any;
  IBU_Max?: any;
  Colour_Max?: any;
  ABV_Max?: any;
}

export interface GrainIngredient {
  _id: string;
  name: string;
  potential: number;
  colour: number;
  percent: number;
  weight: number;
  use: string;
  type: string;
}

export interface HopIngredient {
  _id: string;
  name: string;
  alpha: number;
  mode: string;
  weight: number;
  volume: number;
  usage: string;
  temperature: number;
  time: number;
  ibu: number;
}

export interface YeastIngredient {
  _id: string;
  name: string;
  aa: number;
  weight: number;
}

export class Recipe {
  // tslint:disable-next-line: variable-name
  _id: any;
  name: string;
  style: Style;
  size: number;
  mashTemp = 66;
  mashDuration = 90;
  lauterTemp = 80;
  lauterDuration = 60;
  boilDuration = 90;
  grains: GrainIngredient[] = [];
  hops: HopIngredient[] = [];
  yeast: YeastIngredient = {
      _id: '',
      name: 'Generic',
      aa: 70,
      weight: 0
  };
}
