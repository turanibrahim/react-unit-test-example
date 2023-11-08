import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { Table } from '@mantine/core';
import TableHead from '../src/components/TableHead';
import { MantineProvider } from '@mantine/core';

describe('TableHead', () => {
  it('renders table headers correctly', () => {
    const items = ['Name', 'Age', 'Gender'];
    const { getByText } = render(
      <MantineProvider>
        <Table>
          <TableHead items={items} />
        </Table>
      </MantineProvider>
    );
    items.forEach((item) => {
      const header = getByText(item);
      expect(header).toBeInTheDocument();
    });
  });

  it('renders the correct number of headers', () => {
    const items = ['Name', 'Age', 'Gender'];
    const { getAllByRole } = render(
      <MantineProvider>
        <Table>
          <TableHead items={items} />
        </Table>
      </MantineProvider>
    );
    const headers = getAllByRole('columnheader');
    expect(headers.length).toBe(items.length);
  });

  it('renders the headers in the correct order', () => {
    const items = ['Name', 'Age', 'Gender'];
    const { getAllByRole } = render(
      <MantineProvider>
        <Table>
          <TableHead items={items} />
        </Table>
      </MantineProvider>
    );
    const headers = getAllByRole('columnheader');
    headers.forEach((header, index) => {
      expect(header).toHaveTextContent(items[index]);
    });
  });
});