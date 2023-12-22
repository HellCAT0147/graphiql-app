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

export interface Schema {
  data: {
    __schema: {
      queryType: { name: string };
      types: SchemaType[];
      mutationType: { name: string } | null;
    };
  };
}

export interface SchemaType {
  name: string;
  description: string;
  fields: SchemaType[];
  type?: InnerType;
}

export interface InnerType {
  name: string;
  ofType: InnerType;
}

export interface HistoryStep {
  step: string;
  screen: SchemaType[];
}
