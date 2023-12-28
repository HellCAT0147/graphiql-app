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
