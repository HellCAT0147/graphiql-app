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

export interface MainTypeListProps {
  types: AllTypes;
}

export interface TypeListProps {
  types: SchemaType[];
  header?: string;
  description?: string | null;
}

export interface Schema {
  data: {
    __schema: {
      queryType: { name: string } | null;
      types: SchemaType[];
      mutationType: { name: string } | null;
    };
  };
}

export interface SchemaType {
  name: string;
  description: string | null;
  fields: SchemaType[];
  type?: InnerType;
}

export interface InnerType {
  name: string;
  ofType: InnerType;
}

export interface HistoryStep {
  name: string;
  content: DocsPage;
}
