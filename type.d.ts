export interface ProductProps {
  sold: number;
  rating: string;
  brand: {
    name: string;
  };
  seller: {
    name: string;
  };
  description: string;
  image: string;
  isNew: boolean;
  originalPrice: number;
  salePrice: number;
  name: string;
  id: string;
}

export interface CategoryProps {
  name: string;
  id: string;
}

export interface SellerProps {
  description: string;
  name: string;
  logo: string;
  id: string;
}

export interface BrandProps {
  description: string;
  name: string;
  logo: string;
  id: string;
}


export interface SortProps {
  value: {
    field: string;
    order: string;
  };
  id: string;
  display: string;
}

export interface FilterProps {
  childCategories: string[];
  brands: string[];
  rating: ?number;
  min: ?number;
  max: ?number;
}

export interface SuggestKeywordProps {
  suggestion: string;
  type: string;
}