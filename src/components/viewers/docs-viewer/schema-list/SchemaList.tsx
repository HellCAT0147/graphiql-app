import SchemaItem from '../schema-item';
import { SchemaListProps } from '../../../types';

const SchemaList: React.FC<SchemaListProps> = ({
  data,
  header,
  description,
}): JSX.Element => {
  return (
    <>
      {description}
      {data && (
        <>
          <h6 className="mt-3">{header}</h6>
          {data.map((item, key) => (
            <SchemaItem key={key} data={item} />
          ))}
        </>
      )}
    </>
  );
};

export default SchemaList;
