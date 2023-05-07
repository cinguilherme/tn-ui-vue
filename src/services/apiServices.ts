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

export interface NewRecord {
  operation_id: string;
  input1?: number;
  input2?: number;
}

const apiBaseUrl = process.env.TN_API_URL || 'http://localhost:3000';

// fetch operations
export async function fetchOperations(): Promise<Operation[]> {
  const response = await fetch(apiBaseUrl + '/v1/operations', {
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
  const response = await fetch(`${apiBaseUrl}/v1/operations/${id}`, {
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
  const userId = await localStorage.getItem('userId');
  console.log('fetch records for user id', userId);
  const response = await fetch(`${apiBaseUrl}/v1/records/user/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching records: ${response.statusText}`);
  }

  const res = await response.json();

  console.log('response get records by user id', res);

  const records = res;
  return records;
}

// post request to create new record
export async function createRecord(record: NewRecord): Promise<Record> {
  const response = await fetch(`${apiBaseUrl}/v1/records/`, {
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
