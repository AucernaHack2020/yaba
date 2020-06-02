export interface Category {
    _id: string;
    name: string;
}
export interface Style {
    _id: string;
    name: string;
    // srm: number;
    category: Category;
    colour: string;
}

