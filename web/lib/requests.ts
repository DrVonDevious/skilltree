// Typescript can't seem to find RequestInit.. Maybe look into this :(
export type RequestInit = {
  body?: Blob | FormData,
  headers?: Headers | string[][],
  method?: string,
};

export type FetchResponse = {
  status: string,
  data: any,
  error: string | null,
};

const _tryFetch = async (url: string, options?: RequestInit): Promise<any> => {
  try {
    const response: Response = await fetch(`${process.env.API}/${url}`, options);
    const data = await response.json();
    return { status: 'success', data, error: null };
  } catch (error) {
    return { status: 'failed', data: null, error };
  }
};

export const getTrees = async (take: number, skip: number) => {
  const response: FetchResponse = await _tryFetch(`trees?take=${take}&skip=${skip}`);
  console.log(response.status, response.data, response.error);
};
