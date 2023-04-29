// src/services/apiService.ts

export interface Operation {
  id: number;
  type: string;
  cost: number;
}

export async function fetchOperations(): Promise<Operation[]> {
  const response = await fetch('http://localhost:3000/v1/operations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching operations: ${response.statusText}`);
  }

  const operations = await response.json();
  return operations;
}
