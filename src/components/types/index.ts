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

export interface InputsGroupAttributes {
  atr: {
    id: string;
    group: string;
    type: string;
    value: string;
    classInput: string;
    classLabel: string;
  };
}

export interface ButtonAttributes {
  atr: {
    isLoadingData: boolean;
    onClick: () => void;
    className: string;
    classIcon: string;
  };
}

export interface PrettifyProps {
  data: {
    className: string;
    width: string;
    title: string;
    value: string;
    isReadOnly: boolean;
  };
}

export interface CodeInputProps {
  atr: {
    value: string;
    isReadOnly: boolean;
    callback: (value: string) => void;
  };
}

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

export interface LoaderProps {
  isInCenter?: boolean;
}

export interface LoaderStyles {
  width: string;
  height?: string;
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

interface BaseSchemaItem {
  name: string;
  description: string | null;
}

export interface SchemaItem extends BaseSchemaItem {
  fields?: SchemaItem[];
  type?: InnerType;
}

export interface SchemaType extends BaseSchemaItem {
  fields: SchemaItem[];
  inputFields: SchemaItem[];
}

export interface SchemaField extends BaseSchemaItem {
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
