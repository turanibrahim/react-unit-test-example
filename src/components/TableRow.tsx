import { Table, Checkbox } from "@mantine/core";

interface IProps {
  name: string;
  selected: boolean;
  position: number;
  symbol: string;
  mass: number;
  onSelect: () => void;
}

function TableRow(props: IProps) {
  return (
    <Table.Tr
      bg={props.selected ? "var(--mantine-color-blue-light)" : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={props.selected}
          onChange={props.onSelect}
        />
      </Table.Td>
      <Table.Td>{props.position}</Table.Td>
      <Table.Td>{props.name}</Table.Td>
      <Table.Td>{props.symbol}</Table.Td>
      <Table.Td>{props.mass}</Table.Td>
    </Table.Tr>
  );
}

export default TableRow;
