import { Table } from "@mantine/core";

interface IProps {
  items: string[];
}
function TableHead(props: IProps) {
  return (
    <Table.Thead>
      <Table.Tr>
        {props.items.map((item) => (
          <Table.Th key={item}>{item}</Table.Th>
        ))}
      </Table.Tr>
    </Table.Thead>
  );
}

export default TableHead;
