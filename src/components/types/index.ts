import { AllTypes, DocsPage } from '../../store/types';

export type HasError = boolean;

export interface ErrorProps {
  message: string;
}

export interface ErrorState {
  hasError: HasError;
  messageError: string;
}

export interface EmptyProps {}

export interface EmptyState {}

export type WithChildrenProps = {
  children: React.ReactNode;
};

export interface ButtonProps {
  isLoading: boolean;
  isError: boolean;
}

export interface BackProps {
  prevPageName: string;
}

export interface MainSchemaListProps {
  types: AllTypes;
}

export interface SchemaListProps {
  data: SchemaItem[] | null;
  header?: string;
  description?: string | null;
}

export interface Schema {
  data: {
    __schema: {
      queryType: SchemaItem | null;
      types: SchemaItem[];
      mutationType: SchemaItem | null;
    };
  };
}

export interface SchemaItem {
  name: string;
  description: string | null;
  fields?: SchemaItem[];
  type?: InnerType;
}

export interface SchemaType {
  name: string;
  description: string | null;
  fields: SchemaItem[];
  inputFields: SchemaItem[];
}

export interface SchemaField {
  name: string;
  description: string | null;
  type: InnerType;
  args?: SchemaField[];
}

export interface InnerType {
  name: string | null;
  ofType: InnerType | null;
}

export interface HistoryStep {
  name: string;
  content: DocsPage;
}
