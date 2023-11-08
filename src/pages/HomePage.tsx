import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Table } from "@mantine/core";
import { AppShell, Burger } from "@mantine/core";
import TableRow from "../components/TableRow";
import TableHead from "../components/TableHead";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

function HomePage() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [opened, { toggle }] = useDisclosure();
  const headItems = [
    "",
    "Element position",
    "Element name",
    "Symbol",
    "Atomic mass",
  ];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Our Beautiful App</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Our Beautiful App</AppShell.Navbar>

      <AppShell.Main>
        <Table>
          <TableHead items={headItems} />
          <Table.Tbody>
            {elements.map((element) => (
              <TableRow
                key={element.name}
                name={element.name}
                selected={selectedRows.includes(element.position)}
                position={element.position}
                symbol={element.symbol}
                mass={element.mass}
                onSelect={() =>
                  setSelectedRows(
                    selectedRows.includes(element.position)
                      ? selectedRows.filter(
                          (position) => position !== element.position
                        )
                      : [...selectedRows, element.position]
                  )
                }
              />
            ))}
          </Table.Tbody>
        </Table>
      </AppShell.Main>
    </AppShell>
  );
}

export default HomePage;
