import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Table } from '@mantine/core';
import TableHead from '../src/components/TableHead';
import TableRow from '../src/components/TableRow';
import { MantineProvider } from '@mantine/core';

describe('TableRow', () => {
  it('renders table row correctly', () => {
    const { getByLabelText, getByText } = render(
      <MantineProvider>
        <Table>
          <TableHead items={['Select', 'Position', 'Name', 'Symbol', 'Mass']} />
          <tbody>
            <TableRow
              position={1}
              name="Hydrogen"
              symbol="H"
              mass={1.008}
              selected={false}
              onSelect={() => {}}
            />
          </tbody>
        </Table>
      </MantineProvider>
    );

    const checkbox = getByLabelText('Select row');
    const position = getByText('1');
    const name = getByText('Hydrogen');
    const symbol = getByText('H');
    const mass = getByText('1.008');

    expect(checkbox).toBeInTheDocument();
    expect(position).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(symbol).toBeInTheDocument();
    expect(mass).toBeInTheDocument();
  });

  it('calls onSelect when checkbox is clicked', () => {
    const onSelect = vi.fn();
    const { getByLabelText } = render(
      <MantineProvider>
        <Table>
          <TableHead items={['Select', 'Position', 'Name', 'Symbol', 'Mass']} />
          <tbody>
            <TableRow
              position={1}
              name="Hydrogen"
              symbol="H"
              mass={1.008}
              selected={false}
              onSelect={onSelect}
            />
          </tbody>
        </Table>
      </MantineProvider>
    );

    const checkbox = getByLabelText('Select row');
    fireEvent.click(checkbox);

    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});