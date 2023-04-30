// src/services/apiService.ts

export interface Operation {
  id: string;
  type: string;
  cost: number;
}

export interface Record {
  amount: number;
  date: string;
  id: string;
  operation_id: string;
  operation_response: string;
  user_balance: number;
  user_id: string;
}

// fetch operations
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

// fetch operation by id
export async function fetchOperationById(
  id: string
): Promise<Operation | undefined> {
  const response = await fetch(`http://localhost:3000/v1/operations/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (response.status === 404) {
    return undefined;
  }

  if (!response.ok) {
    throw new Error(`Error fetching operation: ${response.statusText}`);
  }
  // console.log('response', response.json());

  const operation = await response.json();
  return operation;
}

// fetch records
export async function fetchRecords(): Promise<Record[]> {
  const response = await fetch(
    `http://localhost:3000/v1/records/user/${localStorage.getItem('userId')}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error fetching records: ${response.statusText}`);
  }

  const records = await response.json();
  return records;
}

// post request to create new record
export async function createRecord(record: Record): Promise<Record> {
  const response = await fetch('http://localhost:3000/v1/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    throw new Error(`Error creating record: ${response.statusText}`);
  }

  const newRecord = await response.json();
  return newRecord;
}
